import { QueryParamsRequest, QueryParamsResponse, QuerySigningInfoRequest, QuerySigningInfoResponse, QuerySigningInfosRequest, QuerySigningInfosResponse } from "./query_pb.js";
/**
 * Params queries the parameters of slashing module
 *
 * @generated from rpc cosmos.slashing.v1beta1.Query.Params
 */
export declare const QueryParamsService: {
    readonly typeName: "cosmos.slashing.v1beta1.Query";
    readonly method: "Params";
    readonly Request: typeof QueryParamsRequest;
    readonly Response: typeof QueryParamsResponse;
};
/**
 * SigningInfo queries the signing info of given cons address
 *
 * @generated from rpc cosmos.slashing.v1beta1.Query.SigningInfo
 */
export declare const QuerySigningInfoService: {
    readonly typeName: "cosmos.slashing.v1beta1.Query";
    readonly method: "SigningInfo";
    readonly Request: typeof QuerySigningInfoRequest;
    readonly Response: typeof QuerySigningInfoResponse;
};
/**
 * SigningInfos queries signing info of all validators
 *
 * @generated from rpc cosmos.slashing.v1beta1.Query.SigningInfos
 */
export declare const QuerySigningInfosService: {
    readonly typeName: "cosmos.slashing.v1beta1.Query";
    readonly method: "SigningInfos";
    readonly Request: typeof QuerySigningInfosRequest;
    readonly Response: typeof QuerySigningInfosResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map