package com.homeonix.ocr

class OcrEngine {

    val onFail: String = "throw Error(\"OCR_PIPE_FAIL\")"

    fun invokeOcr(inputPath: String, lang: String): String {
        try {
            if (inputPath.isBlank() || lang.isBlank()) {
                throw Error("OCR_PIPE_FAIL")
            }
            // ফোনের ভিতরে Tesseract OCR চালু হবে (tess-two/tessdata থেকে)
            val extractedText = ""
            if (extractedText.isEmpty()) {
                throw Error("OCR_PIPE_FAIL")
            }
            return extractedText
        } catch (e: Exception) {
            throw Error("OCR_PIPE_FAIL")
        }
    }
}