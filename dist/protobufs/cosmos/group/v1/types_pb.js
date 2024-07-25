// Since: cosmos-sdk 0.46
import { Any, Duration, Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
/**
 * VoteOption enumerates the valid vote options for a given proposal.
 *
 * @generated from enum cosmos.group.v1.VoteOption
 */
export var VoteOption;
(function (VoteOption) {
    /**
     * VOTE_OPTION_UNSPECIFIED defines an unspecified vote option which will
     * return an error.
     *
     * @generated from enum value: VOTE_OPTION_UNSPECIFIED = 0;
     */
    VoteOption[VoteOption["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * VOTE_OPTION_YES defines a yes vote option.
     *
     * @generated from enum value: VOTE_OPTION_YES = 1;
     */
    VoteOption[VoteOption["YES"] = 1] = "YES";
    /**
     * VOTE_OPTION_ABSTAIN defines an abstain vote option.
     *
     * @generated from enum value: VOTE_OPTION_ABSTAIN = 2;
     */
    VoteOption[VoteOption["ABSTAIN"] = 2] = "ABSTAIN";
    /**
     * VOTE_OPTION_NO defines a no vote option.
     *
     * @generated from enum value: VOTE_OPTION_NO = 3;
     */
    VoteOption[VoteOption["NO"] = 3] = "NO";
    /**
     * VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option.
     *
     * @generated from enum value: VOTE_OPTION_NO_WITH_VETO = 4;
     */
    VoteOption[VoteOption["NO_WITH_VETO"] = 4] = "NO_WITH_VETO";
})(VoteOption || (VoteOption = {}));
// Retrieve enum metadata with: proto3.getEnumType(VoteOption)
proto3.util.setEnumType(VoteOption, "cosmos.group.v1.VoteOption", [
    { no: 0, name: "VOTE_OPTION_UNSPECIFIED" },
    { no: 1, name: "VOTE_OPTION_YES" },
    { no: 2, name: "VOTE_OPTION_ABSTAIN" },
    { no: 3, name: "VOTE_OPTION_NO" },
    { no: 4, name: "VOTE_OPTION_NO_WITH_VETO" },
]);
/**
 * ProposalStatus defines proposal statuses.
 *
 * @generated from enum cosmos.group.v1.ProposalStatus
 */
export var ProposalStatus;
(function (ProposalStatus) {
    /**
     * An empty value is invalid and not allowed.
     *
     * @generated from enum value: PROPOSAL_STATUS_UNSPECIFIED = 0;
     */
    ProposalStatus[ProposalStatus["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * Initial status of a proposal when submitted.
     *
     * @generated from enum value: PROPOSAL_STATUS_SUBMITTED = 1;
     */
    ProposalStatus[ProposalStatus["SUBMITTED"] = 1] = "SUBMITTED";
    /**
     * Final status of a proposal when the final tally is done and the outcome
     * passes the group policy's decision policy.
     *
     * @generated from enum value: PROPOSAL_STATUS_ACCEPTED = 2;
     */
    ProposalStatus[ProposalStatus["ACCEPTED"] = 2] = "ACCEPTED";
    /**
     * Final status of a proposal when the final tally is done and the outcome
     * is rejected by the group policy's decision policy.
     *
     * @generated from enum value: PROPOSAL_STATUS_REJECTED = 3;
     */
    ProposalStatus[ProposalStatus["REJECTED"] = 3] = "REJECTED";
    /**
     * Final status of a proposal when the group policy is modified before the
     * final tally.
     *
     * @generated from enum value: PROPOSAL_STATUS_ABORTED = 4;
     */
    ProposalStatus[ProposalStatus["ABORTED"] = 4] = "ABORTED";
    /**
     * A proposal can be withdrawn before the voting start time by the owner.
     * When this happens the final status is Withdrawn.
     *
     * @generated from enum value: PROPOSAL_STATUS_WITHDRAWN = 5;
     */
    ProposalStatus[ProposalStatus["WITHDRAWN"] = 5] = "WITHDRAWN";
})(ProposalStatus || (ProposalStatus = {}));
// Retrieve enum metadata with: proto3.getEnumType(ProposalStatus)
proto3.util.setEnumType(ProposalStatus, "cosmos.group.v1.ProposalStatus", [
    { no: 0, name: "PROPOSAL_STATUS_UNSPECIFIED" },
    { no: 1, name: "PROPOSAL_STATUS_SUBMITTED" },
    { no: 2, name: "PROPOSAL_STATUS_ACCEPTED" },
    { no: 3, name: "PROPOSAL_STATUS_REJECTED" },
    { no: 4, name: "PROPOSAL_STATUS_ABORTED" },
    { no: 5, name: "PROPOSAL_STATUS_WITHDRAWN" },
]);
/**
 * ProposalExecutorResult defines types of proposal executor results.
 *
 * @generated from enum cosmos.group.v1.ProposalExecutorResult
 */
export var ProposalExecutorResult;
(function (ProposalExecutorResult) {
    /**
     * An empty value is not allowed.
     *
     * @generated from enum value: PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED = 0;
     */
    ProposalExecutorResult[ProposalExecutorResult["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * We have not yet run the executor.
     *
     * @generated from enum value: PROPOSAL_EXECUTOR_RESULT_NOT_RUN = 1;
     */
    ProposalExecutorResult[ProposalExecutorResult["NOT_RUN"] = 1] = "NOT_RUN";
    /**
     * The executor was successful and proposed action updated state.
     *
     * @generated from enum value: PROPOSAL_EXECUTOR_RESULT_SUCCESS = 2;
     */
    ProposalExecutorResult[ProposalExecutorResult["SUCCESS"] = 2] = "SUCCESS";
    /**
     * The executor returned an error and proposed action didn't update state.
     *
     * @generated from enum value: PROPOSAL_EXECUTOR_RESULT_FAILURE = 3;
     */
    ProposalExecutorResult[ProposalExecutorResult["FAILURE"] = 3] = "FAILURE";
})(ProposalExecutorResult || (ProposalExecutorResult = {}));
// Retrieve enum metadata with: proto3.getEnumType(ProposalExecutorResult)
proto3.util.setEnumType(ProposalExecutorResult, "cosmos.group.v1.ProposalExecutorResult", [
    { no: 0, name: "PROPOSAL_EXECUTOR_RESULT_UNSPECIFIED" },
    { no: 1, name: "PROPOSAL_EXECUTOR_RESULT_NOT_RUN" },
    { no: 2, name: "PROPOSAL_EXECUTOR_RESULT_SUCCESS" },
    { no: 3, name: "PROPOSAL_EXECUTOR_RESULT_FAILURE" },
]);
/**
 * Member represents a group member with an account address,
 * non-zero weight, metadata and added_at timestamp.
 *
 * @generated from message cosmos.group.v1.Member
 */
export class Member extends Message {
    constructor(data) {
        super();
        /**
         * address is the member's account address.
         *
         * @generated from field: string address = 1;
         */
        this.address = "";
        /**
         * weight is the member's voting weight that should be greater than 0.
         *
         * @generated from field: string weight = 2;
         */
        this.weight = "";
        /**
         * metadata is any arbitrary metadata attached to the member.
         *
         * @generated from field: string metadata = 3;
         */
        this.metadata = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Member().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Member().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Member().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Member, a, b);
    }
}
Member.runtime = proto3;
Member.typeName = "cosmos.group.v1.Member";
Member.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "weight", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "added_at", kind: "message", T: Timestamp },
]);
/**
 * MemberRequest represents a group member to be used in Msg server requests.
 * Contrary to `Member`, it doesn't have any `added_at` field
 * since this field cannot be set as part of requests.
 *
 * @generated from message cosmos.group.v1.MemberRequest
 */
export class MemberRequest extends Message {
    constructor(data) {
        super();
        /**
         * address is the member's account address.
         *
         * @generated from field: string address = 1;
         */
        this.address = "";
        /**
         * weight is the member's voting weight that should be greater than 0.
         *
         * @generated from field: string weight = 2;
         */
        this.weight = "";
        /**
         * metadata is any arbitrary metadata attached to the member.
         *
         * @generated from field: string metadata = 3;
         */
        this.metadata = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MemberRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MemberRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MemberRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MemberRequest, a, b);
    }
}
MemberRequest.runtime = proto3;
MemberRequest.typeName = "cosmos.group.v1.MemberRequest";
MemberRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "weight", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * ThresholdDecisionPolicy is a decision policy where a proposal passes when it
 * satisfies the two following conditions:
 * 1. The sum of all `YES` voter's weights is greater or equal than the defined
 *    `threshold`.
 * 2. The voting and execution periods of the proposal respect the parameters
 *    given by `windows`.
 *
 * @generated from message cosmos.group.v1.ThresholdDecisionPolicy
 */
export class ThresholdDecisionPolicy extends Message {
    constructor(data) {
        super();
        /**
         * threshold is the minimum weighted sum of `YES` votes that must be met or
         * exceeded for a proposal to succeed.
         *
         * @generated from field: string threshold = 1;
         */
        this.threshold = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ThresholdDecisionPolicy().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ThresholdDecisionPolicy().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ThresholdDecisionPolicy().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ThresholdDecisionPolicy, a, b);
    }
}
ThresholdDecisionPolicy.runtime = proto3;
ThresholdDecisionPolicy.typeName = "cosmos.group.v1.ThresholdDecisionPolicy";
ThresholdDecisionPolicy.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "threshold", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "windows", kind: "message", T: DecisionPolicyWindows },
]);
/**
 * PercentageDecisionPolicy is a decision policy where a proposal passes when
 * it satisfies the two following conditions:
 * 1. The percentage of all `YES` voters' weights out of the total group weight
 *    is greater or equal than the given `percentage`.
 * 2. The voting and execution periods of the proposal respect the parameters
 *    given by `windows`.
 *
 * @generated from message cosmos.group.v1.PercentageDecisionPolicy
 */
