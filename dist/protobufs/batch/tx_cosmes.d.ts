import { MsgBatchResetDelegation, MsgBatchResetDelegationResponse, MsgWithdrawAllDelegatorRewards, MsgWithdrawAllDelegatorRewardsResponse } from "./tx_pb.js";
/**
 * WithdrawAllDelegatorRewards defines a method to withdraw rewards of delegator
 * from all staked validators.
 *
 * @generated from rpc batch.Msg.WithdrawAllDelegatorRewards
 */
export declare const MsgWithdrawAllDelegatorRewardsService: {
    readonly typeName: "batch.Msg";
    readonly method: "WithdrawAllDelegatorRewards";
    readonly Request: typeof MsgWithdrawAllDelegatorRewards;
    readonly Response: typeof MsgWithdrawAllDelegatorRewardsResponse;
};
/**
 * BatchResetDelegation defines a method to delegate or undelegate in batches
 * from existing delegation and target delegation amount
 *
 * @generated from rpc batch.Msg.BatchResetDelegation
 */
export declare const MsgBatchResetDelegationService: {
    readonly typeName: "batch.Msg";
    readonly method: "BatchResetDelegation";
    readonly Request: typeof MsgBatchResetDelegation;
    readonly Response: typeof MsgBatchResetDelegationResponse;
};
//# sourceMappingURL=tx_cosmes.d.ts.map