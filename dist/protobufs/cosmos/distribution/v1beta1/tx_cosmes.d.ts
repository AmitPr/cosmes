import { MsgCommunityPoolSpend, MsgCommunityPoolSpendResponse, MsgFundCommunityPool, MsgFundCommunityPoolResponse, MsgSetWithdrawAddress, MsgSetWithdrawAddressResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardResponse, MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionResponse } from "./tx_pb.js";
/**
 * SetWithdrawAddress defines a method to change the withdraw address
 * for a delegator (or validator self-delegation).
 *
 * @generated from rpc cosmos.distribution.v1beta1.Msg.SetWithdrawAddress
 */
export declare const MsgSetWithdrawAddressService: {
    readonly typeName: "cosmos.distribution.v1beta1.Msg";
    readonly method: "SetWithdrawAddress";
    readonly Request: typeof MsgSetWithdrawAddress;
    readonly Response: typeof MsgSetWithdrawAddressResponse;
};
/**
 * WithdrawDelegatorReward defines a method to withdraw rewards of delegator
 * from a single validator.
 *
 * @generated from rpc cosmos.distribution.v1beta1.Msg.WithdrawDelegatorReward
 */
export declare const MsgWithdrawDelegatorRewardService: {
    readonly typeName: "cosmos.distribution.v1beta1.Msg";
    readonly method: "WithdrawDelegatorReward";
    readonly Request: typeof MsgWithdrawDelegatorReward;
    readonly Response: typeof MsgWithdrawDelegatorRewardResponse;
};
/**
 * WithdrawValidatorCommission defines a method to withdraw the
 * full commission to the validator address.
 *
 * @generated from rpc cosmos.distribution.v1beta1.Msg.WithdrawValidatorCommission
 */
export declare const MsgWithdrawValidatorCommissionService: {
    readonly typeName: "cosmos.distribution.v1beta1.Msg";
    readonly method: "WithdrawValidatorCommission";
    readonly Request: typeof MsgWithdrawValidatorCommission;
    readonly Response: typeof MsgWithdrawValidatorCommissionResponse;
};
/**
 * FundCommunityPool defines a method to allow an account to directly
 * fund the community pool.
 *
 * @generated from rpc cosmos.distribution.v1beta1.Msg.FundCommunityPool
 */
export declare const MsgFundCommunityPoolService: {
    readonly typeName: "cosmos.distribution.v1beta1.Msg";
    readonly method: "FundCommunityPool";
    readonly Request: typeof MsgFundCommunityPool;
    readonly Response: typeof MsgFundCommunityPoolResponse;
};
/**
 * UpdateParams defines a governance operation for updating the x/distribution
 * module parameters. The authority is defined in the keeper.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from rpc cosmos.distribution.v1beta1.Msg.UpdateParams
 */
export declare const MsgUpdateParamsService: {
    readonly typeName: "cosmos.distribution.v1beta1.Msg";
    readonly method: "UpdateParams";
    readonly Request: typeof MsgUpdateParams;
    readonly Response: typeof MsgUpdateParamsResponse;
};
/**
 * CommunityPoolSpend defines a governance operation for sending tokens from
 * the community pool in the x/distribution module to another account, which
 * could be the governance module itself. The authority is defined in the
 * keeper.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from rpc cosmos.distribution.v1beta1.Msg.CommunityPoolSpend
 */
export declare const MsgCommunityPoolSpendService: {
    readonly typeName: "cosmos.distribution.v1beta1.Msg";
    readonly method: "CommunityPoolSpend";
    readonly Request: typeof MsgCommunityPoolSpend;
    readonly Response: typeof MsgCommunityPoolSpendResponse;
};
//# sourceMappingURL=tx_cosmes.d.ts.map