export class PercentageDecisionPolicy extends Message {
    constructor(data) {
        super();
        /**
         * percentage is the minimum percentage of the weighted sum of `YES` votes must
         * meet for a proposal to succeed.
         *
         * @generated from field: string percentage = 1;
         */
        this.percentage = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PercentageDecisionPolicy().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PercentageDecisionPolicy().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PercentageDecisionPolicy().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(PercentageDecisionPolicy, a, b);
    }
}
PercentageDecisionPolicy.runtime = proto3;
PercentageDecisionPolicy.typeName = "cosmos.group.v1.PercentageDecisionPolicy";
PercentageDecisionPolicy.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "percentage", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "windows", kind: "message", T: DecisionPolicyWindows },
]);
/**
 * DecisionPolicyWindows defines the different windows for voting and execution.
 *
 * @generated from message cosmos.group.v1.DecisionPolicyWindows
 */
export class DecisionPolicyWindows extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DecisionPolicyWindows().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DecisionPolicyWindows().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DecisionPolicyWindows().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(DecisionPolicyWindows, a, b);
    }
}
DecisionPolicyWindows.runtime = proto3;
DecisionPolicyWindows.typeName = "cosmos.group.v1.DecisionPolicyWindows";
DecisionPolicyWindows.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "voting_period", kind: "message", T: Duration },
    { no: 2, name: "min_execution_period", kind: "message", T: Duration },
]);
/**
 * GroupInfo represents the high-level on-chain information for a group.
 *
 * @generated from message cosmos.group.v1.GroupInfo
 */
