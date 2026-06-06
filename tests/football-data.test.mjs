import test from "node:test";
import assert from "node:assert/strict";
import {
  normalizeCompetitionResponse,
  normalizeMatch,
  staleSnapshot
} from "../scripts/lib/football-data.mjs";

const baseMatch = {
  id: 101,
  utcDate: "2026-06-11T19:00:00Z",
  status: "SCHEDULED",
  stage: "GROUP_STAGE",
  group: "GROUP_A",
  homeTeam: { id:1, name:"Mexico", shortName:"Mexico", tla:"MEX" },
  awayTeam: { id:2, name:"South Africa", shortName:"South Africa", tla:"RSA" },
  score: { winner:null, duration:"REGULAR", fullTime:{ home:null, away:null } },
  venue: "Estadio Azteca"
};

test("normalizes scheduled, live, finished and postponed matches", () => {
  for (const status of ["SCHEDULED", "IN_PLAY", "FINISHED", "POSTPONED"]) {
    const result = normalizeMatch({ ...baseMatch, status });
    assert.equal(result.status, status);
    assert.equal(result.group, "A组");
    assert.equal(result.utcDate, "2026-06-11T19:00:00.000Z");
  }
});

test("falls back when the venue is missing", () => {
  const result = normalizeMatch({ ...baseMatch, venue:null });
  assert.equal(result.venue, "场地待定");
});

test("sorts the competition response by UTC kickoff", () => {
  const result = normalizeCompetitionResponse({
    competition:{ id:2000, name:"FIFA World Cup", code:"WC" },
    matches:[
      { ...baseMatch, id:2, utcDate:"2026-06-12T19:00:00Z" },
      { ...baseMatch, id:1, utcDate:"2026-06-11T19:00:00Z" }
    ]
  }, new Date("2026-06-06T00:00:00Z"));
  assert.deepEqual(result.matches.map(match => match.id), ["1", "2"]);
  assert.equal(result.stale, false);
});

test("rejects malformed API payloads without erasing a prior snapshot", () => {
  assert.throws(() => normalizeCompetitionResponse({}), /does not contain matches/);
  const prior = { updatedAt:"2026-06-05T00:00:00Z", matches:[normalizeMatch(baseMatch)] };
  const fallback = staleSnapshot(prior, "API unavailable", new Date("2026-06-06T00:00:00Z"));
  assert.equal(fallback.matches.length, 1);
  assert.equal(fallback.stale, true);
  assert.equal(fallback.updatedAt, prior.updatedAt);
});
