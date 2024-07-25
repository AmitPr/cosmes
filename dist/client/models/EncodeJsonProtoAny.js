export function encodeToJsonProtoAny(msg) {
    return {
        typeUrl: msg.getType().typeName,
        value: msg.toJsonString(),
    };
}
//# sourceMappingURL=EncodeJsonProtoAny.js.map