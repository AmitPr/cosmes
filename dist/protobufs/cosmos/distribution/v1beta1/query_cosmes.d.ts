import { QueryCommunityPoolRequest, QueryCommunityPoolResponse, QueryDelegationRewardsRequest, QueryDelegationRewardsResponse, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse, QueryParamsRequest, QueryParamsResponse, QueryValidatorCommissionRequest, QueryValidatorCommissionResponse, QueryValidatorDistributionInfoRequest, QueryValidatorDistributionInfoResponse, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse, QueryValidatorSlashesRequest, QueryValidatorSlashesResponse } from "./query_pb.js";
/**
 * Params queries params of the distribution module.
 *
 * @generated from rpc cosmos.distribution.v1beta1.Query.Params
 */
export declare const QueryParamsService: {
    readonly typeName: "cosmos.distribution.v1beta1.Query";
    readonly method: "Params";
    readonly Request: typeof QueryParamsRequest;
    readonly Response: typeof QueryParamsResponse;
};
/**
 * ValidatorDistributionInfo queries validator commission and self-delegation rewards for validator
 *
 * @generated from rpc cosmos.distribution.v1beta1.Query.ValidatorDistributionInfo
 */
export declare const QueryValidatorDistributionInfoService: {
    readonly typeName: "cosmos.distribution.v1beta1.Query";
    readonly method: "ValidatorDistributionInfo";
    readonly Request: typeof QueryValidatorDistributionInfoRequest;
    readonly Response: typeof QueryValidatorDistributionInfoResponse;
};
/**
 * ValidatorOutstandingRewards queries rewards of a validator address.
 *
 * @generated from rpc cosmos.distribution.v1beta1.Query.ValidatorOutstandingRewards
 */
export declare const QueryValidatorOutstandingRewardsService: {
    readonly typeName: "cosmos.distribution.v1beta1.Query";
    readonly method: "ValidatorOutstandingRewards";
    readonly Request: typeof QueryValidatorOutstandingRewardsRequest;
    readonly Response: typeof QueryValidatorOutstandingRewardsResponse;
};
/**
 * ValidatorCommission queries accumulated commission for a validator.
 *
 * @generated from rpc cosmos.distribution.v1beta1.Query.ValidatorCommission
 */
export declare const QueryValidatorCommissionService: {
    readonly typeName: "cosmos.distribution.v1beta1.Query";
    readonly method: "ValidatorCommission";
    readonly Request: typeof QueryValidatorCommissionRequest;
    readonly Response: typeof QueryValidatorCommissionResponse;
};
/**
 * ValidatorSlashes queries slash events of a validator.
 *
 * @generated from rpc cosmos.distribution.v1beta1.Query.ValidatorSlashes
 */
export declare const QueryValidatorSlashesService: {
    readonly typeName: "cosmos.distribution.v1beta1.Query";
    readonly method: "ValidatorSlashes";
    readonly Request: typeof QueryValidatorSlashesRequest;
    readonly Response: typeof QueryValidatorSlashesResponse;
};
/**
 * DelegationRewards queries the total rewards accrued by a delegation.
 *
 * @generated from rpc cosmos.distribution.v1beta1.Query.DelegationRewards
 */
export declare const QueryDelegationRewardsService: {
    readonly typeName: "cosmos.distribution.v1beta1.Query";
    readonly method: "DelegationRewards";
    readonly Request: typeof QueryDelegationRewardsRequest;
    readonly Response: typeof QueryDelegationRewardsResponse;
};
/**
 * DelegationTotalRewards queries the total rewards accrued by a each
 * validator.
 *
 * @generated from rpc cosmos.distribution.v1beta1.Query.DelegationTotalRewards
 */
export declare const QueryDelegationTotalRewardsService: {
    readonly typeName: "cosmos.distribution.v1beta1.Query";
    readonly method: "DelegationTotalRewards";
    readonly Request: typeof QueryDelegationTotalRewardsRequest;
    readonly Response: typeof QueryDelegationTotalRewardsResponse;
};
/**
 * DelegatorValidators queries the validators of a delegator.
 *
 * @generated from rpc cosmos.distribution.v1beta1.Query.DelegatorValidators
 */
export declare const QueryDelegatorValidatorsService: {
    readonly typeName: "cosmos.distribution.v1beta1.Query";
    readonly method: "DelegatorValidators";
    readonly Request: typeof QueryDelegatorValidatorsRequest;
    readonly Response: typeof QueryDelegatorValidatorsResponse;
};
/**
 * DelegatorWithdrawAddress queries withdraw address of a delegator.
 *
 * @generated from rpc cosmos.distribution.v1beta1.Query.DelegatorWithdrawAddress
 */
export declare const QueryDelegatorWithdrawAddressService: {
    readonly typeName: "cosmos.distribution.v1beta1.Query";
    readonly method: "DelegatorWithdrawAddress";
    readonly Request: typeof QueryDelegatorWithdrawAddressRequest;
    readonly Response: typeof QueryDelegatorWithdrawAddressResponse;
};
/**
 * CommunityPool queries the community pool coins.
 *
 * @generated from rpc cosmos.distribution.v1beta1.Query.CommunityPool
 */
export declare const QueryCommunityPoolService: {
    readonly typeName: "cosmos.distribution.v1beta1.Query";
    readonly method: "CommunityPool";
    readonly Request: typeof QueryCommunityPoolRequest;
    readonly Response: typeof QueryCommunityPoolResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map