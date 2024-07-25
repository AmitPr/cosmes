import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { DenomTrace, Params } from "./transfer_pb.js";
import { Coin } from "../../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * GenesisState defines the ibc-transfer genesis state
 *
 * @generated from message ibc.applications.transfer.v1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * @generated from field: string port_id = 1;
     */
    portId: string;
    /**
     * @generated from field: repeated ibc.applications.transfer.v1.DenomTrace denom_traces = 2;
     */
    denomTraces: DenomTrace[];
    /**
     * @generated from field: ibc.applications.transfer.v1.Params params = 3;
     */
    params?: Params;
    /**
     * total_escrowed contains the total amount of tokens escrowed
     * by the transfer module
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin total_escrowed = 4;
     */
    totalEscrowed: Coin[];
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.transfer.v1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map