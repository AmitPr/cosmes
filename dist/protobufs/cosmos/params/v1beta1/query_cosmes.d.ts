import { QueryParamsRequest, QueryParamsResponse, QuerySubspacesRequest, QuerySubspacesResponse } from "./query_pb.js";
/**
 * Params queries a specific parameter of a module, given its subspace and
 * key.
 *
 * @generated from rpc cosmos.params.v1beta1.Query.Params
 */
export declare const QueryParamsService: {
    readonly typeName: "cosmos.params.v1beta1.Query";
    readonly method: "Params";
    readonly Request: typeof QueryParamsRequest;
    readonly Response: typeof QueryParamsResponse;
};
/**
 * Subspaces queries for all registered subspaces and all keys for a subspace.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from rpc cosmos.params.v1beta1.Query.Subspaces
 */
export declare const QuerySubspacesService: {
    readonly typeName: "cosmos.params.v1beta1.Query";
    readonly method: "Subspaces";
    readonly Request: typeof QuerySubspacesRequest;
    readonly Response: typeof QuerySubspacesResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map