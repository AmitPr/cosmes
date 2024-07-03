// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file kujira/scheduler/proposal.proto (package kujira.scheduler, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Coin } from "../../cosmos/base/v1beta1/coin_pb.js";

/**
 * @generated from message kujira.scheduler.CreateHookProposal
 */
export class CreateHookProposal extends Message<CreateHookProposal> {
  /**
   * Title is a short summary
   *
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * Description is a human readable text
   *
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * The account that will execute the msg on the schedule
   *
   * @generated from field: string executor = 3;
   */
  executor = "";

  /**
   * The contract that the msg is called on
   *
   * @generated from field: string contract = 4;
   */
  contract = "";

  /**
   * @generated from field: bytes msg = 5;
   */
  msg = new Uint8Array(0);

  /**
   * @generated from field: int64 frequency = 6;
   */
  frequency = protoInt64.zero;

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin funds = 7;
   */
  funds: Coin[] = [];

  constructor(data?: PartialMessage<CreateHookProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kujira.scheduler.CreateHookProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "executor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "contract", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "msg", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 6, name: "frequency", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 7, name: "funds", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateHookProposal {
    return new CreateHookProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateHookProposal {
    return new CreateHookProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateHookProposal {
    return new CreateHookProposal().fromJsonString(jsonString, options);
  }

  static equals(a: CreateHookProposal | PlainMessage<CreateHookProposal> | undefined, b: CreateHookProposal | PlainMessage<CreateHookProposal> | undefined): boolean {
    return proto3.util.equals(CreateHookProposal, a, b);
  }
}

/**
 * @generated from message kujira.scheduler.UpdateHookProposal
 */
export class UpdateHookProposal extends Message<UpdateHookProposal> {
  /**
   * Title is a short summary
   *
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * Description is a human readable text
   *
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * @generated from field: uint64 id = 3;
   */
  id = protoInt64.zero;

  /**
   * @generated from field: string executor = 4;
   */
  executor = "";

  /**
   * @generated from field: string contract = 5;
   */
  contract = "";

  /**
   * @generated from field: bytes msg = 6;
   */
  msg = new Uint8Array(0);

  /**
   * @generated from field: int64 frequency = 7;
   */
  frequency = protoInt64.zero;

  /**
   * @generated from field: repeated cosmos.base.v1beta1.Coin funds = 8;
   */
  funds: Coin[] = [];

  constructor(data?: PartialMessage<UpdateHookProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kujira.scheduler.UpdateHookProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "executor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "contract", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "msg", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 7, name: "frequency", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 8, name: "funds", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateHookProposal {
    return new UpdateHookProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateHookProposal {
    return new UpdateHookProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateHookProposal {
    return new UpdateHookProposal().fromJsonString(jsonString, options);
  }

  static equals(a: UpdateHookProposal | PlainMessage<UpdateHookProposal> | undefined, b: UpdateHookProposal | PlainMessage<UpdateHookProposal> | undefined): boolean {
    return proto3.util.equals(UpdateHookProposal, a, b);
  }
}

/**
 * @generated from message kujira.scheduler.DeleteHookProposal
 */
export class DeleteHookProposal extends Message<DeleteHookProposal> {
  /**
   * Title is a short summary
   *
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * Description is a human readable text
   *
   * @generated from field: string description = 2;
   */
  description = "";

  /**
   * @generated from field: uint64 id = 3;
   */
  id = protoInt64.zero;

  constructor(data?: PartialMessage<DeleteHookProposal>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kujira.scheduler.DeleteHookProposal";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteHookProposal {
    return new DeleteHookProposal().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteHookProposal {
    return new DeleteHookProposal().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteHookProposal {
    return new DeleteHookProposal().fromJsonString(jsonString, options);
  }

  static equals(a: DeleteHookProposal | PlainMessage<DeleteHookProposal> | undefined, b: DeleteHookProposal | PlainMessage<DeleteHookProposal> | undefined): boolean {
    return proto3.util.equals(DeleteHookProposal, a, b);
  }
}

