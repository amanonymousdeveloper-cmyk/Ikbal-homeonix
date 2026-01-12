export function loadModelSpec() {
  try {
    const raw = JSON.parse(
      AndroidBridge.readAsset("embed/modelSpec.json")
    );
    const frozen = Object.freeze(raw);
    return frozen;
  } catch (e) {
    throw new Error("TECH_GUARD_FAIL");
  }
}