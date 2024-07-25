import { QueryInterchainAccountRequest, QueryInterchainAccountResponse, QueryParamsRequest, QueryParamsResponse } from "./query_pb.js";
/**
 * InterchainAccount returns the interchain account address for a given owner address on a given connection
 *
 * @generated from rpc ibc.applications.interchain_accounts.controller.v1.Query.InterchainAccount
 */
export declare const QueryInterchainAccountService: {
    readonly typeName: "ibc.applications.interchain_accounts.controller.v1.Query";
    readonly method: "InterchainAccount";
    readonly Request: typeof QueryInterchainAccountRequest;
    readonly Response: typeof QueryInterchainAccountResponse;
};
/**
 * Params queries all parameters of the ICA controller submodule.
 *
 * @generated from rpc ibc.applications.interchain_accounts.controller.v1.Query.Params
 */
export declare const QueryParamsService: {
    readonly typeName: "ibc.applications.interchain_accounts.controller.v1.Query";
    readonly method: "Params";
    readonly Request: typeof QueryParamsRequest;
    readonly Response: typeof QueryParamsResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map