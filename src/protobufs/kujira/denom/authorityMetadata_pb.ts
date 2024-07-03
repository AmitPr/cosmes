// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file kujira/denom/authorityMetadata.proto (package kujira.denom, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * DenomAuthorityMetadata specifies metadata for addresses that have specific
 * capabilities over a token factory denom. Right now there is only one Admin
 * permission, but is planned to be extended to the future.
 *
 * @generated from message kujira.denom.DenomAuthorityMetadata
 */
export class DenomAuthorityMetadata extends Message<DenomAuthorityMetadata> {
  /**
   * Can be empty for no admin, or a valid kujira address
   *
   * @generated from field: string Admin = 1;
   */
  Admin = "";

  constructor(data?: PartialMessage<DenomAuthorityMetadata>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kujira.denom.DenomAuthorityMetadata";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "Admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DenomAuthorityMetadata {
    return new DenomAuthorityMetadata().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DenomAuthorityMetadata {
    return new DenomAuthorityMetadata().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DenomAuthorityMetadata {
    return new DenomAuthorityMetadata().fromJsonString(jsonString, options);
  }

  static equals(a: DenomAuthorityMetadata | PlainMessage<DenomAuthorityMetadata> | undefined, b: DenomAuthorityMetadata | PlainMessage<DenomAuthorityMetadata> | undefined): boolean {
    return proto3.util.equals(DenomAuthorityMetadata, a, b);
  }
}

