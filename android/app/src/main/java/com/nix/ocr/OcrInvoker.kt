package com.homeonix.ocr

class OcrInvoker {
    fun invokeOcr(inputPath: String, lang: String, onResult: (String) -> Unit): Boolean {
        try {
            if (inputPath.isBlank() || lang.isBlank()) {
                throw Error("INGEST_FAIL")
            }
            val extracted = ""
            if (extracted.isEmpty()) {
                throw Error("INGEST_FAIL")
            }
            onResult(extracted)
            return true
        } catch (e: Exception) {
            throw Error("INGEST_FAIL")
        }
    }
}