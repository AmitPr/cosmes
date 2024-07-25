import { MsgCreateGroup, MsgCreateGroupPolicy, MsgCreateGroupPolicyResponse, MsgCreateGroupResponse, MsgCreateGroupWithPolicy, MsgCreateGroupWithPolicyResponse, MsgExec, MsgExecResponse, MsgLeaveGroup, MsgLeaveGroupResponse, MsgSubmitProposal, MsgSubmitProposalResponse, MsgUpdateGroupAdmin, MsgUpdateGroupAdminResponse, MsgUpdateGroupMembers, MsgUpdateGroupMembersResponse, MsgUpdateGroupMetadata, MsgUpdateGroupMetadataResponse, MsgUpdateGroupPolicyAdmin, MsgUpdateGroupPolicyAdminResponse, MsgUpdateGroupPolicyDecisionPolicy, MsgUpdateGroupPolicyDecisionPolicyResponse, MsgUpdateGroupPolicyMetadata, MsgUpdateGroupPolicyMetadataResponse, MsgVote, MsgVoteResponse, MsgWithdrawProposal, MsgWithdrawProposalResponse } from "./tx_pb.js";
/**
 * CreateGroup creates a new group with an admin account address, a list of members and some optional metadata.
 *
 * @generated from rpc cosmos.group.v1.Msg.CreateGroup
 */
export declare const MsgCreateGroupService: {
    readonly typeName: "cosmos.group.v1.Msg";
    readonly method: "CreateGroup";
    readonly Request: typeof MsgCreateGroup;
    readonly Response: typeof MsgCreateGroupResponse;
};
/**
 * UpdateGroupMembers updates the group members with given group id and admin address.
 *
 * @generated from rpc cosmos.group.v1.Msg.UpdateGroupMembers
 */
export declare const MsgUpdateGroupMembersService: {
    readonly typeName: "cosmos.group.v1.Msg";
    readonly method: "UpdateGroupMembers";
    readonly Request: typeof MsgUpdateGroupMembers;
    readonly Response: typeof MsgUpdateGroupMembersResponse;
};
/**
 * UpdateGroupAdmin updates the group admin with given group id and previous admin address.
 *
 * @generated from rpc cosmos.group.v1.Msg.UpdateGroupAdmin
 */
export declare const MsgUpdateGroupAdminService: {
    readonly typeName: "cosmos.group.v1.Msg";
    readonly method: "UpdateGroupAdmin";
    readonly Request: typeof MsgUpdateGroupAdmin;
    readonly Response: typeof MsgUpdateGroupAdminResponse;
};
/**
 * UpdateGroupMetadata updates the group metadata with given group id and admin address.
 *
 * @generated from rpc cosmos.group.v1.Msg.UpdateGroupMetadata
 */
export declare const MsgUpdateGroupMetadataService: {
    readonly typeName: "cosmos.group.v1.Msg";
    readonly method: "UpdateGroupMetadata";
    readonly Request: typeof MsgUpdateGroupMetadata;
    readonly Response: typeof MsgUpdateGroupMetadataResponse;
};
/**
 * CreateGroupPolicy creates a new group policy using given DecisionPolicy.
 *
 * @generated from rpc cosmos.group.v1.Msg.CreateGroupPolicy
 */
export declare const MsgCreateGroupPolicyService: {
    readonly typeName: "cosmos.group.v1.Msg";
    readonly method: "CreateGroupPolicy";
    readonly Request: typeof MsgCreateGroupPolicy;
    readonly Response: typeof MsgCreateGroupPolicyResponse;
};
/**
 * CreateGroupWithPolicy creates a new group with policy.
 *
 * @generated from rpc cosmos.group.v1.Msg.CreateGroupWithPolicy
 */
