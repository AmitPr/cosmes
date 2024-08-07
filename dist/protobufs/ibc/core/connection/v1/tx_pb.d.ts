import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { Counterparty, Version } from "./connection_pb.js";
import { Height } from "../../client/v1/client_pb.js";
/**
 * MsgConnectionOpenInit defines the msg sent by an account on Chain A to
 * initialize a connection with Chain B.
 *
 * @generated from message ibc.core.connection.v1.MsgConnectionOpenInit
 */
export declare class MsgConnectionOpenInit extends Message<MsgConnectionOpenInit> {
    /**
     * @generated from field: string client_id = 1;
     */
    clientId: string;
    /**
     * @generated from field: ibc.core.connection.v1.Counterparty counterparty = 2;
     */
    counterparty?: Counterparty;
    /**
     * @generated from field: ibc.core.connection.v1.Version version = 3;
     */
    version?: Version;
    /**
     * @generated from field: uint64 delay_period = 4;
     */
    delayPeriod: bigint;
    /**
     * @generated from field: string signer = 5;
     */
    signer: string;
    constructor(data?: PartialMessage<MsgConnectionOpenInit>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.connection.v1.MsgConnectionOpenInit";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgConnectionOpenInit;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgConnectionOpenInit;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgConnectionOpenInit;
    static equals(a: MsgConnectionOpenInit | PlainMessage<MsgConnectionOpenInit> | undefined, b: MsgConnectionOpenInit | PlainMessage<MsgConnectionOpenInit> | undefined): boolean;
}
/**
 * MsgConnectionOpenInitResponse defines the Msg/ConnectionOpenInit response
 * type.
 *
 * @generated from message ibc.core.connection.v1.MsgConnectionOpenInitResponse
 */
export declare class MsgConnectionOpenInitResponse extends Message<MsgConnectionOpenInitResponse> {
    constructor(data?: PartialMessage<MsgConnectionOpenInitResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.connection.v1.MsgConnectionOpenInitResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgConnectionOpenInitResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgConnectionOpenInitResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgConnectionOpenInitResponse;
    static equals(a: MsgConnectionOpenInitResponse | PlainMessage<MsgConnectionOpenInitResponse> | undefined, b: MsgConnectionOpenInitResponse | PlainMessage<MsgConnectionOpenInitResponse> | undefined): boolean;
}
/**
 * MsgConnectionOpenTry defines a msg sent by a Relayer to try to open a
 * connection on Chain B.
 *
 * @generated from message ibc.core.connection.v1.MsgConnectionOpenTry
 */
export declare class MsgConnectionOpenTry extends Message<MsgConnectionOpenTry> {
    /**
     * @generated from field: string client_id = 1;
     */
    clientId: string;
    /**
     * Deprecated: this field is unused. Crossing hellos are no longer supported in core IBC.
     *
     * @generated from field: string previous_connection_id = 2 [deprecated = true];
     * @deprecated
     */
    previousConnectionId: string;
    /**
     * @generated from field: google.protobuf.Any client_state = 3;
     */
    clientState?: Any;
    /**
     * @generated from field: ibc.core.connection.v1.Counterparty counterparty = 4;
     */
    counterparty?: Counterparty;
    /**
     * @generated from field: uint64 delay_period = 5;
     */
    delayPeriod: bigint;
    /**
     * @generated from field: repeated ibc.core.connection.v1.Version counterparty_versions = 6;
     */
    counterpartyVersions: Version[];
    /**
     * @generated from field: ibc.core.client.v1.Height proof_height = 7;
     */
    proofHeight?: Height;
    /**
     * proof of the initialization the connection on Chain A: `UNITIALIZED ->
     * INIT`
     *
     * @generated from field: bytes proof_init = 8;
     */
    proofInit: Uint8Array;
    /**
     * proof of client state included in message
     *
     * @generated from field: bytes proof_client = 9;
     */
    proofClient: Uint8Array;
    /**
     * proof of client consensus state
     *
     * @generated from field: bytes proof_consensus = 10;
     */
    proofConsensus: Uint8Array;
    /**
     * @generated from field: ibc.core.client.v1.Height consensus_height = 11;
     */
    consensusHeight?: Height;
    /**
     * @generated from field: string signer = 12;
     */
    signer: string;
    /**
     * optional proof data for host state machines that are unable to introspect their own consensus state
     *
     * @generated from field: bytes host_consensus_state_proof = 13;
     */
    hostConsensusStateProof: Uint8Array;
    constructor(data?: PartialMessage<MsgConnectionOpenTry>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.connection.v1.MsgConnectionOpenTry";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgConnectionOpenTry;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgConnectionOpenTry;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgConnectionOpenTry;
    static equals(a: MsgConnectionOpenTry | PlainMessage<MsgConnectionOpenTry> | undefined, b: MsgConnectionOpenTry | PlainMessage<MsgConnectionOpenTry> | undefined): boolean;
}
/**
 * MsgConnectionOpenTryResponse defines the Msg/ConnectionOpenTry response type.
 *
 * @generated from message ibc.core.connection.v1.MsgConnectionOpenTryResponse
 */
export declare class MsgConnectionOpenTryResponse extends Message<MsgConnectionOpenTryResponse> {
    constructor(data?: PartialMessage<MsgConnectionOpenTryResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.connection.v1.MsgConnectionOpenTryResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgConnectionOpenTryResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgConnectionOpenTryResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgConnectionOpenTryResponse;
    static equals(a: MsgConnectionOpenTryResponse | PlainMessage<MsgConnectionOpenTryResponse> | undefined, b: MsgConnectionOpenTryResponse | PlainMessage<MsgConnectionOpenTryResponse> | undefined): boolean;
}
/**
 * MsgConnectionOpenAck defines a msg sent by a Relayer to Chain A to
 * acknowledge the change of connection state to TRYOPEN on Chain B.
 *
 * @generated from message ibc.core.connection.v1.MsgConnectionOpenAck
 */
export declare class MsgConnectionOpenAck extends Message<MsgConnectionOpenAck> {
    /**
     * @generated from field: string connection_id = 1;
     */
    connectionId: string;
    /**
     * @generated from field: string counterparty_connection_id = 2;
     */
    counterpartyConnectionId: string;
    /**
     * @generated from field: ibc.core.connection.v1.Version version = 3;
     */
    version?: Version;
    /**
     * @generated from field: google.protobuf.Any client_state = 4;
     */
    clientState?: Any;
    /**
     * @generated from field: ibc.core.client.v1.Height proof_height = 5;
     */
    proofHeight?: Height;
    /**
     * proof of the initialization the connection on Chain B: `UNITIALIZED ->
     * TRYOPEN`
     *
     * @generated from field: bytes proof_try = 6;
     */
    proofTry: Uint8Array;
    /**
     * proof of client state included in message
     *
     * @generated from field: bytes proof_client = 7;
     */
    proofClient: Uint8Array;
    /**
     * proof of client consensus state
     *
     * @generated from field: bytes proof_consensus = 8;
     */
    proofConsensus: Uint8Array;
    /**
     * @generated from field: ibc.core.client.v1.Height consensus_height = 9;
     */
    consensusHeight?: Height;
    /**
     * @generated from field: string signer = 10;
     */
    signer: string;
    /**
     * optional proof data for host state machines that are unable to introspect their own consensus state
     *
     * @generated from field: bytes host_consensus_state_proof = 11;
     */
    hostConsensusStateProof: Uint8Array;
    constructor(data?: PartialMessage<MsgConnectionOpenAck>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.connection.v1.MsgConnectionOpenAck";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgConnectionOpenAck;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgConnectionOpenAck;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgConnectionOpenAck;
    static equals(a: MsgConnectionOpenAck | PlainMessage<MsgConnectionOpenAck> | undefined, b: MsgConnectionOpenAck | PlainMessage<MsgConnectionOpenAck> | undefined): boolean;
}
/**
 * MsgConnectionOpenAckResponse defines the Msg/ConnectionOpenAck response type.
 *
 * @generated from message ibc.core.connection.v1.MsgConnectionOpenAckResponse
 */
export declare class MsgConnectionOpenAckResponse extends Message<MsgConnectionOpenAckResponse> {
    constructor(data?: PartialMessage<MsgConnectionOpenAckResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.connection.v1.MsgConnectionOpenAckResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgConnectionOpenAckResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgConnectionOpenAckResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgConnectionOpenAckResponse;
    static equals(a: MsgConnectionOpenAckResponse | PlainMessage<MsgConnectionOpenAckResponse> | undefined, b: MsgConnectionOpenAckResponse | PlainMessage<MsgConnectionOpenAckResponse> | undefined): boolean;
}
/**
 * MsgConnectionOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of connection state to OPEN on Chain A.
 *
 * @generated from message ibc.core.connection.v1.MsgConnectionOpenConfirm
 */
export declare class MsgConnectionOpenConfirm extends Message<MsgConnectionOpenConfirm> {
    /**
     * @generated from field: string connection_id = 1;
     */
    connectionId: string;
    /**
     * proof for the change of the connection state on Chain A: `INIT -> OPEN`
     *
     * @generated from field: bytes proof_ack = 2;
     */
    proofAck: Uint8Array;
    /**
     * @generated from field: ibc.core.client.v1.Height proof_height = 3;
     */
    proofHeight?: Height;
    /**
     * @generated from field: string signer = 4;
     */
    signer: string;
    constructor(data?: PartialMessage<MsgConnectionOpenConfirm>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.connection.v1.MsgConnectionOpenConfirm";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgConnectionOpenConfirm;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgConnectionOpenConfirm;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgConnectionOpenConfirm;
    static equals(a: MsgConnectionOpenConfirm | PlainMessage<MsgConnectionOpenConfirm> | undefined, b: MsgConnectionOpenConfirm | PlainMessage<MsgConnectionOpenConfirm> | undefined): boolean;
}
/**
 * MsgConnectionOpenConfirmResponse defines the Msg/ConnectionOpenConfirm
 * response type.
 *
 * @generated from message ibc.core.connection.v1.MsgConnectionOpenConfirmResponse
 */
export declare class MsgConnectionOpenConfirmResponse extends Message<MsgConnectionOpenConfirmResponse> {
    constructor(data?: PartialMessage<MsgConnectionOpenConfirmResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.connection.v1.MsgConnectionOpenConfirmResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgConnectionOpenConfirmResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgConnectionOpenConfirmResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgConnectionOpenConfirmResponse;
    static equals(a: MsgConnectionOpenConfirmResponse | PlainMessage<MsgConnectionOpenConfirmResponse> | undefined, b: MsgConnectionOpenConfirmResponse | PlainMessage<MsgConnectionOpenConfirmResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map