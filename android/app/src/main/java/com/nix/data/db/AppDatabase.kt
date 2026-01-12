package com.homeonix.data.db

import androidx.room.Database
import androidx.room.RoomDatabase
import com.homeonix.data.dao.DiseaseDao
import com.homeonix.data.dao.RemedyDao
import com.homeonix.data.dao.VectorDao
import com.homeonix.data.entity.DiseaseEntity
import com.homeonix.data.entity.RemedyEntity
import com.homeonix.data.entity.VectorEntity

@Database(
    entities = [DiseaseEntity::class, RemedyEntity::class, VectorEntity::class],
    version = 1,
    exportSchema = false
)
abstract class AppDatabase : RoomDatabase() {
    abstract fun diseaseDao(): DiseaseDao
    abstract fun remedyDao(): RemedyDao
    abstract fun vectorDao(): VectorDao

    init {
        if (this.javaClass.name.isBlank()) {
            throw Error("TECH_GUARD_FAIL")
        }
    }
}