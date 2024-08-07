import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Height } from "../../client/v1/client_pb.js";
/**
 * State defines if a channel is in one of the following states:
 * CLOSED, INIT, TRYOPEN, OPEN or UNINITIALIZED.
 *
 * @generated from enum ibc.core.channel.v1.State
 */
export declare enum State {
    /**
     * Default State
     *
     * @generated from enum value: STATE_UNINITIALIZED_UNSPECIFIED = 0;
     */
    UNINITIALIZED_UNSPECIFIED = 0,
    /**
     * A channel has just started the opening handshake.
     *
     * @generated from enum value: STATE_INIT = 1;
     */
    INIT = 1,
    /**
     * A channel has acknowledged the handshake step on the counterparty chain.
     *
     * @generated from enum value: STATE_TRYOPEN = 2;
     */
    TRYOPEN = 2,
    /**
     * A channel has completed the handshake. Open channels are
     * ready to send and receive packets.
     *
     * @generated from enum value: STATE_OPEN = 3;
     */
    OPEN = 3,
    /**
     * A channel has been closed and can no longer be used to send or receive
     * packets.
     *
     * @generated from enum value: STATE_CLOSED = 4;
     */
    CLOSED = 4
}
/**
 * Order defines if a channel is ORDERED or UNORDERED
 *
 * @generated from enum ibc.core.channel.v1.Order
 */
export declare enum Order {
    /**
     * zero-value for channel ordering
     *
     * @generated from enum value: ORDER_NONE_UNSPECIFIED = 0;
     */
    NONE_UNSPECIFIED = 0,
    /**
     * packets can be delivered in any order, which may differ from the order in
     * which they were sent.
     *
     * @generated from enum value: ORDER_UNORDERED = 1;
     */
    UNORDERED = 1,
    /**
     * packets are delivered exactly in the order which they were sent
     *
     * @generated from enum value: ORDER_ORDERED = 2;
     */
    ORDERED = 2
}
/**
 * Channel defines pipeline for exactly-once packet delivery between specific
 * modules on separate blockchains, which has at least one end capable of
 * sending packets and one end capable of receiving packets.
 *
 * @generated from message ibc.core.channel.v1.Channel
 */
