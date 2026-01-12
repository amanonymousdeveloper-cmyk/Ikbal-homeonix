package com.homeonix.data.dao

import androidx.room.Dao
import androidx.room.Insert
import androidx.room.Query
import com.homeonix.data.entity.DiseaseEntity

@Dao
interface DiseaseDao {
    @Query("SELECT * FROM disease")
    fun findAll(): List<DiseaseEntity>

    @Insert
    fun insert(row: DiseaseEntity): Long
}