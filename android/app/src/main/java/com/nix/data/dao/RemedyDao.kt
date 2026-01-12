package com.homeonix.data.dao

import androidx.room.Dao
import androidx.room.Insert
import androidx.room.Query
import com.homeonix.data.entity.RemedyEntity

@Dao
interface RemedyDao {
    @Query("SELECT * FROM remedy")
    fun findAll(): List<RemedyEntity>

    @Insert
    fun insert(row: RemedyEntity): Long
}