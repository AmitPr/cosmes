// Since: cosmos-sdk 0.46
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { GroupInfo, GroupMember, GroupPolicyInfo, Proposal, TallyResult, Vote } from "./types_pb.js";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination_pb.js";
/**
 * QueryGroupInfoRequest is the Query/GroupInfo request type.
 *
 * @generated from message cosmos.group.v1.QueryGroupInfoRequest
 */
export class QueryGroupInfoRequest extends Message {
    constructor(data) {
        super();
        /**
         * group_id is the unique ID of the group.
         *
         * @generated from field: uint64 group_id = 1;
         */
        this.groupId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGroupInfoRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGroupInfoRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGroupInfoRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryGroupInfoRequest, a, b);
    }
}
QueryGroupInfoRequest.runtime = proto3;
QueryGroupInfoRequest.typeName = "cosmos.group.v1.QueryGroupInfoRequest";
QueryGroupInfoRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "group_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * QueryGroupInfoResponse is the Query/GroupInfo response type.
 *
 * @generated from message cosmos.group.v1.QueryGroupInfoResponse
 */
export class QueryGroupInfoResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGroupInfoResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGroupInfoResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGroupInfoResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryGroupInfoResponse, a, b);
    }
}
QueryGroupInfoResponse.runtime = proto3;
QueryGroupInfoResponse.typeName = "cosmos.group.v1.QueryGroupInfoResponse";
QueryGroupInfoResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "info", kind: "message", T: GroupInfo },
]);
/**
 * QueryGroupPolicyInfoRequest is the Query/GroupPolicyInfo request type.
 *
 * @generated from message cosmos.group.v1.QueryGroupPolicyInfoRequest
 */
export class QueryGroupPolicyInfoRequest extends Message {
    constructor(data) {
        super();
        /**
         * address is the account address of the group policy.
         *
         * @generated from field: string address = 1;
         */
        this.address = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGroupPolicyInfoRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGroupPolicyInfoRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGroupPolicyInfoRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryGroupPolicyInfoRequest, a, b);
    }
}
QueryGroupPolicyInfoRequest.runtime = proto3;
QueryGroupPolicyInfoRequest.typeName = "cosmos.group.v1.QueryGroupPolicyInfoRequest";
QueryGroupPolicyInfoRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * QueryGroupPolicyInfoResponse is the Query/GroupPolicyInfo response type.
 *
 * @generated from message cosmos.group.v1.QueryGroupPolicyInfoResponse
 */
export class QueryGroupPolicyInfoResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGroupPolicyInfoResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGroupPolicyInfoResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGroupPolicyInfoResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryGroupPolicyInfoResponse, a, b);
    }
}
QueryGroupPolicyInfoResponse.runtime = proto3;
QueryGroupPolicyInfoResponse.typeName = "cosmos.group.v1.QueryGroupPolicyInfoResponse";
QueryGroupPolicyInfoResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "info", kind: "message", T: GroupPolicyInfo },
]);
/**
 * QueryGroupMembersRequest is the Query/GroupMembers request type.
 *
 * @generated from message cosmos.group.v1.QueryGroupMembersRequest
 */
export class QueryGroupMembersRequest extends Message {
    constructor(data) {
        super();
        /**
         * group_id is the unique ID of the group.
         *
         * @generated from field: uint64 group_id = 1;
         */
        this.groupId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGroupMembersRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGroupMembersRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGroupMembersRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryGroupMembersRequest, a, b);
    }
}
QueryGroupMembersRequest.runtime = proto3;
QueryGroupMembersRequest.typeName = "cosmos.group.v1.QueryGroupMembersRequest";
QueryGroupMembersRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "group_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
]);
/**
 * QueryGroupMembersResponse is the Query/GroupMembersResponse response type.
 *
 * @generated from message cosmos.group.v1.QueryGroupMembersResponse
 */
export class QueryGroupMembersResponse extends Message {
    constructor(data) {
        super();
        /**
         * members are the members of the group with given group_id.
         *
         * @generated from field: repeated cosmos.group.v1.GroupMember members = 1;
         */
        this.members = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGroupMembersResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGroupMembersResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGroupMembersResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryGroupMembersResponse, a, b);
    }
}
QueryGroupMembersResponse.runtime = proto3;
QueryGroupMembersResponse.typeName = "cosmos.group.v1.QueryGroupMembersResponse";
QueryGroupMembersResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "members", kind: "message", T: GroupMember, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
]);
/**
 * QueryGroupsByAdminRequest is the Query/GroupsByAdmin request type.
 *
 * @generated from message cosmos.group.v1.QueryGroupsByAdminRequest
 */
