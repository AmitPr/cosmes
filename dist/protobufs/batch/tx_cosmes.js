// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file batch/tx.proto (package batch, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { MsgBatchResetDelegation, MsgBatchResetDelegationResponse, MsgWithdrawAllDelegatorRewards, MsgWithdrawAllDelegatorRewardsResponse } from "./tx_pb.js";
const TYPE_NAME = "batch.Msg";
/**
 * WithdrawAllDelegatorRewards defines a method to withdraw rewards of delegator
 * from all staked validators.
 *
 * @generated from rpc batch.Msg.WithdrawAllDelegatorRewards
 */
export const MsgWithdrawAllDelegatorRewardsService = {
    typeName: TYPE_NAME,
    method: "WithdrawAllDelegatorRewards",
    Request: MsgWithdrawAllDelegatorRewards,
    Response: MsgWithdrawAllDelegatorRewardsResponse,
};
/**
 * BatchResetDelegation defines a method to delegate or undelegate in batches
 * from existing delegation and target delegation amount
 *
 * @generated from rpc batch.Msg.BatchResetDelegation
 */
export const MsgBatchResetDelegationService = {
    typeName: TYPE_NAME,
    method: "BatchResetDelegation",
    Request: MsgBatchResetDelegation,
    Response: MsgBatchResetDelegationResponse,
};
//# sourceMappingURL=tx_cosmes.js.map