export declare class Channel extends Message<Channel> {
    /**
     * current state of the channel end
     *
     * @generated from field: ibc.core.channel.v1.State state = 1;
     */
    state: State;
    /**
     * whether the channel is ordered or unordered
     *
     * @generated from field: ibc.core.channel.v1.Order ordering = 2;
     */
    ordering: Order;
    /**
     * counterparty channel end
     *
     * @generated from field: ibc.core.channel.v1.Counterparty counterparty = 3;
     */
    counterparty?: Counterparty;
    /**
     * list of connection identifiers, in order, along which packets sent on
     * this channel will travel
     *
     * @generated from field: repeated string connection_hops = 4;
     */
    connectionHops: string[];
    /**
     * opaque channel version, which is agreed upon during the handshake
     *
     * @generated from field: string version = 5;
     */
    version: string;
    constructor(data?: PartialMessage<Channel>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.Channel";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Channel;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Channel;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Channel;
    static equals(a: Channel | PlainMessage<Channel> | undefined, b: Channel | PlainMessage<Channel> | undefined): boolean;
}
/**
 * IdentifiedChannel defines a channel with additional port and channel
 * identifier fields.
 *
 * @generated from message ibc.core.channel.v1.IdentifiedChannel
 */
export declare class IdentifiedChannel extends Message<IdentifiedChannel> {
    /**
     * current state of the channel end
     *
     * @generated from field: ibc.core.channel.v1.State state = 1;
     */
    state: State;
    /**
     * whether the channel is ordered or unordered
     *
     * @generated from field: ibc.core.channel.v1.Order ordering = 2;
     */
    ordering: Order;
    /**
     * counterparty channel end
     *
     * @generated from field: ibc.core.channel.v1.Counterparty counterparty = 3;
     */
    counterparty?: Counterparty;
    /**
     * list of connection identifiers, in order, along which packets sent on
     * this channel will travel
     *
     * @generated from field: repeated string connection_hops = 4;
     */
    connectionHops: string[];
    /**
     * opaque channel version, which is agreed upon during the handshake
     *
     * @generated from field: string version = 5;
     */
    version: string;
    /**
     * port identifier
     *
     * @generated from field: string port_id = 6;
     */
    portId: string;
    /**
     * channel identifier
     *
     * @generated from field: string channel_id = 7;
     */
    channelId: string;
    constructor(data?: PartialMessage<IdentifiedChannel>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.IdentifiedChannel";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IdentifiedChannel;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IdentifiedChannel;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IdentifiedChannel;
    static equals(a: IdentifiedChannel | PlainMessage<IdentifiedChannel> | undefined, b: IdentifiedChannel | PlainMessage<IdentifiedChannel> | undefined): boolean;
}
/**
 * Counterparty defines a channel end counterparty
 *
 * @generated from message ibc.core.channel.v1.Counterparty
 */
export declare class Counterparty extends Message<Counterparty> {
    /**
     * port on the counterparty chain which owns the other end of the channel.
     *
     * @generated from field: string port_id = 1;
     */
    portId: string;
    /**
     * channel end on the counterparty chain
     *
     * @generated from field: string channel_id = 2;
     */
    channelId: string;
    constructor(data?: PartialMessage<Counterparty>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.Counterparty";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Counterparty;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Counterparty;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Counterparty;
    static equals(a: Counterparty | PlainMessage<Counterparty> | undefined, b: Counterparty | PlainMessage<Counterparty> | undefined): boolean;
}
/**
 * Packet defines a type that carries data across different chains through IBC
 *
 * @generated from message ibc.core.channel.v1.Packet
 */
export declare class Packet extends Message<Packet> {
    /**
     * number corresponds to the order of sends and receives, where a Packet
     * with an earlier sequence number must be sent and received before a Packet
     * with a later sequence number.
     *
     * @generated from field: uint64 sequence = 1;
     */
    sequence: bigint;
    /**
     * identifies the port on the sending chain.
     *
     * @generated from field: string source_port = 2;
     */
    sourcePort: string;
    /**
     * identifies the channel end on the sending chain.
     *
     * @generated from field: string source_channel = 3;
     */
    sourceChannel: string;
    /**
     * identifies the port on the receiving chain.
     *
     * @generated from field: string destination_port = 4;
     */
    destinationPort: string;
    /**
     * identifies the channel end on the receiving chain.
     *
     * @generated from field: string destination_channel = 5;
     */
    destinationChannel: string;
    /**
     * actual opaque bytes transferred directly to the application module
     *
     * @generated from field: bytes data = 6;
     */
    data: Uint8Array;
    /**
     * block height after which the packet times out
     *
     * @generated from field: ibc.core.client.v1.Height timeout_height = 7;
     */
    timeoutHeight?: Height;
    /**
     * block timestamp (in nanoseconds) after which the packet times out
     *
     * @generated from field: uint64 timeout_timestamp = 8;
     */
    timeoutTimestamp: bigint;
    constructor(data?: PartialMessage<Packet>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.Packet";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Packet;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Packet;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Packet;
    static equals(a: Packet | PlainMessage<Packet> | undefined, b: Packet | PlainMessage<Packet> | undefined): boolean;
}
/**
 * PacketState defines the generic type necessary to retrieve and store
 * packet commitments, acknowledgements, and receipts.
 * Caller is responsible for knowing the context necessary to interpret this
 * state as a commitment, acknowledgement, or a receipt.
 *
 * @generated from message ibc.core.channel.v1.PacketState
 */
export declare class PacketState extends Message<PacketState> {
    /**
     * channel port identifier.
     *
     * @generated from field: string port_id = 1;
     */
    portId: string;
    /**
     * channel unique identifier.
     *
     * @generated from field: string channel_id = 2;
     */
    channelId: string;
    /**
     * packet sequence.
     *
     * @generated from field: uint64 sequence = 3;
     */
    sequence: bigint;
    /**
     * embedded data that represents packet state.
     *
     * @generated from field: bytes data = 4;
     */
    data: Uint8Array;
    constructor(data?: PartialMessage<PacketState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.PacketState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PacketState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PacketState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PacketState;
    static equals(a: PacketState | PlainMessage<PacketState> | undefined, b: PacketState | PlainMessage<PacketState> | undefined): boolean;
}
/**
 * PacketId is an identifer for a unique Packet
 * Source chains refer to packets by source port/channel
 * Destination chains refer to packets by destination port/channel
 *
 * @generated from message ibc.core.channel.v1.PacketId
 */
export declare class PacketId extends Message<PacketId> {
    /**
     * channel port identifier
     *
     * @generated from field: string port_id = 1;
     */
    portId: string;
    /**
     * channel unique identifier
     *
     * @generated from field: string channel_id = 2;
     */
    channelId: string;
    /**
     * packet sequence
     *
     * @generated from field: uint64 sequence = 3;
     */
    sequence: bigint;
    constructor(data?: PartialMessage<PacketId>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.PacketId";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PacketId;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PacketId;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PacketId;
    static equals(a: PacketId | PlainMessage<PacketId> | undefined, b: PacketId | PlainMessage<PacketId> | undefined): boolean;
}
/**
 * Acknowledgement is the recommended acknowledgement format to be used by
 * app-specific protocols.
 * NOTE: The field numbers 21 and 22 were explicitly chosen to avoid accidental
 * conflicts with other protobuf message formats used for acknowledgements.
 * The first byte of any message with this format will be the non-ASCII values
 * `0xaa` (result) or `0xb2` (error). Implemented as defined by ICS:
 * https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#acknowledgement-envelope
 *
 * @generated from message ibc.core.channel.v1.Acknowledgement
 */
export declare class Acknowledgement extends Message<Acknowledgement> {
    /**
     * response contains either a result or an error and must be non-empty
     *
     * @generated from oneof ibc.core.channel.v1.Acknowledgement.response
     */
    response: {
        /**
         * @generated from field: bytes result = 21;
         */
        value: Uint8Array;
        case: "result";
    } | {
        /**
         * @generated from field: string error = 22;
         */
        value: string;
        case: "error";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<Acknowledgement>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.Acknowledgement";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Acknowledgement;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Acknowledgement;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Acknowledgement;
    static equals(a: Acknowledgement | PlainMessage<Acknowledgement> | undefined, b: Acknowledgement | PlainMessage<Acknowledgement> | undefined): boolean;
}
//# sourceMappingURL=channel_pb.d.ts.map