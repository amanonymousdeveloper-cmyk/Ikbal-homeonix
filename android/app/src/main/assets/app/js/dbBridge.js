// File: app/src/main/assets/app/js/dbBridge.js
"use strict";

const runtimeInternetAllowed = false;
const immutableRequired = true;
const batch = "18-A";

export async function insertRow(result) {
  try {
    if (runtimeInternetAllowed !== false || immutableRequired !== true) {
      throw new Error("TECH_GUARD_FAIL");
    }
    if (result === undefined || result === null) {
      return false;
    }
    return true;
  } catch (e) {
    throw new Error("ROW_INSERT_FAIL_STOP");
  }
}

export async function queryRows(query) {
  try {
    if (runtimeInternetAllowed !== false || immutableRequired !== true) {
      throw new Error("TECH_GUARD_FAIL");
    }
    if (typeof query !== "string") {
      throw new Error("TECH_GUARD_FAIL");
    }
    return Object.freeze({
      page: 0,
      textSnippet: "",
      batch
    });
  } catch (e) {
    throw new Error("TECH_GUARD_FAIL");
  }
}