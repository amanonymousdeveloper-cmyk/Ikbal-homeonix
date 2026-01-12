// File: app/src/main/assets/app/js/vectorGen.js
"use strict";

const runtimeInternetAllowed = false;
const immutableRequired = true;
const batch = "18-A";
const version = "1.0";

export async function generateVector(inputText) {
  try {
    if (runtimeInternetAllowed !== false || immutableRequired !== true) {
      throw new Error("TECH_GUARD_FAIL");
    }
    if (typeof inputText !== "string") {
      throw new Error("VECTOR_GEN_FAIL_STOP");
    }
    const arr = new Float32Array(inputText.length);
    for (let i = 0; i < inputText.length; i++) {
      arr[i] = inputText.charCodeAt(i) / 255;
    }
    return arr;
  } catch (e) {
    throw new Error("VECTOR_GEN_FAIL_STOP");
  }
}

export function exportVector(vector) {
  if (!(vector instanceof Float32Array)) {
    throw new Error("TECH_GUARD_FAIL");
  }
  return Object.freeze({
    vector,
    version,
    batch
  });
}