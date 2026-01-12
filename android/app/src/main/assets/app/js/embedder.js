function computeVectors(chunks) {
  try {
    if (!Array.isArray(chunks) || chunks.length === 0) {
      throw new Error("INGEST_FAIL");
    }
    const dim = 512;
    const vectors = [];
    for (const chunk of chunks) {
      if (typeof chunk !== "string" || chunk.trim() === "") {
        throw new Error("INGEST_FAIL");
      }
      const v = new Float32Array(dim);
      for (let i = 0; i < dim; i++) {
        v[i] = 0.0;
      }
      vectors.push(Object.freeze(v));
    }
    return Object.freeze({ vectors });
  } catch (e) {
    throw new Error("INGEST_FAIL");
  }
}

module.exports = { computeVectors };