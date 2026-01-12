export function loadArchRules() {
  try {
    const rulesData = window.fs.readFile('architecture/archRules.json', { encoding: 'utf8' });
    const parsed = JSON.parse(rulesData);
    
    if (!parsed.containerHost || typeof parsed.containerHost !== 'string') {
      throw new Error("TECH_GUARD_FAIL");
    }
    if (!parsed.storageEngine || typeof parsed.storageEngine !== 'string') {
      throw new Error("TECH_GUARD_FAIL");
    }
    if (typeof parsed.immutableIO !== 'boolean') {
      throw new Error("TECH_GUARD_FAIL");
    }
    if (parsed.runtimeInternetAllowed !== false) {
      throw new Error("TECH_GUARD_FAIL");
    }
    if (parsed.failStopError !== "TECH_GUARD_FAIL") {
      throw new Error("TECH_GUARD_FAIL");
    }
    
    return Object.freeze({
      containerHost: parsed.containerHost,
      storageEngine: parsed.storageEngine,
      immutableIO: parsed.immutableIO,
      runtimeInternetAllowed: parsed.runtimeInternetAllowed,
      failStopError: parsed.failStopError
    });
  } catch (e) {
    throw new Error("TECH_GUARD_FAIL");
  }
}