import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../cosmos/base/v1beta1/coin_pb.js";
/**
 * Params holds parameters for the denom module
 *
 * @generated from message kujira.denom.Params
 */
export declare class Params extends Message<Params> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin creation_fee = 1;
     */
    creationFee: Coin[];
    constructor(data?: PartialMessage<Params>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.denom.Params";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params;
    static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean;
}
//# sourceMappingURL=params_pb.d.ts.map