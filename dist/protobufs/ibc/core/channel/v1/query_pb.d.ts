import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { Channel, IdentifiedChannel, PacketState } from "./channel_pb.js";
import { Height, IdentifiedClientState } from "../../client/v1/client_pb.js";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination_pb.js";
/**
 * QueryChannelRequest is the request type for the Query/Channel RPC method
 *
 * @generated from message ibc.core.channel.v1.QueryChannelRequest
 */
export declare class QueryChannelRequest extends Message<QueryChannelRequest> {
    /**
     * port unique identifier
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
    constructor(data?: PartialMessage<QueryChannelRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.QueryChannelRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryChannelRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryChannelRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryChannelRequest;
    static equals(a: QueryChannelRequest | PlainMessage<QueryChannelRequest> | undefined, b: QueryChannelRequest | PlainMessage<QueryChannelRequest> | undefined): boolean;
}
/**
 * QueryChannelResponse is the response type for the Query/Channel RPC method.
 * Besides the Channel end, it includes a proof and the height from which the
 * proof was retrieved.
 *
 * @generated from message ibc.core.channel.v1.QueryChannelResponse
 */
export declare class QueryChannelResponse extends Message<QueryChannelResponse> {
    /**
     * channel associated with the request identifiers
     *
     * @generated from field: ibc.core.channel.v1.Channel channel = 1;
     */
    channel?: Channel;
    /**
     * merkle proof of existence
     *
     * @generated from field: bytes proof = 2;
     */
    proof: Uint8Array;
    /**
     * height at which the proof was retrieved
     *
     * @generated from field: ibc.core.client.v1.Height proof_height = 3;
     */
    proofHeight?: Height;
    constructor(data?: PartialMessage<QueryChannelResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.QueryChannelResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryChannelResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryChannelResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryChannelResponse;
    static equals(a: QueryChannelResponse | PlainMessage<QueryChannelResponse> | undefined, b: QueryChannelResponse | PlainMessage<QueryChannelResponse> | undefined): boolean;
}
/**
 * QueryChannelsRequest is the request type for the Query/Channels RPC method
 *
 * @generated from message ibc.core.channel.v1.QueryChannelsRequest
 */
export declare class QueryChannelsRequest extends Message<QueryChannelsRequest> {
    /**
     * pagination request
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryChannelsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.QueryChannelsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryChannelsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryChannelsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryChannelsRequest;
    static equals(a: QueryChannelsRequest | PlainMessage<QueryChannelsRequest> | undefined, b: QueryChannelsRequest | PlainMessage<QueryChannelsRequest> | undefined): boolean;
}
/**
 * QueryChannelsResponse is the response type for the Query/Channels RPC method.
 *
 * @generated from message ibc.core.channel.v1.QueryChannelsResponse
 */
export declare class QueryChannelsResponse extends Message<QueryChannelsResponse> {
    /**
     * list of stored channels of the chain.
     *
     * @generated from field: repeated ibc.core.channel.v1.IdentifiedChannel channels = 1;
     */
    channels: IdentifiedChannel[];
    /**
     * pagination response
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    /**
     * query block height
     *
     * @generated from field: ibc.core.client.v1.Height height = 3;
     */
    height?: Height;
    constructor(data?: PartialMessage<QueryChannelsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.QueryChannelsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryChannelsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryChannelsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryChannelsResponse;
    static equals(a: QueryChannelsResponse | PlainMessage<QueryChannelsResponse> | undefined, b: QueryChannelsResponse | PlainMessage<QueryChannelsResponse> | undefined): boolean;
}
/**
 * QueryConnectionChannelsRequest is the request type for the
 * Query/QueryConnectionChannels RPC method
 *
 * @generated from message ibc.core.channel.v1.QueryConnectionChannelsRequest
 */
export declare class QueryConnectionChannelsRequest extends Message<QueryConnectionChannelsRequest> {
    /**
     * connection unique identifier
     *
     * @generated from field: string connection = 1;
     */
    connection: string;
    /**
     * pagination request
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryConnectionChannelsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.QueryConnectionChannelsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryConnectionChannelsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryConnectionChannelsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryConnectionChannelsRequest;
    static equals(a: QueryConnectionChannelsRequest | PlainMessage<QueryConnectionChannelsRequest> | undefined, b: QueryConnectionChannelsRequest | PlainMessage<QueryConnectionChannelsRequest> | undefined): boolean;
}
/**
 * QueryConnectionChannelsResponse is the Response type for the
 * Query/QueryConnectionChannels RPC method
 *
 * @generated from message ibc.core.channel.v1.QueryConnectionChannelsResponse
 */
export declare class QueryConnectionChannelsResponse extends Message<QueryConnectionChannelsResponse> {
    /**
     * list of channels associated with a connection.
     *
     * @generated from field: repeated ibc.core.channel.v1.IdentifiedChannel channels = 1;
     */
    channels: IdentifiedChannel[];
    /**
     * pagination response
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    /**
     * query block height
     *
     * @generated from field: ibc.core.client.v1.Height height = 3;
     */
    height?: Height;
    constructor(data?: PartialMessage<QueryConnectionChannelsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.QueryConnectionChannelsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryConnectionChannelsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryConnectionChannelsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryConnectionChannelsResponse;
    static equals(a: QueryConnectionChannelsResponse | PlainMessage<QueryConnectionChannelsResponse> | undefined, b: QueryConnectionChannelsResponse | PlainMessage<QueryConnectionChannelsResponse> | undefined): boolean;
}
/**
 * QueryChannelClientStateRequest is the request type for the Query/ClientState
 * RPC method
 *
 * @generated from message ibc.core.channel.v1.QueryChannelClientStateRequest
 */
export declare class QueryChannelClientStateRequest extends Message<QueryChannelClientStateRequest> {
    /**
     * port unique identifier
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
    constructor(data?: PartialMessage<QueryChannelClientStateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.QueryChannelClientStateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryChannelClientStateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryChannelClientStateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryChannelClientStateRequest;
    static equals(a: QueryChannelClientStateRequest | PlainMessage<QueryChannelClientStateRequest> | undefined, b: QueryChannelClientStateRequest | PlainMessage<QueryChannelClientStateRequest> | undefined): boolean;
}
/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 *
 * @generated from message ibc.core.channel.v1.QueryChannelClientStateResponse
 */
export declare class QueryChannelClientStateResponse extends Message<QueryChannelClientStateResponse> {
    /**
     * client state associated with the channel
     *
     * @generated from field: ibc.core.client.v1.IdentifiedClientState identified_client_state = 1;
     */
    identifiedClientState?: IdentifiedClientState;
    /**
     * merkle proof of existence
     *
     * @generated from field: bytes proof = 2;
     */
    proof: Uint8Array;
    /**
     * height at which the proof was retrieved
     *
     * @generated from field: ibc.core.client.v1.Height proof_height = 3;
     */
    proofHeight?: Height;
    constructor(data?: PartialMessage<QueryChannelClientStateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.QueryChannelClientStateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryChannelClientStateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryChannelClientStateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryChannelClientStateResponse;
    static equals(a: QueryChannelClientStateResponse | PlainMessage<QueryChannelClientStateResponse> | undefined, b: QueryChannelClientStateResponse | PlainMessage<QueryChannelClientStateResponse> | undefined): boolean;
}
/**
 * QueryChannelConsensusStateRequest is the request type for the
 * Query/ConsensusState RPC method
 *
 * @generated from message ibc.core.channel.v1.QueryChannelConsensusStateRequest
 */
export declare class QueryChannelConsensusStateRequest extends Message<QueryChannelConsensusStateRequest> {
    /**
     * port unique identifier
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
     * revision number of the consensus state
     *
     * @generated from field: uint64 revision_number = 3;
     */
    revisionNumber: bigint;
    /**
     * revision height of the consensus state
     *
     * @generated from field: uint64 revision_height = 4;
     */
    revisionHeight: bigint;
    constructor(data?: PartialMessage<QueryChannelConsensusStateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.QueryChannelConsensusStateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryChannelConsensusStateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryChannelConsensusStateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryChannelConsensusStateRequest;
    static equals(a: QueryChannelConsensusStateRequest | PlainMessage<QueryChannelConsensusStateRequest> | undefined, b: QueryChannelConsensusStateRequest | PlainMessage<QueryChannelConsensusStateRequest> | undefined): boolean;
}
/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 *
 * @generated from message ibc.core.channel.v1.QueryChannelConsensusStateResponse
 */
export declare class QueryChannelConsensusStateResponse extends Message<QueryChannelConsensusStateResponse> {
    /**
     * consensus state associated with the channel
     *
     * @generated from field: google.protobuf.Any consensus_state = 1;
     */
    consensusState?: Any;
    /**
     * client ID associated with the consensus state
     *
     * @generated from field: string client_id = 2;
     */
    clientId: string;
    /**
     * merkle proof of existence
     *
     * @generated from field: bytes proof = 3;
     */
    proof: Uint8Array;
    /**
     * height at which the proof was retrieved
     *
     * @generated from field: ibc.core.client.v1.Height proof_height = 4;
     */
    proofHeight?: Height;
    constructor(data?: PartialMessage<QueryChannelConsensusStateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.QueryChannelConsensusStateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryChannelConsensusStateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryChannelConsensusStateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryChannelConsensusStateResponse;
    static equals(a: QueryChannelConsensusStateResponse | PlainMessage<QueryChannelConsensusStateResponse> | undefined, b: QueryChannelConsensusStateResponse | PlainMessage<QueryChannelConsensusStateResponse> | undefined): boolean;
}
/**
 * QueryPacketCommitmentRequest is the request type for the
 * Query/PacketCommitment RPC method
 *
 * @generated from message ibc.core.channel.v1.QueryPacketCommitmentRequest
 */
export declare class QueryPacketCommitmentRequest extends Message<QueryPacketCommitmentRequest> {
    /**
     * port unique identifier
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
    constructor(data?: PartialMessage<QueryPacketCommitmentRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.QueryPacketCommitmentRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPacketCommitmentRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPacketCommitmentRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPacketCommitmentRequest;
    static equals(a: QueryPacketCommitmentRequest | PlainMessage<QueryPacketCommitmentRequest> | undefined, b: QueryPacketCommitmentRequest | PlainMessage<QueryPacketCommitmentRequest> | undefined): boolean;
}
/**
 * QueryPacketCommitmentResponse defines the client query response for a packet
 * which also includes a proof and the height from which the proof was
 * retrieved
 *
 * @generated from message ibc.core.channel.v1.QueryPacketCommitmentResponse
 */
export declare class QueryPacketCommitmentResponse extends Message<QueryPacketCommitmentResponse> {
    /**
     * packet associated with the request fields
     *
     * @generated from field: bytes commitment = 1;
     */
    commitment: Uint8Array;
    /**
     * merkle proof of existence
     *
     * @generated from field: bytes proof = 2;
     */
    proof: Uint8Array;
    /**
     * height at which the proof was retrieved
     *
     * @generated from field: ibc.core.client.v1.Height proof_height = 3;
     */
    proofHeight?: Height;
    constructor(data?: PartialMessage<QueryPacketCommitmentResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.QueryPacketCommitmentResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPacketCommitmentResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPacketCommitmentResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPacketCommitmentResponse;
    static equals(a: QueryPacketCommitmentResponse | PlainMessage<QueryPacketCommitmentResponse> | undefined, b: QueryPacketCommitmentResponse | PlainMessage<QueryPacketCommitmentResponse> | undefined): boolean;
}
/**
 * QueryPacketCommitmentsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 *
 * @generated from message ibc.core.channel.v1.QueryPacketCommitmentsRequest
 */
export declare class QueryPacketCommitmentsRequest extends Message<QueryPacketCommitmentsRequest> {
    /**
     * port unique identifier
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
     * pagination request
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 3;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryPacketCommitmentsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.QueryPacketCommitmentsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPacketCommitmentsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPacketCommitmentsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPacketCommitmentsRequest;
    static equals(a: QueryPacketCommitmentsRequest | PlainMessage<QueryPacketCommitmentsRequest> | undefined, b: QueryPacketCommitmentsRequest | PlainMessage<QueryPacketCommitmentsRequest> | undefined): boolean;
}
/**
 * QueryPacketCommitmentsResponse is the request type for the
 * Query/QueryPacketCommitments RPC method
 *
 * @generated from message ibc.core.channel.v1.QueryPacketCommitmentsResponse
 */
export declare class QueryPacketCommitmentsResponse extends Message<QueryPacketCommitmentsResponse> {
    /**
     * @generated from field: repeated ibc.core.channel.v1.PacketState commitments = 1;
     */
    commitments: PacketState[];
    /**
     * pagination response
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    /**
     * query block height
     *
     * @generated from field: ibc.core.client.v1.Height height = 3;
     */
    height?: Height;
    constructor(data?: PartialMessage<QueryPacketCommitmentsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.QueryPacketCommitmentsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPacketCommitmentsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPacketCommitmentsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPacketCommitmentsResponse;
    static equals(a: QueryPacketCommitmentsResponse | PlainMessage<QueryPacketCommitmentsResponse> | undefined, b: QueryPacketCommitmentsResponse | PlainMessage<QueryPacketCommitmentsResponse> | undefined): boolean;
}
/**
 * QueryPacketReceiptRequest is the request type for the
 * Query/PacketReceipt RPC method
 *
 * @generated from message ibc.core.channel.v1.QueryPacketReceiptRequest
 */
export declare class QueryPacketReceiptRequest extends Message<QueryPacketReceiptRequest> {
    /**
     * port unique identifier
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
    constructor(data?: PartialMessage<QueryPacketReceiptRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.QueryPacketReceiptRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPacketReceiptRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPacketReceiptRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPacketReceiptRequest;
    static equals(a: QueryPacketReceiptRequest | PlainMessage<QueryPacketReceiptRequest> | undefined, b: QueryPacketReceiptRequest | PlainMessage<QueryPacketReceiptRequest> | undefined): boolean;
}
/**
 * QueryPacketReceiptResponse defines the client query response for a packet
 * receipt which also includes a proof, and the height from which the proof was
 * retrieved
 *
 * @generated from message ibc.core.channel.v1.QueryPacketReceiptResponse
 */
export declare class QueryPacketReceiptResponse extends Message<QueryPacketReceiptResponse> {
    /**
     * success flag for if receipt exists
     *
     * @generated from field: bool received = 2;
     */
    received: boolean;
    /**
     * merkle proof of existence
     *
     * @generated from field: bytes proof = 3;
     */
    proof: Uint8Array;
    /**
     * height at which the proof was retrieved
     *
     * @generated from field: ibc.core.client.v1.Height proof_height = 4;
     */
    proofHeight?: Height;
    constructor(data?: PartialMessage<QueryPacketReceiptResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.QueryPacketReceiptResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPacketReceiptResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPacketReceiptResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPacketReceiptResponse;
    static equals(a: QueryPacketReceiptResponse | PlainMessage<QueryPacketReceiptResponse> | undefined, b: QueryPacketReceiptResponse | PlainMessage<QueryPacketReceiptResponse> | undefined): boolean;
}
/**
 * QueryPacketAcknowledgementRequest is the request type for the
 * Query/PacketAcknowledgement RPC method
 *
 * @generated from message ibc.core.channel.v1.QueryPacketAcknowledgementRequest
 */
export declare class QueryPacketAcknowledgementRequest extends Message<QueryPacketAcknowledgementRequest> {
    /**
     * port unique identifier
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
    constructor(data?: PartialMessage<QueryPacketAcknowledgementRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.QueryPacketAcknowledgementRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPacketAcknowledgementRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPacketAcknowledgementRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPacketAcknowledgementRequest;
    static equals(a: QueryPacketAcknowledgementRequest | PlainMessage<QueryPacketAcknowledgementRequest> | undefined, b: QueryPacketAcknowledgementRequest | PlainMessage<QueryPacketAcknowledgementRequest> | undefined): boolean;
}
/**
 * QueryPacketAcknowledgementResponse defines the client query response for a
 * packet which also includes a proof and the height from which the
 * proof was retrieved
 *
 * @generated from message ibc.core.channel.v1.QueryPacketAcknowledgementResponse
 */
export declare class QueryPacketAcknowledgementResponse extends Message<QueryPacketAcknowledgementResponse> {
    /**
     * packet associated with the request fields
     *
     * @generated from field: bytes acknowledgement = 1;
     */
    acknowledgement: Uint8Array;
    /**
     * merkle proof of existence
     *
     * @generated from field: bytes proof = 2;
     */
    proof: Uint8Array;
    /**
     * height at which the proof was retrieved
     *
     * @generated from field: ibc.core.client.v1.Height proof_height = 3;
     */
    proofHeight?: Height;
    constructor(data?: PartialMessage<QueryPacketAcknowledgementResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.QueryPacketAcknowledgementResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPacketAcknowledgementResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPacketAcknowledgementResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPacketAcknowledgementResponse;
    static equals(a: QueryPacketAcknowledgementResponse | PlainMessage<QueryPacketAcknowledgementResponse> | undefined, b: QueryPacketAcknowledgementResponse | PlainMessage<QueryPacketAcknowledgementResponse> | undefined): boolean;
}
/**
 * QueryPacketAcknowledgementsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 *
 * @generated from message ibc.core.channel.v1.QueryPacketAcknowledgementsRequest
 */
export declare class QueryPacketAcknowledgementsRequest extends Message<QueryPacketAcknowledgementsRequest> {
    /**
     * port unique identifier
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
     * pagination request
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 3;
     */
    pagination?: PageRequest;
    /**
     * list of packet sequences
     *
     * @generated from field: repeated uint64 packet_commitment_sequences = 4;
     */
    packetCommitmentSequences: bigint[];
    constructor(data?: PartialMessage<QueryPacketAcknowledgementsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.QueryPacketAcknowledgementsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPacketAcknowledgementsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPacketAcknowledgementsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPacketAcknowledgementsRequest;
    static equals(a: QueryPacketAcknowledgementsRequest | PlainMessage<QueryPacketAcknowledgementsRequest> | undefined, b: QueryPacketAcknowledgementsRequest | PlainMessage<QueryPacketAcknowledgementsRequest> | undefined): boolean;
}
/**
 * QueryPacketAcknowledgemetsResponse is the request type for the
 * Query/QueryPacketAcknowledgements RPC method
 *
 * @generated from message ibc.core.channel.v1.QueryPacketAcknowledgementsResponse
 */
export declare class QueryPacketAcknowledgementsResponse extends Message<QueryPacketAcknowledgementsResponse> {
    /**
     * @generated from field: repeated ibc.core.channel.v1.PacketState acknowledgements = 1;
     */
    acknowledgements: PacketState[];
    /**
     * pagination response
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    /**
     * query block height
     *
     * @generated from field: ibc.core.client.v1.Height height = 3;
     */
    height?: Height;
    constructor(data?: PartialMessage<QueryPacketAcknowledgementsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.QueryPacketAcknowledgementsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPacketAcknowledgementsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPacketAcknowledgementsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPacketAcknowledgementsResponse;
    static equals(a: QueryPacketAcknowledgementsResponse | PlainMessage<QueryPacketAcknowledgementsResponse> | undefined, b: QueryPacketAcknowledgementsResponse | PlainMessage<QueryPacketAcknowledgementsResponse> | undefined): boolean;
}
/**
 * QueryUnreceivedPacketsRequest is the request type for the
 * Query/UnreceivedPackets RPC method
 *
 * @generated from message ibc.core.channel.v1.QueryUnreceivedPacketsRequest
 */
export declare class QueryUnreceivedPacketsRequest extends Message<QueryUnreceivedPacketsRequest> {
    /**
     * port unique identifier
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
     * list of packet sequences
     *
     * @generated from field: repeated uint64 packet_commitment_sequences = 3;
     */
    packetCommitmentSequences: bigint[];
    constructor(data?: PartialMessage<QueryUnreceivedPacketsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.QueryUnreceivedPacketsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryUnreceivedPacketsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryUnreceivedPacketsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryUnreceivedPacketsRequest;
    static equals(a: QueryUnreceivedPacketsRequest | PlainMessage<QueryUnreceivedPacketsRequest> | undefined, b: QueryUnreceivedPacketsRequest | PlainMessage<QueryUnreceivedPacketsRequest> | undefined): boolean;
}
/**
 * QueryUnreceivedPacketsResponse is the response type for the
 * Query/UnreceivedPacketCommitments RPC method
 *
 * @generated from message ibc.core.channel.v1.QueryUnreceivedPacketsResponse
 */
export declare class QueryUnreceivedPacketsResponse extends Message<QueryUnreceivedPacketsResponse> {
    /**
     * list of unreceived packet sequences
     *
     * @generated from field: repeated uint64 sequences = 1;
     */
    sequences: bigint[];
    /**
     * query block height
     *
     * @generated from field: ibc.core.client.v1.Height height = 2;
     */
    height?: Height;
    constructor(data?: PartialMessage<QueryUnreceivedPacketsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.QueryUnreceivedPacketsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryUnreceivedPacketsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryUnreceivedPacketsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryUnreceivedPacketsResponse;
    static equals(a: QueryUnreceivedPacketsResponse | PlainMessage<QueryUnreceivedPacketsResponse> | undefined, b: QueryUnreceivedPacketsResponse | PlainMessage<QueryUnreceivedPacketsResponse> | undefined): boolean;
}
/**
 * QueryUnreceivedAcks is the request type for the
 * Query/UnreceivedAcks RPC method
 *
 * @generated from message ibc.core.channel.v1.QueryUnreceivedAcksRequest
 */
export declare class QueryUnreceivedAcksRequest extends Message<QueryUnreceivedAcksRequest> {
    /**
     * port unique identifier
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
     * list of acknowledgement sequences
     *
     * @generated from field: repeated uint64 packet_ack_sequences = 3;
     */
    packetAckSequences: bigint[];
    constructor(data?: PartialMessage<QueryUnreceivedAcksRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.QueryUnreceivedAcksRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryUnreceivedAcksRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryUnreceivedAcksRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryUnreceivedAcksRequest;
    static equals(a: QueryUnreceivedAcksRequest | PlainMessage<QueryUnreceivedAcksRequest> | undefined, b: QueryUnreceivedAcksRequest | PlainMessage<QueryUnreceivedAcksRequest> | undefined): boolean;
}
/**
 * QueryUnreceivedAcksResponse is the response type for the
 * Query/UnreceivedAcks RPC method
 *
 * @generated from message ibc.core.channel.v1.QueryUnreceivedAcksResponse
 */
export declare class QueryUnreceivedAcksResponse extends Message<QueryUnreceivedAcksResponse> {
    /**
     * list of unreceived acknowledgement sequences
     *
     * @generated from field: repeated uint64 sequences = 1;
     */
    sequences: bigint[];
    /**
     * query block height
     *
     * @generated from field: ibc.core.client.v1.Height height = 2;
     */
    height?: Height;
    constructor(data?: PartialMessage<QueryUnreceivedAcksResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.QueryUnreceivedAcksResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryUnreceivedAcksResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryUnreceivedAcksResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryUnreceivedAcksResponse;
    static equals(a: QueryUnreceivedAcksResponse | PlainMessage<QueryUnreceivedAcksResponse> | undefined, b: QueryUnreceivedAcksResponse | PlainMessage<QueryUnreceivedAcksResponse> | undefined): boolean;
}
/**
 * QueryNextSequenceReceiveRequest is the request type for the
 * Query/QueryNextSequenceReceiveRequest RPC method
 *
 * @generated from message ibc.core.channel.v1.QueryNextSequenceReceiveRequest
 */
export declare class QueryNextSequenceReceiveRequest extends Message<QueryNextSequenceReceiveRequest> {
    /**
     * port unique identifier
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
    constructor(data?: PartialMessage<QueryNextSequenceReceiveRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.QueryNextSequenceReceiveRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryNextSequenceReceiveRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryNextSequenceReceiveRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryNextSequenceReceiveRequest;
    static equals(a: QueryNextSequenceReceiveRequest | PlainMessage<QueryNextSequenceReceiveRequest> | undefined, b: QueryNextSequenceReceiveRequest | PlainMessage<QueryNextSequenceReceiveRequest> | undefined): boolean;
}
/**
 * QuerySequenceResponse is the request type for the
 * Query/QueryNextSequenceReceiveResponse RPC method
 *
 * @generated from message ibc.core.channel.v1.QueryNextSequenceReceiveResponse
 */
export declare class QueryNextSequenceReceiveResponse extends Message<QueryNextSequenceReceiveResponse> {
    /**
     * next sequence receive number
     *
     * @generated from field: uint64 next_sequence_receive = 1;
     */
    nextSequenceReceive: bigint;
    /**
     * merkle proof of existence
     *
     * @generated from field: bytes proof = 2;
     */
    proof: Uint8Array;
    /**
     * height at which the proof was retrieved
     *
     * @generated from field: ibc.core.client.v1.Height proof_height = 3;
     */
    proofHeight?: Height;
    constructor(data?: PartialMessage<QueryNextSequenceReceiveResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.QueryNextSequenceReceiveResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryNextSequenceReceiveResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryNextSequenceReceiveResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryNextSequenceReceiveResponse;
    static equals(a: QueryNextSequenceReceiveResponse | PlainMessage<QueryNextSequenceReceiveResponse> | undefined, b: QueryNextSequenceReceiveResponse | PlainMessage<QueryNextSequenceReceiveResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map