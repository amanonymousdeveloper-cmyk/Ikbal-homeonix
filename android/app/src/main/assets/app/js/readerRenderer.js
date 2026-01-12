export function renderSection(indexItem) {
  try {
    if (
      !indexItem ||
      typeof indexItem.position !== "number" ||
      typeof indexItem.sourceFile !== "string" ||
      typeof indexItem.textSnippet !== "string"
    ) {
      throw new Error("TECH_GUARD_FAIL");
    }

    const scrollOffset = indexItem.position * 100;
    const renderMode = "SECTION";

    return Object.freeze({
      scrollOffset,
      renderMode
    });
  } catch (e) {
    throw new Error("TECH_GUARD_FAIL");
  }
}