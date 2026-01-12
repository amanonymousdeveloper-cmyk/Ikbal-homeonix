function normalizeText(rawText) {
  try {
    if (!rawText || typeof rawText !== "string" || rawText.trim() === "") {
      throw new Error("INGEST_FAIL");
    }
    const rawTextNormalizedUTF8 = rawText.replace(/\s+/g, " ").trim();
    return Object.freeze({ text: rawTextNormalizedUTF8 });
  } catch (e) {
    throw new Error("INGEST_FAIL");
  }
}

module.exports = { normalizeText };