export function highlightEvidence(input) {
  try {
    if (
      !input ||
      typeof input.position !== "number" ||
      typeof input.sourceFile !== "string" ||
      typeof input.textSnippet !== "string"
    ) {
      throw new Error("READER_FAIL");
    }

    let scrollOffset = 0;
    for (let i = 0; i < input.position; i++) {
      scrollOffset += 1;
    }

    const highlightState = {
      active: true,
      offset: scrollOffset
    };

    return Object.freeze({
      position: input.position,
      highlighted: true,
      sourceFile: input.sourceFile,
      highlightState: Object.freeze(highlightState),
      immutable: true,
      encoding: "UTF-8",
      errorContract: "READER_FAIL"
    });
  } catch (e) {
    throw new Error("READER_FAIL");
  }
}