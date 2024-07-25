import { AddressBytesToStringRequest, AddressBytesToStringResponse, AddressStringToBytesRequest, AddressStringToBytesResponse, Bech32PrefixRequest, Bech32PrefixResponse, QueryAccountAddressByIDRequest, QueryAccountAddressByIDResponse, QueryAccountInfoRequest, QueryAccountInfoResponse, QueryAccountRequest, QueryAccountResponse, QueryAccountsRequest, QueryAccountsResponse, QueryModuleAccountByNameRequest, QueryModuleAccountByNameResponse, QueryModuleAccountsRequest, QueryModuleAccountsResponse, QueryParamsRequest, QueryParamsResponse } from "./query_pb.js";
/**
 * Accounts returns all the existing accounts.
 *
 * When called from another module, this query might consume a high amount of
 * gas if the pagination field is incorrectly set.
 *
 * Since: cosmos-sdk 0.43
 *
 * @generated from rpc cosmos.auth.v1beta1.Query.Accounts
 */
export declare const QueryAccountsService: {
    readonly typeName: "cosmos.auth.v1beta1.Query";
    readonly method: "Accounts";
    readonly Request: typeof QueryAccountsRequest;
    readonly Response: typeof QueryAccountsResponse;
};
/**
 * Account returns account details based on address.
 *
 * @generated from rpc cosmos.auth.v1beta1.Query.Account
 */
export declare const QueryAccountService: {
    readonly typeName: "cosmos.auth.v1beta1.Query";
    readonly method: "Account";
    readonly Request: typeof QueryAccountRequest;
    readonly Response: typeof QueryAccountResponse;
};
/**
 * AccountAddressByID returns account address based on account number.
 *
 * Since: cosmos-sdk 0.46.2
 *
 * @generated from rpc cosmos.auth.v1beta1.Query.AccountAddressByID
 */
export declare const QueryAccountAddressByIDService: {
    readonly typeName: "cosmos.auth.v1beta1.Query";
    readonly method: "AccountAddressByID";
    readonly Request: typeof QueryAccountAddressByIDRequest;
    readonly Response: typeof QueryAccountAddressByIDResponse;
};
/**
 * Params queries all parameters.
 *
 * @generated from rpc cosmos.auth.v1beta1.Query.Params
 */
export declare const QueryParamsService: {
    readonly typeName: "cosmos.auth.v1beta1.Query";
    readonly method: "Params";
    readonly Request: typeof QueryParamsRequest;
    readonly Response: typeof QueryParamsResponse;
};
/**
 * ModuleAccounts returns all the existing module accounts.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from rpc cosmos.auth.v1beta1.Query.ModuleAccounts
 */
export declare const QueryModuleAccountsService: {
    readonly typeName: "cosmos.auth.v1beta1.Query";
    readonly method: "ModuleAccounts";
    readonly Request: typeof QueryModuleAccountsRequest;
    readonly Response: typeof QueryModuleAccountsResponse;
};
/**
 * ModuleAccountByName returns the module account info by module name
 *
 * @generated from rpc cosmos.auth.v1beta1.Query.ModuleAccountByName
 */
export declare const QueryModuleAccountByNameService: {
    readonly typeName: "cosmos.auth.v1beta1.Query";
    readonly method: "ModuleAccountByName";
    readonly Request: typeof QueryModuleAccountByNameRequest;
    readonly Response: typeof QueryModuleAccountByNameResponse;
};
/**
 * Bech32Prefix queries bech32Prefix
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from rpc cosmos.auth.v1beta1.Query.Bech32Prefix
 */
export declare const QueryBech32PrefixService: {
    readonly typeName: "cosmos.auth.v1beta1.Query";
    readonly method: "Bech32Prefix";
    readonly Request: typeof Bech32PrefixRequest;
    readonly Response: typeof Bech32PrefixResponse;
};
/**
 * AddressBytesToString converts Account Address bytes to string
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from rpc cosmos.auth.v1beta1.Query.AddressBytesToString
 */
export declare const QueryAddressBytesToStringService: {
    readonly typeName: "cosmos.auth.v1beta1.Query";
    readonly method: "AddressBytesToString";
    readonly Request: typeof AddressBytesToStringRequest;
    readonly Response: typeof AddressBytesToStringResponse;
};
/**
 * AddressStringToBytes converts Address string to bytes
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from rpc cosmos.auth.v1beta1.Query.AddressStringToBytes
 */
export declare const QueryAddressStringToBytesService: {
    readonly typeName: "cosmos.auth.v1beta1.Query";
    readonly method: "AddressStringToBytes";
    readonly Request: typeof AddressStringToBytesRequest;
    readonly Response: typeof AddressStringToBytesResponse;
};
/**
 * AccountInfo queries account info which is common to all account types.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from rpc cosmos.auth.v1beta1.Query.AccountInfo
 */
export declare const QueryAccountInfoService: {
    readonly typeName: "cosmos.auth.v1beta1.Query";
    readonly method: "AccountInfo";
    readonly Request: typeof QueryAccountInfoRequest;
    readonly Response: typeof QueryAccountInfoResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map