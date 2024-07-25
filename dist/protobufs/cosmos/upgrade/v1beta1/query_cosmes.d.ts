import { QueryAppliedPlanRequest, QueryAppliedPlanResponse, QueryAuthorityRequest, QueryAuthorityResponse, QueryCurrentPlanRequest, QueryCurrentPlanResponse, QueryModuleVersionsRequest, QueryModuleVersionsResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse } from "./query_pb.js";
/**
 * CurrentPlan queries the current upgrade plan.
 *
 * @generated from rpc cosmos.upgrade.v1beta1.Query.CurrentPlan
 */
export declare const QueryCurrentPlanService: {
    readonly typeName: "cosmos.upgrade.v1beta1.Query";
    readonly method: "CurrentPlan";
    readonly Request: typeof QueryCurrentPlanRequest;
    readonly Response: typeof QueryCurrentPlanResponse;
};
/**
 * AppliedPlan queries a previously applied upgrade plan by its name.
 *
 * @generated from rpc cosmos.upgrade.v1beta1.Query.AppliedPlan
 */
export declare const QueryAppliedPlanService: {
    readonly typeName: "cosmos.upgrade.v1beta1.Query";
    readonly method: "AppliedPlan";
    readonly Request: typeof QueryAppliedPlanRequest;
    readonly Response: typeof QueryAppliedPlanResponse;
};
/**
 * UpgradedConsensusState queries the consensus state that will serve
 * as a trusted kernel for the next version of this chain. It will only be
 * stored at the last height of this chain.
 * UpgradedConsensusState RPC not supported with legacy querier
 * This rpc is deprecated now that IBC has its own replacement
 * (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)
 *
 * @generated from rpc cosmos.upgrade.v1beta1.Query.UpgradedConsensusState
 * @deprecated
 */
export declare const QueryUpgradedConsensusStateService: {
    readonly typeName: "cosmos.upgrade.v1beta1.Query";
    readonly method: "UpgradedConsensusState";
    readonly Request: typeof QueryUpgradedConsensusStateRequest;
    readonly Response: typeof QueryUpgradedConsensusStateResponse;
};
/**
 * ModuleVersions queries the list of module versions from state.
 *
 * Since: cosmos-sdk 0.43
 *
 * @generated from rpc cosmos.upgrade.v1beta1.Query.ModuleVersions
 */
export declare const QueryModuleVersionsService: {
    readonly typeName: "cosmos.upgrade.v1beta1.Query";
    readonly method: "ModuleVersions";
    readonly Request: typeof QueryModuleVersionsRequest;
    readonly Response: typeof QueryModuleVersionsResponse;
};
/**
 * Returns the account with authority to conduct upgrades
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from rpc cosmos.upgrade.v1beta1.Query.Authority
 */
export declare const QueryAuthorityService: {
    readonly typeName: "cosmos.upgrade.v1beta1.Query";
    readonly method: "Authority";
    readonly Request: typeof QueryAuthorityRequest;
    readonly Response: typeof QueryAuthorityResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map