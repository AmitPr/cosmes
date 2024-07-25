import { QueryAllowanceRequest, QueryAllowanceResponse, QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse, QueryAllowancesRequest, QueryAllowancesResponse } from "./query_pb.js";
/**
 * Allowance returns fee granted to the grantee by the granter.
 *
 * @generated from rpc cosmos.feegrant.v1beta1.Query.Allowance
 */
export declare const QueryAllowanceService: {
    readonly typeName: "cosmos.feegrant.v1beta1.Query";
    readonly method: "Allowance";
    readonly Request: typeof QueryAllowanceRequest;
    readonly Response: typeof QueryAllowanceResponse;
};
/**
 * Allowances returns all the grants for address.
 *
 * @generated from rpc cosmos.feegrant.v1beta1.Query.Allowances
 */
export declare const QueryAllowancesService: {
    readonly typeName: "cosmos.feegrant.v1beta1.Query";
    readonly method: "Allowances";
    readonly Request: typeof QueryAllowancesRequest;
    readonly Response: typeof QueryAllowancesResponse;
};
/**
 * AllowancesByGranter returns all the grants given by an address
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from rpc cosmos.feegrant.v1beta1.Query.AllowancesByGranter
 */
export declare const QueryAllowancesByGranterService: {
    readonly typeName: "cosmos.feegrant.v1beta1.Query";
    readonly method: "AllowancesByGranter";
    readonly Request: typeof QueryAllowancesByGranterRequest;
    readonly Response: typeof QueryAllowancesByGranterResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map