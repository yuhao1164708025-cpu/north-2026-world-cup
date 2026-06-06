import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { normalizeCompetitionResponse, staleSnapshot } from "./lib/football-data.mjs";

const outputPath = resolve("outputs/data/matches.json");
const endpoint = "https://api.football-data.org/v4/competitions/WC/matches";
const token = process.env.FOOTBALL_DATA_TOKEN;

async function readSnapshot() {
  return JSON.parse(await readFile(outputPath, "utf8"));
}

async function writeSnapshot(snapshot) {
  await writeFile(outputPath, `${JSON.stringify(snapshot, null, 2)}\n`, "utf8");
}

if (!token) {
  console.log("FOOTBALL_DATA_TOKEN is not set; keeping the bundled snapshot.");
  process.exit(0);
}

try {
  const response = await fetch(endpoint, {
    headers: { "X-Auth-Token": token, Accept: "application/json" }
  });
  if (!response.ok) {
    throw new Error(`football-data.org returned HTTP ${response.status}`);
  }
  const normalized = normalizeCompetitionResponse(await response.json());
  if (!normalized.matches.length) {
    throw new Error("football-data.org returned an empty match list");
  }
  await writeSnapshot(normalized);
  console.log(`Synced ${normalized.matches.length} World Cup matches.`);
} catch (error) {
  const existing = await readSnapshot();
  await writeSnapshot(staleSnapshot(existing, `Sync failed: ${error.message}`));
  console.warn(`Sync failed; retained ${existing.matches?.length || 0} snapshot matches.`);
}
