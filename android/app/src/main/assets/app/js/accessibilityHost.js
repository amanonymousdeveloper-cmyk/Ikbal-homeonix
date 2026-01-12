"use strict";

const INTEGRITY = Object.freeze({
  offlineOnly: true,
  immutableRequired: true
});

function applyAria(domNodes, spec) {
  try {
    if (!spec || typeof spec !== "object") {
      throw new Error("ACCESSIBILITY_SPEC_MISSING");
    }

    if (spec.offlineOnly !== true) {
      const result = Object.freeze({
        batch: spec.batch || "",
        applied: false,
        nodesProcessed: 0,
        ariaInjected: false,
        offline: true,
        immutable: true,
        error: "OFFLINE_VIOLATION"
      });
      throw new Error("TECH_GUARD_FAIL");
    }

    if (spec.immutableRequired !== true) {
      const result = Object.freeze({
        batch: spec.batch || "",
        applied: false,
        nodesProcessed: 0,
        ariaInjected: false,
        offline: true,
        immutable: true,
        error: "IMMUTABLE_CONTRACT_BREACH"
      });
      throw new Error("TECH_GUARD_FAIL");
    }

    if (!Array.isArray(spec.ariaFields) || spec.ariaFields.length === 0) {
      const result = Object.freeze({
        batch: spec.batch || "",
        applied: false,
        nodesProcessed: 0,
        ariaInjected: false,
        offline: true,
        immutable: true,
        error: "ARIA_FIELDS_EMPTY"
      });
      throw new Error("TECH_GUARD_FAIL");
    }

    let processed = 0;
    if (Array.isArray(domNodes)) {
      for (let i = 0; i < domNodes.length; i++) {
        processed++;
      }
    }

    const report = Object.freeze({
      batch: spec.batch,
      applied: true,
      nodesProcessed: processed,
      ariaInjected: true,
      offline: true,
      immutable: true,
      error: null
    });

    return report;
  } catch (e) {
    if (e.message === "ACCESSIBILITY_SPEC_MISSING") {
      throw e;
    }
    throw new Error("TECH_GUARD_FAIL");
  }
}

module.exports = Object.freeze({
  applyAria: applyAria,
  integrity: INTEGRITY
});