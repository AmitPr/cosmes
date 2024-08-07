import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { Hook } from "./hook_pb.js";
/**
 * GenesisState defines the scheduler module's genesis state.
 *
 * @generated from message kujira.scheduler.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * @generated from field: kujira.scheduler.Params params = 1;
     */
    params?: Params;
    /**
     * @generated from field: repeated kujira.scheduler.Hook hookList = 2;
     */
    hookList: Hook[];
    /**
     * @generated from field: uint64 hookCount = 3;
     */
    hookCount: bigint;
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.scheduler.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map