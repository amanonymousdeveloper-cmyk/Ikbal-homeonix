package com.homeonix.shell

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.homeonix.R

class MainActivity : AppCompatActivity() {

    private lateinit var containerHost: ContainerHost

    // Deterministic, immutable bootstrap object (no getters, no mutation)
    private val bootstrapScript: String = """
        window.homeonixBootstrap = Object.freeze({
          appName: "Homeonix",
          chapter: "Ch-09",
          batch: "09-A",
          containerHost: "WebView",
          offlineMode: true,
          assetsPath: "file:///android_asset/",
          jsEntry: "app/js/readerRenderer.js",
          encoding: "UTF-8",
          immutableHandoff: true,
          errorContract: "READER_FAIL"
        });
    """.trimIndent()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        try {
            containerHost = ContainerHost(this)
            bootstrapReader()
        } catch (e: Exception) {
            throw RuntimeException("READER_FAIL")
        }
    }

    private fun bootstrapReader() {
        try {
            containerHost.startContainer()
            val webView = containerHost.getWebView()

            // Load JS entry directly from assets (offline-only, UTF-8)
            webView.loadUrl("file:///android_asset/app/js/readerRenderer.js")

            // Inject immutable bootstrap object
            containerHost.execJS(bootstrapScript)

        } catch (e: Exception) {
            throw RuntimeException("READER_FAIL")
        }
    }
}