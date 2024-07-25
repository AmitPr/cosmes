import { QueryChannelClientStateRequest, QueryChannelClientStateResponse, QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse, QueryChannelRequest, QueryChannelResponse, QueryChannelsRequest, QueryChannelsResponse, QueryConnectionChannelsRequest, QueryConnectionChannelsResponse, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse, QueryPacketCommitmentRequest, QueryPacketCommitmentResponse, QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse, QueryPacketReceiptRequest, QueryPacketReceiptResponse, QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse } from "./query_pb.js";
/**
 * Channel queries an IBC Channel.
 *
 * @generated from rpc ibc.core.channel.v1.Query.Channel
 */
export declare const QueryChannelService: {
    readonly typeName: "ibc.core.channel.v1.Query";
    readonly method: "Channel";
    readonly Request: typeof QueryChannelRequest;
    readonly Response: typeof QueryChannelResponse;
};
/**
 * Channels queries all the IBC channels of a chain.
 *
 * @generated from rpc ibc.core.channel.v1.Query.Channels
 */
export declare const QueryChannelsService: {
    readonly typeName: "ibc.core.channel.v1.Query";
    readonly method: "Channels";
    readonly Request: typeof QueryChannelsRequest;
    readonly Response: typeof QueryChannelsResponse;
};
/**
 * ConnectionChannels queries all the channels associated with a connection
 * end.
 *
 * @generated from rpc ibc.core.channel.v1.Query.ConnectionChannels
 */
export declare const QueryConnectionChannelsService: {
    readonly typeName: "ibc.core.channel.v1.Query";
    readonly method: "ConnectionChannels";
    readonly Request: typeof QueryConnectionChannelsRequest;
    readonly Response: typeof QueryConnectionChannelsResponse;
};
/**
 * ChannelClientState queries for the client state for the channel associated
 * with the provided channel identifiers.
 *
 * @generated from rpc ibc.core.channel.v1.Query.ChannelClientState
 */
export declare const QueryChannelClientStateService: {
    readonly typeName: "ibc.core.channel.v1.Query";
    readonly method: "ChannelClientState";
    readonly Request: typeof QueryChannelClientStateRequest;
    readonly Response: typeof QueryChannelClientStateResponse;
};
/**
 * ChannelConsensusState queries for the consensus state for the channel
 * associated with the provided channel identifiers.
 *
 * @generated from rpc ibc.core.channel.v1.Query.ChannelConsensusState
 */
export declare const QueryChannelConsensusStateService: {
    readonly typeName: "ibc.core.channel.v1.Query";
    readonly method: "ChannelConsensusState";
    readonly Request: typeof QueryChannelConsensusStateRequest;
    readonly Response: typeof QueryChannelConsensusStateResponse;
};
/**
 * PacketCommitment queries a stored packet commitment hash.
 *
 * @generated from rpc ibc.core.channel.v1.Query.PacketCommitment
 */
export declare const QueryPacketCommitmentService: {
    readonly typeName: "ibc.core.channel.v1.Query";
    readonly method: "PacketCommitment";
    readonly Request: typeof QueryPacketCommitmentRequest;
    readonly Response: typeof QueryPacketCommitmentResponse;
};
/**
 * PacketCommitments returns all the packet commitments hashes associated
 * with a channel.
 *
 * @generated from rpc ibc.core.channel.v1.Query.PacketCommitments
 */
export declare const QueryPacketCommitmentsService: {
    readonly typeName: "ibc.core.channel.v1.Query";
    readonly method: "PacketCommitments";
    readonly Request: typeof QueryPacketCommitmentsRequest;
    readonly Response: typeof QueryPacketCommitmentsResponse;
};
/**
 * PacketReceipt queries if a given packet sequence has been received on the
 * queried chain
 *
 * @generated from rpc ibc.core.channel.v1.Query.PacketReceipt
 */
export declare const QueryPacketReceiptService: {
    readonly typeName: "ibc.core.channel.v1.Query";
    readonly method: "PacketReceipt";
    readonly Request: typeof QueryPacketReceiptRequest;
    readonly Response: typeof QueryPacketReceiptResponse;
};
/**
 * PacketAcknowledgement queries a stored packet acknowledgement hash.
 *
 * @generated from rpc ibc.core.channel.v1.Query.PacketAcknowledgement
 */
export declare const QueryPacketAcknowledgementService: {
    readonly typeName: "ibc.core.channel.v1.Query";
    readonly method: "PacketAcknowledgement";
    readonly Request: typeof QueryPacketAcknowledgementRequest;
    readonly Response: typeof QueryPacketAcknowledgementResponse;
};
/**
 * PacketAcknowledgements returns all the packet acknowledgements associated
 * with a channel.
 *
 * @generated from rpc ibc.core.channel.v1.Query.PacketAcknowledgements
 */
export declare const QueryPacketAcknowledgementsService: {
    readonly typeName: "ibc.core.channel.v1.Query";
    readonly method: "PacketAcknowledgements";
    readonly Request: typeof QueryPacketAcknowledgementsRequest;
    readonly Response: typeof QueryPacketAcknowledgementsResponse;
};
/**
 * UnreceivedPackets returns all the unreceived IBC packets associated with a
 * channel and sequences.
 *
 * @generated from rpc ibc.core.channel.v1.Query.UnreceivedPackets
 */
export declare const QueryUnreceivedPacketsService: {
    readonly typeName: "ibc.core.channel.v1.Query";
    readonly method: "UnreceivedPackets";
    readonly Request: typeof QueryUnreceivedPacketsRequest;
    readonly Response: typeof QueryUnreceivedPacketsResponse;
};
/**
 * UnreceivedAcks returns all the unreceived IBC acknowledgements associated
 * with a channel and sequences.
 *
 * @generated from rpc ibc.core.channel.v1.Query.UnreceivedAcks
 */
export declare const QueryUnreceivedAcksService: {
    readonly typeName: "ibc.core.channel.v1.Query";
    readonly method: "UnreceivedAcks";
    readonly Request: typeof QueryUnreceivedAcksRequest;
    readonly Response: typeof QueryUnreceivedAcksResponse;
};
/**
 * NextSequenceReceive returns the next receive sequence for a given channel.
 *
 * @generated from rpc ibc.core.channel.v1.Query.NextSequenceReceive
 */
export declare const QueryNextSequenceReceiveService: {
    readonly typeName: "ibc.core.channel.v1.Query";
    readonly method: "NextSequenceReceive";
    readonly Request: typeof QueryNextSequenceReceiveRequest;
    readonly Response: typeof QueryNextSequenceReceiveResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map