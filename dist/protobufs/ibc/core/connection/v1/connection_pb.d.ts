import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { MerklePrefix } from "../../commitment/v1/commitment_pb.js";
/**
 * State defines if a connection is in one of the following states:
 * INIT, TRYOPEN, OPEN or UNINITIALIZED.
 *
 * @generated from enum ibc.core.connection.v1.State
 */
export declare enum State {
    /**
     * Default State
     *
     * @generated from enum value: STATE_UNINITIALIZED_UNSPECIFIED = 0;
     */
    UNINITIALIZED_UNSPECIFIED = 0,
    /**
     * A connection end has just started the opening handshake.
     *
     * @generated from enum value: STATE_INIT = 1;
     */
    INIT = 1,
    /**
     * A connection end has acknowledged the handshake step on the counterparty
     * chain.
     *
     * @generated from enum value: STATE_TRYOPEN = 2;
     */
    TRYOPEN = 2,
    /**
     * A connection end has completed the handshake.
     *
     * @generated from enum value: STATE_OPEN = 3;
     */
    OPEN = 3
}
/**
 * ConnectionEnd defines a stateful object on a chain connected to another
 * separate one.
 * NOTE: there must only be 2 defined ConnectionEnds to establish
 * a connection between two chains.
 *
 * @generated from message ibc.core.connection.v1.ConnectionEnd
 */
