// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/ibc-rate-limit/v1beta1/query.proto (package osmosis.ibcratelimit.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";

/**
 * ParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message osmosis.ibcratelimit.v1beta1.ParamsRequest
 */
export class ParamsRequest extends Message<ParamsRequest> {
  constructor(data?: PartialMessage<ParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.ibcratelimit.v1beta1.ParamsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ParamsRequest {
    return new ParamsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ParamsRequest {
    return new ParamsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ParamsRequest {
    return new ParamsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ParamsRequest | PlainMessage<ParamsRequest> | undefined, b: ParamsRequest | PlainMessage<ParamsRequest> | undefined): boolean {
    return proto3.util.equals(ParamsRequest, a, b);
  }
}

/**
 * aramsResponse is the response type for the Query/Params RPC method.
 *
 * @generated from message osmosis.ibcratelimit.v1beta1.ParamsResponse
 */
export class ParamsResponse extends Message<ParamsResponse> {
  /**
   * params defines the parameters of the module.
   *
   * @generated from field: osmosis.ibcratelimit.v1beta1.Params params = 1;
   */
  params?: Params;

  constructor(data?: PartialMessage<ParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.ibcratelimit.v1beta1.ParamsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ParamsResponse {
    return new ParamsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ParamsResponse {
    return new ParamsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ParamsResponse {
    return new ParamsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: ParamsResponse | PlainMessage<ParamsResponse> | undefined, b: ParamsResponse | PlainMessage<ParamsResponse> | undefined): boolean {
    return proto3.util.equals(ParamsResponse, a, b);
  }
}
