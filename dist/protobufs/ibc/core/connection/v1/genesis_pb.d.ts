import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ConnectionPaths, IdentifiedConnection, Params } from "./connection_pb.js";
/**
 * GenesisState defines the ibc connection submodule's genesis state.
 *
 * @generated from message ibc.core.connection.v1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * @generated from field: repeated ibc.core.connection.v1.IdentifiedConnection connections = 1;
     */
    connections: IdentifiedConnection[];
    /**
     * @generated from field: repeated ibc.core.connection.v1.ConnectionPaths client_connection_paths = 2;
     */
    clientConnectionPaths: ConnectionPaths[];
    /**
     * the sequence for the next generated connection identifier
     *
     * @generated from field: uint64 next_connection_sequence = 3;
     */
    nextConnectionSequence: bigint;
    /**
     * @generated from field: ibc.core.connection.v1.Params params = 4;
     */
    params?: Params;
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.connection.v1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map