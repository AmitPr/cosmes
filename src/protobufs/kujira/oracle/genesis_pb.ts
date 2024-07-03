// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file kujira/oracle/genesis.proto (package kujira.oracle, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { AggregateExchangeRatePrevote, AggregateExchangeRateVote, ExchangeRateTuple, Params } from "./oracle_pb.js";

/**
 * GenesisState defines the oracle module's genesis state.
 *
 * @generated from message kujira.oracle.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * @generated from field: kujira.oracle.Params params = 1;
   */
  params?: Params;

  /**
   * @generated from field: repeated kujira.oracle.FeederDelegation feeder_delegations = 2;
   */
  feederDelegations: FeederDelegation[] = [];

  /**
   * @generated from field: repeated kujira.oracle.ExchangeRateTuple exchange_rates = 3;
   */
  exchangeRates: ExchangeRateTuple[] = [];

  /**
   * @generated from field: repeated kujira.oracle.MissCounter miss_counters = 4;
   */
  missCounters: MissCounter[] = [];

  /**
   * @generated from field: repeated kujira.oracle.AggregateExchangeRatePrevote aggregate_exchange_rate_prevotes = 5;
   */
  aggregateExchangeRatePrevotes: AggregateExchangeRatePrevote[] = [];

  /**
   * @generated from field: repeated kujira.oracle.AggregateExchangeRateVote aggregate_exchange_rate_votes = 6;
   */
  aggregateExchangeRateVotes: AggregateExchangeRateVote[] = [];

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kujira.oracle.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
    { no: 2, name: "feeder_delegations", kind: "message", T: FeederDelegation, repeated: true },
    { no: 3, name: "exchange_rates", kind: "message", T: ExchangeRateTuple, repeated: true },
    { no: 4, name: "miss_counters", kind: "message", T: MissCounter, repeated: true },
    { no: 5, name: "aggregate_exchange_rate_prevotes", kind: "message", T: AggregateExchangeRatePrevote, repeated: true },
    { no: 6, name: "aggregate_exchange_rate_votes", kind: "message", T: AggregateExchangeRateVote, repeated: true },
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
 * FeederDelegation is the address for where oracle feeder authority are
 * delegated to. By default this struct is only used at genesis to feed in
 * default feeder addresses.
 *
 * @generated from message kujira.oracle.FeederDelegation
 */
export class FeederDelegation extends Message<FeederDelegation> {
  /**
   * @generated from field: string feeder_address = 1;
   */
  feederAddress = "";

  /**
   * @generated from field: string validator_address = 2;
   */
  validatorAddress = "";

  constructor(data?: PartialMessage<FeederDelegation>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kujira.oracle.FeederDelegation";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "feeder_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeederDelegation {
    return new FeederDelegation().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeederDelegation {
    return new FeederDelegation().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeederDelegation {
    return new FeederDelegation().fromJsonString(jsonString, options);
  }

  static equals(a: FeederDelegation | PlainMessage<FeederDelegation> | undefined, b: FeederDelegation | PlainMessage<FeederDelegation> | undefined): boolean {
    return proto3.util.equals(FeederDelegation, a, b);
  }
}

/**
 * MissCounter defines an miss counter and validator address pair used in
 * oracle module's genesis state
 *
 * @generated from message kujira.oracle.MissCounter
 */
export class MissCounter extends Message<MissCounter> {
  /**
   * @generated from field: string validator_address = 1;
   */
  validatorAddress = "";

  /**
   * @generated from field: uint64 miss_counter = 2;
   */
  missCounter = protoInt64.zero;

  constructor(data?: PartialMessage<MissCounter>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "kujira.oracle.MissCounter";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "miss_counter", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MissCounter {
    return new MissCounter().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MissCounter {
    return new MissCounter().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MissCounter {
    return new MissCounter().fromJsonString(jsonString, options);
  }

  static equals(a: MissCounter | PlainMessage<MissCounter> | undefined, b: MissCounter | PlainMessage<MissCounter> | undefined): boolean {
    return proto3.util.equals(MissCounter, a, b);
  }
}

