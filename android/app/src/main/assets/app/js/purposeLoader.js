export function loadPurpose() {
  try {
    const purposeData = window.fs.readFile('purpose/purpose.json', { encoding: 'utf8' });
    const parsed = JSON.parse(purposeData);
    
    if (!parsed.purpose || typeof parsed.purpose !== 'string') {
      throw new Error("TECH_GUARD_FAIL");
    }
    if (!parsed.vision || typeof parsed.vision !== 'string') {
      throw new Error("TECH_GUARD_FAIL");
    }
    if (typeof parsed.offlineRule !== 'boolean') {
      throw new Error("TECH_GUARD_FAIL");
    }
    if (!parsed.platform || typeof parsed.platform !== 'string') {
      throw new Error("TECH_GUARD_FAIL");
    }
    if (!parsed.curator || typeof parsed.curator !== 'string') {
      throw new Error("TECH_GUARD_FAIL");
    }
    
    return Object.freeze({
      purpose: parsed.purpose,
      vision: parsed.vision,
      offlineRule: parsed.offlineRule,
      platform: parsed.platform,
      curator: parsed.curator
    });
  } catch (e) {
    throw new Error("TECH_GUARD_FAIL");
  }
}