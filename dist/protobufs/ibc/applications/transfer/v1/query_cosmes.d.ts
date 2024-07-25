import { QueryDenomHashRequest, QueryDenomHashResponse, QueryDenomTraceRequest, QueryDenomTraceResponse, QueryDenomTracesRequest, QueryDenomTracesResponse, QueryEscrowAddressRequest, QueryEscrowAddressResponse, QueryParamsRequest, QueryParamsResponse, QueryTotalEscrowForDenomRequest, QueryTotalEscrowForDenomResponse } from "./query_pb.js";
/**
 * DenomTraces queries all denomination traces.
 *
 * @generated from rpc ibc.applications.transfer.v1.Query.DenomTraces
 */
export declare const QueryDenomTracesService: {
    readonly typeName: "ibc.applications.transfer.v1.Query";
    readonly method: "DenomTraces";
    readonly Request: typeof QueryDenomTracesRequest;
    readonly Response: typeof QueryDenomTracesResponse;
};
/**
 * DenomTrace queries a denomination trace information.
 *
 * @generated from rpc ibc.applications.transfer.v1.Query.DenomTrace
 */
export declare const QueryDenomTraceService: {
    readonly typeName: "ibc.applications.transfer.v1.Query";
    readonly method: "DenomTrace";
    readonly Request: typeof QueryDenomTraceRequest;
    readonly Response: typeof QueryDenomTraceResponse;
};
/**
 * Params queries all parameters of the ibc-transfer module.
 *
 * @generated from rpc ibc.applications.transfer.v1.Query.Params
 */
export declare const QueryParamsService: {
    readonly typeName: "ibc.applications.transfer.v1.Query";
    readonly method: "Params";
    readonly Request: typeof QueryParamsRequest;
    readonly Response: typeof QueryParamsResponse;
};
/**
 * DenomHash queries a denomination hash information.
 *
 * @generated from rpc ibc.applications.transfer.v1.Query.DenomHash
 */
export declare const QueryDenomHashService: {
    readonly typeName: "ibc.applications.transfer.v1.Query";
    readonly method: "DenomHash";
    readonly Request: typeof QueryDenomHashRequest;
    readonly Response: typeof QueryDenomHashResponse;
};
/**
 * EscrowAddress returns the escrow address for a particular port and channel id.
 *
 * @generated from rpc ibc.applications.transfer.v1.Query.EscrowAddress
 */
export declare const QueryEscrowAddressService: {
    readonly typeName: "ibc.applications.transfer.v1.Query";
    readonly method: "EscrowAddress";
    readonly Request: typeof QueryEscrowAddressRequest;
    readonly Response: typeof QueryEscrowAddressResponse;
};
/**
 * TotalEscrowForDenom returns the total amount of tokens in escrow based on the denom.
 *
 * @generated from rpc ibc.applications.transfer.v1.Query.TotalEscrowForDenom
 */
export declare const QueryTotalEscrowForDenomService: {
    readonly typeName: "ibc.applications.transfer.v1.Query";
    readonly method: "TotalEscrowForDenom";
    readonly Request: typeof QueryTotalEscrowForDenomRequest;
    readonly Response: typeof QueryTotalEscrowForDenomResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map