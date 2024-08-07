// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file ibc/applications/interchain_accounts/host/v1/host.proto (package ibc.applications.interchain_accounts.host.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Params defines the set of on-chain interchain accounts parameters.
 * The following parameters may be used to disable the host submodule.
 *
 * @generated from message ibc.applications.interchain_accounts.host.v1.Params
 */
export class Params extends Message<Params> {
  /**
   * host_enabled enables or disables the host submodule.
   *
   * @generated from field: bool host_enabled = 1;
   */
  hostEnabled = false;

  /**
   * allow_messages defines a list of sdk message typeURLs allowed to be executed on a host chain.
   *
   * @generated from field: repeated string allow_messages = 2;
   */
  allowMessages: string[] = [];

  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.interchain_accounts.host.v1.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "host_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "allow_messages", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params {
    return new Params().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params {
    return new Params().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params {
    return new Params().fromJsonString(jsonString, options);
  }

  static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean {
    return proto3.util.equals(Params, a, b);
  }
}

/**
 * QueryRequest defines the parameters for a particular query request
 * by an interchain account.
 *
 * @generated from message ibc.applications.interchain_accounts.host.v1.QueryRequest
 */
export class QueryRequest extends Message<QueryRequest> {
  /**
   * path defines the path of the query request as defined by ADR-021.
   * https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-021-protobuf-query-encoding.md#custom-query-registration-and-routing
   *
   * @generated from field: string path = 1;
   */
  path = "";

  /**
   * data defines the payload of the query request as defined by ADR-021.
   * https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-021-protobuf-query-encoding.md#custom-query-registration-and-routing
   *
   * @generated from field: bytes data = 2;
   */
  data = new Uint8Array(0);

  constructor(data?: PartialMessage<QueryRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.interchain_accounts.host.v1.QueryRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryRequest {
    return new QueryRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryRequest {
    return new QueryRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryRequest {
    return new QueryRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryRequest | PlainMessage<QueryRequest> | undefined, b: QueryRequest | PlainMessage<QueryRequest> | undefined): boolean {
    return proto3.util.equals(QueryRequest, a, b);
  }
}

