import { QueryActivesRequest, QueryActivesResponse, QueryAggregatePrevoteRequest, QueryAggregatePrevoteResponse, QueryAggregatePrevotesRequest, QueryAggregatePrevotesResponse, QueryAggregateVoteRequest, QueryAggregateVoteResponse, QueryAggregateVotesRequest, QueryAggregateVotesResponse, QueryExchangeRateRequest, QueryExchangeRateResponse, QueryExchangeRatesRequest, QueryExchangeRatesResponse, QueryFeederDelegationRequest, QueryFeederDelegationResponse, QueryMissCounterRequest, QueryMissCounterResponse, QueryParamsRequest, QueryParamsResponse } from "./query_pb.js";
/**
 * ExchangeRate returns exchange rate of a denom
 *
 * @generated from rpc kujira.oracle.Query.ExchangeRate
 */
export declare const QueryExchangeRateService: {
    readonly typeName: "kujira.oracle.Query";
    readonly method: "ExchangeRate";
    readonly Request: typeof QueryExchangeRateRequest;
    readonly Response: typeof QueryExchangeRateResponse;
};
/**
 * ExchangeRates returns exchange rates of all denoms
 *
 * @generated from rpc kujira.oracle.Query.ExchangeRates
 */
export declare const QueryExchangeRatesService: {
    readonly typeName: "kujira.oracle.Query";
    readonly method: "ExchangeRates";
    readonly Request: typeof QueryExchangeRatesRequest;
    readonly Response: typeof QueryExchangeRatesResponse;
};
/**
 * Actives returns all active denoms
 *
 * @generated from rpc kujira.oracle.Query.Actives
 */
export declare const QueryActivesService: {
    readonly typeName: "kujira.oracle.Query";
    readonly method: "Actives";
    readonly Request: typeof QueryActivesRequest;
    readonly Response: typeof QueryActivesResponse;
};
/**
 * FeederDelegation returns feeder delegation of a validator
 *
 * @generated from rpc kujira.oracle.Query.FeederDelegation
 */
export declare const QueryFeederDelegationService: {
    readonly typeName: "kujira.oracle.Query";
    readonly method: "FeederDelegation";
    readonly Request: typeof QueryFeederDelegationRequest;
    readonly Response: typeof QueryFeederDelegationResponse;
};
/**
 * MissCounter returns oracle miss counter of a validator
 *
 * @generated from rpc kujira.oracle.Query.MissCounter
 */
export declare const QueryMissCounterService: {
    readonly typeName: "kujira.oracle.Query";
    readonly method: "MissCounter";
    readonly Request: typeof QueryMissCounterRequest;
    readonly Response: typeof QueryMissCounterResponse;
};
/**
 * AggregatePrevote returns an aggregate prevote of a validator
 *
 * @generated from rpc kujira.oracle.Query.AggregatePrevote
 */
export declare const QueryAggregatePrevoteService: {
    readonly typeName: "kujira.oracle.Query";
    readonly method: "AggregatePrevote";
    readonly Request: typeof QueryAggregatePrevoteRequest;
    readonly Response: typeof QueryAggregatePrevoteResponse;
};
/**
 * AggregatePrevotes returns aggregate prevotes of all validators
 *
 * @generated from rpc kujira.oracle.Query.AggregatePrevotes
 */
export declare const QueryAggregatePrevotesService: {
    readonly typeName: "kujira.oracle.Query";
    readonly method: "AggregatePrevotes";
    readonly Request: typeof QueryAggregatePrevotesRequest;
    readonly Response: typeof QueryAggregatePrevotesResponse;
};
/**
 * AggregateVote returns an aggregate vote of a validator
 *
 * @generated from rpc kujira.oracle.Query.AggregateVote
 */
export declare const QueryAggregateVoteService: {
    readonly typeName: "kujira.oracle.Query";
    readonly method: "AggregateVote";
    readonly Request: typeof QueryAggregateVoteRequest;
    readonly Response: typeof QueryAggregateVoteResponse;
};
/**
 * AggregateVotes returns aggregate votes of all validators
 *
 * @generated from rpc kujira.oracle.Query.AggregateVotes
 */
export declare const QueryAggregateVotesService: {
    readonly typeName: "kujira.oracle.Query";
    readonly method: "AggregateVotes";
    readonly Request: typeof QueryAggregateVotesRequest;
    readonly Response: typeof QueryAggregateVotesResponse;
};
/**
 * Params queries all parameters.
 *
 * @generated from rpc kujira.oracle.Query.Params
 */
export declare const QueryParamsService: {
    readonly typeName: "kujira.oracle.Query";
    readonly method: "Params";
    readonly Request: typeof QueryParamsRequest;
    readonly Response: typeof QueryParamsResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map