import { QueryCounterpartyPayeeRequest, QueryCounterpartyPayeeResponse, QueryFeeEnabledChannelRequest, QueryFeeEnabledChannelResponse, QueryFeeEnabledChannelsRequest, QueryFeeEnabledChannelsResponse, QueryIncentivizedPacketRequest, QueryIncentivizedPacketResponse, QueryIncentivizedPacketsForChannelRequest, QueryIncentivizedPacketsForChannelResponse, QueryIncentivizedPacketsRequest, QueryIncentivizedPacketsResponse, QueryPayeeRequest, QueryPayeeResponse, QueryTotalAckFeesRequest, QueryTotalAckFeesResponse, QueryTotalRecvFeesRequest, QueryTotalRecvFeesResponse, QueryTotalTimeoutFeesRequest, QueryTotalTimeoutFeesResponse } from "./query_pb.js";
/**
 * IncentivizedPackets returns all incentivized packets and their associated fees
 *
 * @generated from rpc ibc.applications.fee.v1.Query.IncentivizedPackets
 */
export declare const QueryIncentivizedPacketsService: {
    readonly typeName: "ibc.applications.fee.v1.Query";
    readonly method: "IncentivizedPackets";
    readonly Request: typeof QueryIncentivizedPacketsRequest;
    readonly Response: typeof QueryIncentivizedPacketsResponse;
};
/**
 * IncentivizedPacket returns all packet fees for a packet given its identifier
 *
 * @generated from rpc ibc.applications.fee.v1.Query.IncentivizedPacket
 */
export declare const QueryIncentivizedPacketService: {
    readonly typeName: "ibc.applications.fee.v1.Query";
    readonly method: "IncentivizedPacket";
    readonly Request: typeof QueryIncentivizedPacketRequest;
    readonly Response: typeof QueryIncentivizedPacketResponse;
};
/**
 * Gets all incentivized packets for a specific channel
 *
 * @generated from rpc ibc.applications.fee.v1.Query.IncentivizedPacketsForChannel
 */
export declare const QueryIncentivizedPacketsForChannelService: {
    readonly typeName: "ibc.applications.fee.v1.Query";
    readonly method: "IncentivizedPacketsForChannel";
    readonly Request: typeof QueryIncentivizedPacketsForChannelRequest;
    readonly Response: typeof QueryIncentivizedPacketsForChannelResponse;
};
/**
 * TotalRecvFees returns the total receive fees for a packet given its identifier
 *
 * @generated from rpc ibc.applications.fee.v1.Query.TotalRecvFees
 */
export declare const QueryTotalRecvFeesService: {
    readonly typeName: "ibc.applications.fee.v1.Query";
    readonly method: "TotalRecvFees";
    readonly Request: typeof QueryTotalRecvFeesRequest;
    readonly Response: typeof QueryTotalRecvFeesResponse;
};
/**
 * TotalAckFees returns the total acknowledgement fees for a packet given its identifier
 *
 * @generated from rpc ibc.applications.fee.v1.Query.TotalAckFees
 */
export declare const QueryTotalAckFeesService: {
    readonly typeName: "ibc.applications.fee.v1.Query";
    readonly method: "TotalAckFees";
    readonly Request: typeof QueryTotalAckFeesRequest;
    readonly Response: typeof QueryTotalAckFeesResponse;
};
/**
 * TotalTimeoutFees returns the total timeout fees for a packet given its identifier
 *
 * @generated from rpc ibc.applications.fee.v1.Query.TotalTimeoutFees
 */
export declare const QueryTotalTimeoutFeesService: {
    readonly typeName: "ibc.applications.fee.v1.Query";
    readonly method: "TotalTimeoutFees";
    readonly Request: typeof QueryTotalTimeoutFeesRequest;
    readonly Response: typeof QueryTotalTimeoutFeesResponse;
};
/**
 * Payee returns the registered payee address for a specific channel given the relayer address
 *
 * @generated from rpc ibc.applications.fee.v1.Query.Payee
 */
export declare const QueryPayeeService: {
    readonly typeName: "ibc.applications.fee.v1.Query";
    readonly method: "Payee";
    readonly Request: typeof QueryPayeeRequest;
    readonly Response: typeof QueryPayeeResponse;
};
/**
 * CounterpartyPayee returns the registered counterparty payee for forward relaying
 *
 * @generated from rpc ibc.applications.fee.v1.Query.CounterpartyPayee
 */
export declare const QueryCounterpartyPayeeService: {
    readonly typeName: "ibc.applications.fee.v1.Query";
    readonly method: "CounterpartyPayee";
    readonly Request: typeof QueryCounterpartyPayeeRequest;
    readonly Response: typeof QueryCounterpartyPayeeResponse;
};
/**
 * FeeEnabledChannels returns a list of all fee enabled channels
 *
 * @generated from rpc ibc.applications.fee.v1.Query.FeeEnabledChannels
 */
export declare const QueryFeeEnabledChannelsService: {
    readonly typeName: "ibc.applications.fee.v1.Query";
    readonly method: "FeeEnabledChannels";
    readonly Request: typeof QueryFeeEnabledChannelsRequest;
    readonly Response: typeof QueryFeeEnabledChannelsResponse;
};
/**
 * FeeEnabledChannel returns true if the provided port and channel identifiers belong to a fee enabled channel
 *
 * @generated from rpc ibc.applications.fee.v1.Query.FeeEnabledChannel
 */
export declare const QueryFeeEnabledChannelService: {
    readonly typeName: "ibc.applications.fee.v1.Query";
    readonly method: "FeeEnabledChannel";
    readonly Request: typeof QueryFeeEnabledChannelRequest;
    readonly Response: typeof QueryFeeEnabledChannelResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map