import { QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse, QueryInflationRequest, QueryInflationResponse, QueryParamsRequest, QueryParamsResponse } from "./query_pb.js";
/**
 * Params returns the total set of minting parameters.
 *
 * @generated from rpc cosmos.mint.v1beta1.Query.Params
 */
export declare const QueryParamsService: {
    readonly typeName: "cosmos.mint.v1beta1.Query";
    readonly method: "Params";
    readonly Request: typeof QueryParamsRequest;
    readonly Response: typeof QueryParamsResponse;
};
/**
 * Inflation returns the current minting inflation value.
 *
 * @generated from rpc cosmos.mint.v1beta1.Query.Inflation
 */
export declare const QueryInflationService: {
    readonly typeName: "cosmos.mint.v1beta1.Query";
    readonly method: "Inflation";
    readonly Request: typeof QueryInflationRequest;
    readonly Response: typeof QueryInflationResponse;
};
/**
 * AnnualProvisions current minting annual provisions value.
 *
 * @generated from rpc cosmos.mint.v1beta1.Query.AnnualProvisions
 */
export declare const QueryAnnualProvisionsService: {
    readonly typeName: "cosmos.mint.v1beta1.Query";
    readonly method: "AnnualProvisions";
    readonly Request: typeof QueryAnnualProvisionsRequest;
    readonly Response: typeof QueryAnnualProvisionsResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map