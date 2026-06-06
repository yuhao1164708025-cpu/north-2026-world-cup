import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";

const source = await readFile(new URL("../outputs/app.js", import.meta.url), "utf8");
const sandbox = {
  console,
  document: { addEventListener() {} },
  window: {},
  Intl,
  Date,
  setTimeout,
  setInterval() {},
  clearTimeout,
  fetch: async () => { throw new Error("not used in content tests"); }
};
vm.createContext(sandbox);
vm.runInContext(`${source}\n;globalThis.__contentTestData = { predictions, postMatch, deepText };`, sandbox);

const { predictions, postMatch, deepText } = sandbox.__contentTestData;

test("every pre-match deep read is between 550 and 700 Chinese characters", () => {
  for (const prediction of Object.values(predictions)) {
    const count = deepText(prediction.deep).replace(/\s/g, "").length;
    assert.ok(count >= 550 && count <= 700, `${prediction.deep.title}: ${count}`);
    assert.ok(prediction.deep.players.length >= 2);
  }
});

test("post-match deep read is between 550 and 700 Chinese characters", () => {
  const count = deepText(postMatch.deep).replace(/\s/g, "").length;
  assert.ok(count >= 550 && count <= 700, `post-match: ${count}`);
  assert.ok(postMatch.deep.players.length >= 2);
});