export class QueryGroupsByAdminRequest extends Message {
    constructor(data) {
        super();
        /**
         * admin is the account address of a group's admin.
         *
         * @generated from field: string admin = 1;
         */
        this.admin = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGroupsByAdminRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGroupsByAdminRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGroupsByAdminRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryGroupsByAdminRequest, a, b);
    }
}
QueryGroupsByAdminRequest.runtime = proto3;
QueryGroupsByAdminRequest.typeName = "cosmos.group.v1.QueryGroupsByAdminRequest";
QueryGroupsByAdminRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
]);
/**
 * QueryGroupsByAdminResponse is the Query/GroupsByAdminResponse response type.
 *
 * @generated from message cosmos.group.v1.QueryGroupsByAdminResponse
 */
export class QueryGroupsByAdminResponse extends Message {
    constructor(data) {
        super();
        /**
         * groups are the groups info with the provided admin.
         *
         * @generated from field: repeated cosmos.group.v1.GroupInfo groups = 1;
         */
        this.groups = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGroupsByAdminResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGroupsByAdminResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGroupsByAdminResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryGroupsByAdminResponse, a, b);
    }
}
QueryGroupsByAdminResponse.runtime = proto3;
QueryGroupsByAdminResponse.typeName = "cosmos.group.v1.QueryGroupsByAdminResponse";
QueryGroupsByAdminResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "groups", kind: "message", T: GroupInfo, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
]);
/**
 * QueryGroupPoliciesByGroupRequest is the Query/GroupPoliciesByGroup request type.
 *
 * @generated from message cosmos.group.v1.QueryGroupPoliciesByGroupRequest
 */
export class QueryGroupPoliciesByGroupRequest extends Message {
    constructor(data) {
        super();
        /**
         * group_id is the unique ID of the group policy's group.
         *
         * @generated from field: uint64 group_id = 1;
         */
        this.groupId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGroupPoliciesByGroupRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGroupPoliciesByGroupRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGroupPoliciesByGroupRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryGroupPoliciesByGroupRequest, a, b);
    }
}
QueryGroupPoliciesByGroupRequest.runtime = proto3;
QueryGroupPoliciesByGroupRequest.typeName = "cosmos.group.v1.QueryGroupPoliciesByGroupRequest";
QueryGroupPoliciesByGroupRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "group_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
]);
/**
 * QueryGroupPoliciesByGroupResponse is the Query/GroupPoliciesByGroup response type.
 *
 * @generated from message cosmos.group.v1.QueryGroupPoliciesByGroupResponse
 */
export class QueryGroupPoliciesByGroupResponse extends Message {
    constructor(data) {
        super();
        /**
         * group_policies are the group policies info associated with the provided group.
         *
         * @generated from field: repeated cosmos.group.v1.GroupPolicyInfo group_policies = 1;
         */
        this.groupPolicies = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGroupPoliciesByGroupResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGroupPoliciesByGroupResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGroupPoliciesByGroupResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryGroupPoliciesByGroupResponse, a, b);
    }
}
QueryGroupPoliciesByGroupResponse.runtime = proto3;
QueryGroupPoliciesByGroupResponse.typeName = "cosmos.group.v1.QueryGroupPoliciesByGroupResponse";
QueryGroupPoliciesByGroupResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "group_policies", kind: "message", T: GroupPolicyInfo, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
]);
/**
 * QueryGroupPoliciesByAdminRequest is the Query/GroupPoliciesByAdmin request type.
 *
 * @generated from message cosmos.group.v1.QueryGroupPoliciesByAdminRequest
 */
