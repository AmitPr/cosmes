// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file ibc/applications/transfer/v1/query.proto (package ibc.applications.transfer.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { DenomTrace, Params } from "./transfer_pb.js";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination_pb.js";
import { Coin } from "../../../../cosmos/base/v1beta1/coin_pb.js";

/**
 * QueryDenomTraceRequest is the request type for the Query/DenomTrace RPC
 * method
 *
 * @generated from message ibc.applications.transfer.v1.QueryDenomTraceRequest
 */
export class QueryDenomTraceRequest extends Message<QueryDenomTraceRequest> {
  /**
   * hash (in hex format) or denom (full denom with ibc prefix) of the denomination trace information.
   *
   * @generated from field: string hash = 1;
   */
  hash = "";

  constructor(data?: PartialMessage<QueryDenomTraceRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.transfer.v1.QueryDenomTraceRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomTraceRequest {
    return new QueryDenomTraceRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomTraceRequest {
    return new QueryDenomTraceRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomTraceRequest {
    return new QueryDenomTraceRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryDenomTraceRequest | PlainMessage<QueryDenomTraceRequest> | undefined, b: QueryDenomTraceRequest | PlainMessage<QueryDenomTraceRequest> | undefined): boolean {
    return proto3.util.equals(QueryDenomTraceRequest, a, b);
  }
}

/**
 * QueryDenomTraceResponse is the response type for the Query/DenomTrace RPC
 * method.
 *
 * @generated from message ibc.applications.transfer.v1.QueryDenomTraceResponse
 */
export class QueryDenomTraceResponse extends Message<QueryDenomTraceResponse> {
  /**
   * denom_trace returns the requested denomination trace information.
   *
   * @generated from field: ibc.applications.transfer.v1.DenomTrace denom_trace = 1;
   */
  denomTrace?: DenomTrace;

  constructor(data?: PartialMessage<QueryDenomTraceResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.transfer.v1.QueryDenomTraceResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "denom_trace", kind: "message", T: DenomTrace },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomTraceResponse {
    return new QueryDenomTraceResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomTraceResponse {
    return new QueryDenomTraceResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomTraceResponse {
    return new QueryDenomTraceResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryDenomTraceResponse | PlainMessage<QueryDenomTraceResponse> | undefined, b: QueryDenomTraceResponse | PlainMessage<QueryDenomTraceResponse> | undefined): boolean {
    return proto3.util.equals(QueryDenomTraceResponse, a, b);
  }
}

/**
 * QueryConnectionsRequest is the request type for the Query/DenomTraces RPC
 * method
 *
 * @generated from message ibc.applications.transfer.v1.QueryDenomTracesRequest
 */
export class QueryDenomTracesRequest extends Message<QueryDenomTracesRequest> {
  /**
   * pagination defines an optional pagination for the request.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<QueryDenomTracesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.transfer.v1.QueryDenomTracesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomTracesRequest {
    return new QueryDenomTracesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomTracesRequest {
    return new QueryDenomTracesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomTracesRequest {
    return new QueryDenomTracesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryDenomTracesRequest | PlainMessage<QueryDenomTracesRequest> | undefined, b: QueryDenomTracesRequest | PlainMessage<QueryDenomTracesRequest> | undefined): boolean {
    return proto3.util.equals(QueryDenomTracesRequest, a, b);
  }
}

/**
 * QueryConnectionsResponse is the response type for the Query/DenomTraces RPC
 * method.
 *
 * @generated from message ibc.applications.transfer.v1.QueryDenomTracesResponse
 */
export class QueryDenomTracesResponse extends Message<QueryDenomTracesResponse> {
  /**
   * denom_traces returns all denominations trace information.
   *
   * @generated from field: repeated ibc.applications.transfer.v1.DenomTrace denom_traces = 1;
   */
  denomTraces: DenomTrace[] = [];

  /**
   * pagination defines the pagination in the response.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<QueryDenomTracesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.transfer.v1.QueryDenomTracesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "denom_traces", kind: "message", T: DenomTrace, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomTracesResponse {
    return new QueryDenomTracesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomTracesResponse {
    return new QueryDenomTracesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomTracesResponse {
    return new QueryDenomTracesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryDenomTracesResponse | PlainMessage<QueryDenomTracesResponse> | undefined, b: QueryDenomTracesResponse | PlainMessage<QueryDenomTracesResponse> | undefined): boolean {
    return proto3.util.equals(QueryDenomTracesResponse, a, b);
  }
}

/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message ibc.applications.transfer.v1.QueryParamsRequest
 */
export class QueryParamsRequest extends Message<QueryParamsRequest> {
  constructor(data?: PartialMessage<QueryParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.transfer.v1.QueryParamsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean {
    return proto3.util.equals(QueryParamsRequest, a, b);
  }
}

/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 *
 * @generated from message ibc.applications.transfer.v1.QueryParamsResponse
 */
export class QueryParamsResponse extends Message<QueryParamsResponse> {
  /**
   * params defines the parameters of the module.
   *
   * @generated from field: ibc.applications.transfer.v1.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<QueryParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.transfer.v1.QueryParamsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean {
    return proto3.util.equals(QueryParamsResponse, a, b);
  }
}

/**
 * QueryDenomHashRequest is the request type for the Query/DenomHash RPC
 * method
 *
 * @generated from message ibc.applications.transfer.v1.QueryDenomHashRequest
 */
export class QueryDenomHashRequest extends Message<QueryDenomHashRequest> {
  /**
   * The denomination trace ([port_id]/[channel_id])+/[denom]
   *
   * @generated from field: string trace = 1;
   */
  trace = "";

  constructor(data?: PartialMessage<QueryDenomHashRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.transfer.v1.QueryDenomHashRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "trace", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomHashRequest {
    return new QueryDenomHashRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomHashRequest {
    return new QueryDenomHashRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomHashRequest {
    return new QueryDenomHashRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryDenomHashRequest | PlainMessage<QueryDenomHashRequest> | undefined, b: QueryDenomHashRequest | PlainMessage<QueryDenomHashRequest> | undefined): boolean {
    return proto3.util.equals(QueryDenomHashRequest, a, b);
  }
}

/**
 * QueryDenomHashResponse is the response type for the Query/DenomHash RPC
 * method.
 *
 * @generated from message ibc.applications.transfer.v1.QueryDenomHashResponse
 */
export class QueryDenomHashResponse extends Message<QueryDenomHashResponse> {
  /**
   * hash (in hex format) of the denomination trace information.
   *
   * @generated from field: string hash = 1;
   */
  hash = "";

  constructor(data?: PartialMessage<QueryDenomHashResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.transfer.v1.QueryDenomHashResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDenomHashResponse {
    return new QueryDenomHashResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDenomHashResponse {
    return new QueryDenomHashResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDenomHashResponse {
    return new QueryDenomHashResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryDenomHashResponse | PlainMessage<QueryDenomHashResponse> | undefined, b: QueryDenomHashResponse | PlainMessage<QueryDenomHashResponse> | undefined): boolean {
    return proto3.util.equals(QueryDenomHashResponse, a, b);
  }
}

/**
 * QueryEscrowAddressRequest is the request type for the EscrowAddress RPC method.
 *
 * @generated from message ibc.applications.transfer.v1.QueryEscrowAddressRequest
 */
export class QueryEscrowAddressRequest extends Message<QueryEscrowAddressRequest> {
  /**
   * unique port identifier
   *
   * @generated from field: string port_id = 1;
   */
  portId = "";

  /**
   * unique channel identifier
   *
   * @generated from field: string channel_id = 2;
   */
  channelId = "";

  constructor(data?: PartialMessage<QueryEscrowAddressRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.transfer.v1.QueryEscrowAddressRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "port_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "channel_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryEscrowAddressRequest {
    return new QueryEscrowAddressRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryEscrowAddressRequest {
    return new QueryEscrowAddressRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryEscrowAddressRequest {
    return new QueryEscrowAddressRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryEscrowAddressRequest | PlainMessage<QueryEscrowAddressRequest> | undefined, b: QueryEscrowAddressRequest | PlainMessage<QueryEscrowAddressRequest> | undefined): boolean {
    return proto3.util.equals(QueryEscrowAddressRequest, a, b);
  }
}

/**
 * QueryEscrowAddressResponse is the response type of the EscrowAddress RPC method.
 *
 * @generated from message ibc.applications.transfer.v1.QueryEscrowAddressResponse
 */
export class QueryEscrowAddressResponse extends Message<QueryEscrowAddressResponse> {
  /**
   * the escrow account address
   *
   * @generated from field: string escrow_address = 1;
   */
  escrowAddress = "";

  constructor(data?: PartialMessage<QueryEscrowAddressResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.transfer.v1.QueryEscrowAddressResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "escrow_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryEscrowAddressResponse {
    return new QueryEscrowAddressResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryEscrowAddressResponse {
    return new QueryEscrowAddressResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryEscrowAddressResponse {
    return new QueryEscrowAddressResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryEscrowAddressResponse | PlainMessage<QueryEscrowAddressResponse> | undefined, b: QueryEscrowAddressResponse | PlainMessage<QueryEscrowAddressResponse> | undefined): boolean {
    return proto3.util.equals(QueryEscrowAddressResponse, a, b);
  }
}

/**
 * QueryTotalEscrowForDenomRequest is the request type for TotalEscrowForDenom RPC method.
 *
 * @generated from message ibc.applications.transfer.v1.QueryTotalEscrowForDenomRequest
 */
export class QueryTotalEscrowForDenomRequest extends Message<QueryTotalEscrowForDenomRequest> {
  /**
   * @generated from field: string denom = 1;
   */
  denom = "";

  constructor(data?: PartialMessage<QueryTotalEscrowForDenomRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.transfer.v1.QueryTotalEscrowForDenomRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTotalEscrowForDenomRequest {
    return new QueryTotalEscrowForDenomRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTotalEscrowForDenomRequest {
    return new QueryTotalEscrowForDenomRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTotalEscrowForDenomRequest {
    return new QueryTotalEscrowForDenomRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryTotalEscrowForDenomRequest | PlainMessage<QueryTotalEscrowForDenomRequest> | undefined, b: QueryTotalEscrowForDenomRequest | PlainMessage<QueryTotalEscrowForDenomRequest> | undefined): boolean {
    return proto3.util.equals(QueryTotalEscrowForDenomRequest, a, b);
  }
}

/**
 * QueryTotalEscrowForDenomResponse is the response type for TotalEscrowForDenom RPC method.
 *
 * @generated from message ibc.applications.transfer.v1.QueryTotalEscrowForDenomResponse
 */
export class QueryTotalEscrowForDenomResponse extends Message<QueryTotalEscrowForDenomResponse> {
  /**
   * @generated from field: cosmos.base.v1beta1.Coin amount = 1;
   */
  amount?: Coin;

  constructor(data?: PartialMessage<QueryTotalEscrowForDenomResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.transfer.v1.QueryTotalEscrowForDenomResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "amount", kind: "message", T: Coin },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTotalEscrowForDenomResponse {
    return new QueryTotalEscrowForDenomResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTotalEscrowForDenomResponse {
    return new QueryTotalEscrowForDenomResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTotalEscrowForDenomResponse {
    return new QueryTotalEscrowForDenomResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryTotalEscrowForDenomResponse | PlainMessage<QueryTotalEscrowForDenomResponse> | undefined, b: QueryTotalEscrowForDenomResponse | PlainMessage<QueryTotalEscrowForDenomResponse> | undefined): boolean {
    return proto3.util.equals(QueryTotalEscrowForDenomResponse, a, b);
  }
}

