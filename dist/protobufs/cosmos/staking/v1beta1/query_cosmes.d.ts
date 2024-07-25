import { QueryDelegationRequest, QueryDelegationResponse, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse, QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryHistoricalInfoRequest, QueryHistoricalInfoResponse, QueryParamsRequest, QueryParamsResponse, QueryPoolRequest, QueryPoolResponse, QueryRedelegationsRequest, QueryRedelegationsResponse, QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse, QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse, QueryValidatorRequest, QueryValidatorResponse, QueryValidatorsRequest, QueryValidatorsResponse, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse } from "./query_pb.js";
/**
 * Validators queries all validators that match the given status.
 *
 * When called from another module, this query might consume a high amount of
 * gas if the pagination field is incorrectly set.
 *
 * @generated from rpc cosmos.staking.v1beta1.Query.Validators
 */
export declare const QueryValidatorsService: {
    readonly typeName: "cosmos.staking.v1beta1.Query";
    readonly method: "Validators";
    readonly Request: typeof QueryValidatorsRequest;
    readonly Response: typeof QueryValidatorsResponse;
};
/**
 * Validator queries validator info for given validator address.
 *
 * @generated from rpc cosmos.staking.v1beta1.Query.Validator
 */
export declare const QueryValidatorService: {
    readonly typeName: "cosmos.staking.v1beta1.Query";
    readonly method: "Validator";
    readonly Request: typeof QueryValidatorRequest;
    readonly Response: typeof QueryValidatorResponse;
};
/**
 * ValidatorDelegations queries delegate info for given validator.
 *
 * When called from another module, this query might consume a high amount of
 * gas if the pagination field is incorrectly set.
 *
 * @generated from rpc cosmos.staking.v1beta1.Query.ValidatorDelegations
 */
export declare const QueryValidatorDelegationsService: {
    readonly typeName: "cosmos.staking.v1beta1.Query";
    readonly method: "ValidatorDelegations";
    readonly Request: typeof QueryValidatorDelegationsRequest;
    readonly Response: typeof QueryValidatorDelegationsResponse;
};
/**
 * ValidatorUnbondingDelegations queries unbonding delegations of a validator.
 *
 * When called from another module, this query might consume a high amount of
 * gas if the pagination field is incorrectly set.
 *
 * @generated from rpc cosmos.staking.v1beta1.Query.ValidatorUnbondingDelegations
 */
export declare const QueryValidatorUnbondingDelegationsService: {
    readonly typeName: "cosmos.staking.v1beta1.Query";
    readonly method: "ValidatorUnbondingDelegations";
    readonly Request: typeof QueryValidatorUnbondingDelegationsRequest;
    readonly Response: typeof QueryValidatorUnbondingDelegationsResponse;
};
/**
 * Delegation queries delegate info for given validator delegator pair.
 *
 * @generated from rpc cosmos.staking.v1beta1.Query.Delegation
 */
export declare const QueryDelegationService: {
    readonly typeName: "cosmos.staking.v1beta1.Query";
    readonly method: "Delegation";
    readonly Request: typeof QueryDelegationRequest;
    readonly Response: typeof QueryDelegationResponse;
};
/**
 * UnbondingDelegation queries unbonding info for given validator delegator
 * pair.
 *
 * @generated from rpc cosmos.staking.v1beta1.Query.UnbondingDelegation
 */
export declare const QueryUnbondingDelegationService: {
    readonly typeName: "cosmos.staking.v1beta1.Query";
    readonly method: "UnbondingDelegation";
    readonly Request: typeof QueryUnbondingDelegationRequest;
    readonly Response: typeof QueryUnbondingDelegationResponse;
};
/**
 * DelegatorDelegations queries all delegations of a given delegator address.
 *
 * When called from another module, this query might consume a high amount of
 * gas if the pagination field is incorrectly set.
 *
 * @generated from rpc cosmos.staking.v1beta1.Query.DelegatorDelegations
 */
export declare const QueryDelegatorDelegationsService: {
    readonly typeName: "cosmos.staking.v1beta1.Query";
    readonly method: "DelegatorDelegations";
    readonly Request: typeof QueryDelegatorDelegationsRequest;
    readonly Response: typeof QueryDelegatorDelegationsResponse;
};
/**
 * DelegatorUnbondingDelegations queries all unbonding delegations of a given
 * delegator address.
 *
 * When called from another module, this query might consume a high amount of
 * gas if the pagination field is incorrectly set.
 *
 * @generated from rpc cosmos.staking.v1beta1.Query.DelegatorUnbondingDelegations
 */
export declare const QueryDelegatorUnbondingDelegationsService: {
    readonly typeName: "cosmos.staking.v1beta1.Query";
    readonly method: "DelegatorUnbondingDelegations";
    readonly Request: typeof QueryDelegatorUnbondingDelegationsRequest;
    readonly Response: typeof QueryDelegatorUnbondingDelegationsResponse;
};
/**
 * Redelegations queries redelegations of given address.
 *
 * When called from another module, this query might consume a high amount of
 * gas if the pagination field is incorrectly set.
 *
 * @generated from rpc cosmos.staking.v1beta1.Query.Redelegations
 */
export declare const QueryRedelegationsService: {
    readonly typeName: "cosmos.staking.v1beta1.Query";
    readonly method: "Redelegations";
    readonly Request: typeof QueryRedelegationsRequest;
    readonly Response: typeof QueryRedelegationsResponse;
};
/**
 * DelegatorValidators queries all validators info for given delegator
 * address.
 *
 * When called from another module, this query might consume a high amount of
 * gas if the pagination field is incorrectly set.
 *
 * @generated from rpc cosmos.staking.v1beta1.Query.DelegatorValidators
 */
export declare const QueryDelegatorValidatorsService: {
    readonly typeName: "cosmos.staking.v1beta1.Query";
    readonly method: "DelegatorValidators";
    readonly Request: typeof QueryDelegatorValidatorsRequest;
    readonly Response: typeof QueryDelegatorValidatorsResponse;
};
/**
 * DelegatorValidator queries validator info for given delegator validator
 * pair.
 *
 * @generated from rpc cosmos.staking.v1beta1.Query.DelegatorValidator
 */
export declare const QueryDelegatorValidatorService: {
    readonly typeName: "cosmos.staking.v1beta1.Query";
    readonly method: "DelegatorValidator";
    readonly Request: typeof QueryDelegatorValidatorRequest;
    readonly Response: typeof QueryDelegatorValidatorResponse;
};
/**
 * HistoricalInfo queries the historical info for given height.
 *
 * @generated from rpc cosmos.staking.v1beta1.Query.HistoricalInfo
 */
export declare const QueryHistoricalInfoService: {
    readonly typeName: "cosmos.staking.v1beta1.Query";
    readonly method: "HistoricalInfo";
    readonly Request: typeof QueryHistoricalInfoRequest;
    readonly Response: typeof QueryHistoricalInfoResponse;
};
/**
 * Pool queries the pool info.
 *
 * @generated from rpc cosmos.staking.v1beta1.Query.Pool
 */
export declare const QueryPoolService: {
    readonly typeName: "cosmos.staking.v1beta1.Query";
    readonly method: "Pool";
    readonly Request: typeof QueryPoolRequest;
    readonly Response: typeof QueryPoolResponse;
};
/**
 * Parameters queries the staking parameters.
 *
 * @generated from rpc cosmos.staking.v1beta1.Query.Params
 */
export declare const QueryParamsService: {
    readonly typeName: "cosmos.staking.v1beta1.Query";
    readonly method: "Params";
    readonly Request: typeof QueryParamsRequest;
    readonly Response: typeof QueryParamsResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map