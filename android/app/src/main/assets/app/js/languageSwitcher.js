"use strict";

function getConfig() {
  if (typeof globalThis === "undefined" || !globalThis.__LANG_SWITCHER_CONFIG__) {
    throw new Error("I18N_SWITCHER_CONFIG_MISSING");
  }
  return globalThis.__LANG_SWITCHER_CONFIG__;
}

function switchLanguage(lang) {
  const cfg = getConfig();

  try {
    if (cfg.offlineOnly !== true) {
      const result = Object.freeze({
        current: cfg.defaultLanguage,
        next: cfg.defaultLanguage,
        font: "",
        offline: true,
        immutable: true,
        container: "",
        error: "OFFLINE_RULE_VIOLATION"
      });
      throw new Error("TECH_GUARD_FAIL");
    }

    if (cfg.immutableRequired !== true) {
      const result = Object.freeze({
        current: cfg.defaultLanguage,
        next: cfg.defaultLanguage,
        font: "",
        offline: true,
        immutable: true,
        container: "",
        error: "IMMUTABLE_SWITCHER_VIOLATION"
      });
      throw new Error("TECH_GUARD_FAIL");
    }

    if (cfg.defaultLanguage !== "EN" && cfg.defaultLanguage !== "BN") {
      const result = Object.freeze({
        current: cfg.defaultLanguage,
        next: cfg.defaultLanguage,
        font: "",
        offline: true,
        immutable: true,
        container: "",
        error: "LANG_INVALID"
      });
      throw new Error("TECH_GUARD_FAIL");
    }

    if (!cfg.allowedContainerHosts || !cfg.allowedContainerHosts.includes(cfg.container)) {
      const result = Object.freeze({
        current: cfg.defaultLanguage,
        next: cfg.defaultLanguage,
        font: "",
        offline: true,
        immutable: true,
        container: cfg.container || "",
        error: "CONTAINER_NOT_ALLOWED"
      });
      throw new Error("TECH_GUARD_FAIL");
    }

    if (lang !== "EN" && lang !== "BN") {
      const result = Object.freeze({
        current: cfg.defaultLanguage,
        next: cfg.defaultLanguage,
        font: "",
        offline: true,
        immutable: true,
        container: cfg.container,
        error: "LANG_INVALID"
      });
      throw new Error("TECH_GUARD_FAIL");
    }

    const current = cfg.defaultLanguage;
    const next = lang;
    const font = cfg.fontFamilyMap[next];

    const output = {
      current: current,
      next: next,
      font: font,
      offline: true,
      immutable: true,
      container: cfg.container,
      error: null
    };

    const frozen = Object.freeze(output);

    try {
      frozen.current = "X";
      const violated = Object.freeze({
        current,
        next,
        font,
        offline: true,
        immutable: true,
        container: cfg.container,
        error: "IMMUTABLE_VIOLATION"
      });
      throw new Error("TECH_GUARD_FAIL");
    } catch (_) {}

    return frozen;
  } catch (e) {
    if (e.message === "TECH_GUARD_FAIL") {
      throw e;
    }
    throw new Error("TECH_GUARD_FAIL");
  }
}

module.exports = Object.freeze({ switchLanguage });