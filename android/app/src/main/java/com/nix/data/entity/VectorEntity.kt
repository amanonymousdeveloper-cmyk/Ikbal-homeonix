package com.homeonix.data.entity

import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "vector")
data class VectorEntity(
    @PrimaryKey(autoGenerate = true)
    val id: Long = 0,
    val vectorBlob: ByteArray,
    val meta: String
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false
        other as VectorEntity
        if (id != other.id) return false
        if (!vectorBlob.contentEquals(other.vectorBlob)) return false
        if (meta != other.meta) return false
        return true
    }

    override fun hashCode(): Int {
        var result = id.hashCode()
        result = 31 * result + vectorBlob.contentHashCode()
        result = 31 * result + meta.hashCode()
        return result
    }
}