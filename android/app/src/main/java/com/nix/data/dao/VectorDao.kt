package com.homeonix.data.dao

import androidx.room.Dao
import androidx.room.Query
import com.homeonix.data.entity.VectorEntity

@Dao
interface VectorDao {
    @Query("SELECT * FROM vector WHERE id = :id LIMIT 1")
    fun findById(id: Long): VectorEntity
}