package com.homeonix.data.entity

import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "remedy")
data class RemedyEntity(
    @PrimaryKey(autoGenerate = true)
    val id: Long = 0,
    val remedyName: String,
    val source: String,
    val keynotes: String
)