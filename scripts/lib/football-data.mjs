const ALLOWED_STATUSES = new Set([
  "SCHEDULED", "TIMED", "IN_PLAY", "PAUSED", "FINISHED",
  "POSTPONED", "SUSPENDED", "CANCELLED"
]);

function safeTeam(team = {}) {
  return {
    id: team.id ?? null,
    name: team.name || team.shortName || "待定",
    shortName: team.shortName || team.name || "待定",
    tla: team.tla || null,
    crest: team.crest || null
  };
}

function stageLabel(stage, group) {
  if (group) return group.replace(/^GROUP_/, "") + "组";
  const labels = {
    GROUP_STAGE: "小组赛",
    LAST_32: "32强",
    LAST_16: "16强",
    QUARTER_FINALS: "四分之一决赛",
    SEMI_FINALS: "半决赛",
    THIRD_PLACE: "三四名决赛",
    FINAL: "决赛"
  };
  return labels[stage] || stage || "世界杯";
}

export function normalizeMatch(match) {
  if (!match || !match.utcDate || Number.isNaN(Date.parse(match.utcDate))) {
    throw new Error("Match is missing a valid utcDate");
  }
  const status = ALLOWED_STATUSES.has(match.status) ? match.status : "SCHEDULED";
  return {
    id: String(match.id),
    utcDate: new Date(match.utcDate).toISOString(),
    status,
    stage: match.stage || null,
    stageLabel: stageLabel(match.stage, match.group),
    group: match.group ? stageLabel(null, match.group) : null,
    matchday: match.matchday ?? null,
    homeTeam: safeTeam(match.homeTeam),
    awayTeam: safeTeam(match.awayTeam),
    score: {
      winner: match.score?.winner ?? null,
      duration: match.score?.duration ?? null,
      fullTime: {
        home: match.score?.fullTime?.home ?? null,
        away: match.score?.fullTime?.away ?? null
      }
    },
    venue: match.venue || "场地待定"
  };
}

export function normalizeCompetitionResponse(payload, now = new Date()) {
  if (!payload || !Array.isArray(payload.matches)) {
    throw new Error("football-data.org response does not contain matches");
  }
  return {
    source: "football-data.org",
    competition: payload.competition ? {
      id: payload.competition.id ?? null,
      name: payload.competition.name || "FIFA World Cup",
      code: payload.competition.code || "WC"
    } : { id:null, name:"FIFA World Cup", code:"WC" },
    updatedAt: now.toISOString(),
    stale: false,
    message: "Synced from football-data.org API v4.",
    matches: payload.matches.map(normalizeMatch).sort((a, b) => a.utcDate.localeCompare(b.utcDate))
  };
}

export function staleSnapshot(snapshot, message, now = new Date()) {
  return {
    ...snapshot,
    updatedAt: snapshot.updatedAt || now.toISOString(),
    stale: true,
    message,
    lastSyncAttemptAt: now.toISOString(),
    matches: Array.isArray(snapshot.matches) ? snapshot.matches : []
  };
}