export declare class ConnectionEnd extends Message<ConnectionEnd> {
    /**
     * client associated with this connection.
     *
     * @generated from field: string client_id = 1;
     */
    clientId: string;
    /**
     * IBC version which can be utilised to determine encodings or protocols for
     * channels or packets utilising this connection.
     *
     * @generated from field: repeated ibc.core.connection.v1.Version versions = 2;
     */
    versions: Version[];
    /**
     * current state of the connection end.
     *
     * @generated from field: ibc.core.connection.v1.State state = 3;
     */
    state: State;
    /**
     * counterparty chain associated with this connection.
     *
     * @generated from field: ibc.core.connection.v1.Counterparty counterparty = 4;
     */
    counterparty?: Counterparty;
    /**
     * delay period that must pass before a consensus state can be used for
     * packet-verification NOTE: delay period logic is only implemented by some
     * clients.
     *
     * @generated from field: uint64 delay_period = 5;
     */
    delayPeriod: bigint;
    constructor(data?: PartialMessage<ConnectionEnd>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.connection.v1.ConnectionEnd";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConnectionEnd;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConnectionEnd;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConnectionEnd;
    static equals(a: ConnectionEnd | PlainMessage<ConnectionEnd> | undefined, b: ConnectionEnd | PlainMessage<ConnectionEnd> | undefined): boolean;
}
/**
 * IdentifiedConnection defines a connection with additional connection
 * identifier field.
 *
 * @generated from message ibc.core.connection.v1.IdentifiedConnection
 */
export declare class IdentifiedConnection extends Message<IdentifiedConnection> {
    /**
     * connection identifier.
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * client associated with this connection.
     *
     * @generated from field: string client_id = 2;
     */
    clientId: string;
    /**
     * IBC version which can be utilised to determine encodings or protocols for
     * channels or packets utilising this connection
     *
     * @generated from field: repeated ibc.core.connection.v1.Version versions = 3;
     */
    versions: Version[];
    /**
     * current state of the connection end.
     *
     * @generated from field: ibc.core.connection.v1.State state = 4;
     */
    state: State;
    /**
     * counterparty chain associated with this connection.
     *
     * @generated from field: ibc.core.connection.v1.Counterparty counterparty = 5;
     */
    counterparty?: Counterparty;
    /**
     * delay period associated with this connection.
     *
     * @generated from field: uint64 delay_period = 6;
     */
    delayPeriod: bigint;
    constructor(data?: PartialMessage<IdentifiedConnection>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.connection.v1.IdentifiedConnection";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IdentifiedConnection;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IdentifiedConnection;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IdentifiedConnection;
    static equals(a: IdentifiedConnection | PlainMessage<IdentifiedConnection> | undefined, b: IdentifiedConnection | PlainMessage<IdentifiedConnection> | undefined): boolean;
}
/**
 * Counterparty defines the counterparty chain associated with a connection end.
 *
 * @generated from message ibc.core.connection.v1.Counterparty
 */
export declare class Counterparty extends Message<Counterparty> {
    /**
     * identifies the client on the counterparty chain associated with a given
     * connection.
     *
     * @generated from field: string client_id = 1;
     */
    clientId: string;
    /**
     * identifies the connection end on the counterparty chain associated with a
     * given connection.
     *
     * @generated from field: string connection_id = 2;
     */
    connectionId: string;
    /**
     * commitment merkle prefix of the counterparty chain.
     *
     * @generated from field: ibc.core.commitment.v1.MerklePrefix prefix = 3;
     */
    prefix?: MerklePrefix;
    constructor(data?: PartialMessage<Counterparty>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.connection.v1.Counterparty";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Counterparty;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Counterparty;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Counterparty;
    static equals(a: Counterparty | PlainMessage<Counterparty> | undefined, b: Counterparty | PlainMessage<Counterparty> | undefined): boolean;
}
/**
 * ClientPaths define all the connection paths for a client state.
 *
 * @generated from message ibc.core.connection.v1.ClientPaths
 */
export declare class ClientPaths extends Message<ClientPaths> {
    /**
     * list of connection paths
     *
     * @generated from field: repeated string paths = 1;
     */
    paths: string[];
    constructor(data?: PartialMessage<ClientPaths>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.connection.v1.ClientPaths";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientPaths;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientPaths;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientPaths;
    static equals(a: ClientPaths | PlainMessage<ClientPaths> | undefined, b: ClientPaths | PlainMessage<ClientPaths> | undefined): boolean;
}
/**
 * ConnectionPaths define all the connection paths for a given client state.
 *
 * @generated from message ibc.core.connection.v1.ConnectionPaths
 */
export declare class ConnectionPaths extends Message<ConnectionPaths> {
    /**
     * client state unique identifier
     *
     * @generated from field: string client_id = 1;
     */
    clientId: string;
    /**
     * list of connection paths
     *
     * @generated from field: repeated string paths = 2;
     */
    paths: string[];
    constructor(data?: PartialMessage<ConnectionPaths>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.connection.v1.ConnectionPaths";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConnectionPaths;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConnectionPaths;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConnectionPaths;
    static equals(a: ConnectionPaths | PlainMessage<ConnectionPaths> | undefined, b: ConnectionPaths | PlainMessage<ConnectionPaths> | undefined): boolean;
}
/**
 * Version defines the versioning scheme used to negotiate the IBC verison in
 * the connection handshake.
 *
 * @generated from message ibc.core.connection.v1.Version
 */
export declare class Version extends Message<Version> {
    /**
     * unique version identifier
     *
     * @generated from field: string identifier = 1;
     */
    identifier: string;
    /**
     * list of features compatible with the specified identifier
     *
     * @generated from field: repeated string features = 2;
     */
    features: string[];
    constructor(data?: PartialMessage<Version>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.connection.v1.Version";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Version;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Version;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Version;
    static equals(a: Version | PlainMessage<Version> | undefined, b: Version | PlainMessage<Version> | undefined): boolean;
}
/**
 * Params defines the set of Connection parameters.
 *
 * @generated from message ibc.core.connection.v1.Params
 */
export declare class Params extends Message<Params> {
    /**
     * maximum expected time per block (in nanoseconds), used to enforce block delay. This parameter should reflect the
     * largest amount of time that the chain might reasonably take to produce the next block under normal operating
     * conditions. A safe choice is 3-5x the expected time per block.
     *
     * @generated from field: uint64 max_expected_time_per_block = 1;
     */
    maxExpectedTimePerBlock: bigint;
    constructor(data?: PartialMessage<Params>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.connection.v1.Params";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params;
    static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean;
}
//# sourceMappingURL=connection_pb.d.ts.map