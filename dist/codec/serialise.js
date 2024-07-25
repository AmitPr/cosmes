import { utf8 } from "@scure/base";
/**
 * Escapes <,>,& in string.
 * Golang's json marshaller escapes <,>,& by default.
 * However, because JS doesn't do that by default, to match the sign doc with cosmos-sdk,
 * we should escape <,>,& in string manually.
 * @param str
 */
function escapeHtml(str) {
    return str
        .replace(/</g, "\\u003c")
        .replace(/>/g, "\\u003e")
        .replace(/&/g, "\\u0026");
}
export function sortObjectByKey(obj) {
    if (typeof obj !== "object" || obj == null) {
        return obj;
    }
    if (Array.isArray(obj)) {
        return obj.map(sortObjectByKey);
    }
    const sortedKeys = Object.keys(obj).sort();
    const result = {};
    sortedKeys.forEach((key) => {
        result[key] = sortObjectByKey(obj[key]);
    });
    return result;
}
/**
 * Serialises the given sign doc to a `Uint8Array` in a deterministic manner.
 */
export function serialiseSignDoc(doc) {
    return utf8.decode(escapeHtml(JSON.stringify(sortObjectByKey(doc))));
}
//# sourceMappingURL=serialise.js.map