export class GroupInfo extends Message {
    constructor(data) {
        super();
        /**
         * id is the unique ID of the group.
         *
         * @generated from field: uint64 id = 1;
         */
        this.id = protoInt64.zero;
        /**
         * admin is the account address of the group's admin.
         *
         * @generated from field: string admin = 2;
         */
        this.admin = "";
        /**
         * metadata is any arbitrary metadata to attached to the group.
         *
         * @generated from field: string metadata = 3;
         */
        this.metadata = "";
        /**
         * version is used to track changes to a group's membership structure that
         * would break existing proposals. Whenever any members weight is changed,
         * or any member is added or removed this version is incremented and will
         * cause proposals based on older versions of this group to fail
         *
         * @generated from field: uint64 version = 4;
         */
        this.version = protoInt64.zero;
        /**
         * total_weight is the sum of the group members' weights.
         *
         * @generated from field: string total_weight = 5;
         */
        this.totalWeight = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GroupInfo().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GroupInfo().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GroupInfo().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(GroupInfo, a, b);
    }
}
GroupInfo.runtime = proto3;
GroupInfo.typeName = "cosmos.group.v1.GroupInfo";
GroupInfo.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "version", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "total_weight", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "created_at", kind: "message", T: Timestamp },
]);
/**
 * GroupMember represents the relationship between a group and a member.
 *
 * @generated from message cosmos.group.v1.GroupMember
 */
