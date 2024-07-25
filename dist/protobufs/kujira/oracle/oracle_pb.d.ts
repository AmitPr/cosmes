import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * Params defines the parameters for the oracle module.
 *
 * @generated from message kujira.oracle.Params
 */
export declare class Params extends Message<Params> {
    /**
     * @generated from field: uint64 vote_period = 1;
     */
    votePeriod: bigint;
    /**
     * @generated from field: string vote_threshold = 2;
     */
    voteThreshold: string;
    /**
     * @generated from field: string reward_band = 3;
     */
    rewardBand: string;
    /**
     * @generated from field: uint64 reward_distribution_window = 4;
     */
    rewardDistributionWindow: bigint;
    /**
     * @generated from field: repeated kujira.oracle.Denom whitelist = 5;
     */
    whitelist: Denom[];
    /**
     * @generated from field: string slash_fraction = 6;
     */
    slashFraction: string;
    /**
     * @generated from field: uint64 slash_window = 7;
     */
    slashWindow: bigint;
    /**
     * @generated from field: string min_valid_per_window = 8;
     */
    minValidPerWindow: string;
    constructor(data?: PartialMessage<Params>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.oracle.Params";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params;
    static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean;
}
/**
 * Denom - the object to hold configurations of each denom
 *
 * @generated from message kujira.oracle.Denom
 */
export declare class Denom extends Message<Denom> {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    constructor(data?: PartialMessage<Denom>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.oracle.Denom";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Denom;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Denom;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Denom;
    static equals(a: Denom | PlainMessage<Denom> | undefined, b: Denom | PlainMessage<Denom> | undefined): boolean;
}
/**
 * struct for aggregate prevoting on the ExchangeRateVote.
 * The purpose of aggregate prevote is to hide vote exchange rates with hash
 * which is formatted as hex string in SHA256("{salt}:{exchange rate}{denom},...,{exchange rate}{denom}:{voter}")
 *
 * @generated from message kujira.oracle.AggregateExchangeRatePrevote
 */
export declare class AggregateExchangeRatePrevote extends Message<AggregateExchangeRatePrevote> {
    /**
     * @generated from field: string hash = 1;
     */
    hash: string;
    /**
     * @generated from field: string voter = 2;
     */
    voter: string;
    /**
     * @generated from field: uint64 submit_block = 3;
     */
    submitBlock: bigint;
    constructor(data?: PartialMessage<AggregateExchangeRatePrevote>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.oracle.AggregateExchangeRatePrevote";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AggregateExchangeRatePrevote;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AggregateExchangeRatePrevote;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AggregateExchangeRatePrevote;
    static equals(a: AggregateExchangeRatePrevote | PlainMessage<AggregateExchangeRatePrevote> | undefined, b: AggregateExchangeRatePrevote | PlainMessage<AggregateExchangeRatePrevote> | undefined): boolean;
}
/**
 * MsgAggregateExchangeRateVote - struct for voting on exchange rates.
 *
 * @generated from message kujira.oracle.AggregateExchangeRateVote
 */
export declare class AggregateExchangeRateVote extends Message<AggregateExchangeRateVote> {
    /**
     * @generated from field: repeated kujira.oracle.ExchangeRateTuple exchange_rate_tuples = 1;
     */
    exchangeRateTuples: ExchangeRateTuple[];
    /**
     * @generated from field: string voter = 2;
     */
    voter: string;
    constructor(data?: PartialMessage<AggregateExchangeRateVote>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.oracle.AggregateExchangeRateVote";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AggregateExchangeRateVote;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AggregateExchangeRateVote;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AggregateExchangeRateVote;
    static equals(a: AggregateExchangeRateVote | PlainMessage<AggregateExchangeRateVote> | undefined, b: AggregateExchangeRateVote | PlainMessage<AggregateExchangeRateVote> | undefined): boolean;
}
/**
 * ExchangeRateTuple - struct to store interpreted exchange rates data to store
 *
 * @generated from message kujira.oracle.ExchangeRateTuple
 */
export declare class ExchangeRateTuple extends Message<ExchangeRateTuple> {
    /**
     * @generated from field: string denom = 1;
     */
    denom: string;
    /**
     * @generated from field: string exchange_rate = 2;
     */
    exchangeRate: string;
    constructor(data?: PartialMessage<ExchangeRateTuple>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.oracle.ExchangeRateTuple";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExchangeRateTuple;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExchangeRateTuple;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExchangeRateTuple;
    static equals(a: ExchangeRateTuple | PlainMessage<ExchangeRateTuple> | undefined, b: ExchangeRateTuple | PlainMessage<ExchangeRateTuple> | undefined): boolean;
}
//# sourceMappingURL=oracle_pb.d.ts.map