export class QueryGroupPoliciesByAdminRequest extends Message {
    constructor(data) {
        super();
        /**
         * admin is the admin address of the group policy.
         *
         * @generated from field: string admin = 1;
         */
        this.admin = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGroupPoliciesByAdminRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGroupPoliciesByAdminRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGroupPoliciesByAdminRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryGroupPoliciesByAdminRequest, a, b);
    }
}
QueryGroupPoliciesByAdminRequest.runtime = proto3;
QueryGroupPoliciesByAdminRequest.typeName = "cosmos.group.v1.QueryGroupPoliciesByAdminRequest";
QueryGroupPoliciesByAdminRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
]);
/**
 * QueryGroupPoliciesByAdminResponse is the Query/GroupPoliciesByAdmin response type.
 *
 * @generated from message cosmos.group.v1.QueryGroupPoliciesByAdminResponse
 */
export class QueryGroupPoliciesByAdminResponse extends Message {
    constructor(data) {
        super();
        /**
         * group_policies are the group policies info with provided admin.
         *
         * @generated from field: repeated cosmos.group.v1.GroupPolicyInfo group_policies = 1;
         */
        this.groupPolicies = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGroupPoliciesByAdminResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGroupPoliciesByAdminResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGroupPoliciesByAdminResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryGroupPoliciesByAdminResponse, a, b);
    }
}
QueryGroupPoliciesByAdminResponse.runtime = proto3;
QueryGroupPoliciesByAdminResponse.typeName = "cosmos.group.v1.QueryGroupPoliciesByAdminResponse";
QueryGroupPoliciesByAdminResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "group_policies", kind: "message", T: GroupPolicyInfo, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
]);
/**
 * QueryProposalRequest is the Query/Proposal request type.
 *
 * @generated from message cosmos.group.v1.QueryProposalRequest
 */
export class QueryProposalRequest extends Message {
    constructor(data) {
        super();
        /**
         * proposal_id is the unique ID of a proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryProposalRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryProposalRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryProposalRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryProposalRequest, a, b);
    }
}
QueryProposalRequest.runtime = proto3;
QueryProposalRequest.typeName = "cosmos.group.v1.QueryProposalRequest";
QueryProposalRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * QueryProposalResponse is the Query/Proposal response type.
 *
 * @generated from message cosmos.group.v1.QueryProposalResponse
 */
export class QueryProposalResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryProposalResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryProposalResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryProposalResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryProposalResponse, a, b);
    }
}
QueryProposalResponse.runtime = proto3;
QueryProposalResponse.typeName = "cosmos.group.v1.QueryProposalResponse";
QueryProposalResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal", kind: "message", T: Proposal },
]);
/**
 * QueryProposalsByGroupPolicyRequest is the Query/ProposalByGroupPolicy request type.
 *
 * @generated from message cosmos.group.v1.QueryProposalsByGroupPolicyRequest
 */
export class QueryProposalsByGroupPolicyRequest extends Message {
    constructor(data) {
        super();
        /**
         * address is the account address of the group policy related to proposals.
         *
         * @generated from field: string address = 1;
         */
        this.address = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryProposalsByGroupPolicyRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryProposalsByGroupPolicyRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryProposalsByGroupPolicyRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryProposalsByGroupPolicyRequest, a, b);
    }
}
QueryProposalsByGroupPolicyRequest.runtime = proto3;
QueryProposalsByGroupPolicyRequest.typeName = "cosmos.group.v1.QueryProposalsByGroupPolicyRequest";
QueryProposalsByGroupPolicyRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
]);
/**
 * QueryProposalsByGroupPolicyResponse is the Query/ProposalByGroupPolicy response type.
 *
 * @generated from message cosmos.group.v1.QueryProposalsByGroupPolicyResponse
 */
export class QueryProposalsByGroupPolicyResponse extends Message {
    constructor(data) {
        super();
        /**
         * proposals are the proposals with given group policy.
         *
         * @generated from field: repeated cosmos.group.v1.Proposal proposals = 1;
         */
        this.proposals = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryProposalsByGroupPolicyResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryProposalsByGroupPolicyResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryProposalsByGroupPolicyResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryProposalsByGroupPolicyResponse, a, b);
    }
}
QueryProposalsByGroupPolicyResponse.runtime = proto3;
QueryProposalsByGroupPolicyResponse.typeName = "cosmos.group.v1.QueryProposalsByGroupPolicyResponse";
QueryProposalsByGroupPolicyResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "proposals", kind: "message", T: Proposal, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
]);
/**
 * QueryVoteByProposalVoterRequest is the Query/VoteByProposalVoter request type.
 *
 * @generated from message cosmos.group.v1.QueryVoteByProposalVoterRequest
 */
