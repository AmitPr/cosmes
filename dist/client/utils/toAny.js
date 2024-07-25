import { Any } from "@bufbuild/protobuf";
export function toAny(msg) {
    return new Any({
        typeUrl: `/${msg.getType().typeName}`,
        value: msg.toBinary(),
    });
}
//# sourceMappingURL=toAny.js.map