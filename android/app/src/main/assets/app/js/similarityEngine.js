/**
 * SimilarityScore = {
 *   queryVector: Float32Array,
 *   matchVectorId: number,
 *   score: number,
 *   grade: "HIGH" | "MEDIUM" | "LOW" | "NONE"
 * }
 */

function computeCosineSimilarity(vec) {
  try {
    if (!(vec instanceof Float32Array)) {
      throw new Error("SEARCH_FAIL");
    }

    if (
      typeof Bridge === "undefined" ||
      typeof Bridge.getSimilarityVectors !== "function"
    ) {
      throw new Error("SEARCH_FAIL");
    }

    const rows = Bridge.getSimilarityVectors();
    if (!Array.isArray(rows)) {
      throw new Error("SEARCH_FAIL");
    }

    // Pre-compute query magnitude
    let qSum = 0.0;
    for (let i = 0; i < vec.length; i++) {
      qSum += vec[i] * vec[i];
    }
    const qMag = Math.sqrt(qSum);

    const results = rows.map((row) => {
      if (
        typeof row !== "object" ||
        row === null ||
        typeof row.id !== "number" ||
        !(row.vector instanceof Float32Array)
      ) {
        throw new Error("SEARCH_FAIL");
      }

      const mVec = row.vector;
      if (mVec.length !== vec.length) {
        throw new Error("SEARCH_FAIL");
      }

      let dot = 0.0;
      let mSum = 0.0;

      for (let i = 0; i < vec.length; i++) {
        const a = vec[i];
        const b = mVec[i];
        dot += a * b;
        mSum += b * b;
      }

      const mMag = Math.sqrt(mSum);
      let score = 0.0;

      if (qMag > 0 && mMag > 0) {
        score = dot / (qMag * mMag);
        if (score < 0) score = 0;
      }

      let grade = "NONE";
      if (score >= 0.8) {
        grade = "HIGH";
      } else if (score >= 0.5) {
        grade = "MEDIUM";
      } else if (score >= 0.01) {
        grade = "LOW";
      }

      return Object.freeze({
        queryVector: vec,
        matchVectorId: row.id,
        score: score,
        grade: grade
      });
    });

    return Object.freeze(results);
  } catch (e) {
    throw new Error("SEARCH_FAIL");
  }
}

export { computeCosineSimilarity };