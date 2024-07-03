// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file cosmwasm/wasm/v1/authz.proto (package cosmwasm.wasm.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { AccessConfig } from "./types_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";

/**
 * StoreCodeAuthorization defines authorization for wasm code upload.
 * Since: wasmd 0.42
 *
 * @generated from message cosmwasm.wasm.v1.StoreCodeAuthorization
 */
export class StoreCodeAuthorization extends Message<StoreCodeAuthorization> {
  /**
   * Grants for code upload
   *
   * @generated from field: repeated cosmwasm.wasm.v1.CodeGrant grants = 1;
   */
  grants: CodeGrant[] = [];

  constructor(data?: PartialMessage<StoreCodeAuthorization>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmwasm.wasm.v1.StoreCodeAuthorization";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "grants", kind: "message", T: CodeGrant, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StoreCodeAuthorization {
    return new StoreCodeAuthorization().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StoreCodeAuthorization {
    return new StoreCodeAuthorization().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StoreCodeAuthorization {
    return new StoreCodeAuthorization().fromJsonString(jsonString, options);
  }

  static equals(a: StoreCodeAuthorization | PlainMessage<StoreCodeAuthorization> | undefined, b: StoreCodeAuthorization | PlainMessage<StoreCodeAuthorization> | undefined): boolean {
    return proto3.util.equals(StoreCodeAuthorization, a, b);
  }
}

/**
 * ContractExecutionAuthorization defines authorization for wasm execute.
 * Since: wasmd 0.30
 *
 * @generated from message cosmwasm.wasm.v1.ContractExecutionAuthorization
 */
export class ContractExecutionAuthorization extends Message<ContractExecutionAuthorization> {
  /**
   * Grants for contract executions
   *
   * @generated from field: repeated cosmwasm.wasm.v1.ContractGrant grants = 1;
   */
  grants: ContractGrant[] = [];

  constructor(data?: PartialMessage<ContractExecutionAuthorization>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmwasm.wasm.v1.ContractExecutionAuthorization";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "grants", kind: "message", T: ContractGrant, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ContractExecutionAuthorization {
    return new ContractExecutionAuthorization().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ContractExecutionAuthorization {
    return new ContractExecutionAuthorization().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ContractExecutionAuthorization {
    return new ContractExecutionAuthorization().fromJsonString(jsonString, options);
  }

  static equals(a: ContractExecutionAuthorization | PlainMessage<ContractExecutionAuthorization> | undefined, b: ContractExecutionAuthorization | PlainMessage<ContractExecutionAuthorization> | undefined): boolean {
    return proto3.util.equals(ContractExecutionAuthorization, a, b);
  }
}

/**
 * ContractMigrationAuthorization defines authorization for wasm contract
 * migration. Since: wasmd 0.30
 *
 * @generated from message cosmwasm.wasm.v1.ContractMigrationAuthorization
 */
export class ContractMigrationAuthorization extends Message<ContractMigrationAuthorization> {
  /**
   * Grants for contract migrations
   *
   * @generated from field: repeated cosmwasm.wasm.v1.ContractGrant grants = 1;
   */
  grants: ContractGrant[] = [];

  constructor(data?: PartialMessage<ContractMigrationAuthorization>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmwasm.wasm.v1.ContractMigrationAuthorization";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "grants", kind: "message", T: ContractGrant, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ContractMigrationAuthorization {
    return new ContractMigrationAuthorization().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ContractMigrationAuthorization {
    return new ContractMigrationAuthorization().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ContractMigrationAuthorization {
    return new ContractMigrationAuthorization().fromJsonString(jsonString, options);
  }

  static equals(a: ContractMigrationAuthorization | PlainMessage<ContractMigrationAuthorization> | undefined, b: ContractMigrationAuthorization | PlainMessage<ContractMigrationAuthorization> | undefined): boolean {
    return proto3.util.equals(ContractMigrationAuthorization, a, b);
  }
}

/**
 * CodeGrant a granted permission for a single code
 *
 * @generated from message cosmwasm.wasm.v1.CodeGrant
 */
export class CodeGrant extends Message<CodeGrant> {
  /**
   * CodeHash is the unique identifier created by wasmvm
   * Wildcard "*" is used to specify any kind of grant.
   *
   * @generated from field: bytes code_hash = 1;
   */
  codeHash = new Uint8Array(0);

  /**
   * InstantiatePermission is the superset access control to apply
   * on contract creation.
   * Optional
   *
   * @generated from field: cosmwasm.wasm.v1.AccessConfig instantiate_permission = 2;
   */
  instantiatePermission?: AccessConfig;

  constructor(data?: PartialMessage<CodeGrant>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmwasm.wasm.v1.CodeGrant";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "code_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "instantiate_permission", kind: "message", T: AccessConfig },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CodeGrant {
    return new CodeGrant().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CodeGrant {
    return new CodeGrant().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CodeGrant {
    return new CodeGrant().fromJsonString(jsonString, options);
  }

  static equals(a: CodeGrant | PlainMessage<CodeGrant> | undefined, b: CodeGrant | PlainMessage<CodeGrant> | undefined): boolean {
    return proto3.util.equals(CodeGrant, a, b);
  }
}

/**
 * ContractGrant a granted permission for a single contract
 * Since: wasmd 0.30
 *
 * @generated from message cosmwasm.wasm.v1.ContractGrant
 */
export class ContractGrant extends Message<ContractGrant> {
  /**
   * Contract is the bech32 address of the smart contract
   *
   * @generated from field: string contract = 1;
   */
  contract = "";

  /**
   * Limit defines execution limits that are enforced and updated when the grant
   * is applied. When the limit lapsed the grant is removed.
   *
   * @generated from field: google.protobuf.Any limit = 2;
   */
  limit?: Any;

  /**
   * Filter define more fine-grained control on the message payload passed
   * to the contract in the operation. When no filter applies on execution, the
   * operation is prohibited.
   *
   * @generated from field: google.protobuf.Any filter = 3;
   */
  filter?: Any;

  constructor(data?: PartialMessage<ContractGrant>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmwasm.wasm.v1.ContractGrant";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "contract", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "limit", kind: "message", T: Any },
    { no: 3, name: "filter", kind: "message", T: Any },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ContractGrant {
    return new ContractGrant().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ContractGrant {
    return new ContractGrant().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ContractGrant {
    return new ContractGrant().fromJsonString(jsonString, options);
  }

  static equals(a: ContractGrant | PlainMessage<ContractGrant> | undefined, b: ContractGrant | PlainMessage<ContractGrant> | undefined): boolean {
    return proto3.util.equals(ContractGrant, a, b);
  }
}

/**
 * MaxCallsLimit limited number of calls to the contract. No funds transferable.
 * Since: wasmd 0.30
 *
 * @generated from message cosmwasm.wasm.v1.MaxCallsLimit
 */
export class MaxCallsLimit extends Message<MaxCallsLimit> {
  /**
   * Remaining number that is decremented on each execution
   *
   * @generated from field: uint64 remaining = 1;
   */
  remaining = protoInt64.zero;

  constructor(data?: PartialMessage<MaxCallsLimit>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmwasm.wasm.v1.MaxCallsLimit";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "remaining", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MaxCallsLimit {
    return new MaxCallsLimit().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MaxCallsLimit {
    return new MaxCallsLimit().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MaxCallsLimit {
    return new MaxCallsLimit().fromJsonString(jsonString, options);
  }

  static equals(a: MaxCallsLimit | PlainMessage<MaxCallsLimit> | undefined, b: MaxCallsLimit | PlainMessage<MaxCallsLimit> | undefined): boolean {
    return proto3.util.equals(MaxCallsLimit, a, b);
  }
}

/**
 * MaxFundsLimit defines the maximal amounts that can be sent to the contract.
 * Since: wasmd 0.30
 *
 * @generated from message cosmwasm.wasm.v1.MaxFundsLimit
 */
export class MaxFundsLimit extends Message<MaxFundsLimit> {
  /**
   * Amounts is the maximal amount of tokens transferable to the contract.
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin amounts = 1;
   */
  amounts: Coin[] = [];

  constructor(data?: PartialMessage<MaxFundsLimit>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmwasm.wasm.v1.MaxFundsLimit";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "amounts", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MaxFundsLimit {
    return new MaxFundsLimit().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MaxFundsLimit {
    return new MaxFundsLimit().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MaxFundsLimit {
    return new MaxFundsLimit().fromJsonString(jsonString, options);
  }

  static equals(a: MaxFundsLimit | PlainMessage<MaxFundsLimit> | undefined, b: MaxFundsLimit | PlainMessage<MaxFundsLimit> | undefined): boolean {
    return proto3.util.equals(MaxFundsLimit, a, b);
  }
}

/**
 * CombinedLimit defines the maximal amounts that can be sent to a contract and
 * the maximal number of calls executable. Both need to remain >0 to be valid.
 * Since: wasmd 0.30
 *
 * @generated from message cosmwasm.wasm.v1.CombinedLimit
 */
export class CombinedLimit extends Message<CombinedLimit> {
  /**
   * Remaining number that is decremented on each execution
   *
   * @generated from field: uint64 calls_remaining = 1;
   */
  callsRemaining = protoInt64.zero;

  /**
   * Amounts is the maximal amount of tokens transferable to the contract.
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin amounts = 2;
   */
  amounts: Coin[] = [];

  constructor(data?: PartialMessage<CombinedLimit>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmwasm.wasm.v1.CombinedLimit";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "calls_remaining", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "amounts", kind: "message", T: Coin, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CombinedLimit {
    return new CombinedLimit().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CombinedLimit {
    return new CombinedLimit().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CombinedLimit {
    return new CombinedLimit().fromJsonString(jsonString, options);
  }

  static equals(a: CombinedLimit | PlainMessage<CombinedLimit> | undefined, b: CombinedLimit | PlainMessage<CombinedLimit> | undefined): boolean {
    return proto3.util.equals(CombinedLimit, a, b);
  }
}

/**
 * AllowAllMessagesFilter is a wildcard to allow any type of contract payload
 * message.
 * Since: wasmd 0.30
 *
 * @generated from message cosmwasm.wasm.v1.AllowAllMessagesFilter
 */
export class AllowAllMessagesFilter extends Message<AllowAllMessagesFilter> {
  constructor(data?: PartialMessage<AllowAllMessagesFilter>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmwasm.wasm.v1.AllowAllMessagesFilter";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AllowAllMessagesFilter {
    return new AllowAllMessagesFilter().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AllowAllMessagesFilter {
    return new AllowAllMessagesFilter().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AllowAllMessagesFilter {
    return new AllowAllMessagesFilter().fromJsonString(jsonString, options);
  }

  static equals(a: AllowAllMessagesFilter | PlainMessage<AllowAllMessagesFilter> | undefined, b: AllowAllMessagesFilter | PlainMessage<AllowAllMessagesFilter> | undefined): boolean {
    return proto3.util.equals(AllowAllMessagesFilter, a, b);
  }
}

/**
 * AcceptedMessageKeysFilter accept only the specific contract message keys in
 * the json object to be executed.
 * Since: wasmd 0.30
 *
 * @generated from message cosmwasm.wasm.v1.AcceptedMessageKeysFilter
 */
export class AcceptedMessageKeysFilter extends Message<AcceptedMessageKeysFilter> {
  /**
   * Messages is the list of unique keys
   *
   * @generated from field: repeated string keys = 1;
   */
  keys: string[] = [];

  constructor(data?: PartialMessage<AcceptedMessageKeysFilter>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmwasm.wasm.v1.AcceptedMessageKeysFilter";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "keys", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AcceptedMessageKeysFilter {
    return new AcceptedMessageKeysFilter().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AcceptedMessageKeysFilter {
    return new AcceptedMessageKeysFilter().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AcceptedMessageKeysFilter {
    return new AcceptedMessageKeysFilter().fromJsonString(jsonString, options);
  }

  static equals(a: AcceptedMessageKeysFilter | PlainMessage<AcceptedMessageKeysFilter> | undefined, b: AcceptedMessageKeysFilter | PlainMessage<AcceptedMessageKeysFilter> | undefined): boolean {
    return proto3.util.equals(AcceptedMessageKeysFilter, a, b);
  }
}

/**
 * AcceptedMessagesFilter accept only the specific raw contract messages to be
 * executed.
 * Since: wasmd 0.30
 *
 * @generated from message cosmwasm.wasm.v1.AcceptedMessagesFilter
 */
export class AcceptedMessagesFilter extends Message<AcceptedMessagesFilter> {
  /**
   * Messages is the list of raw contract messages
   *
   * @generated from field: repeated bytes messages = 1;
   */
  messages: Uint8Array[] = [];

  constructor(data?: PartialMessage<AcceptedMessagesFilter>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmwasm.wasm.v1.AcceptedMessagesFilter";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "messages", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AcceptedMessagesFilter {
    return new AcceptedMessagesFilter().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AcceptedMessagesFilter {
    return new AcceptedMessagesFilter().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AcceptedMessagesFilter {
    return new AcceptedMessagesFilter().fromJsonString(jsonString, options);
  }

  static equals(a: AcceptedMessagesFilter | PlainMessage<AcceptedMessagesFilter> | undefined, b: AcceptedMessagesFilter | PlainMessage<AcceptedMessagesFilter> | undefined): boolean {
    return proto3.util.equals(AcceptedMessagesFilter, a, b);
  }
}

