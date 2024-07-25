import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Grant } from "./feegrant_pb.js";
/**
 * GenesisState contains a set of fee allowances, persisted from the store
 *
 * @generated from message cosmos.feegrant.v1beta1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * @generated from field: repeated cosmos.feegrant.v1beta1.Grant allowances = 1;
     */
    allowances: Grant[];
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.feegrant.v1beta1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map