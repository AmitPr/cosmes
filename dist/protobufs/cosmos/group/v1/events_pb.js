// Since: cosmos-sdk 0.46
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { ProposalExecutorResult, ProposalStatus, TallyResult } from "./types_pb.js";
/**
 * EventCreateGroup is an event emitted when a group is created.
 *
 * @generated from message cosmos.group.v1.EventCreateGroup
 */
export class EventCreateGroup extends Message {
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
        return new EventCreateGroup().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventCreateGroup().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventCreateGroup().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EventCreateGroup, a, b);
    }
}
EventCreateGroup.runtime = proto3;
EventCreateGroup.typeName = "cosmos.group.v1.EventCreateGroup";
EventCreateGroup.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "group_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * EventUpdateGroup is an event emitted when a group is updated.
 *
 * @generated from message cosmos.group.v1.EventUpdateGroup
 */
export class EventUpdateGroup extends Message {
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
        return new EventUpdateGroup().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventUpdateGroup().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventUpdateGroup().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EventUpdateGroup, a, b);
    }
}
EventUpdateGroup.runtime = proto3;
EventUpdateGroup.typeName = "cosmos.group.v1.EventUpdateGroup";
EventUpdateGroup.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "group_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * EventCreateGroupPolicy is an event emitted when a group policy is created.
 *
 * @generated from message cosmos.group.v1.EventCreateGroupPolicy
 */
export class EventCreateGroupPolicy extends Message {
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
        return new EventCreateGroupPolicy().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventCreateGroupPolicy().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventCreateGroupPolicy().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EventCreateGroupPolicy, a, b);
    }
}
EventCreateGroupPolicy.runtime = proto3;
EventCreateGroupPolicy.typeName = "cosmos.group.v1.EventCreateGroupPolicy";
EventCreateGroupPolicy.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * EventUpdateGroupPolicy is an event emitted when a group policy is updated.
 *
 * @generated from message cosmos.group.v1.EventUpdateGroupPolicy
 */
export class EventUpdateGroupPolicy extends Message {
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
        return new EventUpdateGroupPolicy().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventUpdateGroupPolicy().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventUpdateGroupPolicy().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EventUpdateGroupPolicy, a, b);
    }
}
EventUpdateGroupPolicy.runtime = proto3;
EventUpdateGroupPolicy.typeName = "cosmos.group.v1.EventUpdateGroupPolicy";
EventUpdateGroupPolicy.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * EventSubmitProposal is an event emitted when a proposal is created.
 *
 * @generated from message cosmos.group.v1.EventSubmitProposal
 */
export class EventSubmitProposal extends Message {
    constructor(data) {
        super();
        /**
         * proposal_id is the unique ID of the proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EventSubmitProposal().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventSubmitProposal().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventSubmitProposal().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EventSubmitProposal, a, b);
    }
}
EventSubmitProposal.runtime = proto3;
EventSubmitProposal.typeName = "cosmos.group.v1.EventSubmitProposal";
EventSubmitProposal.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * EventWithdrawProposal is an event emitted when a proposal is withdrawn.
 *
 * @generated from message cosmos.group.v1.EventWithdrawProposal
 */
export class EventWithdrawProposal extends Message {
    constructor(data) {
        super();
        /**
         * proposal_id is the unique ID of the proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EventWithdrawProposal().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventWithdrawProposal().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventWithdrawProposal().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EventWithdrawProposal, a, b);
    }
}
EventWithdrawProposal.runtime = proto3;
EventWithdrawProposal.typeName = "cosmos.group.v1.EventWithdrawProposal";
EventWithdrawProposal.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * EventVote is an event emitted when a voter votes on a proposal.
 *
 * @generated from message cosmos.group.v1.EventVote
 */
export class EventVote extends Message {
    constructor(data) {
        super();
        /**
         * proposal_id is the unique ID of the proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EventVote().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventVote().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventVote().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EventVote, a, b);
    }
}
EventVote.runtime = proto3;
EventVote.typeName = "cosmos.group.v1.EventVote";
EventVote.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * EventExec is an event emitted when a proposal is executed.
 *
 * @generated from message cosmos.group.v1.EventExec
 */
export class EventExec extends Message {
    constructor(data) {
        super();
        /**
         * proposal_id is the unique ID of the proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protoInt64.zero;
        /**
         * result is the proposal execution result.
         *
         * @generated from field: cosmos.group.v1.ProposalExecutorResult result = 2;
         */
        this.result = ProposalExecutorResult.UNSPECIFIED;
        /**
         * logs contains error logs in case the execution result is FAILURE.
         *
         * @generated from field: string logs = 3;
         */
        this.logs = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EventExec().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventExec().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventExec().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EventExec, a, b);
    }
}
EventExec.runtime = proto3;
EventExec.typeName = "cosmos.group.v1.EventExec";
EventExec.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "result", kind: "enum", T: proto3.getEnumType(ProposalExecutorResult) },
    { no: 3, name: "logs", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * EventLeaveGroup is an event emitted when group member leaves the group.
 *
 * @generated from message cosmos.group.v1.EventLeaveGroup
 */
export class EventLeaveGroup extends Message {
    constructor(data) {
        super();
        /**
         * group_id is the unique ID of the group.
         *
         * @generated from field: uint64 group_id = 1;
         */
        this.groupId = protoInt64.zero;
        /**
         * address is the account address of the group member.
         *
         * @generated from field: string address = 2;
         */
        this.address = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EventLeaveGroup().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventLeaveGroup().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventLeaveGroup().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EventLeaveGroup, a, b);
    }
}
EventLeaveGroup.runtime = proto3;
EventLeaveGroup.typeName = "cosmos.group.v1.EventLeaveGroup";
EventLeaveGroup.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "group_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * EventProposalPruned is an event emitted when a proposal is pruned.
 *
 * @generated from message cosmos.group.v1.EventProposalPruned
 */
export class EventProposalPruned extends Message {
    constructor(data) {
        super();
        /**
         * proposal_id is the unique ID of the proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protoInt64.zero;
        /**
         * status is the proposal status (UNSPECIFIED, SUBMITTED, ACCEPTED, REJECTED, ABORTED, WITHDRAWN).
         *
         * @generated from field: cosmos.group.v1.ProposalStatus status = 2;
         */
        this.status = ProposalStatus.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EventProposalPruned().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventProposalPruned().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventProposalPruned().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EventProposalPruned, a, b);
    }
}
EventProposalPruned.runtime = proto3;
EventProposalPruned.typeName = "cosmos.group.v1.EventProposalPruned";
EventProposalPruned.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "status", kind: "enum", T: proto3.getEnumType(ProposalStatus) },
    { no: 3, name: "tally_result", kind: "message", T: TallyResult },
]);
//# sourceMappingURL=events_pb.js.map