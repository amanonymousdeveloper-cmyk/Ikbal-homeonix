function chunkText(text) {
  try {
    if (!text || typeof text !== "string" || text.trim() === "") {
      throw new Error("INGEST_FAIL");
    }
    const max = 64;
    const arr = [];
    for (let i = 0; i < text.length; i += max) {
      arr.push(text.slice(i, i + max));
    }
    return Object.freeze({ chunks: arr });
  } catch (e) {
    throw new Error("INGEST_FAIL");
  }
}

module.exports = { chunkText };