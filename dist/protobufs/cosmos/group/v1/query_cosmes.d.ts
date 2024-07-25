import { QueryGroupInfoRequest, QueryGroupInfoResponse, QueryGroupMembersRequest, QueryGroupMembersResponse, QueryGroupPoliciesByAdminRequest, QueryGroupPoliciesByAdminResponse, QueryGroupPoliciesByGroupRequest, QueryGroupPoliciesByGroupResponse, QueryGroupPolicyInfoRequest, QueryGroupPolicyInfoResponse, QueryGroupsByAdminRequest, QueryGroupsByAdminResponse, QueryGroupsByMemberRequest, QueryGroupsByMemberResponse, QueryGroupsRequest, QueryGroupsResponse, QueryProposalRequest, QueryProposalResponse, QueryProposalsByGroupPolicyRequest, QueryProposalsByGroupPolicyResponse, QueryTallyResultRequest, QueryTallyResultResponse, QueryVoteByProposalVoterRequest, QueryVoteByProposalVoterResponse, QueryVotesByProposalRequest, QueryVotesByProposalResponse, QueryVotesByVoterRequest, QueryVotesByVoterResponse } from "./query_pb.js";
/**
 * GroupInfo queries group info based on group id.
 *
 * @generated from rpc cosmos.group.v1.Query.GroupInfo
 */
export declare const QueryGroupInfoService: {
    readonly typeName: "cosmos.group.v1.Query";
    readonly method: "GroupInfo";
    readonly Request: typeof QueryGroupInfoRequest;
    readonly Response: typeof QueryGroupInfoResponse;
};
/**
 * GroupPolicyInfo queries group policy info based on account address of group policy.
 *
 * @generated from rpc cosmos.group.v1.Query.GroupPolicyInfo
 */
export declare const QueryGroupPolicyInfoService: {
    readonly typeName: "cosmos.group.v1.Query";
    readonly method: "GroupPolicyInfo";
    readonly Request: typeof QueryGroupPolicyInfoRequest;
    readonly Response: typeof QueryGroupPolicyInfoResponse;
};
/**
 * GroupMembers queries members of a group by group id.
 *
 * @generated from rpc cosmos.group.v1.Query.GroupMembers
 */
export declare const QueryGroupMembersService: {
    readonly typeName: "cosmos.group.v1.Query";
    readonly method: "GroupMembers";
    readonly Request: typeof QueryGroupMembersRequest;
    readonly Response: typeof QueryGroupMembersResponse;
};
/**
 * GroupsByAdmin queries groups by admin address.
 *
 * @generated from rpc cosmos.group.v1.Query.GroupsByAdmin
 */
export declare const QueryGroupsByAdminService: {
    readonly typeName: "cosmos.group.v1.Query";
    readonly method: "GroupsByAdmin";
    readonly Request: typeof QueryGroupsByAdminRequest;
    readonly Response: typeof QueryGroupsByAdminResponse;
};
/**
 * GroupPoliciesByGroup queries group policies by group id.
 *
 * @generated from rpc cosmos.group.v1.Query.GroupPoliciesByGroup
 */
export declare const QueryGroupPoliciesByGroupService: {
    readonly typeName: "cosmos.group.v1.Query";
    readonly method: "GroupPoliciesByGroup";
    readonly Request: typeof QueryGroupPoliciesByGroupRequest;
    readonly Response: typeof QueryGroupPoliciesByGroupResponse;
};
/**
 * GroupPoliciesByAdmin queries group policies by admin address.
 *
 * @generated from rpc cosmos.group.v1.Query.GroupPoliciesByAdmin
 */
export declare const QueryGroupPoliciesByAdminService: {
    readonly typeName: "cosmos.group.v1.Query";
    readonly method: "GroupPoliciesByAdmin";
    readonly Request: typeof QueryGroupPoliciesByAdminRequest;
    readonly Response: typeof QueryGroupPoliciesByAdminResponse;
};
/**
 * Proposal queries a proposal based on proposal id.
 *
 * @generated from rpc cosmos.group.v1.Query.Proposal
 */
export declare const QueryProposalService: {
    readonly typeName: "cosmos.group.v1.Query";
    readonly method: "Proposal";
    readonly Request: typeof QueryProposalRequest;
    readonly Response: typeof QueryProposalResponse;
};
/**
 * ProposalsByGroupPolicy queries proposals based on account address of group policy.
 *
 * @generated from rpc cosmos.group.v1.Query.ProposalsByGroupPolicy
 */
export declare const QueryProposalsByGroupPolicyService: {
    readonly typeName: "cosmos.group.v1.Query";
    readonly method: "ProposalsByGroupPolicy";
    readonly Request: typeof QueryProposalsByGroupPolicyRequest;
    readonly Response: typeof QueryProposalsByGroupPolicyResponse;
};
/**
 * VoteByProposalVoter queries a vote by proposal id and voter.
 *
 * @generated from rpc cosmos.group.v1.Query.VoteByProposalVoter
 */
export declare const QueryVoteByProposalVoterService: {
    readonly typeName: "cosmos.group.v1.Query";
    readonly method: "VoteByProposalVoter";
    readonly Request: typeof QueryVoteByProposalVoterRequest;
    readonly Response: typeof QueryVoteByProposalVoterResponse;
};
/**
 * VotesByProposal queries a vote by proposal id.
 *
 * @generated from rpc cosmos.group.v1.Query.VotesByProposal
 */
export declare const QueryVotesByProposalService: {
    readonly typeName: "cosmos.group.v1.Query";
    readonly method: "VotesByProposal";
    readonly Request: typeof QueryVotesByProposalRequest;
    readonly Response: typeof QueryVotesByProposalResponse;
};
/**
 * VotesByVoter queries a vote by voter.
 *
 * @generated from rpc cosmos.group.v1.Query.VotesByVoter
 */
export declare const QueryVotesByVoterService: {
    readonly typeName: "cosmos.group.v1.Query";
    readonly method: "VotesByVoter";
    readonly Request: typeof QueryVotesByVoterRequest;
    readonly Response: typeof QueryVotesByVoterResponse;
};
/**
 * GroupsByMember queries groups by member address.
 *
 * @generated from rpc cosmos.group.v1.Query.GroupsByMember
 */
export declare const QueryGroupsByMemberService: {
    readonly typeName: "cosmos.group.v1.Query";
    readonly method: "GroupsByMember";
    readonly Request: typeof QueryGroupsByMemberRequest;
    readonly Response: typeof QueryGroupsByMemberResponse;
};
/**
 * TallyResult returns the tally result of a proposal. If the proposal is
 * still in voting period, then this query computes the current tally state,
 * which might not be final. On the other hand, if the proposal is final,
 * then it simply returns the `final_tally_result` state stored in the
 * proposal itself.
 *
 * @generated from rpc cosmos.group.v1.Query.TallyResult
 */
export declare const QueryTallyResultService: {
    readonly typeName: "cosmos.group.v1.Query";
    readonly method: "TallyResult";
    readonly Request: typeof QueryTallyResultRequest;
    readonly Response: typeof QueryTallyResultResponse;
};
/**
 * Groups queries all groups in state.
 *
 * Since: cosmos-sdk 0.47.1
 *
 * @generated from rpc cosmos.group.v1.Query.Groups
 */
export declare const QueryGroupsService: {
    readonly typeName: "cosmos.group.v1.Query";
    readonly method: "Groups";
    readonly Request: typeof QueryGroupsRequest;
    readonly Response: typeof QueryGroupsResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map