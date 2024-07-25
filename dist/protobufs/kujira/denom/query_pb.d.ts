import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { DenomAuthorityMetadata } from "./authorityMetadata_pb.js";
/**
 * QueryNoFeeAccountsRequest is the request type for the Query/NoFeeAccounts RPC method.
 *
 * @generated from message kujira.denom.QueryNoFeeAccountsRequest
 */
export declare class QueryNoFeeAccountsRequest extends Message<QueryNoFeeAccountsRequest> {
    constructor(data?: PartialMessage<QueryNoFeeAccountsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.denom.QueryNoFeeAccountsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryNoFeeAccountsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryNoFeeAccountsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryNoFeeAccountsRequest;
    static equals(a: QueryNoFeeAccountsRequest | PlainMessage<QueryNoFeeAccountsRequest> | undefined, b: QueryNoFeeAccountsRequest | PlainMessage<QueryNoFeeAccountsRequest> | undefined): boolean;
}
/**
 * QueryNoFeeAccountsResponse is the response type for the Query/NoFeeAccounts RPC method.
 *
 * @generated from message kujira.denom.QueryNoFeeAccountsResponse
 */
export declare class QueryNoFeeAccountsResponse extends Message<QueryNoFeeAccountsResponse> {
    /**
     * params defines the parameters of the module.
     *
     * @generated from field: repeated string accounts = 1;
     */
    accounts: string[];
    constructor(data?: PartialMessage<QueryNoFeeAccountsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.denom.QueryNoFeeAccountsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryNoFeeAccountsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryNoFeeAccountsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryNoFeeAccountsResponse;
    static equals(a: QueryNoFeeAccountsResponse | PlainMessage<QueryNoFeeAccountsResponse> | undefined, b: QueryNoFeeAccountsResponse | PlainMessage<QueryNoFeeAccountsResponse> | undefined): boolean;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message kujira.denom.QueryParamsRequest
 */
export declare class QueryParamsRequest extends Message<QueryParamsRequest> {
    constructor(data?: PartialMessage<QueryParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.denom.QueryParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 *
 * @generated from message kujira.denom.QueryParamsResponse
 */
export declare class QueryParamsResponse extends Message<QueryParamsResponse> {
    /**
     * params defines the parameters of the module.
     *
     * @generated from field: kujira.denom.Params params = 1;
     */
    params?: Params;
    constructor(data?: PartialMessage<QueryParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.denom.QueryParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean;
}
/**
 * @generated from message kujira.denom.QueryDenomAuthorityMetadataRequest
 */
export declare class QueryDenomAuthorityMetadataRequest extends Message<QueryDenomAuthorityMetadataRequest> {
    /**
     * @generated from field: string denom = 1;
     */
    denom: string;
    constructor(data?: PartialMessage<QueryDenomAuthorityMetadataRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.denom.QueryDenomAuthorityMetadataRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomAuthorityMetadataRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomAuthorityMetadataRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomAuthorityMetadataRequest;
    static equals(a: QueryDenomAuthorityMetadataRequest | PlainMessage<QueryDenomAuthorityMetadataRequest> | undefined, b: QueryDenomAuthorityMetadataRequest | PlainMessage<QueryDenomAuthorityMetadataRequest> | undefined): boolean;
}
/**
 * @generated from message kujira.denom.QueryDenomAuthorityMetadataResponse
 */
export declare class QueryDenomAuthorityMetadataResponse extends Message<QueryDenomAuthorityMetadataResponse> {
    /**
     * @generated from field: kujira.denom.DenomAuthorityMetadata authority_metadata = 1;
     */
    authorityMetadata?: DenomAuthorityMetadata;
    constructor(data?: PartialMessage<QueryDenomAuthorityMetadataResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.denom.QueryDenomAuthorityMetadataResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomAuthorityMetadataResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomAuthorityMetadataResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomAuthorityMetadataResponse;
    static equals(a: QueryDenomAuthorityMetadataResponse | PlainMessage<QueryDenomAuthorityMetadataResponse> | undefined, b: QueryDenomAuthorityMetadataResponse | PlainMessage<QueryDenomAuthorityMetadataResponse> | undefined): boolean;
}
/**
 * @generated from message kujira.denom.QueryDenomsFromCreatorRequest
 */
export declare class QueryDenomsFromCreatorRequest extends Message<QueryDenomsFromCreatorRequest> {
    /**
     * @generated from field: string creator = 1;
     */
    creator: string;
    constructor(data?: PartialMessage<QueryDenomsFromCreatorRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.denom.QueryDenomsFromCreatorRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomsFromCreatorRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomsFromCreatorRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomsFromCreatorRequest;
    static equals(a: QueryDenomsFromCreatorRequest | PlainMessage<QueryDenomsFromCreatorRequest> | undefined, b: QueryDenomsFromCreatorRequest | PlainMessage<QueryDenomsFromCreatorRequest> | undefined): boolean;
}
/**
 * @generated from message kujira.denom.QueryDenomsFromCreatorResponse
 */
export declare class QueryDenomsFromCreatorResponse extends Message<QueryDenomsFromCreatorResponse> {
    /**
     * @generated from field: repeated string denoms = 1;
     */
    denoms: string[];
    constructor(data?: PartialMessage<QueryDenomsFromCreatorResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.denom.QueryDenomsFromCreatorResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomsFromCreatorResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomsFromCreatorResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomsFromCreatorResponse;
    static equals(a: QueryDenomsFromCreatorResponse | PlainMessage<QueryDenomsFromCreatorResponse> | undefined, b: QueryDenomsFromCreatorResponse | PlainMessage<QueryDenomsFromCreatorResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map