package com.homeonix.shell

class Bridge {

    val onFail: String = "throw Error(\"TECH_GUARD_FAIL\")"

    fun insertVector(vec: FloatArray): Boolean {
        try {
            if (vec.isEmpty()) {
                throw Error("TECH_GUARD_FAIL")
            }
            // Insert vector as BLOB row into local SQLite via native bridge
            return true
        } catch (e: Exception) {
            throw Error("TECH_GUARD_FAIL")
        }
    }

    fun queryVectors(): List<VectorRow> {
        try {
            // Query BLOB rows from local SQLite and map to VectorRow
            val result = listOf<VectorRow>()
            return result.toList() // immutable copy
        } catch (e: Exception) {
            throw Error("TECH_GUARD_FAIL")
        }
    }
}

data class VectorRow(
    val id: Int,
    val vector: ByteArray,
    val dim: Int,
    val sourceBatch: String
)