export class QueryVoteByProposalVoterRequest extends Message {
    constructor(data) {
        super();
        /**
         * proposal_id is the unique ID of a proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protoInt64.zero;
        /**
         * voter is a proposal voter account address.
         *
         * @generated from field: string voter = 2;
         */
        this.voter = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryVoteByProposalVoterRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryVoteByProposalVoterRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryVoteByProposalVoterRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryVoteByProposalVoterRequest, a, b);
    }
}
QueryVoteByProposalVoterRequest.runtime = proto3;
QueryVoteByProposalVoterRequest.typeName = "cosmos.group.v1.QueryVoteByProposalVoterRequest";
QueryVoteByProposalVoterRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "voter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * QueryVoteByProposalVoterResponse is the Query/VoteByProposalVoter response type.
 *
 * @generated from message cosmos.group.v1.QueryVoteByProposalVoterResponse
 */
export class QueryVoteByProposalVoterResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryVoteByProposalVoterResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryVoteByProposalVoterResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryVoteByProposalVoterResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryVoteByProposalVoterResponse, a, b);
    }
}
QueryVoteByProposalVoterResponse.runtime = proto3;
QueryVoteByProposalVoterResponse.typeName = "cosmos.group.v1.QueryVoteByProposalVoterResponse";
QueryVoteByProposalVoterResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "vote", kind: "message", T: Vote },
]);
/**
 * QueryVotesByProposalRequest is the Query/VotesByProposal request type.
 *
 * @generated from message cosmos.group.v1.QueryVotesByProposalRequest
 */
export class QueryVotesByProposalRequest extends Message {
    constructor(data) {
        super();
        /**
         * proposal_id is the unique ID of a proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryVotesByProposalRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryVotesByProposalRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryVotesByProposalRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryVotesByProposalRequest, a, b);
    }
}
QueryVotesByProposalRequest.runtime = proto3;
QueryVotesByProposalRequest.typeName = "cosmos.group.v1.QueryVotesByProposalRequest";
QueryVotesByProposalRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
]);
/**
 * QueryVotesByProposalResponse is the Query/VotesByProposal response type.
 *
 * @generated from message cosmos.group.v1.QueryVotesByProposalResponse
 */
export class QueryVotesByProposalResponse extends Message {
    constructor(data) {
        super();
        /**
         * votes are the list of votes for given proposal_id.
         *
         * @generated from field: repeated cosmos.group.v1.Vote votes = 1;
         */
        this.votes = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryVotesByProposalResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryVotesByProposalResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryVotesByProposalResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryVotesByProposalResponse, a, b);
    }
}
QueryVotesByProposalResponse.runtime = proto3;
QueryVotesByProposalResponse.typeName = "cosmos.group.v1.QueryVotesByProposalResponse";
QueryVotesByProposalResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "votes", kind: "message", T: Vote, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
]);
/**
 * QueryVotesByVoterRequest is the Query/VotesByVoter request type.
 *
 * @generated from message cosmos.group.v1.QueryVotesByVoterRequest
 */
export class QueryVotesByVoterRequest extends Message {
    constructor(data) {
        super();
        /**
         * voter is a proposal voter account address.
         *
         * @generated from field: string voter = 1;
         */
        this.voter = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryVotesByVoterRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryVotesByVoterRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryVotesByVoterRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryVotesByVoterRequest, a, b);
    }
}
QueryVotesByVoterRequest.runtime = proto3;
QueryVotesByVoterRequest.typeName = "cosmos.group.v1.QueryVotesByVoterRequest";
QueryVotesByVoterRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "voter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
]);
/**
 * QueryVotesByVoterResponse is the Query/VotesByVoter response type.
 *
 * @generated from message cosmos.group.v1.QueryVotesByVoterResponse
 */
export class QueryVotesByVoterResponse extends Message {
    constructor(data) {
        super();
        /**
         * votes are the list of votes by given voter.
         *
         * @generated from field: repeated cosmos.group.v1.Vote votes = 1;
         */
        this.votes = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryVotesByVoterResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryVotesByVoterResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryVotesByVoterResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryVotesByVoterResponse, a, b);
    }
}
QueryVotesByVoterResponse.runtime = proto3;
QueryVotesByVoterResponse.typeName = "cosmos.group.v1.QueryVotesByVoterResponse";
QueryVotesByVoterResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "votes", kind: "message", T: Vote, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
]);
/**
 * QueryGroupsByMemberRequest is the Query/GroupsByMember request type.
 *
 * @generated from message cosmos.group.v1.QueryGroupsByMemberRequest
 */
