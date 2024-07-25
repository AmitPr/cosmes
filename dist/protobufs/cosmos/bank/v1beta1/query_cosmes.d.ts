import { QueryAllBalancesRequest, QueryAllBalancesResponse, QueryBalanceRequest, QueryBalanceResponse, QueryDenomMetadataRequest, QueryDenomMetadataResponse, QueryDenomOwnersRequest, QueryDenomOwnersResponse, QueryDenomsMetadataRequest, QueryDenomsMetadataResponse, QueryParamsRequest, QueryParamsResponse, QuerySendEnabledRequest, QuerySendEnabledResponse, QuerySpendableBalanceByDenomRequest, QuerySpendableBalanceByDenomResponse, QuerySpendableBalancesRequest, QuerySpendableBalancesResponse, QuerySupplyOfRequest, QuerySupplyOfResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse } from "./query_pb.js";
/**
 * Balance queries the balance of a single coin for a single account.
 *
 * @generated from rpc cosmos.bank.v1beta1.Query.Balance
 */
export declare const QueryBalanceService: {
    readonly typeName: "cosmos.bank.v1beta1.Query";
    readonly method: "Balance";
    readonly Request: typeof QueryBalanceRequest;
    readonly Response: typeof QueryBalanceResponse;
};
/**
 * AllBalances queries the balance of all coins for a single account.
 *
 * When called from another module, this query might consume a high amount of
 * gas if the pagination field is incorrectly set.
 *
 * @generated from rpc cosmos.bank.v1beta1.Query.AllBalances
 */
export declare const QueryAllBalancesService: {
    readonly typeName: "cosmos.bank.v1beta1.Query";
    readonly method: "AllBalances";
    readonly Request: typeof QueryAllBalancesRequest;
    readonly Response: typeof QueryAllBalancesResponse;
};
/**
 * SpendableBalances queries the spendable balance of all coins for a single
 * account.
 *
 * When called from another module, this query might consume a high amount of
 * gas if the pagination field is incorrectly set.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from rpc cosmos.bank.v1beta1.Query.SpendableBalances
 */
export declare const QuerySpendableBalancesService: {
    readonly typeName: "cosmos.bank.v1beta1.Query";
    readonly method: "SpendableBalances";
    readonly Request: typeof QuerySpendableBalancesRequest;
    readonly Response: typeof QuerySpendableBalancesResponse;
};
/**
 * SpendableBalanceByDenom queries the spendable balance of a single denom for
 * a single account.
 *
 * When called from another module, this query might consume a high amount of
 * gas if the pagination field is incorrectly set.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from rpc cosmos.bank.v1beta1.Query.SpendableBalanceByDenom
 */
export declare const QuerySpendableBalanceByDenomService: {
    readonly typeName: "cosmos.bank.v1beta1.Query";
    readonly method: "SpendableBalanceByDenom";
    readonly Request: typeof QuerySpendableBalanceByDenomRequest;
    readonly Response: typeof QuerySpendableBalanceByDenomResponse;
};
/**
 * TotalSupply queries the total supply of all coins.
 *
 * When called from another module, this query might consume a high amount of
 * gas if the pagination field is incorrectly set.
 *
 * @generated from rpc cosmos.bank.v1beta1.Query.TotalSupply
 */
export declare const QueryTotalSupplyService: {
    readonly typeName: "cosmos.bank.v1beta1.Query";
    readonly method: "TotalSupply";
    readonly Request: typeof QueryTotalSupplyRequest;
    readonly Response: typeof QueryTotalSupplyResponse;
};
/**
 * SupplyOf queries the supply of a single coin.
 *
 * When called from another module, this query might consume a high amount of
 * gas if the pagination field is incorrectly set.
 *
 * @generated from rpc cosmos.bank.v1beta1.Query.SupplyOf
 */
export declare const QuerySupplyOfService: {
    readonly typeName: "cosmos.bank.v1beta1.Query";
    readonly method: "SupplyOf";
    readonly Request: typeof QuerySupplyOfRequest;
    readonly Response: typeof QuerySupplyOfResponse;
};
/**
 * Params queries the parameters of x/bank module.
 *
 * @generated from rpc cosmos.bank.v1beta1.Query.Params
 */
export declare const QueryParamsService: {
    readonly typeName: "cosmos.bank.v1beta1.Query";
    readonly method: "Params";
    readonly Request: typeof QueryParamsRequest;
    readonly Response: typeof QueryParamsResponse;
};
/**
 * DenomsMetadata queries the client metadata of a given coin denomination.
 *
 * @generated from rpc cosmos.bank.v1beta1.Query.DenomMetadata
 */
export declare const QueryDenomMetadataService: {
    readonly typeName: "cosmos.bank.v1beta1.Query";
    readonly method: "DenomMetadata";
    readonly Request: typeof QueryDenomMetadataRequest;
    readonly Response: typeof QueryDenomMetadataResponse;
};
/**
 * DenomsMetadata queries the client metadata for all registered coin
 * denominations.
 *
 * @generated from rpc cosmos.bank.v1beta1.Query.DenomsMetadata
 */
export declare const QueryDenomsMetadataService: {
    readonly typeName: "cosmos.bank.v1beta1.Query";
    readonly method: "DenomsMetadata";
    readonly Request: typeof QueryDenomsMetadataRequest;
    readonly Response: typeof QueryDenomsMetadataResponse;
};
/**
 * DenomOwners queries for all account addresses that own a particular token
 * denomination.
 *
 * When called from another module, this query might consume a high amount of
 * gas if the pagination field is incorrectly set.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from rpc cosmos.bank.v1beta1.Query.DenomOwners
 */
export declare const QueryDenomOwnersService: {
    readonly typeName: "cosmos.bank.v1beta1.Query";
    readonly method: "DenomOwners";
    readonly Request: typeof QueryDenomOwnersRequest;
    readonly Response: typeof QueryDenomOwnersResponse;
};
/**
 * SendEnabled queries for SendEnabled entries.
 *
 * This query only returns denominations that have specific SendEnabled settings.
 * Any denomination that does not have a specific setting will use the default
 * params.default_send_enabled, and will not be returned by this query.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from rpc cosmos.bank.v1beta1.Query.SendEnabled
 */
export declare const QuerySendEnabledService: {
    readonly typeName: "cosmos.bank.v1beta1.Query";
    readonly method: "SendEnabled";
    readonly Request: typeof QuerySendEnabledRequest;
    readonly Response: typeof QuerySendEnabledResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map