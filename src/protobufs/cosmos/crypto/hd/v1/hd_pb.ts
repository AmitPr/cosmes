// Since: cosmos-sdk 0.46

// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file cosmos/crypto/hd/v1/hd.proto (package cosmos.crypto.hd.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * BIP44Params is used as path field in ledger item in Record.
 *
 * @generated from message cosmos.crypto.hd.v1.BIP44Params
 */
export class BIP44Params extends Message<BIP44Params> {
  /**
   * purpose is a constant set to 44' (or 0x8000002C) following the BIP43 recommendation
   *
   * @generated from field: uint32 purpose = 1;
   */
  purpose = 0;

  /**
   * coin_type is a constant that improves privacy
   *
   * @generated from field: uint32 coin_type = 2;
   */
  coinType = 0;

  /**
   * account splits the key space into independent user identities
   *
   * @generated from field: uint32 account = 3;
   */
  account = 0;

  /**
   * change is a constant used for public derivation. Constant 0 is used for external chain and constant 1 for internal
   * chain.
   *
   * @generated from field: bool change = 4;
   */
  change = false;

  /**
   * address_index is used as child index in BIP32 derivation
   *
   * @generated from field: uint32 address_index = 5;
   */
  addressIndex = 0;

  constructor(data?: PartialMessage<BIP44Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.crypto.hd.v1.BIP44Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "purpose", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "coin_type", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "account", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "change", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 5, name: "address_index", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BIP44Params {
    return new BIP44Params().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BIP44Params {
    return new BIP44Params().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BIP44Params {
    return new BIP44Params().fromJsonString(jsonString, options);
  }

  static equals(a: BIP44Params | PlainMessage<BIP44Params> | undefined, b: BIP44Params | PlainMessage<BIP44Params> | undefined): boolean {
    return proto3.util.equals(BIP44Params, a, b);
  }
}

