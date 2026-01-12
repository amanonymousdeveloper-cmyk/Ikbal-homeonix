/**
 * VectorIndexRow = {
 *   id: number,
 *   refType: "RUBRIC" | "REMEDY" | "DISEASE",
 *   refId: number,
 *   vectorBlob: Uint8Array | ArrayBuffer
 * }
 */

function loadVectorIndex() {
  try {
    if (
      typeof Bridge === "undefined" ||
      typeof Bridge.getVectorIndexRows !== "function"
    ) {
      throw new Error("SEARCH_FAIL");
    }

    const rows = Bridge.getVectorIndexRows();

    if (!Array.isArray(rows)) {
      throw new Error("SEARCH_FAIL");
    }

    const frozenRows = rows.map((row) => {
      if (
        typeof row !== "object" ||
        row === null ||
        typeof row.id !== "number" ||
        typeof row.refId !== "number" ||
        typeof row.refType !== "string" ||
        (row.refType !== "RUBRIC" &&
          row.refType !== "REMEDY" &&
          row.refType !== "DISEASE") ||
        row.vectorBlob == null
      ) {
        throw new Error("SEARCH_FAIL");
      }

      return Object.freeze({
        id: row.id,
        refType: row.refType,
        refId: row.refId,
        vectorBlob: row.vectorBlob
      });
    });

    return Object.freeze(frozenRows);
  } catch (e) {
    throw new Error("SEARCH_FAIL");
  }
}

export { loadVectorIndex };