export declare const MsgCreateGroupWithPolicyService: {
    readonly typeName: "cosmos.group.v1.Msg";
    readonly method: "CreateGroupWithPolicy";
    readonly Request: typeof MsgCreateGroupWithPolicy;
    readonly Response: typeof MsgCreateGroupWithPolicyResponse;
};
/**
 * UpdateGroupPolicyAdmin updates a group policy admin.
 *
 * @generated from rpc cosmos.group.v1.Msg.UpdateGroupPolicyAdmin
 */
export declare const MsgUpdateGroupPolicyAdminService: {
    readonly typeName: "cosmos.group.v1.Msg";
    readonly method: "UpdateGroupPolicyAdmin";
    readonly Request: typeof MsgUpdateGroupPolicyAdmin;
    readonly Response: typeof MsgUpdateGroupPolicyAdminResponse;
};
/**
 * UpdateGroupPolicyDecisionPolicy allows a group policy's decision policy to be updated.
 *
 * @generated from rpc cosmos.group.v1.Msg.UpdateGroupPolicyDecisionPolicy
 */
export declare const MsgUpdateGroupPolicyDecisionPolicyService: {
    readonly typeName: "cosmos.group.v1.Msg";
    readonly method: "UpdateGroupPolicyDecisionPolicy";
    readonly Request: typeof MsgUpdateGroupPolicyDecisionPolicy;
    readonly Response: typeof MsgUpdateGroupPolicyDecisionPolicyResponse;
};
/**
 * UpdateGroupPolicyMetadata updates a group policy metadata.
 *
 * @generated from rpc cosmos.group.v1.Msg.UpdateGroupPolicyMetadata
 */
export declare const MsgUpdateGroupPolicyMetadataService: {
    readonly typeName: "cosmos.group.v1.Msg";
    readonly method: "UpdateGroupPolicyMetadata";
    readonly Request: typeof MsgUpdateGroupPolicyMetadata;
    readonly Response: typeof MsgUpdateGroupPolicyMetadataResponse;
};
/**
 * SubmitProposal submits a new proposal.
 *
 * @generated from rpc cosmos.group.v1.Msg.SubmitProposal
 */
export declare const MsgSubmitProposalService: {
    readonly typeName: "cosmos.group.v1.Msg";
    readonly method: "SubmitProposal";
    readonly Request: typeof MsgSubmitProposal;
    readonly Response: typeof MsgSubmitProposalResponse;
};
/**
 * WithdrawProposal withdraws a proposal.
 *
 * @generated from rpc cosmos.group.v1.Msg.WithdrawProposal
 */
export declare const MsgWithdrawProposalService: {
    readonly typeName: "cosmos.group.v1.Msg";
    readonly method: "WithdrawProposal";
    readonly Request: typeof MsgWithdrawProposal;
    readonly Response: typeof MsgWithdrawProposalResponse;
};
/**
 * Vote allows a voter to vote on a proposal.
 *
 * @generated from rpc cosmos.group.v1.Msg.Vote
 */
export declare const MsgVoteService: {
    readonly typeName: "cosmos.group.v1.Msg";
    readonly method: "Vote";
    readonly Request: typeof MsgVote;
    readonly Response: typeof MsgVoteResponse;
};
/**
 * Exec executes a proposal.
 *
 * @generated from rpc cosmos.group.v1.Msg.Exec
 */
export declare const MsgExecService: {
    readonly typeName: "cosmos.group.v1.Msg";
    readonly method: "Exec";
    readonly Request: typeof MsgExec;
    readonly Response: typeof MsgExecResponse;
};
/**
 * LeaveGroup allows a group member to leave the group.
 *
 * @generated from rpc cosmos.group.v1.Msg.LeaveGroup
 */
export declare const MsgLeaveGroupService: {
    readonly typeName: "cosmos.group.v1.Msg";
    readonly method: "LeaveGroup";
    readonly Request: typeof MsgLeaveGroup;
    readonly Response: typeof MsgLeaveGroupResponse;
};
//# sourceMappingURL=tx_cosmes.d.ts.map