package com.homeonix.shell

import android.Manifest
import android.app.Activity
import android.content.pm.PackageManager
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat

class PermissionManager(private val activity: Activity) {
    
    companion object {
        private const val CAMERA_REQUEST_CODE = 100
        private const val STORAGE_REQUEST_CODE = 101
    }

    fun requestCamera(): Boolean {
        try {
            val permission = Manifest.permission.CAMERA
            
            return when {
                ContextCompat.checkSelfPermission(activity, permission) == 
                    PackageManager.PERMISSION_GRANTED -> {
                    true
                }
                else -> {
                    ActivityCompat.requestPermissions(
                        activity,
                        arrayOf(permission),
                        CAMERA_REQUEST_CODE
                    )
                    false
                }
            }
        } catch (e: Exception) {
            throw Error("TECH_GUARD_FAIL")
        }
    }

    fun requestStorage(): Boolean {
        try {
            val permission = Manifest.permission.READ_EXTERNAL_STORAGE
            
            return when {
                ContextCompat.checkSelfPermission(activity, permission) == 
                    PackageManager.PERMISSION_GRANTED -> {
                    true
                }
                else -> {
                    ActivityCompat.requestPermissions(
                        activity,
                        arrayOf(permission),
                        STORAGE_REQUEST_CODE
                    )
                    false
                }
            }
        } catch (e: Exception) {
            throw Error("TECH_GUARD_FAIL")
        }
    }
}