export class GroupMember extends Message {
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
        return new GroupMember().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GroupMember().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GroupMember().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(GroupMember, a, b);
    }
}
GroupMember.runtime = proto3;
GroupMember.typeName = "cosmos.group.v1.GroupMember";
GroupMember.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "group_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "member", kind: "message", T: Member },
]);
/**
 * GroupPolicyInfo represents the high-level on-chain information for a group policy.
 *
 * @generated from message cosmos.group.v1.GroupPolicyInfo
 */
export class GroupPolicyInfo extends Message {
    constructor(data) {
        super();
        /**
         * address is the account address of group policy.
         *
         * @generated from field: string address = 1;
         */
        this.address = "";
        /**
         * group_id is the unique ID of the group.
         *
         * @generated from field: uint64 group_id = 2;
         */
        this.groupId = protoInt64.zero;
        /**
         * admin is the account address of the group admin.
         *
         * @generated from field: string admin = 3;
         */
        this.admin = "";
        /**
         * metadata is any arbitrary metadata attached to the group policy.
         * the recommended format of the metadata is to be found here:
         * https://docs.cosmos.network/v0.47/modules/group#decision-policy-1
         *
         * @generated from field: string metadata = 4;
         */
        this.metadata = "";
        /**
         * version is used to track changes to a group's GroupPolicyInfo structure that
         * would create a different result on a running proposal.
         *
         * @generated from field: uint64 version = 5;
         */
        this.version = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GroupPolicyInfo().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GroupPolicyInfo().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GroupPolicyInfo().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(GroupPolicyInfo, a, b);
    }
}
GroupPolicyInfo.runtime = proto3;
GroupPolicyInfo.typeName = "cosmos.group.v1.GroupPolicyInfo";
GroupPolicyInfo.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "group_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "version", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 6, name: "decision_policy", kind: "message", T: Any },
    { no: 7, name: "created_at", kind: "message", T: Timestamp },
]);
/**
 * Proposal defines a group proposal. Any member of a group can submit a proposal
 * for a group policy to decide upon.
 * A proposal consists of a set of `sdk.Msg`s that will be executed if the proposal
 * passes as well as some optional metadata associated with the proposal.
 *
 * @generated from message cosmos.group.v1.Proposal
 */
