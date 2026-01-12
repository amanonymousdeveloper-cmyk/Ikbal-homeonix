// app/src/main/assets/app/js/explainer.js

export function buildEvidence(match) {
  try {
    if (
      !match ||
      typeof match !== "object" ||
      typeof match.sourceFile !== "string" ||
      typeof match.chunkId !== "string" ||
      typeof match.score !== "number" ||
      typeof match.textSnippet !== "string" ||
      typeof match.position !== "number"
    ) {
      throw new Error("SEARCH_FAIL");
    }

    let grade;
    if (match.score >= 0.8) {
      grade = "HIGH";
    } else if (match.score >= 0.6) {
      grade = "MEDIUM";
    } else if (match.score < 0.6) {
      grade = "LOW";
    } else {
      throw new Error("SEARCH_FAIL");
    }

    return Object.freeze({
      sourceFile: match.sourceFile,
      chunkId: match.chunkId,
      score: match.score,
      grade: grade,
      textSnippet: match.textSnippet,
      position: match.position
    });
  } catch (e) {
    throw new Error("SEARCH_FAIL");
  }
}