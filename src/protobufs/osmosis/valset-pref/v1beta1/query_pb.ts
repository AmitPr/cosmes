// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/valset-pref/v1beta1/query.proto (package osmosis.valsetpref.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ValidatorPreference } from "./state_pb.js";

/**
 * Request type for UserValidatorPreferences.
 *
 * @generated from message osmosis.valsetpref.v1beta1.UserValidatorPreferencesRequest
 */
export class UserValidatorPreferencesRequest extends Message<UserValidatorPreferencesRequest> {
  /**
   * user account address
   *
   * @generated from field: string address = 1;
   */
  address = "";

  constructor(data?: PartialMessage<UserValidatorPreferencesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.valsetpref.v1beta1.UserValidatorPreferencesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserValidatorPreferencesRequest {
    return new UserValidatorPreferencesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserValidatorPreferencesRequest {
    return new UserValidatorPreferencesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserValidatorPreferencesRequest {
    return new UserValidatorPreferencesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: UserValidatorPreferencesRequest | PlainMessage<UserValidatorPreferencesRequest> | undefined, b: UserValidatorPreferencesRequest | PlainMessage<UserValidatorPreferencesRequest> | undefined): boolean {
    return proto3.util.equals(UserValidatorPreferencesRequest, a, b);
  }
}

/**
 * Response type the QueryUserValidatorPreferences query request
 *
 * @generated from message osmosis.valsetpref.v1beta1.UserValidatorPreferencesResponse
 */
export class UserValidatorPreferencesResponse extends Message<UserValidatorPreferencesResponse> {
  /**
   * @generated from field: repeated osmosis.valsetpref.v1beta1.ValidatorPreference preferences = 1;
   */
  preferences: ValidatorPreference[] = [];

  constructor(data?: PartialMessage<UserValidatorPreferencesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.valsetpref.v1beta1.UserValidatorPreferencesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "preferences", kind: "message", T: ValidatorPreference, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserValidatorPreferencesResponse {
    return new UserValidatorPreferencesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserValidatorPreferencesResponse {
    return new UserValidatorPreferencesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserValidatorPreferencesResponse {
    return new UserValidatorPreferencesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: UserValidatorPreferencesResponse | PlainMessage<UserValidatorPreferencesResponse> | undefined, b: UserValidatorPreferencesResponse | PlainMessage<UserValidatorPreferencesResponse> | undefined): boolean {
    return proto3.util.equals(UserValidatorPreferencesResponse, a, b);
  }
}
