import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../cosmos/base/v1beta1/coin_pb.js";
/**
 * @generated from message kujira.scheduler.Hook
 */
export declare class Hook extends Message<Hook> {
    /**
     * @generated from field: uint64 id = 1;
     */
    id: bigint;
    /**
     * @generated from field: string executor = 2;
     */
    executor: string;
    /**
     * @generated from field: string contract = 3;
     */
    contract: string;
    /**
     * @generated from field: bytes msg = 4;
     */
    msg: Uint8Array;
    /**
     * @generated from field: int64 frequency = 5;
     */
    frequency: bigint;
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin funds = 6;
     */
    funds: Coin[];
    constructor(data?: PartialMessage<Hook>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.scheduler.Hook";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Hook;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Hook;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Hook;
    static equals(a: Hook | PlainMessage<Hook> | undefined, b: Hook | PlainMessage<Hook> | undefined): boolean;
}
//# sourceMappingURL=hook_pb.d.ts.map