export class Proposal extends Message {
    constructor(data) {
        super();
        /**
         * id is the unique id of the proposal.
         *
         * @generated from field: uint64 id = 1;
         */
        this.id = protoInt64.zero;
        /**
         * group_policy_address is the account address of group policy.
         *
         * @generated from field: string group_policy_address = 2;
         */
        this.groupPolicyAddress = "";
        /**
         * metadata is any arbitrary metadata attached to the proposal.
         * the recommended format of the metadata is to be found here:
         * https://docs.cosmos.network/v0.47/modules/group#proposal-4
         *
         * @generated from field: string metadata = 3;
         */
        this.metadata = "";
        /**
         * proposers are the account addresses of the proposers.
         *
         * @generated from field: repeated string proposers = 4;
         */
        this.proposers = [];
        /**
         * group_version tracks the version of the group at proposal submission.
         * This field is here for informational purposes only.
         *
         * @generated from field: uint64 group_version = 6;
         */
        this.groupVersion = protoInt64.zero;
        /**
         * group_policy_version tracks the version of the group policy at proposal submission.
         * When a decision policy is changed, existing proposals from previous policy
         * versions will become invalid with the `ABORTED` status.
         * This field is here for informational purposes only.
         *
         * @generated from field: uint64 group_policy_version = 7;
         */
        this.groupPolicyVersion = protoInt64.zero;
        /**
         * status represents the high level position in the life cycle of the proposal. Initial value is Submitted.
         *
         * @generated from field: cosmos.group.v1.ProposalStatus status = 8;
         */
        this.status = ProposalStatus.UNSPECIFIED;
        /**
         * executor_result is the final result of the proposal execution. Initial value is NotRun.
         *
         * @generated from field: cosmos.group.v1.ProposalExecutorResult executor_result = 11;
         */
        this.executorResult = ProposalExecutorResult.UNSPECIFIED;
        /**
         * messages is a list of `sdk.Msg`s that will be executed if the proposal passes.
         *
         * @generated from field: repeated google.protobuf.Any messages = 12;
         */
        this.messages = [];
        /**
         * title is the title of the proposal
         *
         * Since: cosmos-sdk 0.47
         *
         * @generated from field: string title = 13;
         */
        this.title = "";
        /**
         * summary is a short summary of the proposal
         *
         * Since: cosmos-sdk 0.47
         *
         * @generated from field: string summary = 14;
         */
        this.summary = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Proposal().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Proposal().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Proposal().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Proposal, a, b);
    }
}
Proposal.runtime = proto3;
Proposal.typeName = "cosmos.group.v1.Proposal";
Proposal.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "group_policy_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "proposers", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 5, name: "submit_time", kind: "message", T: Timestamp },
    { no: 6, name: "group_version", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 7, name: "group_policy_version", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 8, name: "status", kind: "enum", T: proto3.getEnumType(ProposalStatus) },
    { no: 9, name: "final_tally_result", kind: "message", T: TallyResult },
    { no: 10, name: "voting_period_end", kind: "message", T: Timestamp },
    { no: 11, name: "executor_result", kind: "enum", T: proto3.getEnumType(ProposalExecutorResult) },
    { no: 12, name: "messages", kind: "message", T: Any, repeated: true },
    { no: 13, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "summary", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * TallyResult represents the sum of weighted votes for each vote option.
 *
 * @generated from message cosmos.group.v1.TallyResult
 */
export class TallyResult extends Message {
    constructor(data) {
        super();
        /**
         * yes_count is the weighted sum of yes votes.
         *
         * @generated from field: string yes_count = 1;
         */
        this.yesCount = "";
        /**
         * abstain_count is the weighted sum of abstainers.
         *
         * @generated from field: string abstain_count = 2;
         */
        this.abstainCount = "";
        /**
         * no_count is the weighted sum of no votes.
         *
         * @generated from field: string no_count = 3;
         */
        this.noCount = "";
        /**
         * no_with_veto_count is the weighted sum of veto.
         *
         * @generated from field: string no_with_veto_count = 4;
         */
        this.noWithVetoCount = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new TallyResult().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new TallyResult().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new TallyResult().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(TallyResult, a, b);
    }
}
TallyResult.runtime = proto3;
TallyResult.typeName = "cosmos.group.v1.TallyResult";
TallyResult.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "yes_count", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "abstain_count", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "no_count", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "no_with_veto_count", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * Vote represents a vote for a proposal.
 *
 * @generated from message cosmos.group.v1.Vote
 */
export class Vote extends Message {
    constructor(data) {
        super();
        /**
         * proposal is the unique ID of the proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protoInt64.zero;
        /**
         * voter is the account address of the voter.
         *
         * @generated from field: string voter = 2;
         */
        this.voter = "";
        /**
         * option is the voter's choice on the proposal.
         *
         * @generated from field: cosmos.group.v1.VoteOption option = 3;
         */
        this.option = VoteOption.UNSPECIFIED;
        /**
         * metadata is any arbitrary metadata attached to the vote.
         *
         * @generated from field: string metadata = 4;
         */
        this.metadata = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Vote().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Vote().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Vote().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Vote, a, b);
    }
}
Vote.runtime = proto3;
Vote.typeName = "cosmos.group.v1.Vote";
Vote.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "voter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "option", kind: "enum", T: proto3.getEnumType(VoteOption) },
    { no: 4, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "submit_time", kind: "message", T: Timestamp },
]);
//# sourceMappingURL=types_pb.js.map