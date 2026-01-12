package com.homeonix.data.entity

import androidx.room.Entity
import androidx.room.PrimaryKey
import androidx.room.PrimaryKey

@Entity(tableName = "disease")
data class DiseaseEntity(
    @PrimaryKey(autoGenerate = true)
    val id: Long = 0,
    val name: String,
    val meaning: String,
    val symptoms: String
)