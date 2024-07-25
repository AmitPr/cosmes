import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { Hook } from "./hook_pb.js";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination_pb.js";
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 *
 * @generated from message kujira.scheduler.QueryParamsRequest
 */
export declare class QueryParamsRequest extends Message<QueryParamsRequest> {
    constructor(data?: PartialMessage<QueryParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.scheduler.QueryParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 *
 * @generated from message kujira.scheduler.QueryParamsResponse
 */
export declare class QueryParamsResponse extends Message<QueryParamsResponse> {
    /**
     * params holds all the parameters of this module.
     *
     * @generated from field: kujira.scheduler.Params params = 1;
     */
    params?: Params;
    constructor(data?: PartialMessage<QueryParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.scheduler.QueryParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean;
}
/**
 * @generated from message kujira.scheduler.QueryGetHookRequest
 */
export declare class QueryGetHookRequest extends Message<QueryGetHookRequest> {
    /**
     * @generated from field: uint64 id = 1;
     */
    id: bigint;
    constructor(data?: PartialMessage<QueryGetHookRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.scheduler.QueryGetHookRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetHookRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetHookRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetHookRequest;
    static equals(a: QueryGetHookRequest | PlainMessage<QueryGetHookRequest> | undefined, b: QueryGetHookRequest | PlainMessage<QueryGetHookRequest> | undefined): boolean;
}
/**
 * @generated from message kujira.scheduler.QueryGetHookResponse
 */
export declare class QueryGetHookResponse extends Message<QueryGetHookResponse> {
    /**
     * @generated from field: kujira.scheduler.Hook Hook = 1;
     */
    Hook?: Hook;
    constructor(data?: PartialMessage<QueryGetHookResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.scheduler.QueryGetHookResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGetHookResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGetHookResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGetHookResponse;
    static equals(a: QueryGetHookResponse | PlainMessage<QueryGetHookResponse> | undefined, b: QueryGetHookResponse | PlainMessage<QueryGetHookResponse> | undefined): boolean;
}
/**
 * @generated from message kujira.scheduler.QueryAllHookRequest
 */
export declare class QueryAllHookRequest extends Message<QueryAllHookRequest> {
    /**
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryAllHookRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.scheduler.QueryAllHookRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAllHookRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAllHookRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAllHookRequest;
    static equals(a: QueryAllHookRequest | PlainMessage<QueryAllHookRequest> | undefined, b: QueryAllHookRequest | PlainMessage<QueryAllHookRequest> | undefined): boolean;
}
/**
 * @generated from message kujira.scheduler.QueryAllHookResponse
 */
export declare class QueryAllHookResponse extends Message<QueryAllHookResponse> {
    /**
     * @generated from field: repeated kujira.scheduler.Hook Hook = 1;
     */
    Hook: Hook[];
    /**
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryAllHookResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.scheduler.QueryAllHookResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAllHookResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAllHookResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAllHookResponse;
    static equals(a: QueryAllHookResponse | PlainMessage<QueryAllHookResponse> | undefined, b: QueryAllHookResponse | PlainMessage<QueryAllHookResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map