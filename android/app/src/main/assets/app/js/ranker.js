/**
 * RankedResult = {
 *   queryVector: Float32Array,
 *   results: [
 *     {
 *       vectorId: number,
 *       score: number,
 *       rank: number,
 *       grade: "HIGH" | "MEDIUM" | "LOW" | "NONE"
 *     }
 *   ],
 *   generatedAt: string, // ISO timestamp
 *   error: "NONE_RESULTS" | null
 * }
 */

function rankScores(scores) {
  try {
    if (!Array.isArray(scores)) {
      throw new Error("SEARCH_FAIL");
    }

    // Validate SimilarityScore shape (deterministic checks)
    for (let i = 0; i < scores.length; i++) {
      const s = scores[i];
      if (
        typeof s !== "object" ||
        s === null ||
        !(s.queryVector instanceof Float32Array) ||
        typeof s.matchVectorId !== "number" ||
        typeof s.score !== "number" ||
        typeof s.grade !== "string"
      ) {
        throw new Error("SEARCH_FAIL");
      }
    }

    // Stable sort by score DESC (ECMAScript stable sort norm)
    const sorted = scores.slice().sort((a, b) => {
      if (a.score === b.score) return 0;
      return b.score - a.score;
    });

    let rankCounter = 1;
    const results = [];

    for (let i = 0; i < sorted.length; i++) {
      const s = sorted[i];

      let grade = "NONE";
      if (s.score >= 0.8) {
        grade = "HIGH";
      } else if (s.score >= 0.5) {
        grade = "MEDIUM";
      } else if (s.score >= 0.01) {
        grade = "LOW";
      }

      results.push(
        Object.freeze({
          vectorId: s.matchVectorId,
          score: s.score,
          rank: rankCounter++,
          grade: grade
        })
      );
    }

    const now = new Date().toISOString();

    const output = Object.freeze({
      queryVector: scores.length > 0 ? scores[0].queryVector : new Float32Array(),
      results: Object.freeze(results),
      generatedAt: now,
      error: results.length === 0 ? "NONE_RESULTS" : null
    });

    return output;
  } catch (e) {
    throw new Error("SEARCH_FAIL");
  }
}

export { rankScores };