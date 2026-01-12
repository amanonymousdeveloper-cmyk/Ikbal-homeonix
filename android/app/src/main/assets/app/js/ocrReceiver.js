const { cleanText } = require("./textCleaner.js");

function onOcrText(text) {
  try {
    if (!text || typeof text !== "string" || text.trim() === "") {
      throw new Error("OCR_RECEIVE_EMPTY");
    }
    const cleaned = cleanText(text);
    if (!cleaned) {
      throw new Error("OCR_RECEIVE_CALLBACK_FAIL");
    }
    return cleaned;
  } catch (e) {
    if (e.message === "OCR_RECEIVE_EMPTY") {
      throw new Error("OCR_RECEIVE_EMPTY");
    }
    throw new Error("OCR_RECEIVE_CALLBACK_FAIL");
  }
}

module.exports = { onOcrText };