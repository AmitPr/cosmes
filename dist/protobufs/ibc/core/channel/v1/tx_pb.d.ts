import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Channel, Packet } from "./channel_pb.js";
import { Height } from "../../client/v1/client_pb.js";
/**
 * ResponseResultType defines the possible outcomes of the execution of a message
 *
 * @generated from enum ibc.core.channel.v1.ResponseResultType
 */
export declare enum ResponseResultType {
    /**
     * Default zero value enumeration
     *
     * @generated from enum value: RESPONSE_RESULT_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * The message did not call the IBC application callbacks (because, for example, the packet had already been relayed)
     *
     * @generated from enum value: RESPONSE_RESULT_TYPE_NOOP = 1;
     */
    NOOP = 1,
    /**
     * The message was executed successfully
     *
     * @generated from enum value: RESPONSE_RESULT_TYPE_SUCCESS = 2;
     */
    SUCCESS = 2
}
/**
 * MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It
 * is called by a relayer on Chain A.
 *
 * @generated from message ibc.core.channel.v1.MsgChannelOpenInit
 */
export declare class MsgChannelOpenInit extends Message<MsgChannelOpenInit> {
    /**
     * @generated from field: string port_id = 1;
     */
    portId: string;
    /**
     * @generated from field: ibc.core.channel.v1.Channel channel = 2;
     */
    channel?: Channel;
    /**
     * @generated from field: string signer = 3;
     */
    signer: string;
    constructor(data?: PartialMessage<MsgChannelOpenInit>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgChannelOpenInit";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChannelOpenInit;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChannelOpenInit;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChannelOpenInit;
    static equals(a: MsgChannelOpenInit | PlainMessage<MsgChannelOpenInit> | undefined, b: MsgChannelOpenInit | PlainMessage<MsgChannelOpenInit> | undefined): boolean;
}
/**
 * MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type.
 *
 * @generated from message ibc.core.channel.v1.MsgChannelOpenInitResponse
 */
export declare class MsgChannelOpenInitResponse extends Message<MsgChannelOpenInitResponse> {
    /**
     * @generated from field: string channel_id = 1;
     */
    channelId: string;
    /**
     * @generated from field: string version = 2;
     */
    version: string;
    constructor(data?: PartialMessage<MsgChannelOpenInitResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgChannelOpenInitResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChannelOpenInitResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChannelOpenInitResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChannelOpenInitResponse;
    static equals(a: MsgChannelOpenInitResponse | PlainMessage<MsgChannelOpenInitResponse> | undefined, b: MsgChannelOpenInitResponse | PlainMessage<MsgChannelOpenInitResponse> | undefined): boolean;
}
/**
 * MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
 * on Chain B. The version field within the Channel field has been deprecated. Its
 * value will be ignored by core IBC.
 *
 * @generated from message ibc.core.channel.v1.MsgChannelOpenTry
 */
export declare class MsgChannelOpenTry extends Message<MsgChannelOpenTry> {
    /**
     * @generated from field: string port_id = 1;
     */
    portId: string;
    /**
     * Deprecated: this field is unused. Crossing hello's are no longer supported in core IBC.
     *
     * @generated from field: string previous_channel_id = 2 [deprecated = true];
     * @deprecated
     */
    previousChannelId: string;
    /**
     * NOTE: the version field within the channel has been deprecated. Its value will be ignored by core IBC.
     *
     * @generated from field: ibc.core.channel.v1.Channel channel = 3;
     */
    channel?: Channel;
    /**
     * @generated from field: string counterparty_version = 4;
     */
    counterpartyVersion: string;
    /**
     * @generated from field: bytes proof_init = 5;
     */
    proofInit: Uint8Array;
    /**
     * @generated from field: ibc.core.client.v1.Height proof_height = 6;
     */
    proofHeight?: Height;
    /**
     * @generated from field: string signer = 7;
     */
    signer: string;
    constructor(data?: PartialMessage<MsgChannelOpenTry>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgChannelOpenTry";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChannelOpenTry;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChannelOpenTry;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChannelOpenTry;
    static equals(a: MsgChannelOpenTry | PlainMessage<MsgChannelOpenTry> | undefined, b: MsgChannelOpenTry | PlainMessage<MsgChannelOpenTry> | undefined): boolean;
}
/**
 * MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type.
 *
 * @generated from message ibc.core.channel.v1.MsgChannelOpenTryResponse
 */
export declare class MsgChannelOpenTryResponse extends Message<MsgChannelOpenTryResponse> {
    /**
     * @generated from field: string version = 1;
     */
    version: string;
    /**
     * @generated from field: string channel_id = 2;
     */
    channelId: string;
    constructor(data?: PartialMessage<MsgChannelOpenTryResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgChannelOpenTryResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChannelOpenTryResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChannelOpenTryResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChannelOpenTryResponse;
    static equals(a: MsgChannelOpenTryResponse | PlainMessage<MsgChannelOpenTryResponse> | undefined, b: MsgChannelOpenTryResponse | PlainMessage<MsgChannelOpenTryResponse> | undefined): boolean;
}
/**
 * MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
 * the change of channel state to TRYOPEN on Chain B.
 *
 * @generated from message ibc.core.channel.v1.MsgChannelOpenAck
 */
export declare class MsgChannelOpenAck extends Message<MsgChannelOpenAck> {
    /**
     * @generated from field: string port_id = 1;
     */
    portId: string;
    /**
     * @generated from field: string channel_id = 2;
     */
    channelId: string;
    /**
     * @generated from field: string counterparty_channel_id = 3;
     */
    counterpartyChannelId: string;
    /**
     * @generated from field: string counterparty_version = 4;
     */
    counterpartyVersion: string;
    /**
     * @generated from field: bytes proof_try = 5;
     */
    proofTry: Uint8Array;
    /**
     * @generated from field: ibc.core.client.v1.Height proof_height = 6;
     */
    proofHeight?: Height;
    /**
     * @generated from field: string signer = 7;
     */
    signer: string;
    constructor(data?: PartialMessage<MsgChannelOpenAck>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgChannelOpenAck";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChannelOpenAck;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChannelOpenAck;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChannelOpenAck;
    static equals(a: MsgChannelOpenAck | PlainMessage<MsgChannelOpenAck> | undefined, b: MsgChannelOpenAck | PlainMessage<MsgChannelOpenAck> | undefined): boolean;
}
/**
 * MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type.
 *
 * @generated from message ibc.core.channel.v1.MsgChannelOpenAckResponse
 */
export declare class MsgChannelOpenAckResponse extends Message<MsgChannelOpenAckResponse> {
    constructor(data?: PartialMessage<MsgChannelOpenAckResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgChannelOpenAckResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChannelOpenAckResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChannelOpenAckResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChannelOpenAckResponse;
    static equals(a: MsgChannelOpenAckResponse | PlainMessage<MsgChannelOpenAckResponse> | undefined, b: MsgChannelOpenAckResponse | PlainMessage<MsgChannelOpenAckResponse> | undefined): boolean;
}
/**
 * MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of channel state to OPEN on Chain A.
 *
 * @generated from message ibc.core.channel.v1.MsgChannelOpenConfirm
 */
export declare class MsgChannelOpenConfirm extends Message<MsgChannelOpenConfirm> {
    /**
     * @generated from field: string port_id = 1;
     */
    portId: string;
    /**
     * @generated from field: string channel_id = 2;
     */
    channelId: string;
    /**
     * @generated from field: bytes proof_ack = 3;
     */
    proofAck: Uint8Array;
    /**
     * @generated from field: ibc.core.client.v1.Height proof_height = 4;
     */
    proofHeight?: Height;
    /**
     * @generated from field: string signer = 5;
     */
    signer: string;
    constructor(data?: PartialMessage<MsgChannelOpenConfirm>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgChannelOpenConfirm";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChannelOpenConfirm;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChannelOpenConfirm;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChannelOpenConfirm;
    static equals(a: MsgChannelOpenConfirm | PlainMessage<MsgChannelOpenConfirm> | undefined, b: MsgChannelOpenConfirm | PlainMessage<MsgChannelOpenConfirm> | undefined): boolean;
}
/**
 * MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response
 * type.
 *
 * @generated from message ibc.core.channel.v1.MsgChannelOpenConfirmResponse
 */
export declare class MsgChannelOpenConfirmResponse extends Message<MsgChannelOpenConfirmResponse> {
    constructor(data?: PartialMessage<MsgChannelOpenConfirmResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgChannelOpenConfirmResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChannelOpenConfirmResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChannelOpenConfirmResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChannelOpenConfirmResponse;
    static equals(a: MsgChannelOpenConfirmResponse | PlainMessage<MsgChannelOpenConfirmResponse> | undefined, b: MsgChannelOpenConfirmResponse | PlainMessage<MsgChannelOpenConfirmResponse> | undefined): boolean;
}
/**
 * MsgChannelCloseInit defines a msg sent by a Relayer to Chain A
 * to close a channel with Chain B.
 *
 * @generated from message ibc.core.channel.v1.MsgChannelCloseInit
 */
export declare class MsgChannelCloseInit extends Message<MsgChannelCloseInit> {
    /**
     * @generated from field: string port_id = 1;
     */
    portId: string;
    /**
     * @generated from field: string channel_id = 2;
     */
    channelId: string;
    /**
     * @generated from field: string signer = 3;
     */
    signer: string;
    constructor(data?: PartialMessage<MsgChannelCloseInit>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgChannelCloseInit";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChannelCloseInit;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChannelCloseInit;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChannelCloseInit;
    static equals(a: MsgChannelCloseInit | PlainMessage<MsgChannelCloseInit> | undefined, b: MsgChannelCloseInit | PlainMessage<MsgChannelCloseInit> | undefined): boolean;
}
/**
 * MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type.
 *
 * @generated from message ibc.core.channel.v1.MsgChannelCloseInitResponse
 */
export declare class MsgChannelCloseInitResponse extends Message<MsgChannelCloseInitResponse> {
    constructor(data?: PartialMessage<MsgChannelCloseInitResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgChannelCloseInitResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChannelCloseInitResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChannelCloseInitResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChannelCloseInitResponse;
    static equals(a: MsgChannelCloseInitResponse | PlainMessage<MsgChannelCloseInitResponse> | undefined, b: MsgChannelCloseInitResponse | PlainMessage<MsgChannelCloseInitResponse> | undefined): boolean;
}
/**
 * MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B
 * to acknowledge the change of channel state to CLOSED on Chain A.
 *
 * @generated from message ibc.core.channel.v1.MsgChannelCloseConfirm
 */
export declare class MsgChannelCloseConfirm extends Message<MsgChannelCloseConfirm> {
    /**
     * @generated from field: string port_id = 1;
     */
    portId: string;
    /**
     * @generated from field: string channel_id = 2;
     */
    channelId: string;
    /**
     * @generated from field: bytes proof_init = 3;
     */
    proofInit: Uint8Array;
    /**
     * @generated from field: ibc.core.client.v1.Height proof_height = 4;
     */
    proofHeight?: Height;
    /**
     * @generated from field: string signer = 5;
     */
    signer: string;
    constructor(data?: PartialMessage<MsgChannelCloseConfirm>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgChannelCloseConfirm";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChannelCloseConfirm;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChannelCloseConfirm;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChannelCloseConfirm;
    static equals(a: MsgChannelCloseConfirm | PlainMessage<MsgChannelCloseConfirm> | undefined, b: MsgChannelCloseConfirm | PlainMessage<MsgChannelCloseConfirm> | undefined): boolean;
}
/**
 * MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response
 * type.
 *
 * @generated from message ibc.core.channel.v1.MsgChannelCloseConfirmResponse
 */
export declare class MsgChannelCloseConfirmResponse extends Message<MsgChannelCloseConfirmResponse> {
    constructor(data?: PartialMessage<MsgChannelCloseConfirmResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgChannelCloseConfirmResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChannelCloseConfirmResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChannelCloseConfirmResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChannelCloseConfirmResponse;
    static equals(a: MsgChannelCloseConfirmResponse | PlainMessage<MsgChannelCloseConfirmResponse> | undefined, b: MsgChannelCloseConfirmResponse | PlainMessage<MsgChannelCloseConfirmResponse> | undefined): boolean;
}
/**
 * MsgRecvPacket receives incoming IBC packet
 *
 * @generated from message ibc.core.channel.v1.MsgRecvPacket
 */
export declare class MsgRecvPacket extends Message<MsgRecvPacket> {
    /**
     * @generated from field: ibc.core.channel.v1.Packet packet = 1;
     */
    packet?: Packet;
    /**
     * @generated from field: bytes proof_commitment = 2;
     */
    proofCommitment: Uint8Array;
    /**
     * @generated from field: ibc.core.client.v1.Height proof_height = 3;
     */
    proofHeight?: Height;
    /**
     * @generated from field: string signer = 4;
     */
    signer: string;
    constructor(data?: PartialMessage<MsgRecvPacket>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgRecvPacket";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRecvPacket;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRecvPacket;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRecvPacket;
    static equals(a: MsgRecvPacket | PlainMessage<MsgRecvPacket> | undefined, b: MsgRecvPacket | PlainMessage<MsgRecvPacket> | undefined): boolean;
}
/**
 * MsgRecvPacketResponse defines the Msg/RecvPacket response type.
 *
 * @generated from message ibc.core.channel.v1.MsgRecvPacketResponse
 */
export declare class MsgRecvPacketResponse extends Message<MsgRecvPacketResponse> {
    /**
     * @generated from field: ibc.core.channel.v1.ResponseResultType result = 1;
     */
    result: ResponseResultType;
    constructor(data?: PartialMessage<MsgRecvPacketResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgRecvPacketResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRecvPacketResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRecvPacketResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRecvPacketResponse;
    static equals(a: MsgRecvPacketResponse | PlainMessage<MsgRecvPacketResponse> | undefined, b: MsgRecvPacketResponse | PlainMessage<MsgRecvPacketResponse> | undefined): boolean;
}
/**
 * MsgTimeout receives timed-out packet
 *
 * @generated from message ibc.core.channel.v1.MsgTimeout
 */
export declare class MsgTimeout extends Message<MsgTimeout> {
    /**
     * @generated from field: ibc.core.channel.v1.Packet packet = 1;
     */
    packet?: Packet;
    /**
     * @generated from field: bytes proof_unreceived = 2;
     */
    proofUnreceived: Uint8Array;
    /**
     * @generated from field: ibc.core.client.v1.Height proof_height = 3;
     */
    proofHeight?: Height;
    /**
     * @generated from field: uint64 next_sequence_recv = 4;
     */
    nextSequenceRecv: bigint;
    /**
     * @generated from field: string signer = 5;
     */
    signer: string;
    constructor(data?: PartialMessage<MsgTimeout>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgTimeout";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgTimeout;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgTimeout;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgTimeout;
    static equals(a: MsgTimeout | PlainMessage<MsgTimeout> | undefined, b: MsgTimeout | PlainMessage<MsgTimeout> | undefined): boolean;
}
/**
 * MsgTimeoutResponse defines the Msg/Timeout response type.
 *
 * @generated from message ibc.core.channel.v1.MsgTimeoutResponse
 */
export declare class MsgTimeoutResponse extends Message<MsgTimeoutResponse> {
    /**
     * @generated from field: ibc.core.channel.v1.ResponseResultType result = 1;
     */
    result: ResponseResultType;
    constructor(data?: PartialMessage<MsgTimeoutResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgTimeoutResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgTimeoutResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgTimeoutResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgTimeoutResponse;
    static equals(a: MsgTimeoutResponse | PlainMessage<MsgTimeoutResponse> | undefined, b: MsgTimeoutResponse | PlainMessage<MsgTimeoutResponse> | undefined): boolean;
}
/**
 * MsgTimeoutOnClose timed-out packet upon counterparty channel closure.
 *
 * @generated from message ibc.core.channel.v1.MsgTimeoutOnClose
 */
export declare class MsgTimeoutOnClose extends Message<MsgTimeoutOnClose> {
    /**
     * @generated from field: ibc.core.channel.v1.Packet packet = 1;
     */
    packet?: Packet;
    /**
     * @generated from field: bytes proof_unreceived = 2;
     */
    proofUnreceived: Uint8Array;
    /**
     * @generated from field: bytes proof_close = 3;
     */
    proofClose: Uint8Array;
    /**
     * @generated from field: ibc.core.client.v1.Height proof_height = 4;
     */
    proofHeight?: Height;
    /**
     * @generated from field: uint64 next_sequence_recv = 5;
     */
    nextSequenceRecv: bigint;
    /**
     * @generated from field: string signer = 6;
     */
    signer: string;
    constructor(data?: PartialMessage<MsgTimeoutOnClose>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgTimeoutOnClose";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgTimeoutOnClose;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgTimeoutOnClose;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgTimeoutOnClose;
    static equals(a: MsgTimeoutOnClose | PlainMessage<MsgTimeoutOnClose> | undefined, b: MsgTimeoutOnClose | PlainMessage<MsgTimeoutOnClose> | undefined): boolean;
}
/**
 * MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type.
 *
 * @generated from message ibc.core.channel.v1.MsgTimeoutOnCloseResponse
 */
export declare class MsgTimeoutOnCloseResponse extends Message<MsgTimeoutOnCloseResponse> {
    /**
     * @generated from field: ibc.core.channel.v1.ResponseResultType result = 1;
     */
    result: ResponseResultType;
    constructor(data?: PartialMessage<MsgTimeoutOnCloseResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgTimeoutOnCloseResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgTimeoutOnCloseResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgTimeoutOnCloseResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgTimeoutOnCloseResponse;
    static equals(a: MsgTimeoutOnCloseResponse | PlainMessage<MsgTimeoutOnCloseResponse> | undefined, b: MsgTimeoutOnCloseResponse | PlainMessage<MsgTimeoutOnCloseResponse> | undefined): boolean;
}
/**
 * MsgAcknowledgement receives incoming IBC acknowledgement
 *
 * @generated from message ibc.core.channel.v1.MsgAcknowledgement
 */
export declare class MsgAcknowledgement extends Message<MsgAcknowledgement> {
    /**
     * @generated from field: ibc.core.channel.v1.Packet packet = 1;
     */
    packet?: Packet;
    /**
     * @generated from field: bytes acknowledgement = 2;
     */
    acknowledgement: Uint8Array;
    /**
     * @generated from field: bytes proof_acked = 3;
     */
    proofAcked: Uint8Array;
    /**
     * @generated from field: ibc.core.client.v1.Height proof_height = 4;
     */
    proofHeight?: Height;
    /**
     * @generated from field: string signer = 5;
     */
    signer: string;
    constructor(data?: PartialMessage<MsgAcknowledgement>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgAcknowledgement";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAcknowledgement;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAcknowledgement;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAcknowledgement;
    static equals(a: MsgAcknowledgement | PlainMessage<MsgAcknowledgement> | undefined, b: MsgAcknowledgement | PlainMessage<MsgAcknowledgement> | undefined): boolean;
}
/**
 * MsgAcknowledgementResponse defines the Msg/Acknowledgement response type.
 *
 * @generated from message ibc.core.channel.v1.MsgAcknowledgementResponse
 */
export declare class MsgAcknowledgementResponse extends Message<MsgAcknowledgementResponse> {
    /**
     * @generated from field: ibc.core.channel.v1.ResponseResultType result = 1;
     */
    result: ResponseResultType;
    constructor(data?: PartialMessage<MsgAcknowledgementResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.MsgAcknowledgementResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAcknowledgementResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAcknowledgementResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAcknowledgementResponse;
    static equals(a: MsgAcknowledgementResponse | PlainMessage<MsgAcknowledgementResponse> | undefined, b: MsgAcknowledgementResponse | PlainMessage<MsgAcknowledgementResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map