import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { AggregateExchangeRatePrevote, AggregateExchangeRateVote, ExchangeRateTuple, Params } from "./oracle_pb.js";
/**
 * GenesisState defines the oracle module's genesis state.
 *
 * @generated from message kujira.oracle.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * @generated from field: kujira.oracle.Params params = 1;
     */
    params?: Params;
    /**
     * @generated from field: repeated kujira.oracle.FeederDelegation feeder_delegations = 2;
     */
    feederDelegations: FeederDelegation[];
    /**
     * @generated from field: repeated kujira.oracle.ExchangeRateTuple exchange_rates = 3;
     */
    exchangeRates: ExchangeRateTuple[];
    /**
     * @generated from field: repeated kujira.oracle.MissCounter miss_counters = 4;
     */
    missCounters: MissCounter[];
    /**
     * @generated from field: repeated kujira.oracle.AggregateExchangeRatePrevote aggregate_exchange_rate_prevotes = 5;
     */
    aggregateExchangeRatePrevotes: AggregateExchangeRatePrevote[];
    /**
     * @generated from field: repeated kujira.oracle.AggregateExchangeRateVote aggregate_exchange_rate_votes = 6;
     */
    aggregateExchangeRateVotes: AggregateExchangeRateVote[];
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.oracle.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
/**
 * FeederDelegation is the address for where oracle feeder authority are
 * delegated to. By default this struct is only used at genesis to feed in
 * default feeder addresses.
 *
 * @generated from message kujira.oracle.FeederDelegation
 */
export declare class FeederDelegation extends Message<FeederDelegation> {
    /**
     * @generated from field: string feeder_address = 1;
     */
    feederAddress: string;
    /**
     * @generated from field: string validator_address = 2;
     */
    validatorAddress: string;
    constructor(data?: PartialMessage<FeederDelegation>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.oracle.FeederDelegation";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeederDelegation;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeederDelegation;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeederDelegation;
    static equals(a: FeederDelegation | PlainMessage<FeederDelegation> | undefined, b: FeederDelegation | PlainMessage<FeederDelegation> | undefined): boolean;
}
/**
 * MissCounter defines an miss counter and validator address pair used in
 * oracle module's genesis state
 *
 * @generated from message kujira.oracle.MissCounter
 */
export declare class MissCounter extends Message<MissCounter> {
    /**
     * @generated from field: string validator_address = 1;
     */
    validatorAddress: string;
    /**
     * @generated from field: uint64 miss_counter = 2;
     */
    missCounter: bigint;
    constructor(data?: PartialMessage<MissCounter>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.oracle.MissCounter";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MissCounter;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MissCounter;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MissCounter;
    static equals(a: MissCounter | PlainMessage<MissCounter> | undefined, b: MissCounter | PlainMessage<MissCounter> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map