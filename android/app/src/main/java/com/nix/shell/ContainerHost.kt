package com.homeonix.shell

import android.content.Context
import android.webkit.WebView
import android.webkit.WebViewClient
import android.webkit.JavascriptInterface

class ContainerHost(private val context: Context) {
    private var webView: WebView? = null

    fun startContainer(): Unit {
        try {
            webView = WebView(context).apply {
                settings.javaScriptEnabled = true
                settings.domStorageEnabled = false
                settings.databaseEnabled = false
                settings.allowFileAccess = true
                settings.allowContentAccess = false
                settings.blockNetworkLoads = true
                settings.blockNetworkImage = true
                
                webViewClient = WebViewClient()
                
                loadUrl("file:///android_asset/app/index.html")
            }
        } catch (e: Exception) {
            throw Error("TECH_GUARD_FAIL")
        }
    }

    fun execJS(script: String): String {
        try {
            if (webView == null) {
                throw Error("TECH_GUARD_FAIL")
            }
            
            var result = ""
            webView?.evaluateJavascript(script) { value ->
                result = value ?: ""
            }
            
            return result
        } catch (e: Exception) {
            throw Error("TECH_GUARD_FAIL")
        }
    }
    
    fun getWebView(): WebView {
        return webView ?: throw Error("TECH_GUARD_FAIL")
    }
}