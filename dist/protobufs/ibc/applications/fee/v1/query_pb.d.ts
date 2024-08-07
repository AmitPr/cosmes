import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { PageRequest } from "../../../../cosmos/base/query/v1beta1/pagination_pb.js";
import { IdentifiedPacketFees } from "./fee_pb.js";
import { PacketId } from "../../../core/channel/v1/channel_pb.js";
import { Coin } from "../../../../cosmos/base/v1beta1/coin_pb.js";
import { FeeEnabledChannel } from "./genesis_pb.js";
/**
 * QueryIncentivizedPacketsRequest defines the request type for the IncentivizedPackets rpc
 *
 * @generated from message ibc.applications.fee.v1.QueryIncentivizedPacketsRequest
 */
export declare class QueryIncentivizedPacketsRequest extends Message<QueryIncentivizedPacketsRequest> {
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
     */
    pagination?: PageRequest;
    /**
     * block height at which to query
     *
     * @generated from field: uint64 query_height = 2;
     */
    queryHeight: bigint;
    constructor(data?: PartialMessage<QueryIncentivizedPacketsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.QueryIncentivizedPacketsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryIncentivizedPacketsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryIncentivizedPacketsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryIncentivizedPacketsRequest;
    static equals(a: QueryIncentivizedPacketsRequest | PlainMessage<QueryIncentivizedPacketsRequest> | undefined, b: QueryIncentivizedPacketsRequest | PlainMessage<QueryIncentivizedPacketsRequest> | undefined): boolean;
}
/**
 * QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPackets rpc
 *
 * @generated from message ibc.applications.fee.v1.QueryIncentivizedPacketsResponse
 */
export declare class QueryIncentivizedPacketsResponse extends Message<QueryIncentivizedPacketsResponse> {
    /**
     * list of identified fees for incentivized packets
     *
     * @generated from field: repeated ibc.applications.fee.v1.IdentifiedPacketFees incentivized_packets = 1;
     */
    incentivizedPackets: IdentifiedPacketFees[];
    constructor(data?: PartialMessage<QueryIncentivizedPacketsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.QueryIncentivizedPacketsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryIncentivizedPacketsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryIncentivizedPacketsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryIncentivizedPacketsResponse;
    static equals(a: QueryIncentivizedPacketsResponse | PlainMessage<QueryIncentivizedPacketsResponse> | undefined, b: QueryIncentivizedPacketsResponse | PlainMessage<QueryIncentivizedPacketsResponse> | undefined): boolean;
}
/**
 * QueryIncentivizedPacketRequest defines the request type for the IncentivizedPacket rpc
 *
 * @generated from message ibc.applications.fee.v1.QueryIncentivizedPacketRequest
 */
export declare class QueryIncentivizedPacketRequest extends Message<QueryIncentivizedPacketRequest> {
    /**
     * unique packet identifier comprised of channel ID, port ID and sequence
     *
     * @generated from field: ibc.core.channel.v1.PacketId packet_id = 1;
     */
    packetId?: PacketId;
    /**
     * block height at which to query
     *
     * @generated from field: uint64 query_height = 2;
     */
    queryHeight: bigint;
    constructor(data?: PartialMessage<QueryIncentivizedPacketRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.QueryIncentivizedPacketRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryIncentivizedPacketRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryIncentivizedPacketRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryIncentivizedPacketRequest;
    static equals(a: QueryIncentivizedPacketRequest | PlainMessage<QueryIncentivizedPacketRequest> | undefined, b: QueryIncentivizedPacketRequest | PlainMessage<QueryIncentivizedPacketRequest> | undefined): boolean;
}
/**
 * QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPacket rpc
 *
 * @generated from message ibc.applications.fee.v1.QueryIncentivizedPacketResponse
 */
export declare class QueryIncentivizedPacketResponse extends Message<QueryIncentivizedPacketResponse> {
    /**
     * the identified fees for the incentivized packet
     *
     * @generated from field: ibc.applications.fee.v1.IdentifiedPacketFees incentivized_packet = 1;
     */
    incentivizedPacket?: IdentifiedPacketFees;
    constructor(data?: PartialMessage<QueryIncentivizedPacketResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.QueryIncentivizedPacketResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryIncentivizedPacketResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryIncentivizedPacketResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryIncentivizedPacketResponse;
    static equals(a: QueryIncentivizedPacketResponse | PlainMessage<QueryIncentivizedPacketResponse> | undefined, b: QueryIncentivizedPacketResponse | PlainMessage<QueryIncentivizedPacketResponse> | undefined): boolean;
}
/**
 * QueryIncentivizedPacketsForChannelRequest defines the request type for querying for all incentivized packets
 * for a specific channel
 *
 * @generated from message ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelRequest
 */
export declare class QueryIncentivizedPacketsForChannelRequest extends Message<QueryIncentivizedPacketsForChannelRequest> {
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
     */
    pagination?: PageRequest;
    /**
     * @generated from field: string port_id = 2;
     */
    portId: string;
    /**
     * @generated from field: string channel_id = 3;
     */
    channelId: string;
    /**
     * Height to query at
     *
     * @generated from field: uint64 query_height = 4;
     */
    queryHeight: bigint;
    constructor(data?: PartialMessage<QueryIncentivizedPacketsForChannelRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryIncentivizedPacketsForChannelRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryIncentivizedPacketsForChannelRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryIncentivizedPacketsForChannelRequest;
    static equals(a: QueryIncentivizedPacketsForChannelRequest | PlainMessage<QueryIncentivizedPacketsForChannelRequest> | undefined, b: QueryIncentivizedPacketsForChannelRequest | PlainMessage<QueryIncentivizedPacketsForChannelRequest> | undefined): boolean;
}
/**
 * QueryIncentivizedPacketsResponse defines the response type for the incentivized packets RPC
 *
 * @generated from message ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelResponse
 */
export declare class QueryIncentivizedPacketsForChannelResponse extends Message<QueryIncentivizedPacketsForChannelResponse> {
    /**
     * Map of all incentivized_packets
     *
     * @generated from field: repeated ibc.applications.fee.v1.IdentifiedPacketFees incentivized_packets = 1;
     */
    incentivizedPackets: IdentifiedPacketFees[];
    constructor(data?: PartialMessage<QueryIncentivizedPacketsForChannelResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.QueryIncentivizedPacketsForChannelResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryIncentivizedPacketsForChannelResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryIncentivizedPacketsForChannelResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryIncentivizedPacketsForChannelResponse;
    static equals(a: QueryIncentivizedPacketsForChannelResponse | PlainMessage<QueryIncentivizedPacketsForChannelResponse> | undefined, b: QueryIncentivizedPacketsForChannelResponse | PlainMessage<QueryIncentivizedPacketsForChannelResponse> | undefined): boolean;
}
/**
 * QueryTotalRecvFeesRequest defines the request type for the TotalRecvFees rpc
 *
 * @generated from message ibc.applications.fee.v1.QueryTotalRecvFeesRequest
 */
export declare class QueryTotalRecvFeesRequest extends Message<QueryTotalRecvFeesRequest> {
    /**
     * the packet identifier for the associated fees
     *
     * @generated from field: ibc.core.channel.v1.PacketId packet_id = 1;
     */
    packetId?: PacketId;
    constructor(data?: PartialMessage<QueryTotalRecvFeesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.QueryTotalRecvFeesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTotalRecvFeesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTotalRecvFeesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTotalRecvFeesRequest;
    static equals(a: QueryTotalRecvFeesRequest | PlainMessage<QueryTotalRecvFeesRequest> | undefined, b: QueryTotalRecvFeesRequest | PlainMessage<QueryTotalRecvFeesRequest> | undefined): boolean;
}
/**
 * QueryTotalRecvFeesResponse defines the response type for the TotalRecvFees rpc
 *
 * @generated from message ibc.applications.fee.v1.QueryTotalRecvFeesResponse
 */
export declare class QueryTotalRecvFeesResponse extends Message<QueryTotalRecvFeesResponse> {
    /**
     * the total packet receive fees
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin recv_fees = 1;
     */
    recvFees: Coin[];
    constructor(data?: PartialMessage<QueryTotalRecvFeesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.QueryTotalRecvFeesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTotalRecvFeesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTotalRecvFeesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTotalRecvFeesResponse;
    static equals(a: QueryTotalRecvFeesResponse | PlainMessage<QueryTotalRecvFeesResponse> | undefined, b: QueryTotalRecvFeesResponse | PlainMessage<QueryTotalRecvFeesResponse> | undefined): boolean;
}
/**
 * QueryTotalAckFeesRequest defines the request type for the TotalAckFees rpc
 *
 * @generated from message ibc.applications.fee.v1.QueryTotalAckFeesRequest
 */
export declare class QueryTotalAckFeesRequest extends Message<QueryTotalAckFeesRequest> {
    /**
     * the packet identifier for the associated fees
     *
     * @generated from field: ibc.core.channel.v1.PacketId packet_id = 1;
     */
    packetId?: PacketId;
    constructor(data?: PartialMessage<QueryTotalAckFeesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.QueryTotalAckFeesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTotalAckFeesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTotalAckFeesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTotalAckFeesRequest;
    static equals(a: QueryTotalAckFeesRequest | PlainMessage<QueryTotalAckFeesRequest> | undefined, b: QueryTotalAckFeesRequest | PlainMessage<QueryTotalAckFeesRequest> | undefined): boolean;
}
/**
 * QueryTotalAckFeesResponse defines the response type for the TotalAckFees rpc
 *
 * @generated from message ibc.applications.fee.v1.QueryTotalAckFeesResponse
 */
export declare class QueryTotalAckFeesResponse extends Message<QueryTotalAckFeesResponse> {
    /**
     * the total packet acknowledgement fees
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin ack_fees = 1;
     */
    ackFees: Coin[];
    constructor(data?: PartialMessage<QueryTotalAckFeesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.QueryTotalAckFeesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTotalAckFeesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTotalAckFeesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTotalAckFeesResponse;
    static equals(a: QueryTotalAckFeesResponse | PlainMessage<QueryTotalAckFeesResponse> | undefined, b: QueryTotalAckFeesResponse | PlainMessage<QueryTotalAckFeesResponse> | undefined): boolean;
}
/**
 * QueryTotalTimeoutFeesRequest defines the request type for the TotalTimeoutFees rpc
 *
 * @generated from message ibc.applications.fee.v1.QueryTotalTimeoutFeesRequest
 */
export declare class QueryTotalTimeoutFeesRequest extends Message<QueryTotalTimeoutFeesRequest> {
    /**
     * the packet identifier for the associated fees
     *
     * @generated from field: ibc.core.channel.v1.PacketId packet_id = 1;
     */
    packetId?: PacketId;
    constructor(data?: PartialMessage<QueryTotalTimeoutFeesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.QueryTotalTimeoutFeesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTotalTimeoutFeesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTotalTimeoutFeesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTotalTimeoutFeesRequest;
    static equals(a: QueryTotalTimeoutFeesRequest | PlainMessage<QueryTotalTimeoutFeesRequest> | undefined, b: QueryTotalTimeoutFeesRequest | PlainMessage<QueryTotalTimeoutFeesRequest> | undefined): boolean;
}
/**
 * QueryTotalTimeoutFeesResponse defines the response type for the TotalTimeoutFees rpc
 *
 * @generated from message ibc.applications.fee.v1.QueryTotalTimeoutFeesResponse
 */
export declare class QueryTotalTimeoutFeesResponse extends Message<QueryTotalTimeoutFeesResponse> {
    /**
     * the total packet timeout fees
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin timeout_fees = 1;
     */
    timeoutFees: Coin[];
    constructor(data?: PartialMessage<QueryTotalTimeoutFeesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.QueryTotalTimeoutFeesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTotalTimeoutFeesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTotalTimeoutFeesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTotalTimeoutFeesResponse;
    static equals(a: QueryTotalTimeoutFeesResponse | PlainMessage<QueryTotalTimeoutFeesResponse> | undefined, b: QueryTotalTimeoutFeesResponse | PlainMessage<QueryTotalTimeoutFeesResponse> | undefined): boolean;
}
/**
 * QueryPayeeRequest defines the request type for the Payee rpc
 *
 * @generated from message ibc.applications.fee.v1.QueryPayeeRequest
 */
export declare class QueryPayeeRequest extends Message<QueryPayeeRequest> {
    /**
     * unique channel identifier
     *
     * @generated from field: string channel_id = 1;
     */
    channelId: string;
    /**
     * the relayer address to which the distribution address is registered
     *
     * @generated from field: string relayer = 2;
     */
    relayer: string;
    constructor(data?: PartialMessage<QueryPayeeRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.QueryPayeeRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPayeeRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPayeeRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPayeeRequest;
    static equals(a: QueryPayeeRequest | PlainMessage<QueryPayeeRequest> | undefined, b: QueryPayeeRequest | PlainMessage<QueryPayeeRequest> | undefined): boolean;
}
/**
 * QueryPayeeResponse defines the response type for the Payee rpc
 *
 * @generated from message ibc.applications.fee.v1.QueryPayeeResponse
 */
export declare class QueryPayeeResponse extends Message<QueryPayeeResponse> {
    /**
     * the payee address to which packet fees are paid out
     *
     * @generated from field: string payee_address = 1;
     */
    payeeAddress: string;
    constructor(data?: PartialMessage<QueryPayeeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.QueryPayeeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPayeeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPayeeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPayeeResponse;
    static equals(a: QueryPayeeResponse | PlainMessage<QueryPayeeResponse> | undefined, b: QueryPayeeResponse | PlainMessage<QueryPayeeResponse> | undefined): boolean;
}
/**
 * QueryCounterpartyPayeeRequest defines the request type for the CounterpartyPayee rpc
 *
 * @generated from message ibc.applications.fee.v1.QueryCounterpartyPayeeRequest
 */
export declare class QueryCounterpartyPayeeRequest extends Message<QueryCounterpartyPayeeRequest> {
    /**
     * unique channel identifier
     *
     * @generated from field: string channel_id = 1;
     */
    channelId: string;
    /**
     * the relayer address to which the counterparty is registered
     *
     * @generated from field: string relayer = 2;
     */
    relayer: string;
    constructor(data?: PartialMessage<QueryCounterpartyPayeeRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.QueryCounterpartyPayeeRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCounterpartyPayeeRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCounterpartyPayeeRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCounterpartyPayeeRequest;
    static equals(a: QueryCounterpartyPayeeRequest | PlainMessage<QueryCounterpartyPayeeRequest> | undefined, b: QueryCounterpartyPayeeRequest | PlainMessage<QueryCounterpartyPayeeRequest> | undefined): boolean;
}
/**
 * QueryCounterpartyPayeeResponse defines the response type for the CounterpartyPayee rpc
 *
 * @generated from message ibc.applications.fee.v1.QueryCounterpartyPayeeResponse
 */
export declare class QueryCounterpartyPayeeResponse extends Message<QueryCounterpartyPayeeResponse> {
    /**
     * the counterparty payee address used to compensate forward relaying
     *
     * @generated from field: string counterparty_payee = 1;
     */
    counterpartyPayee: string;
    constructor(data?: PartialMessage<QueryCounterpartyPayeeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.QueryCounterpartyPayeeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCounterpartyPayeeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCounterpartyPayeeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCounterpartyPayeeResponse;
    static equals(a: QueryCounterpartyPayeeResponse | PlainMessage<QueryCounterpartyPayeeResponse> | undefined, b: QueryCounterpartyPayeeResponse | PlainMessage<QueryCounterpartyPayeeResponse> | undefined): boolean;
}
/**
 * QueryFeeEnabledChannelsRequest defines the request type for the FeeEnabledChannels rpc
 *
 * @generated from message ibc.applications.fee.v1.QueryFeeEnabledChannelsRequest
 */
export declare class QueryFeeEnabledChannelsRequest extends Message<QueryFeeEnabledChannelsRequest> {
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
     */
    pagination?: PageRequest;
    /**
     * block height at which to query
     *
     * @generated from field: uint64 query_height = 2;
     */
    queryHeight: bigint;
    constructor(data?: PartialMessage<QueryFeeEnabledChannelsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.QueryFeeEnabledChannelsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryFeeEnabledChannelsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryFeeEnabledChannelsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryFeeEnabledChannelsRequest;
    static equals(a: QueryFeeEnabledChannelsRequest | PlainMessage<QueryFeeEnabledChannelsRequest> | undefined, b: QueryFeeEnabledChannelsRequest | PlainMessage<QueryFeeEnabledChannelsRequest> | undefined): boolean;
}
/**
 * QueryFeeEnabledChannelsResponse defines the response type for the FeeEnabledChannels rpc
 *
 * @generated from message ibc.applications.fee.v1.QueryFeeEnabledChannelsResponse
 */
export declare class QueryFeeEnabledChannelsResponse extends Message<QueryFeeEnabledChannelsResponse> {
    /**
     * list of fee enabled channels
     *
     * @generated from field: repeated ibc.applications.fee.v1.FeeEnabledChannel fee_enabled_channels = 1;
     */
    feeEnabledChannels: FeeEnabledChannel[];
    constructor(data?: PartialMessage<QueryFeeEnabledChannelsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.QueryFeeEnabledChannelsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryFeeEnabledChannelsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryFeeEnabledChannelsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryFeeEnabledChannelsResponse;
    static equals(a: QueryFeeEnabledChannelsResponse | PlainMessage<QueryFeeEnabledChannelsResponse> | undefined, b: QueryFeeEnabledChannelsResponse | PlainMessage<QueryFeeEnabledChannelsResponse> | undefined): boolean;
}
/**
 * QueryFeeEnabledChannelRequest defines the request type for the FeeEnabledChannel rpc
 *
 * @generated from message ibc.applications.fee.v1.QueryFeeEnabledChannelRequest
 */
export declare class QueryFeeEnabledChannelRequest extends Message<QueryFeeEnabledChannelRequest> {
    /**
     * unique port identifier
     *
     * @generated from field: string port_id = 1;
     */
    portId: string;
    /**
     * unique channel identifier
     *
     * @generated from field: string channel_id = 2;
     */
    channelId: string;
    constructor(data?: PartialMessage<QueryFeeEnabledChannelRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.QueryFeeEnabledChannelRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryFeeEnabledChannelRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryFeeEnabledChannelRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryFeeEnabledChannelRequest;
    static equals(a: QueryFeeEnabledChannelRequest | PlainMessage<QueryFeeEnabledChannelRequest> | undefined, b: QueryFeeEnabledChannelRequest | PlainMessage<QueryFeeEnabledChannelRequest> | undefined): boolean;
}
/**
 * QueryFeeEnabledChannelResponse defines the response type for the FeeEnabledChannel rpc
 *
 * @generated from message ibc.applications.fee.v1.QueryFeeEnabledChannelResponse
 */
export declare class QueryFeeEnabledChannelResponse extends Message<QueryFeeEnabledChannelResponse> {
    /**
     * boolean flag representing the fee enabled channel status
     *
     * @generated from field: bool fee_enabled = 1;
     */
    feeEnabled: boolean;
    constructor(data?: PartialMessage<QueryFeeEnabledChannelResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.QueryFeeEnabledChannelResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryFeeEnabledChannelResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryFeeEnabledChannelResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryFeeEnabledChannelResponse;
    static equals(a: QueryFeeEnabledChannelResponse | PlainMessage<QueryFeeEnabledChannelResponse> | undefined, b: QueryFeeEnabledChannelResponse | PlainMessage<QueryFeeEnabledChannelResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map