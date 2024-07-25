import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { GenesisState as GenesisState$1 } from "../../client/v1/genesis_pb.js";
import { GenesisState as GenesisState$2 } from "../../connection/v1/genesis_pb.js";
import { GenesisState as GenesisState$3 } from "../../channel/v1/genesis_pb.js";
/**
 * GenesisState defines the ibc module's genesis state.
 *
 * @generated from message ibc.core.types.v1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * ICS002 - Clients genesis state
     *
     * @generated from field: ibc.core.client.v1.GenesisState client_genesis = 1;
     */
    clientGenesis?: GenesisState$1;
    /**
     * ICS003 - Connections genesis state
     *
     * @generated from field: ibc.core.connection.v1.GenesisState connection_genesis = 2;
     */
    connectionGenesis?: GenesisState$2;
    /**
     * ICS004 - Channel genesis state
     *
     * @generated from field: ibc.core.channel.v1.GenesisState channel_genesis = 3;
     */
    channelGenesis?: GenesisState$3;
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.types.v1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map