export class QueryGroupsByMemberRequest extends Message {
    constructor(data) {
        super();
        /**
         * address is the group member address.
         *
         * @generated from field: string address = 1;
         */
        this.address = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGroupsByMemberRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGroupsByMemberRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGroupsByMemberRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryGroupsByMemberRequest, a, b);
    }
}
QueryGroupsByMemberRequest.runtime = proto3;
QueryGroupsByMemberRequest.typeName = "cosmos.group.v1.QueryGroupsByMemberRequest";
QueryGroupsByMemberRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
]);
/**
 * QueryGroupsByMemberResponse is the Query/GroupsByMember response type.
 *
 * @generated from message cosmos.group.v1.QueryGroupsByMemberResponse
 */
export class QueryGroupsByMemberResponse extends Message {
    constructor(data) {
        super();
        /**
         * groups are the groups info with the provided group member.
         *
         * @generated from field: repeated cosmos.group.v1.GroupInfo groups = 1;
         */
        this.groups = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGroupsByMemberResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGroupsByMemberResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGroupsByMemberResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryGroupsByMemberResponse, a, b);
    }
}
QueryGroupsByMemberResponse.runtime = proto3;
QueryGroupsByMemberResponse.typeName = "cosmos.group.v1.QueryGroupsByMemberResponse";
QueryGroupsByMemberResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "groups", kind: "message", T: GroupInfo, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
]);
/**
 * QueryTallyResultRequest is the Query/TallyResult request type.
 *
 * @generated from message cosmos.group.v1.QueryTallyResultRequest
 */
export class QueryTallyResultRequest extends Message {
    constructor(data) {
        super();
        /**
         * proposal_id is the unique id of a proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryTallyResultRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryTallyResultRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryTallyResultRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryTallyResultRequest, a, b);
    }
}
QueryTallyResultRequest.runtime = proto3;
QueryTallyResultRequest.typeName = "cosmos.group.v1.QueryTallyResultRequest";
QueryTallyResultRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * QueryTallyResultResponse is the Query/TallyResult response type.
 *
 * @generated from message cosmos.group.v1.QueryTallyResultResponse
 */
export class QueryTallyResultResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryTallyResultResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryTallyResultResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryTallyResultResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryTallyResultResponse, a, b);
    }
}
QueryTallyResultResponse.runtime = proto3;
QueryTallyResultResponse.typeName = "cosmos.group.v1.QueryTallyResultResponse";
QueryTallyResultResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "tally", kind: "message", T: TallyResult },
]);
/**
 * QueryGroupsRequest is the Query/Groups request type.
 *
 * Since: cosmos-sdk 0.47.1
 *
 * @generated from message cosmos.group.v1.QueryGroupsRequest
 */
export class QueryGroupsRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGroupsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGroupsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGroupsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryGroupsRequest, a, b);
    }
}
QueryGroupsRequest.runtime = proto3;
QueryGroupsRequest.typeName = "cosmos.group.v1.QueryGroupsRequest";
QueryGroupsRequest.fields = proto3.util.newFieldList(() => [
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
]);
/**
 * QueryGroupsResponse is the Query/Groups response type.
 *
 * Since: cosmos-sdk 0.47.1
 *
 * @generated from message cosmos.group.v1.QueryGroupsResponse
 */
export class QueryGroupsResponse extends Message {
    constructor(data) {
        super();
        /**
         * `groups` is all the groups present in state.
         *
         * @generated from field: repeated cosmos.group.v1.GroupInfo groups = 1;
         */
        this.groups = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGroupsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGroupsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGroupsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryGroupsResponse, a, b);
    }
}
QueryGroupsResponse.runtime = proto3;
QueryGroupsResponse.typeName = "cosmos.group.v1.QueryGroupsResponse";
QueryGroupsResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "groups", kind: "message", T: GroupInfo, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
]);
//# sourceMappingURL=query_pb.js.map