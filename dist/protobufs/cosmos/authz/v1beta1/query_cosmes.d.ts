import { QueryGranteeGrantsRequest, QueryGranteeGrantsResponse, QueryGranterGrantsRequest, QueryGranterGrantsResponse, QueryGrantsRequest, QueryGrantsResponse } from "./query_pb.js";
/**
 * Returns list of `Authorization`, granted to the grantee by the granter.
 *
 * @generated from rpc cosmos.authz.v1beta1.Query.Grants
 */
export declare const QueryGrantsService: {
    readonly typeName: "cosmos.authz.v1beta1.Query";
    readonly method: "Grants";
    readonly Request: typeof QueryGrantsRequest;
    readonly Response: typeof QueryGrantsResponse;
};
/**
 * GranterGrants returns list of `GrantAuthorization`, granted by granter.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from rpc cosmos.authz.v1beta1.Query.GranterGrants
 */
export declare const QueryGranterGrantsService: {
    readonly typeName: "cosmos.authz.v1beta1.Query";
    readonly method: "GranterGrants";
    readonly Request: typeof QueryGranterGrantsRequest;
    readonly Response: typeof QueryGranterGrantsResponse;
};
/**
 * GranteeGrants returns a list of `GrantAuthorization` by grantee.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from rpc cosmos.authz.v1beta1.Query.GranteeGrants
 */
export declare const QueryGranteeGrantsService: {
    readonly typeName: "cosmos.authz.v1beta1.Query";
    readonly method: "GranteeGrants";
    readonly Request: typeof QueryGranteeGrantsRequest;
    readonly Response: typeof QueryGranteeGrantsResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map