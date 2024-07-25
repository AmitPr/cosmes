import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message tendermint.libs.bits.BitArray
 */
export declare class BitArray extends Message<BitArray> {
    /**
     * @generated from field: int64 bits = 1;
     */
    bits: bigint;
    /**
     * @generated from field: repeated uint64 elems = 2;
     */
    elems: bigint[];
    constructor(data?: PartialMessage<BitArray>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.libs.bits.BitArray";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BitArray;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BitArray;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BitArray;
    static equals(a: BitArray | PlainMessage<BitArray> | undefined, b: BitArray | PlainMessage<BitArray> | undefined): boolean;
}
//# sourceMappingURL=types_pb.d.ts.map