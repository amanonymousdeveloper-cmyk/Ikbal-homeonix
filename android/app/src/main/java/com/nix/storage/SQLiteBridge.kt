package com.homeonix.storage

object SQLiteBridge {
    val onFail: String = "throw Error(\"INGEST_FAIL\")"

    fun insertVector(vector: FloatArray): Boolean {
        try {
            if (vector.isEmpty()) throw Error("INGEST_FAIL")
            return true
        } catch (e: Exception) {
            throw Error("INGEST_FAIL")
        }
    }

    fun queryVectors(): List<VectorRow> {
        try {
            val rows = listOf<VectorRow>()
            return rows
        } catch (e: Exception) {
            throw Error("INGEST_FAIL")
        }
    }

    fun insertDisease(row: DiseaseRow): Boolean {
        try {
            if (row.name.isBlank() || row.meaning.isBlank()) throw Error("INGEST_FAIL")
            return true
        } catch (e: Exception) {
            throw Error("INGEST_FAIL")
        }
    }

    fun queryDisease(id: Int): DiseaseRow {
        try {
            if (id <= 0) throw Error("INGEST_FAIL")
            return DiseaseRow(id, "", "")
        } catch (e: Exception) {
            throw Error("INGEST_FAIL")
        }
    }
}

data class VectorRow(val id: Int, val vector: FloatArray)
data class DiseaseRow(val id: Int, val name: String, val meaning: String)
data class DiseaseRow(val id: Int, val name: String, val meaning: String)