import { Message } from "@bufbuild/protobuf";

export function encodeToJsonProtoAny(msg: Message<any>) {
    return {
        typeUrl: msg.getType().typeName,
        value: msg.toJsonString(),
    };
}