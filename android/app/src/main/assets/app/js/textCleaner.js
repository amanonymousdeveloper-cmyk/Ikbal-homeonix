function cleanText(text) {
  try {
    if (text === null || text === undefined) {
      throw new Error("TEXT_CLEAN_INPUT_NULL");
    }
    if (typeof text !== "string") {
      throw new Error("TEXT_CLEAN_INPUT_NULL");
    }

    let t = text;
    t = t.replace(/\s+/g, " ").trim();
    t = t.replace(/[^a-zA-Z0-9\u0980-\u09FF.,;:()\- ]/g, "");
    return t;
  } catch (e) {
    if (e.message === "TEXT_CLEAN_INPUT_NULL") {
      throw new Error("TEXT_CLEAN_INPUT_NULL");
    }
    throw new Error("TEXT_CLEAN_PROCESS_CRASH");
  }
}

module.exports = { cleanText: cleanText };