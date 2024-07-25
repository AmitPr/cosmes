import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * PubKey defines a authn public key
 *
 * @generated from message kujira.crypto.authn.PubKey
 */
export declare class PubKey extends Message<PubKey> {
    /**
     * @generated from field: string key_id = 1;
     */
    keyId: string;
    /**
     * @generated from field: bytes key = 2;
     */
    key: Uint8Array;
    constructor(data?: PartialMessage<PubKey>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.crypto.authn.PubKey";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PubKey;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PubKey;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PubKey;
    static equals(a: PubKey | PlainMessage<PubKey> | undefined, b: PubKey | PlainMessage<PubKey> | undefined): boolean;
}
//# sourceMappingURL=keys_pb.d.ts.map