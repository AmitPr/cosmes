import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
/**
 * LegacyAminoPubKey specifies a public key type
 * which nests multiple public keys and a threshold,
 * it uses legacy amino address rules.
 *
 * @generated from message cosmos.crypto.multisig.LegacyAminoPubKey
 */
export declare class LegacyAminoPubKey extends Message<LegacyAminoPubKey> {
    /**
     * @generated from field: uint32 threshold = 1;
     */
    threshold: number;
    /**
     * @generated from field: repeated google.protobuf.Any public_keys = 2;
     */
    publicKeys: Any[];
    constructor(data?: PartialMessage<LegacyAminoPubKey>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.crypto.multisig.LegacyAminoPubKey";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LegacyAminoPubKey;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LegacyAminoPubKey;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LegacyAminoPubKey;
    static equals(a: LegacyAminoPubKey | PlainMessage<LegacyAminoPubKey> | undefined, b: LegacyAminoPubKey | PlainMessage<LegacyAminoPubKey> | undefined): boolean;
}
//# sourceMappingURL=keys_pb.d.ts.map