// File: app/src/main/assets/app/js/readerJump.js
"use strict";

const runtimeInternetAllowed = false;
const immutableRequired = true;
const batch = "18-A";

export function jumpToEvidence(page, textSnippet) {
  try {
    if (runtimeInternetAllowed !== false || immutableRequired !== true) {
      throw new Error("TECH_GUARD_FAIL");
    }
    if (typeof page !== "number" || typeof textSnippet !== "string") {
      return "CORRUPT_EXIT";
    }
    return Object.freeze({
      page,
      textSnippet,
      batch
    });
  } catch (e) {
    throw new Error("READER_JUMP_FAIL_STOP");
  }
}