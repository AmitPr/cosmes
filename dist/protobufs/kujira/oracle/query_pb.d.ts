import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { DecCoin } from "../../cosmos/base/v1beta1/coin_pb.js";
import { AggregateExchangeRatePrevote, AggregateExchangeRateVote, Params } from "./oracle_pb.js";
/**
 * QueryExchangeRateRequest is the request type for the Query/ExchangeRate RPC method.
 *
 * @generated from message kujira.oracle.QueryExchangeRateRequest
 */
export declare class QueryExchangeRateRequest extends Message<QueryExchangeRateRequest> {
    /**
     * denom defines the denomination to query for.
     *
     * @generated from field: string denom = 1;
     */
    denom: string;
    constructor(data?: PartialMessage<QueryExchangeRateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.oracle.QueryExchangeRateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryExchangeRateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryExchangeRateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryExchangeRateRequest;
    static equals(a: QueryExchangeRateRequest | PlainMessage<QueryExchangeRateRequest> | undefined, b: QueryExchangeRateRequest | PlainMessage<QueryExchangeRateRequest> | undefined): boolean;
}
/**
 * QueryExchangeRateResponse is response type for the
 * Query/ExchangeRate RPC method.
 *
 * @generated from message kujira.oracle.QueryExchangeRateResponse
 */
export declare class QueryExchangeRateResponse extends Message<QueryExchangeRateResponse> {
    /**
     * exchange_rate defines the exchange rate of whitelisted assets
     *
     * @generated from field: string exchange_rate = 1;
     */
    exchangeRate: string;
    constructor(data?: PartialMessage<QueryExchangeRateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.oracle.QueryExchangeRateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryExchangeRateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryExchangeRateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryExchangeRateResponse;
    static equals(a: QueryExchangeRateResponse | PlainMessage<QueryExchangeRateResponse> | undefined, b: QueryExchangeRateResponse | PlainMessage<QueryExchangeRateResponse> | undefined): boolean;
}
/**
 * QueryExchangeRatesRequest is the request type for the Query/ExchangeRates RPC method.
 *
 * @generated from message kujira.oracle.QueryExchangeRatesRequest
 */
export declare class QueryExchangeRatesRequest extends Message<QueryExchangeRatesRequest> {
    constructor(data?: PartialMessage<QueryExchangeRatesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.oracle.QueryExchangeRatesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryExchangeRatesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryExchangeRatesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryExchangeRatesRequest;
    static equals(a: QueryExchangeRatesRequest | PlainMessage<QueryExchangeRatesRequest> | undefined, b: QueryExchangeRatesRequest | PlainMessage<QueryExchangeRatesRequest> | undefined): boolean;
}
/**
 * QueryExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 *
 * @generated from message kujira.oracle.QueryExchangeRatesResponse
 */
export declare class QueryExchangeRatesResponse extends Message<QueryExchangeRatesResponse> {
    /**
     * exchange_rates defines a list of the exchange rate for all whitelisted denoms.
     *
     * @generated from field: repeated cosmos.base.v1beta1.DecCoin exchange_rates = 1;
     */
    exchangeRates: DecCoin[];
    constructor(data?: PartialMessage<QueryExchangeRatesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.oracle.QueryExchangeRatesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryExchangeRatesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryExchangeRatesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryExchangeRatesResponse;
    static equals(a: QueryExchangeRatesResponse | PlainMessage<QueryExchangeRatesResponse> | undefined, b: QueryExchangeRatesResponse | PlainMessage<QueryExchangeRatesResponse> | undefined): boolean;
}
/**
 * QueryActivesRequest is the request type for the Query/Actives RPC method.
 *
 * @generated from message kujira.oracle.QueryActivesRequest
 */
export declare class QueryActivesRequest extends Message<QueryActivesRequest> {
    constructor(data?: PartialMessage<QueryActivesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.oracle.QueryActivesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryActivesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryActivesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryActivesRequest;
    static equals(a: QueryActivesRequest | PlainMessage<QueryActivesRequest> | undefined, b: QueryActivesRequest | PlainMessage<QueryActivesRequest> | undefined): boolean;
}
/**
 * QueryActivesResponse is response type for the
 * Query/Actives RPC method.
 *
 * @generated from message kujira.oracle.QueryActivesResponse
 */
export declare class QueryActivesResponse extends Message<QueryActivesResponse> {
    /**
     * actives defines a list of the denomination which oracle prices aggreed upon.
     *
     * @generated from field: repeated string actives = 1;
     */
    actives: string[];
    constructor(data?: PartialMessage<QueryActivesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.oracle.QueryActivesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryActivesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryActivesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryActivesResponse;
    static equals(a: QueryActivesResponse | PlainMessage<QueryActivesResponse> | undefined, b: QueryActivesResponse | PlainMessage<QueryActivesResponse> | undefined): boolean;
}
/**
 * QueryVoteTargetsRequest is the request type for the Query/VoteTargets RPC method.
 *
 * @generated from message kujira.oracle.QueryVoteTargetsRequest
 */
export declare class QueryVoteTargetsRequest extends Message<QueryVoteTargetsRequest> {
    constructor(data?: PartialMessage<QueryVoteTargetsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.oracle.QueryVoteTargetsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryVoteTargetsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryVoteTargetsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryVoteTargetsRequest;
    static equals(a: QueryVoteTargetsRequest | PlainMessage<QueryVoteTargetsRequest> | undefined, b: QueryVoteTargetsRequest | PlainMessage<QueryVoteTargetsRequest> | undefined): boolean;
}
/**
 * QueryVoteTargetsResponse is response type for the
 * Query/VoteTargets RPC method.
 *
 * @generated from message kujira.oracle.QueryVoteTargetsResponse
 */
export declare class QueryVoteTargetsResponse extends Message<QueryVoteTargetsResponse> {
    /**
     * vote_targets defines a list of the denomination in which everyone
     * should vote in the current vote period.
     *
     * @generated from field: repeated string vote_targets = 1;
     */
    voteTargets: string[];
    constructor(data?: PartialMessage<QueryVoteTargetsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.oracle.QueryVoteTargetsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryVoteTargetsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryVoteTargetsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryVoteTargetsResponse;
    static equals(a: QueryVoteTargetsResponse | PlainMessage<QueryVoteTargetsResponse> | undefined, b: QueryVoteTargetsResponse | PlainMessage<QueryVoteTargetsResponse> | undefined): boolean;
}
/**
 * QueryFeederDelegationRequest is the request type for the Query/FeederDelegation RPC method.
 *
 * @generated from message kujira.oracle.QueryFeederDelegationRequest
 */
export declare class QueryFeederDelegationRequest extends Message<QueryFeederDelegationRequest> {
    /**
     * validator defines the validator address to query for.
     *
     * @generated from field: string validator_addr = 1;
     */
    validatorAddr: string;
    constructor(data?: PartialMessage<QueryFeederDelegationRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.oracle.QueryFeederDelegationRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryFeederDelegationRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryFeederDelegationRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryFeederDelegationRequest;
    static equals(a: QueryFeederDelegationRequest | PlainMessage<QueryFeederDelegationRequest> | undefined, b: QueryFeederDelegationRequest | PlainMessage<QueryFeederDelegationRequest> | undefined): boolean;
}
/**
 * QueryFeederDelegationResponse is response type for the
 * Query/FeederDelegation RPC method.
 *
 * @generated from message kujira.oracle.QueryFeederDelegationResponse
 */
export declare class QueryFeederDelegationResponse extends Message<QueryFeederDelegationResponse> {
    /**
     * feeder_addr defines the feeder delegation of a validator
     *
     * @generated from field: string feeder_addr = 1;
     */
    feederAddr: string;
    constructor(data?: PartialMessage<QueryFeederDelegationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.oracle.QueryFeederDelegationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryFeederDelegationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryFeederDelegationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryFeederDelegationResponse;
    static equals(a: QueryFeederDelegationResponse | PlainMessage<QueryFeederDelegationResponse> | undefined, b: QueryFeederDelegationResponse | PlainMessage<QueryFeederDelegationResponse> | undefined): boolean;
}
/**
 * QueryMissCounterRequest is the request type for the Query/MissCounter RPC method.
 *
 * @generated from message kujira.oracle.QueryMissCounterRequest
 */
export declare class QueryMissCounterRequest extends Message<QueryMissCounterRequest> {
    /**
     * validator defines the validator address to query for.
     *
     * @generated from field: string validator_addr = 1;
     */
    validatorAddr: string;
    constructor(data?: PartialMessage<QueryMissCounterRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.oracle.QueryMissCounterRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryMissCounterRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryMissCounterRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryMissCounterRequest;
    static equals(a: QueryMissCounterRequest | PlainMessage<QueryMissCounterRequest> | undefined, b: QueryMissCounterRequest | PlainMessage<QueryMissCounterRequest> | undefined): boolean;
}
/**
 * QueryMissCounterResponse is response type for the
 * Query/MissCounter RPC method.
 *
 * @generated from message kujira.oracle.QueryMissCounterResponse
 */
export declare class QueryMissCounterResponse extends Message<QueryMissCounterResponse> {
    /**
     * miss_counter defines the oracle miss counter of a validator
     *
     * @generated from field: uint64 miss_counter = 1;
     */
    missCounter: bigint;
    constructor(data?: PartialMessage<QueryMissCounterResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.oracle.QueryMissCounterResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryMissCounterResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryMissCounterResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryMissCounterResponse;
    static equals(a: QueryMissCounterResponse | PlainMessage<QueryMissCounterResponse> | undefined, b: QueryMissCounterResponse | PlainMessage<QueryMissCounterResponse> | undefined): boolean;
}
/**
 * QueryAggregatePrevoteRequest is the request type for the Query/AggregatePrevote RPC method.
 *
 * @generated from message kujira.oracle.QueryAggregatePrevoteRequest
 */
export declare class QueryAggregatePrevoteRequest extends Message<QueryAggregatePrevoteRequest> {
    /**
     * validator defines the validator address to query for.
     *
     * @generated from field: string validator_addr = 1;
     */
    validatorAddr: string;
    constructor(data?: PartialMessage<QueryAggregatePrevoteRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.oracle.QueryAggregatePrevoteRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAggregatePrevoteRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAggregatePrevoteRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAggregatePrevoteRequest;
    static equals(a: QueryAggregatePrevoteRequest | PlainMessage<QueryAggregatePrevoteRequest> | undefined, b: QueryAggregatePrevoteRequest | PlainMessage<QueryAggregatePrevoteRequest> | undefined): boolean;
}
/**
 * QueryAggregatePrevoteResponse is response type for the
 * Query/AggregatePrevote RPC method.
 *
 * @generated from message kujira.oracle.QueryAggregatePrevoteResponse
 */
export declare class QueryAggregatePrevoteResponse extends Message<QueryAggregatePrevoteResponse> {
    /**
     * aggregate_prevote defines oracle aggregate prevote submitted by a validator in the current vote period
     *
     * @generated from field: kujira.oracle.AggregateExchangeRatePrevote aggregate_prevote = 1;
     */
    aggregatePrevote?: AggregateExchangeRatePrevote;
    constructor(data?: PartialMessage<QueryAggregatePrevoteResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.oracle.QueryAggregatePrevoteResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAggregatePrevoteResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAggregatePrevoteResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAggregatePrevoteResponse;
    static equals(a: QueryAggregatePrevoteResponse | PlainMessage<QueryAggregatePrevoteResponse> | undefined, b: QueryAggregatePrevoteResponse | PlainMessage<QueryAggregatePrevoteResponse> | undefined): boolean;
}
/**
 * QueryAggregatePrevotesRequest is the request type for the Query/AggregatePrevotes RPC method.
 *
 * @generated from message kujira.oracle.QueryAggregatePrevotesRequest
 */
export declare class QueryAggregatePrevotesRequest extends Message<QueryAggregatePrevotesRequest> {
    constructor(data?: PartialMessage<QueryAggregatePrevotesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.oracle.QueryAggregatePrevotesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAggregatePrevotesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAggregatePrevotesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAggregatePrevotesRequest;
    static equals(a: QueryAggregatePrevotesRequest | PlainMessage<QueryAggregatePrevotesRequest> | undefined, b: QueryAggregatePrevotesRequest | PlainMessage<QueryAggregatePrevotesRequest> | undefined): boolean;
}
/**
 * QueryAggregatePrevotesResponse is response type for the
 * Query/AggregatePrevotes RPC method.
 *
 * @generated from message kujira.oracle.QueryAggregatePrevotesResponse
 */
export declare class QueryAggregatePrevotesResponse extends Message<QueryAggregatePrevotesResponse> {
    /**
     * aggregate_prevotes defines all oracle aggregate prevotes submitted in the current vote period
     *
     * @generated from field: repeated kujira.oracle.AggregateExchangeRatePrevote aggregate_prevotes = 1;
     */
    aggregatePrevotes: AggregateExchangeRatePrevote[];
    constructor(data?: PartialMessage<QueryAggregatePrevotesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.oracle.QueryAggregatePrevotesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAggregatePrevotesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAggregatePrevotesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAggregatePrevotesResponse;
    static equals(a: QueryAggregatePrevotesResponse | PlainMessage<QueryAggregatePrevotesResponse> | undefined, b: QueryAggregatePrevotesResponse | PlainMessage<QueryAggregatePrevotesResponse> | undefined): boolean;
}
/**
 * QueryAggregateVoteRequest is the request type for the Query/AggregateVote RPC method.
 *
 * @generated from message kujira.oracle.QueryAggregateVoteRequest
 */
export declare class QueryAggregateVoteRequest extends Message<QueryAggregateVoteRequest> {
    /**
     * validator defines the validator address to query for.
     *
     * @generated from field: string validator_addr = 1;
     */
    validatorAddr: string;
    constructor(data?: PartialMessage<QueryAggregateVoteRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.oracle.QueryAggregateVoteRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAggregateVoteRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAggregateVoteRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAggregateVoteRequest;
    static equals(a: QueryAggregateVoteRequest | PlainMessage<QueryAggregateVoteRequest> | undefined, b: QueryAggregateVoteRequest | PlainMessage<QueryAggregateVoteRequest> | undefined): boolean;
}
/**
 * QueryAggregateVoteResponse is response type for the
 * Query/AggregateVote RPC method.
 *
 * @generated from message kujira.oracle.QueryAggregateVoteResponse
 */
export declare class QueryAggregateVoteResponse extends Message<QueryAggregateVoteResponse> {
    /**
     * aggregate_vote defines oracle aggregate vote submitted by a validator in the current vote period
     *
     * @generated from field: kujira.oracle.AggregateExchangeRateVote aggregate_vote = 1;
     */
    aggregateVote?: AggregateExchangeRateVote;
    constructor(data?: PartialMessage<QueryAggregateVoteResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.oracle.QueryAggregateVoteResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAggregateVoteResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAggregateVoteResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAggregateVoteResponse;
    static equals(a: QueryAggregateVoteResponse | PlainMessage<QueryAggregateVoteResponse> | undefined, b: QueryAggregateVoteResponse | PlainMessage<QueryAggregateVoteResponse> | undefined): boolean;
}
/**
 * QueryAggregateVotesRequest is the request type for the Query/AggregateVotes RPC method.
 *
 * @generated from message kujira.oracle.QueryAggregateVotesRequest
 */
export declare class QueryAggregateVotesRequest extends Message<QueryAggregateVotesRequest> {
    constructor(data?: PartialMessage<QueryAggregateVotesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.oracle.QueryAggregateVotesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAggregateVotesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAggregateVotesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAggregateVotesRequest;
    static equals(a: QueryAggregateVotesRequest | PlainMessage<QueryAggregateVotesRequest> | undefined, b: QueryAggregateVotesRequest | PlainMessage<QueryAggregateVotesRequest> | undefined): boolean;
}
/**
 * QueryAggregateVotesResponse is response type for the
 * Query/AggregateVotes RPC method.
 *
 * @generated from message kujira.oracle.QueryAggregateVotesResponse
 */
export declare class QueryAggregateVotesResponse extends Message<QueryAggregateVotesResponse> {
    /**
     * aggregate_votes defines all oracle aggregate votes submitted in the current vote period
     *
     * @generated from field: repeated kujira.oracle.AggregateExchangeRateVote aggregate_votes = 1;
     */
    aggregateVotes: AggregateExchangeRateVote[];
    constructor(data?: PartialMessage<QueryAggregateVotesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.oracle.QueryAggregateVotesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAggregateVotesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAggregateVotesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAggregateVotesResponse;
    static equals(a: QueryAggregateVotesResponse | PlainMessage<QueryAggregateVotesResponse> | undefined, b: QueryAggregateVotesResponse | PlainMessage<QueryAggregateVotesResponse> | undefined): boolean;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message kujira.oracle.QueryParamsRequest
 */
export declare class QueryParamsRequest extends Message<QueryParamsRequest> {
    constructor(data?: PartialMessage<QueryParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.oracle.QueryParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest;
    static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 *
 * @generated from message kujira.oracle.QueryParamsResponse
 */
export declare class QueryParamsResponse extends Message<QueryParamsResponse> {
    /**
     * params defines the parameters of the module.
     *
     * @generated from field: kujira.oracle.Params params = 1;
     */
    params?: Params;
    constructor(data?: PartialMessage<QueryParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.oracle.QueryParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse;
    static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map