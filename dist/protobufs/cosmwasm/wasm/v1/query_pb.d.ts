import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { AccessConfig, ContractCodeHistoryEntry, ContractInfo, Model, Params } from "./types_pb.js";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination_pb.js";
/**
 * QueryContractInfoRequest is the request type for the Query/ContractInfo RPC
 * method
 *
 * @generated from message cosmwasm.wasm.v1.QueryContractInfoRequest
 */
export declare class QueryContractInfoRequest extends Message<QueryContractInfoRequest> {
    /**
     * address is the address of the contract to query
     *
     * @generated from field: string address = 1;
     */
    address: string;
    constructor(data?: PartialMessage<QueryContractInfoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.QueryContractInfoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryContractInfoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryContractInfoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryContractInfoRequest;
    static equals(a: QueryContractInfoRequest | PlainMessage<QueryContractInfoRequest> | undefined, b: QueryContractInfoRequest | PlainMessage<QueryContractInfoRequest> | undefined): boolean;
}
/**
 * QueryContractInfoResponse is the response type for the Query/ContractInfo RPC
 * method
 *
 * @generated from message cosmwasm.wasm.v1.QueryContractInfoResponse
 */
export declare class QueryContractInfoResponse extends Message<QueryContractInfoResponse> {
    /**
     * address is the address of the contract
     *
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * @generated from field: cosmwasm.wasm.v1.ContractInfo contract_info = 2;
     */
    contractInfo?: ContractInfo;
    constructor(data?: PartialMessage<QueryContractInfoResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.QueryContractInfoResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryContractInfoResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryContractInfoResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryContractInfoResponse;
    static equals(a: QueryContractInfoResponse | PlainMessage<QueryContractInfoResponse> | undefined, b: QueryContractInfoResponse | PlainMessage<QueryContractInfoResponse> | undefined): boolean;
}
/**
 * QueryContractHistoryRequest is the request type for the Query/ContractHistory
 * RPC method
 *
 * @generated from message cosmwasm.wasm.v1.QueryContractHistoryRequest
 */
export declare class QueryContractHistoryRequest extends Message<QueryContractHistoryRequest> {
    /**
     * address is the address of the contract to query
     *
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryContractHistoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.QueryContractHistoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryContractHistoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryContractHistoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryContractHistoryRequest;
    static equals(a: QueryContractHistoryRequest | PlainMessage<QueryContractHistoryRequest> | undefined, b: QueryContractHistoryRequest | PlainMessage<QueryContractHistoryRequest> | undefined): boolean;
}
/**
 * QueryContractHistoryResponse is the response type for the
 * Query/ContractHistory RPC method
 *
 * @generated from message cosmwasm.wasm.v1.QueryContractHistoryResponse
 */
export declare class QueryContractHistoryResponse extends Message<QueryContractHistoryResponse> {
    /**
     * @generated from field: repeated cosmwasm.wasm.v1.ContractCodeHistoryEntry entries = 1;
     */
    entries: ContractCodeHistoryEntry[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryContractHistoryResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.QueryContractHistoryResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryContractHistoryResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryContractHistoryResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryContractHistoryResponse;
    static equals(a: QueryContractHistoryResponse | PlainMessage<QueryContractHistoryResponse> | undefined, b: QueryContractHistoryResponse | PlainMessage<QueryContractHistoryResponse> | undefined): boolean;
}
/**
 * QueryContractsByCodeRequest is the request type for the Query/ContractsByCode
 * RPC method
 *
 * @generated from message cosmwasm.wasm.v1.QueryContractsByCodeRequest
 */
export declare class QueryContractsByCodeRequest extends Message<QueryContractsByCodeRequest> {
    /**
     * grpc-gateway_out does not support Go style CodID
     *
     * @generated from field: uint64 code_id = 1;
     */
    codeId: bigint;
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryContractsByCodeRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.QueryContractsByCodeRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryContractsByCodeRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryContractsByCodeRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryContractsByCodeRequest;
    static equals(a: QueryContractsByCodeRequest | PlainMessage<QueryContractsByCodeRequest> | undefined, b: QueryContractsByCodeRequest | PlainMessage<QueryContractsByCodeRequest> | undefined): boolean;
}
/**
 * QueryContractsByCodeResponse is the response type for the
 * Query/ContractsByCode RPC method
 *
 * @generated from message cosmwasm.wasm.v1.QueryContractsByCodeResponse
 */
export declare class QueryContractsByCodeResponse extends Message<QueryContractsByCodeResponse> {
    /**
     * contracts are a set of contract addresses
     *
     * @generated from field: repeated string contracts = 1;
     */
    contracts: string[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryContractsByCodeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.QueryContractsByCodeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryContractsByCodeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryContractsByCodeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryContractsByCodeResponse;
    static equals(a: QueryContractsByCodeResponse | PlainMessage<QueryContractsByCodeResponse> | undefined, b: QueryContractsByCodeResponse | PlainMessage<QueryContractsByCodeResponse> | undefined): boolean;
}
/**
 * QueryAllContractStateRequest is the request type for the
 * Query/AllContractState RPC method
 *
 * @generated from message cosmwasm.wasm.v1.QueryAllContractStateRequest
 */
export declare class QueryAllContractStateRequest extends Message<QueryAllContractStateRequest> {
    /**
     * address is the address of the contract
     *
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryAllContractStateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.QueryAllContractStateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAllContractStateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAllContractStateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAllContractStateRequest;
    static equals(a: QueryAllContractStateRequest | PlainMessage<QueryAllContractStateRequest> | undefined, b: QueryAllContractStateRequest | PlainMessage<QueryAllContractStateRequest> | undefined): boolean;
}
/**
 * QueryAllContractStateResponse is the response type for the
 * Query/AllContractState RPC method
 *
 * @generated from message cosmwasm.wasm.v1.QueryAllContractStateResponse
 */
export declare class QueryAllContractStateResponse extends Message<QueryAllContractStateResponse> {
    /**
     * @generated from field: repeated cosmwasm.wasm.v1.Model models = 1;
     */
    models: Model[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryAllContractStateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.QueryAllContractStateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAllContractStateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAllContractStateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAllContractStateResponse;
    static equals(a: QueryAllContractStateResponse | PlainMessage<QueryAllContractStateResponse> | undefined, b: QueryAllContractStateResponse | PlainMessage<QueryAllContractStateResponse> | undefined): boolean;
}
/**
 * QueryRawContractStateRequest is the request type for the
 * Query/RawContractState RPC method
 *
 * @generated from message cosmwasm.wasm.v1.QueryRawContractStateRequest
 */
export declare class QueryRawContractStateRequest extends Message<QueryRawContractStateRequest> {
    /**
     * address is the address of the contract
     *
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * @generated from field: bytes query_data = 2;
     */
    queryData: Uint8Array;
    constructor(data?: PartialMessage<QueryRawContractStateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.QueryRawContractStateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryRawContractStateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryRawContractStateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryRawContractStateRequest;
    static equals(a: QueryRawContractStateRequest | PlainMessage<QueryRawContractStateRequest> | undefined, b: QueryRawContractStateRequest | PlainMessage<QueryRawContractStateRequest> | undefined): boolean;
}
/**
 * QueryRawContractStateResponse is the response type for the
 * Query/RawContractState RPC method
 *
 * @generated from message cosmwasm.wasm.v1.QueryRawContractStateResponse
 */
export declare class QueryRawContractStateResponse extends Message<QueryRawContractStateResponse> {
    /**
     * Data contains the raw store data
     *
     * @generated from field: bytes data = 1;
     */
    data: Uint8Array;
    constructor(data?: PartialMessage<QueryRawContractStateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.QueryRawContractStateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryRawContractStateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryRawContractStateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryRawContractStateResponse;
    static equals(a: QueryRawContractStateResponse | PlainMessage<QueryRawContractStateResponse> | undefined, b: QueryRawContractStateResponse | PlainMessage<QueryRawContractStateResponse> | undefined): boolean;
}
/**
 * QuerySmartContractStateRequest is the request type for the
 * Query/SmartContractState RPC method
 *
 * @generated from message cosmwasm.wasm.v1.QuerySmartContractStateRequest
 */
export declare class QuerySmartContractStateRequest extends Message<QuerySmartContractStateRequest> {
    /**
     * address is the address of the contract
     *
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * QueryData contains the query data passed to the contract
     *
     * @generated from field: bytes query_data = 2;
     */
    queryData: Uint8Array;
    constructor(data?: PartialMessage<QuerySmartContractStateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.QuerySmartContractStateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySmartContractStateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySmartContractStateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySmartContractStateRequest;
    static equals(a: QuerySmartContractStateRequest | PlainMessage<QuerySmartContractStateRequest> | undefined, b: QuerySmartContractStateRequest | PlainMessage<QuerySmartContractStateRequest> | undefined): boolean;
}
/**
 * QuerySmartContractStateResponse is the response type for the
 * Query/SmartContractState RPC method
 *
 * @generated from message cosmwasm.wasm.v1.QuerySmartContractStateResponse
 */
export declare class QuerySmartContractStateResponse extends Message<QuerySmartContractStateResponse> {
    /**
     * Data contains the json data returned from the smart contract
     *
     * @generated from field: bytes data = 1;
     */
    data: Uint8Array;
    constructor(data?: PartialMessage<QuerySmartContractStateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.QuerySmartContractStateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QuerySmartContractStateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QuerySmartContractStateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QuerySmartContractStateResponse;
    static equals(a: QuerySmartContractStateResponse | PlainMessage<QuerySmartContractStateResponse> | undefined, b: QuerySmartContractStateResponse | PlainMessage<QuerySmartContractStateResponse> | undefined): boolean;
}
/**
 * QueryCodeRequest is the request type for the Query/Code RPC method
 *
 * @generated from message cosmwasm.wasm.v1.QueryCodeRequest
 */
export declare class QueryCodeRequest extends Message<QueryCodeRequest> {
    /**
     * grpc-gateway_out does not support Go style CodID
     *
     * @generated from field: uint64 code_id = 1;
     */
    codeId: bigint;
    constructor(data?: PartialMessage<QueryCodeRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.QueryCodeRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCodeRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCodeRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCodeRequest;
    static equals(a: QueryCodeRequest | PlainMessage<QueryCodeRequest> | undefined, b: QueryCodeRequest | PlainMessage<QueryCodeRequest> | undefined): boolean;
}
/**
 * CodeInfoResponse contains code meta data from CodeInfo
 *
 * @generated from message cosmwasm.wasm.v1.CodeInfoResponse
 */
export declare class CodeInfoResponse extends Message<CodeInfoResponse> {
    /**
     * id for legacy support
     *
     * @generated from field: uint64 code_id = 1;
     */
    codeId: bigint;
    /**
     * @generated from field: string creator = 2;
     */
    creator: string;
    /**
     * @generated from field: bytes data_hash = 3;
     */
    dataHash: Uint8Array;
    /**
     * @generated from field: cosmwasm.wasm.v1.AccessConfig instantiate_permission = 6;
     */
    instantiatePermission?: AccessConfig;
    constructor(data?: PartialMessage<CodeInfoResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.CodeInfoResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CodeInfoResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CodeInfoResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CodeInfoResponse;
    static equals(a: CodeInfoResponse | PlainMessage<CodeInfoResponse> | undefined, b: CodeInfoResponse | PlainMessage<CodeInfoResponse> | undefined): boolean;
}
/**
 * QueryCodeResponse is the response type for the Query/Code RPC method
 *
 * @generated from message cosmwasm.wasm.v1.QueryCodeResponse
 */
export declare class QueryCodeResponse extends Message<QueryCodeResponse> {
    /**
     * @generated from field: cosmwasm.wasm.v1.CodeInfoResponse code_info = 1;
     */
    codeInfo?: CodeInfoResponse;
    /**
     * @generated from field: bytes data = 2;
     */
    data: Uint8Array;
    constructor(data?: PartialMessage<QueryCodeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.QueryCodeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCodeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCodeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCodeResponse;
    static equals(a: QueryCodeResponse | PlainMessage<QueryCodeResponse> | undefined, b: QueryCodeResponse | PlainMessage<QueryCodeResponse> | undefined): boolean;
}
/**
 * QueryCodesRequest is the request type for the Query/Codes RPC method
 *
 * @generated from message cosmwasm.wasm.v1.QueryCodesRequest
 */
export declare class QueryCodesRequest extends Message<QueryCodesRequest> {
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryCodesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.QueryCodesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCodesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCodesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCodesRequest;
    static equals(a: QueryCodesRequest | PlainMessage<QueryCodesRequest> | undefined, b: QueryCodesRequest | PlainMessage<QueryCodesRequest> | undefined): boolean;
}
/**
 * QueryCodesResponse is the response type for the Query/Codes RPC method
 *
 * @generated from message cosmwasm.wasm.v1.QueryCodesResponse
 */
export declare class QueryCodesResponse extends Message<QueryCodesResponse> {
    /**
     * @generated from field: repeated cosmwasm.wasm.v1.CodeInfoResponse code_infos = 1;
     */
    codeInfos: CodeInfoResponse[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryCodesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.QueryCodesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryCodesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryCodesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryCodesResponse;
    static equals(a: QueryCodesResponse | PlainMessage<QueryCodesResponse> | undefined, b: QueryCodesResponse | PlainMessage<QueryCodesResponse> | undefined): boolean;
}
/**
 * QueryPinnedCodesRequest is the request type for the Query/PinnedCodes
 * RPC method
 *
 * @generated from message cosmwasm.wasm.v1.QueryPinnedCodesRequest
 */
export declare class QueryPinnedCodesRequest extends Message<QueryPinnedCodesRequest> {
    /**
     * pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryPinnedCodesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.QueryPinnedCodesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPinnedCodesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPinnedCodesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPinnedCodesRequest;
    static equals(a: QueryPinnedCodesRequest | PlainMessage<QueryPinnedCodesRequest> | undefined, b: QueryPinnedCodesRequest | PlainMessage<QueryPinnedCodesRequest> | undefined): boolean;
}
/**
 * QueryPinnedCodesResponse is the response type for the
 * Query/PinnedCodes RPC method
 *
 * @generated from message cosmwasm.wasm.v1.QueryPinnedCodesResponse
 */
export declare class QueryPinnedCodesResponse extends Message<QueryPinnedCodesResponse> {
    /**
     * @generated from field: repeated uint64 code_ids = 1;
     */
    codeIds: bigint[];
    /**
     * pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryPinnedCodesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.QueryPinnedCodesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryPinnedCodesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryPinnedCodesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryPinnedCodesResponse;
    static equals(a: QueryPinnedCodesResponse | PlainMessage<QueryPinnedCodesResponse> | undefined, b: QueryPinnedCodesResponse | PlainMessage<QueryPinnedCodesResponse> | undefined): boolean;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message cosmwasm.wasm.v1.QueryParamsRequest
 */
export declare class QueryParamsRequest extends Message<QueryParamsRequest> {
    constructor(data?: PartialMessage<QueryParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.QueryParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 *
 * @generated from message cosmwasm.wasm.v1.QueryParamsResponse
 */
export declare class QueryParamsResponse extends Message<QueryParamsResponse> {
    /**
     * params defines the parameters of the module.
     *
     * @generated from field: cosmwasm.wasm.v1.Params params = 1;
     */
    params?: Params;
    constructor(data?: PartialMessage<QueryParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.QueryParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean;
}
/**
 * QueryContractsByCreatorRequest is the request type for the
 * Query/ContractsByCreator RPC method.
 *
 * @generated from message cosmwasm.wasm.v1.QueryContractsByCreatorRequest
 */
export declare class QueryContractsByCreatorRequest extends Message<QueryContractsByCreatorRequest> {
    /**
     * CreatorAddress is the address of contract creator
     *
     * @generated from field: string creator_address = 1;
     */
    creatorAddress: string;
    /**
     * Pagination defines an optional pagination for the request.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryContractsByCreatorRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.QueryContractsByCreatorRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryContractsByCreatorRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryContractsByCreatorRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryContractsByCreatorRequest;
    static equals(a: QueryContractsByCreatorRequest | PlainMessage<QueryContractsByCreatorRequest> | undefined, b: QueryContractsByCreatorRequest | PlainMessage<QueryContractsByCreatorRequest> | undefined): boolean;
}
/**
 * QueryContractsByCreatorResponse is the response type for the
 * Query/ContractsByCreator RPC method.
 *
 * @generated from message cosmwasm.wasm.v1.QueryContractsByCreatorResponse
 */
export declare class QueryContractsByCreatorResponse extends Message<QueryContractsByCreatorResponse> {
    /**
     * ContractAddresses result set
     *
     * @generated from field: repeated string contract_addresses = 1;
     */
    contractAddresses: string[];
    /**
     * Pagination defines the pagination in the response.
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryContractsByCreatorResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.QueryContractsByCreatorResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryContractsByCreatorResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryContractsByCreatorResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryContractsByCreatorResponse;
    static equals(a: QueryContractsByCreatorResponse | PlainMessage<QueryContractsByCreatorResponse> | undefined, b: QueryContractsByCreatorResponse | PlainMessage<QueryContractsByCreatorResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map