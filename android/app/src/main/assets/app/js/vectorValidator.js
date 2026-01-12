function validateVector(vector) {
  try {
    if (!(vector instanceof Float32Array)) {
      throw new Error("TECH_GUARD_FAIL");
    }
    const len = vector.length;
    if (!Number.isInteger(len) || len <= 0) {
      throw new Error("TECH_GUARD_FAIL");
    }
    return true;
  } catch (e) {
    throw new Error("TECH_GUARD_FAIL");
  }
}

module.exports = { validateVector };