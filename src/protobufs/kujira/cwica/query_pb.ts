// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file kujira/cwica/query.proto (package kujira.cwica, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * QueryInterchainAccountRequest is the request type for the Query/InterchainAccountAddress RPC
 *
 * @generated from message kujira.cwica.QueryInterchainAccountRequest
 */
export class QueryInterchainAccountRequest extends Message<QueryInterchainAccountRequest> {
  /**
   * @generated from field: string owner = 1;
   */
  owner = "";

  /**
   * @generated from field: string connection_id = 2;
   */
  connectionId = "";

  /**
   * @generated from field: string account_id = 3;
   */
  accountId = "";

  constructor(data?: PartialMessage<QueryInterchainAccountRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kujira.cwica.QueryInterchainAccountRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "connection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "account_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryInterchainAccountRequest {
    return new QueryInterchainAccountRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryInterchainAccountRequest {
    return new QueryInterchainAccountRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryInterchainAccountRequest {
    return new QueryInterchainAccountRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryInterchainAccountRequest | PlainMessage<QueryInterchainAccountRequest> | undefined, b: QueryInterchainAccountRequest | PlainMessage<QueryInterchainAccountRequest> | undefined): boolean {
    return proto3.util.equals(QueryInterchainAccountRequest, a, b);
  }
}

/**
 * QueryInterchainAccountResponse the response type for the Query/InterchainAccountAddress RPC
 *
 * @generated from message kujira.cwica.QueryInterchainAccountResponse
 */
export class QueryInterchainAccountResponse extends Message<QueryInterchainAccountResponse> {
  /**
   * @generated from field: string interchain_account_address = 1;
   */
  interchainAccountAddress = "";

  constructor(data?: PartialMessage<QueryInterchainAccountResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kujira.cwica.QueryInterchainAccountResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "interchain_account_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryInterchainAccountResponse {
    return new QueryInterchainAccountResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryInterchainAccountResponse {
    return new QueryInterchainAccountResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryInterchainAccountResponse {
    return new QueryInterchainAccountResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryInterchainAccountResponse | PlainMessage<QueryInterchainAccountResponse> | undefined, b: QueryInterchainAccountResponse | PlainMessage<QueryInterchainAccountResponse> | undefined): boolean {
    return proto3.util.equals(QueryInterchainAccountResponse, a, b);
  }
}

