// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file ibc/applications/transfer/v1/authz.proto (package ibc.applications.transfer.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../../cosmos/base/v1beta1/coin_pb.js";

/**
 * Allocation defines the spend limit for a particular port and channel
 *
 * @generated from message ibc.applications.transfer.v1.Allocation
 */
export class Allocation extends Message<Allocation> {
  /**
   * the port on which the packet will be sent
   *
   * @generated from field: string source_port = 1;
   */
  sourcePort = "";

  /**
   * the channel by which the packet will be sent
   *
   * @generated from field: string source_channel = 2;
   */
  sourceChannel = "";

  /**
   * spend limitation on the channel
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin spend_limit = 3;
   */
  spendLimit: Coin[] = [];

  /**
   * allow list of receivers, an empty allow list permits any receiver address
   *
   * @generated from field: repeated string allow_list = 4;
   */
  allowList: string[] = [];

  /**
   * allow list of memo strings, an empty list prohibits all memo strings;
   * a list only with "*" permits any memo string
   *
   * @generated from field: repeated string allowed_packet_data = 5;
   */
  allowedPacketData: string[] = [];

  constructor(data?: PartialMessage<Allocation>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.transfer.v1.Allocation";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "source_port", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "source_channel", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "spend_limit", kind: "message", T: Coin, repeated: true },
    { no: 4, name: "allow_list", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 5, name: "allowed_packet_data", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Allocation {
    return new Allocation().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Allocation {
    return new Allocation().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Allocation {
    return new Allocation().fromJsonString(jsonString, options);
  }

  static equals(a: Allocation | PlainMessage<Allocation> | undefined, b: Allocation | PlainMessage<Allocation> | undefined): boolean {
    return proto3.util.equals(Allocation, a, b);
  }
}

/**
 * TransferAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account for ibc transfer on a specific channel
 *
 * @generated from message ibc.applications.transfer.v1.TransferAuthorization
 */
export class TransferAuthorization extends Message<TransferAuthorization> {
  /**
   * port and channel amounts
   *
   * @generated from field: repeated ibc.applications.transfer.v1.Allocation allocations = 1;
   */
  allocations: Allocation[] = [];

  constructor(data?: PartialMessage<TransferAuthorization>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.transfer.v1.TransferAuthorization";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "allocations", kind: "message", T: Allocation, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransferAuthorization {
    return new TransferAuthorization().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransferAuthorization {
    return new TransferAuthorization().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransferAuthorization {
    return new TransferAuthorization().fromJsonString(jsonString, options);
  }

  static equals(a: TransferAuthorization | PlainMessage<TransferAuthorization> | undefined, b: TransferAuthorization | PlainMessage<TransferAuthorization> | undefined): boolean {
    return proto3.util.equals(TransferAuthorization, a, b);
  }
}

