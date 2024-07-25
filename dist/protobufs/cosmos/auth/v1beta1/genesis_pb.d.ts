import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./auth_pb.js";
/**
 * GenesisState defines the auth module's genesis state.
 *
 * @generated from message cosmos.auth.v1beta1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * params defines all the parameters of the module.
     *
     * @generated from field: cosmos.auth.v1beta1.Params params = 1;
     */
    params?: Params;
    /**
     * accounts are the accounts present at genesis.
     *
     * @generated from field: repeated google.protobuf.Any accounts = 2;
     */
    accounts: Any[];
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.auth.v1beta1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map