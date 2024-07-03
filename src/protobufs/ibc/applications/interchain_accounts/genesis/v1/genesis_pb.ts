// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file ibc/applications/interchain_accounts/genesis/v1/genesis.proto (package ibc.applications.interchain_accounts.genesis.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "../../controller/v1/controller_pb.js";
import { Params as Params$1 } from "../../host/v1/host_pb.js";

/**
 * GenesisState defines the interchain accounts genesis state
 *
 * @generated from message ibc.applications.interchain_accounts.genesis.v1.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * @generated from field: ibc.applications.interchain_accounts.genesis.v1.ControllerGenesisState controller_genesis_state = 1;
   */
  controllerGenesisState?: ControllerGenesisState;

  /**
   * @generated from field: ibc.applications.interchain_accounts.genesis.v1.HostGenesisState host_genesis_state = 2;
   */
  hostGenesisState?: HostGenesisState;

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.interchain_accounts.genesis.v1.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "controller_genesis_state", kind: "message", T: ControllerGenesisState },
    { no: 2, name: "host_genesis_state", kind: "message", T: HostGenesisState },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState {
    return new GenesisState().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJsonString(jsonString, options);
  }

  static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean {
    return proto3.util.equals(GenesisState, a, b);
  }
}

/**
 * ControllerGenesisState defines the interchain accounts controller genesis state
 *
 * @generated from message ibc.applications.interchain_accounts.genesis.v1.ControllerGenesisState
 */
export class ControllerGenesisState extends Message<ControllerGenesisState> {
  /**
   * @generated from field: repeated ibc.applications.interchain_accounts.genesis.v1.ActiveChannel active_channels = 1;
   */
  activeChannels: ActiveChannel[] = [];

  /**
   * @generated from field: repeated ibc.applications.interchain_accounts.genesis.v1.RegisteredInterchainAccount interchain_accounts = 2;
   */
  interchainAccounts: RegisteredInterchainAccount[] = [];

  /**
   * @generated from field: repeated string ports = 3;
   */
  ports: string[] = [];

  /**
   * @generated from field: ibc.applications.interchain_accounts.controller.v1.Params params = 4;
   */
  params?: Params;

  constructor(data?: PartialMessage<ControllerGenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.interchain_accounts.genesis.v1.ControllerGenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "active_channels", kind: "message", T: ActiveChannel, repeated: true },
    { no: 2, name: "interchain_accounts", kind: "message", T: RegisteredInterchainAccount, repeated: true },
    { no: 3, name: "ports", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 4, name: "params", kind: "message", T: Params },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ControllerGenesisState {
    return new ControllerGenesisState().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ControllerGenesisState {
    return new ControllerGenesisState().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ControllerGenesisState {
    return new ControllerGenesisState().fromJsonString(jsonString, options);
  }

  static equals(a: ControllerGenesisState | PlainMessage<ControllerGenesisState> | undefined, b: ControllerGenesisState | PlainMessage<ControllerGenesisState> | undefined): boolean {
    return proto3.util.equals(ControllerGenesisState, a, b);
  }
}

/**
 * HostGenesisState defines the interchain accounts host genesis state
 *
 * @generated from message ibc.applications.interchain_accounts.genesis.v1.HostGenesisState
 */
export class HostGenesisState extends Message<HostGenesisState> {
  /**
   * @generated from field: repeated ibc.applications.interchain_accounts.genesis.v1.ActiveChannel active_channels = 1;
   */
  activeChannels: ActiveChannel[] = [];

  /**
   * @generated from field: repeated ibc.applications.interchain_accounts.genesis.v1.RegisteredInterchainAccount interchain_accounts = 2;
   */
  interchainAccounts: RegisteredInterchainAccount[] = [];

  /**
   * @generated from field: string port = 3;
   */
  port = "";

  /**
   * @generated from field: ibc.applications.interchain_accounts.host.v1.Params params = 4;
   */
  params?: Params$1;

  constructor(data?: PartialMessage<HostGenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.interchain_accounts.genesis.v1.HostGenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "active_channels", kind: "message", T: ActiveChannel, repeated: true },
    { no: 2, name: "interchain_accounts", kind: "message", T: RegisteredInterchainAccount, repeated: true },
    { no: 3, name: "port", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "params", kind: "message", T: Params$1 },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HostGenesisState {
    return new HostGenesisState().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HostGenesisState {
    return new HostGenesisState().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HostGenesisState {
    return new HostGenesisState().fromJsonString(jsonString, options);
  }

  static equals(a: HostGenesisState | PlainMessage<HostGenesisState> | undefined, b: HostGenesisState | PlainMessage<HostGenesisState> | undefined): boolean {
    return proto3.util.equals(HostGenesisState, a, b);
  }
}

/**
 * ActiveChannel contains a connection ID, port ID and associated active channel ID, as well as a boolean flag to
 * indicate if the channel is middleware enabled
 *
 * @generated from message ibc.applications.interchain_accounts.genesis.v1.ActiveChannel
 */
export class ActiveChannel extends Message<ActiveChannel> {
  /**
   * @generated from field: string connection_id = 1;
   */
  connectionId = "";

  /**
   * @generated from field: string port_id = 2;
   */
  portId = "";

  /**
   * @generated from field: string channel_id = 3;
   */
  channelId = "";

  /**
   * @generated from field: bool is_middleware_enabled = 4;
   */
  isMiddlewareEnabled = false;

  constructor(data?: PartialMessage<ActiveChannel>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.interchain_accounts.genesis.v1.ActiveChannel";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "connection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "port_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "channel_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "is_middleware_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ActiveChannel {
    return new ActiveChannel().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ActiveChannel {
    return new ActiveChannel().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ActiveChannel {
    return new ActiveChannel().fromJsonString(jsonString, options);
  }

  static equals(a: ActiveChannel | PlainMessage<ActiveChannel> | undefined, b: ActiveChannel | PlainMessage<ActiveChannel> | undefined): boolean {
    return proto3.util.equals(ActiveChannel, a, b);
  }
}

/**
 * RegisteredInterchainAccount contains a connection ID, port ID and associated interchain account address
 *
 * @generated from message ibc.applications.interchain_accounts.genesis.v1.RegisteredInterchainAccount
 */
export class RegisteredInterchainAccount extends Message<RegisteredInterchainAccount> {
  /**
   * @generated from field: string connection_id = 1;
   */
  connectionId = "";

  /**
   * @generated from field: string port_id = 2;
   */
  portId = "";

  /**
   * @generated from field: string account_address = 3;
   */
  accountAddress = "";

  constructor(data?: PartialMessage<RegisteredInterchainAccount>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.applications.interchain_accounts.genesis.v1.RegisteredInterchainAccount";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "connection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "port_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "account_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisteredInterchainAccount {
    return new RegisteredInterchainAccount().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisteredInterchainAccount {
    return new RegisteredInterchainAccount().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisteredInterchainAccount {
    return new RegisteredInterchainAccount().fromJsonString(jsonString, options);
  }

  static equals(a: RegisteredInterchainAccount | PlainMessage<RegisteredInterchainAccount> | undefined, b: RegisteredInterchainAccount | PlainMessage<RegisteredInterchainAccount> | undefined): boolean {
    return proto3.util.equals(RegisteredInterchainAccount, a, b);
  }
}

