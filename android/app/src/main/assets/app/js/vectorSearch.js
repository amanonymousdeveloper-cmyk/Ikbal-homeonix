function generateVector(inputText) {
  try {
    if (typeof inputText !== "string") {
      throw new Error("TECH_GUARD_FAIL");
    }
    const vec = new Float32Array(512);
    for (let i = 0; i < vec.length; i++) {
      vec[i] = 0.0;
    }
    return Object.freeze(vec);
  } catch (e) {
    throw new Error("TECH_GUARD_FAIL");
  }
}

module.exports = { generateVector };