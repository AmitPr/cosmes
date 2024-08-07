// @generated by protoc-gen-ts-protobuf-any v0.0.2 with parameter "target=ts"
// @generated from file cosmos/auth/v1beta1/query.proto (package cosmos.auth.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AddressBytesToStringRequest, AddressStringToBytesRequest, Bech32PrefixRequest, QueryAccountAddressByIDRequest, QueryAccountInfoRequest, QueryAccountRequest, QueryAccountsRequest, QueryModuleAccountByNameRequest, QueryModuleAccountsRequest, QueryParamsRequest } from "./query_pb.js";

export const QueryRegistry = {
  "cosmos.auth.v1beta1.QueryAccounts": QueryAccountsRequest,
  "cosmos.auth.v1beta1.QueryAccount": QueryAccountRequest,
  "cosmos.auth.v1beta1.QueryAccountAddressByID": QueryAccountAddressByIDRequest,
  "cosmos.auth.v1beta1.QueryParams": QueryParamsRequest,
  "cosmos.auth.v1beta1.QueryModuleAccounts": QueryModuleAccountsRequest,
  "cosmos.auth.v1beta1.QueryModuleAccountByName": QueryModuleAccountByNameRequest,
  "cosmos.auth.v1beta1.QueryBech32Prefix": Bech32PrefixRequest,
  "cosmos.auth.v1beta1.QueryAddressBytesToString": AddressBytesToStringRequest,
  "cosmos.auth.v1beta1.QueryAddressStringToBytes": AddressStringToBytesRequest,
  "cosmos.auth.v1beta1.QueryAccountInfo": QueryAccountInfoRequest,
};
