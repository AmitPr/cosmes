// Since: cosmos-sdk 0.46
import { Any, Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { MemberRequest, ProposalExecutorResult, VoteOption } from "./types_pb.js";
/**
 * Exec defines modes of execution of a proposal on creation or on new vote.
 *
 * @generated from enum cosmos.group.v1.Exec
 */
export var Exec;
(function (Exec) {
    /**
     * An empty value means that there should be a separate
     * MsgExec request for the proposal to execute.
     *
     * @generated from enum value: EXEC_UNSPECIFIED = 0;
     */
    Exec[Exec["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * Try to execute the proposal immediately.
     * If the proposal is not allowed per the DecisionPolicy,
     * the proposal will still be open and could
     * be executed at a later point.
     *
     * @generated from enum value: EXEC_TRY = 1;
     */
    Exec[Exec["TRY"] = 1] = "TRY";
})(Exec || (Exec = {}));
// Retrieve enum metadata with: proto3.getEnumType(Exec)
proto3.util.setEnumType(Exec, "cosmos.group.v1.Exec", [
    { no: 0, name: "EXEC_UNSPECIFIED" },
    { no: 1, name: "EXEC_TRY" },
]);
/**
 * MsgCreateGroup is the Msg/CreateGroup request type.
 *
 * @generated from message cosmos.group.v1.MsgCreateGroup
 */
export class MsgCreateGroup extends Message {
    constructor(data) {
        super();
        /**
         * admin is the account address of the group admin.
         *
         * @generated from field: string admin = 1;
         */
        this.admin = "";
        /**
         * members defines the group members.
         *
         * @generated from field: repeated cosmos.group.v1.MemberRequest members = 2;
         */
        this.members = [];
        /**
         * metadata is any arbitrary metadata to attached to the group.
         *
         * @generated from field: string metadata = 3;
         */
        this.metadata = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCreateGroup().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCreateGroup().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCreateGroup().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgCreateGroup, a, b);
    }
}
MsgCreateGroup.runtime = proto3;
MsgCreateGroup.typeName = "cosmos.group.v1.MsgCreateGroup";
MsgCreateGroup.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "members", kind: "message", T: MemberRequest, repeated: true },
    { no: 3, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgCreateGroupResponse is the Msg/CreateGroup response type.
 *
 * @generated from message cosmos.group.v1.MsgCreateGroupResponse
 */
export class MsgCreateGroupResponse extends Message {
    constructor(data) {
        super();
        /**
         * group_id is the unique ID of the newly created group.
         *
         * @generated from field: uint64 group_id = 1;
         */
        this.groupId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCreateGroupResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCreateGroupResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCreateGroupResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgCreateGroupResponse, a, b);
    }
}
MsgCreateGroupResponse.runtime = proto3;
MsgCreateGroupResponse.typeName = "cosmos.group.v1.MsgCreateGroupResponse";
MsgCreateGroupResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "group_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * MsgUpdateGroupMembers is the Msg/UpdateGroupMembers request type.
 *
 * @generated from message cosmos.group.v1.MsgUpdateGroupMembers
 */
export class MsgUpdateGroupMembers extends Message {
    constructor(data) {
        super();
        /**
         * admin is the account address of the group admin.
         *
         * @generated from field: string admin = 1;
         */
        this.admin = "";
        /**
         * group_id is the unique ID of the group.
         *
         * @generated from field: uint64 group_id = 2;
         */
        this.groupId = protoInt64.zero;
        /**
         * member_updates is the list of members to update,
         * set weight to 0 to remove a member.
         *
         * @generated from field: repeated cosmos.group.v1.MemberRequest member_updates = 3;
         */
        this.memberUpdates = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateGroupMembers().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateGroupMembers().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateGroupMembers().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgUpdateGroupMembers, a, b);
    }
}
MsgUpdateGroupMembers.runtime = proto3;
MsgUpdateGroupMembers.typeName = "cosmos.group.v1.MsgUpdateGroupMembers";
MsgUpdateGroupMembers.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "group_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "member_updates", kind: "message", T: MemberRequest, repeated: true },
]);
/**
 * MsgUpdateGroupMembersResponse is the Msg/UpdateGroupMembers response type.
 *
 * @generated from message cosmos.group.v1.MsgUpdateGroupMembersResponse
 */
export class MsgUpdateGroupMembersResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateGroupMembersResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateGroupMembersResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateGroupMembersResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgUpdateGroupMembersResponse, a, b);
    }
}
MsgUpdateGroupMembersResponse.runtime = proto3;
MsgUpdateGroupMembersResponse.typeName = "cosmos.group.v1.MsgUpdateGroupMembersResponse";
MsgUpdateGroupMembersResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgUpdateGroupAdmin is the Msg/UpdateGroupAdmin request type.
 *
 * @generated from message cosmos.group.v1.MsgUpdateGroupAdmin
 */
export class MsgUpdateGroupAdmin extends Message {
    constructor(data) {
        super();
        /**
         * admin is the current account address of the group admin.
         *
         * @generated from field: string admin = 1;
         */
        this.admin = "";
        /**
         * group_id is the unique ID of the group.
         *
         * @generated from field: uint64 group_id = 2;
         */
        this.groupId = protoInt64.zero;
        /**
         * new_admin is the group new admin account address.
         *
         * @generated from field: string new_admin = 3;
         */
        this.newAdmin = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateGroupAdmin().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateGroupAdmin().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateGroupAdmin().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgUpdateGroupAdmin, a, b);
    }
}
MsgUpdateGroupAdmin.runtime = proto3;
MsgUpdateGroupAdmin.typeName = "cosmos.group.v1.MsgUpdateGroupAdmin";
MsgUpdateGroupAdmin.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "group_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "new_admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgUpdateGroupAdminResponse is the Msg/UpdateGroupAdmin response type.
 *
 * @generated from message cosmos.group.v1.MsgUpdateGroupAdminResponse
 */
export class MsgUpdateGroupAdminResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateGroupAdminResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateGroupAdminResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateGroupAdminResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgUpdateGroupAdminResponse, a, b);
    }
}
MsgUpdateGroupAdminResponse.runtime = proto3;
MsgUpdateGroupAdminResponse.typeName = "cosmos.group.v1.MsgUpdateGroupAdminResponse";
MsgUpdateGroupAdminResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgUpdateGroupMetadata is the Msg/UpdateGroupMetadata request type.
 *
 * @generated from message cosmos.group.v1.MsgUpdateGroupMetadata
 */
export class MsgUpdateGroupMetadata extends Message {
    constructor(data) {
        super();
        /**
         * admin is the account address of the group admin.
         *
         * @generated from field: string admin = 1;
         */
        this.admin = "";
        /**
         * group_id is the unique ID of the group.
         *
         * @generated from field: uint64 group_id = 2;
         */
        this.groupId = protoInt64.zero;
        /**
         * metadata is the updated group's metadata.
         *
         * @generated from field: string metadata = 3;
         */
        this.metadata = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateGroupMetadata().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateGroupMetadata().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateGroupMetadata().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgUpdateGroupMetadata, a, b);
    }
}
MsgUpdateGroupMetadata.runtime = proto3;
MsgUpdateGroupMetadata.typeName = "cosmos.group.v1.MsgUpdateGroupMetadata";
MsgUpdateGroupMetadata.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "group_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgUpdateGroupMetadataResponse is the Msg/UpdateGroupMetadata response type.
 *
 * @generated from message cosmos.group.v1.MsgUpdateGroupMetadataResponse
 */
export class MsgUpdateGroupMetadataResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateGroupMetadataResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateGroupMetadataResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateGroupMetadataResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgUpdateGroupMetadataResponse, a, b);
    }
}
MsgUpdateGroupMetadataResponse.runtime = proto3;
MsgUpdateGroupMetadataResponse.typeName = "cosmos.group.v1.MsgUpdateGroupMetadataResponse";
MsgUpdateGroupMetadataResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgCreateGroupPolicy is the Msg/CreateGroupPolicy request type.
 *
 * @generated from message cosmos.group.v1.MsgCreateGroupPolicy
 */
export class MsgCreateGroupPolicy extends Message {
    constructor(data) {
        super();
        /**
         * admin is the account address of the group admin.
         *
         * @generated from field: string admin = 1;
         */
        this.admin = "";
        /**
         * group_id is the unique ID of the group.
         *
         * @generated from field: uint64 group_id = 2;
         */
        this.groupId = protoInt64.zero;
        /**
         * metadata is any arbitrary metadata attached to the group policy.
         *
         * @generated from field: string metadata = 3;
         */
        this.metadata = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCreateGroupPolicy().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCreateGroupPolicy().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCreateGroupPolicy().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgCreateGroupPolicy, a, b);
    }
}
MsgCreateGroupPolicy.runtime = proto3;
MsgCreateGroupPolicy.typeName = "cosmos.group.v1.MsgCreateGroupPolicy";
MsgCreateGroupPolicy.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "group_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "decision_policy", kind: "message", T: Any },
]);
/**
 * MsgCreateGroupPolicyResponse is the Msg/CreateGroupPolicy response type.
 *
 * @generated from message cosmos.group.v1.MsgCreateGroupPolicyResponse
 */
export class MsgCreateGroupPolicyResponse extends Message {
    constructor(data) {
        super();
        /**
         * address is the account address of the newly created group policy.
         *
         * @generated from field: string address = 1;
         */
        this.address = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCreateGroupPolicyResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCreateGroupPolicyResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCreateGroupPolicyResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgCreateGroupPolicyResponse, a, b);
    }
}
MsgCreateGroupPolicyResponse.runtime = proto3;
MsgCreateGroupPolicyResponse.typeName = "cosmos.group.v1.MsgCreateGroupPolicyResponse";
MsgCreateGroupPolicyResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgUpdateGroupPolicyAdmin is the Msg/UpdateGroupPolicyAdmin request type.
 *
 * @generated from message cosmos.group.v1.MsgUpdateGroupPolicyAdmin
 */
export class MsgUpdateGroupPolicyAdmin extends Message {
    constructor(data) {
        super();
        /**
         * admin is the account address of the group admin.
         *
         * @generated from field: string admin = 1;
         */
        this.admin = "";
        /**
         * group_policy_address is the account address of the group policy.
         *
         * @generated from field: string group_policy_address = 2;
         */
        this.groupPolicyAddress = "";
        /**
         * new_admin is the new group policy admin.
         *
         * @generated from field: string new_admin = 3;
         */
        this.newAdmin = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateGroupPolicyAdmin().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateGroupPolicyAdmin().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateGroupPolicyAdmin().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgUpdateGroupPolicyAdmin, a, b);
    }
}
MsgUpdateGroupPolicyAdmin.runtime = proto3;
MsgUpdateGroupPolicyAdmin.typeName = "cosmos.group.v1.MsgUpdateGroupPolicyAdmin";
MsgUpdateGroupPolicyAdmin.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "group_policy_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "new_admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgUpdateGroupPolicyAdminResponse is the Msg/UpdateGroupPolicyAdmin response type.
 *
 * @generated from message cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse
 */
export class MsgUpdateGroupPolicyAdminResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateGroupPolicyAdminResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateGroupPolicyAdminResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateGroupPolicyAdminResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgUpdateGroupPolicyAdminResponse, a, b);
    }
}
MsgUpdateGroupPolicyAdminResponse.runtime = proto3;
MsgUpdateGroupPolicyAdminResponse.typeName = "cosmos.group.v1.MsgUpdateGroupPolicyAdminResponse";
MsgUpdateGroupPolicyAdminResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgCreateGroupWithPolicy is the Msg/CreateGroupWithPolicy request type.
 *
 * @generated from message cosmos.group.v1.MsgCreateGroupWithPolicy
 */
export class MsgCreateGroupWithPolicy extends Message {
    constructor(data) {
        super();
        /**
         * admin is the account address of the group and group policy admin.
         *
         * @generated from field: string admin = 1;
         */
        this.admin = "";
        /**
         * members defines the group members.
         *
         * @generated from field: repeated cosmos.group.v1.MemberRequest members = 2;
         */
        this.members = [];
        /**
         * group_metadata is any arbitrary metadata attached to the group.
         *
         * @generated from field: string group_metadata = 3;
         */
        this.groupMetadata = "";
        /**
         * group_policy_metadata is any arbitrary metadata attached to the group policy.
         *
         * @generated from field: string group_policy_metadata = 4;
         */
        this.groupPolicyMetadata = "";
        /**
         * group_policy_as_admin is a boolean field, if set to true, the group policy account address will be used as group
         * and group policy admin.
         *
         * @generated from field: bool group_policy_as_admin = 5;
         */
        this.groupPolicyAsAdmin = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCreateGroupWithPolicy().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCreateGroupWithPolicy().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCreateGroupWithPolicy().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgCreateGroupWithPolicy, a, b);
    }
}
MsgCreateGroupWithPolicy.runtime = proto3;
MsgCreateGroupWithPolicy.typeName = "cosmos.group.v1.MsgCreateGroupWithPolicy";
MsgCreateGroupWithPolicy.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "members", kind: "message", T: MemberRequest, repeated: true },
    { no: 3, name: "group_metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "group_policy_metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "group_policy_as_admin", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "decision_policy", kind: "message", T: Any },
]);
/**
 * MsgCreateGroupWithPolicyResponse is the Msg/CreateGroupWithPolicy response type.
 *
 * @generated from message cosmos.group.v1.MsgCreateGroupWithPolicyResponse
 */
export class MsgCreateGroupWithPolicyResponse extends Message {
    constructor(data) {
        super();
        /**
         * group_id is the unique ID of the newly created group with policy.
         *
         * @generated from field: uint64 group_id = 1;
         */
        this.groupId = protoInt64.zero;
        /**
         * group_policy_address is the account address of the newly created group policy.
         *
         * @generated from field: string group_policy_address = 2;
         */
        this.groupPolicyAddress = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCreateGroupWithPolicyResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCreateGroupWithPolicyResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCreateGroupWithPolicyResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgCreateGroupWithPolicyResponse, a, b);
    }
}
MsgCreateGroupWithPolicyResponse.runtime = proto3;
MsgCreateGroupWithPolicyResponse.typeName = "cosmos.group.v1.MsgCreateGroupWithPolicyResponse";
MsgCreateGroupWithPolicyResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "group_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "group_policy_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgUpdateGroupPolicyDecisionPolicy is the Msg/UpdateGroupPolicyDecisionPolicy request type.
 *
 * @generated from message cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy
 */
export class MsgUpdateGroupPolicyDecisionPolicy extends Message {
    constructor(data) {
        super();
        /**
         * admin is the account address of the group admin.
         *
         * @generated from field: string admin = 1;
         */
        this.admin = "";
        /**
         * group_policy_address is the account address of group policy.
         *
         * @generated from field: string group_policy_address = 2;
         */
        this.groupPolicyAddress = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateGroupPolicyDecisionPolicy().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateGroupPolicyDecisionPolicy().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateGroupPolicyDecisionPolicy().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgUpdateGroupPolicyDecisionPolicy, a, b);
    }
}
MsgUpdateGroupPolicyDecisionPolicy.runtime = proto3;
MsgUpdateGroupPolicyDecisionPolicy.typeName = "cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy";
MsgUpdateGroupPolicyDecisionPolicy.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "group_policy_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "decision_policy", kind: "message", T: Any },
]);
/**
 * MsgUpdateGroupPolicyDecisionPolicyResponse is the Msg/UpdateGroupPolicyDecisionPolicy response type.
 *
 * @generated from message cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse
 */
export class MsgUpdateGroupPolicyDecisionPolicyResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateGroupPolicyDecisionPolicyResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateGroupPolicyDecisionPolicyResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateGroupPolicyDecisionPolicyResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgUpdateGroupPolicyDecisionPolicyResponse, a, b);
    }
}
MsgUpdateGroupPolicyDecisionPolicyResponse.runtime = proto3;
MsgUpdateGroupPolicyDecisionPolicyResponse.typeName = "cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicyResponse";
MsgUpdateGroupPolicyDecisionPolicyResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgUpdateGroupPolicyMetadata is the Msg/UpdateGroupPolicyMetadata request type.
 *
 * @generated from message cosmos.group.v1.MsgUpdateGroupPolicyMetadata
 */
export class MsgUpdateGroupPolicyMetadata extends Message {
    constructor(data) {
        super();
        /**
         * admin is the account address of the group admin.
         *
         * @generated from field: string admin = 1;
         */
        this.admin = "";
        /**
         * group_policy_address is the account address of group policy.
         *
         * @generated from field: string group_policy_address = 2;
         */
        this.groupPolicyAddress = "";
        /**
         * metadata is the group policy metadata to be updated.
         *
         * @generated from field: string metadata = 3;
         */
        this.metadata = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateGroupPolicyMetadata().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateGroupPolicyMetadata().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateGroupPolicyMetadata().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgUpdateGroupPolicyMetadata, a, b);
    }
}
MsgUpdateGroupPolicyMetadata.runtime = proto3;
MsgUpdateGroupPolicyMetadata.typeName = "cosmos.group.v1.MsgUpdateGroupPolicyMetadata";
MsgUpdateGroupPolicyMetadata.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "group_policy_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgUpdateGroupPolicyMetadataResponse is the Msg/UpdateGroupPolicyMetadata response type.
 *
 * @generated from message cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse
 */
export class MsgUpdateGroupPolicyMetadataResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateGroupPolicyMetadataResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateGroupPolicyMetadataResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateGroupPolicyMetadataResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgUpdateGroupPolicyMetadataResponse, a, b);
    }
}
MsgUpdateGroupPolicyMetadataResponse.runtime = proto3;
MsgUpdateGroupPolicyMetadataResponse.typeName = "cosmos.group.v1.MsgUpdateGroupPolicyMetadataResponse";
MsgUpdateGroupPolicyMetadataResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgSubmitProposal is the Msg/SubmitProposal request type.
 *
 * @generated from message cosmos.group.v1.MsgSubmitProposal
 */
export class MsgSubmitProposal extends Message {
    constructor(data) {
        super();
        /**
         * group_policy_address is the account address of group policy.
         *
         * @generated from field: string group_policy_address = 1;
         */
        this.groupPolicyAddress = "";
        /**
         * proposers are the account addresses of the proposers.
         * Proposers signatures will be counted as yes votes.
         *
         * @generated from field: repeated string proposers = 2;
         */
        this.proposers = [];
        /**
         * metadata is any arbitrary metadata attached to the proposal.
         *
         * @generated from field: string metadata = 3;
         */
        this.metadata = "";
        /**
         * messages is a list of `sdk.Msg`s that will be executed if the proposal passes.
         *
         * @generated from field: repeated google.protobuf.Any messages = 4;
         */
        this.messages = [];
        /**
         * exec defines the mode of execution of the proposal,
         * whether it should be executed immediately on creation or not.
         * If so, proposers signatures are considered as Yes votes.
         *
         * @generated from field: cosmos.group.v1.Exec exec = 5;
         */
        this.exec = Exec.UNSPECIFIED;
        /**
         * title is the title of the proposal.
         *
         * Since: cosmos-sdk 0.47
         *
         * @generated from field: string title = 6;
         */
        this.title = "";
        /**
         * summary is the summary of the proposal.
         *
         * Since: cosmos-sdk 0.47
         *
         * @generated from field: string summary = 7;
         */
        this.summary = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSubmitProposal().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSubmitProposal().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSubmitProposal().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgSubmitProposal, a, b);
    }
}
MsgSubmitProposal.runtime = proto3;
MsgSubmitProposal.typeName = "cosmos.group.v1.MsgSubmitProposal";
MsgSubmitProposal.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "group_policy_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "proposers", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "messages", kind: "message", T: Any, repeated: true },
    { no: 5, name: "exec", kind: "enum", T: proto3.getEnumType(Exec) },
    { no: 6, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "summary", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgSubmitProposalResponse is the Msg/SubmitProposal response type.
 *
 * @generated from message cosmos.group.v1.MsgSubmitProposalResponse
 */
export class MsgSubmitProposalResponse extends Message {
    constructor(data) {
        super();
        /**
         * proposal is the unique ID of the proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSubmitProposalResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSubmitProposalResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSubmitProposalResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgSubmitProposalResponse, a, b);
    }
}
MsgSubmitProposalResponse.runtime = proto3;
MsgSubmitProposalResponse.typeName = "cosmos.group.v1.MsgSubmitProposalResponse";
MsgSubmitProposalResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * MsgWithdrawProposal is the Msg/WithdrawProposal request type.
 *
 * @generated from message cosmos.group.v1.MsgWithdrawProposal
 */
export class MsgWithdrawProposal extends Message {
    constructor(data) {
        super();
        /**
         * proposal is the unique ID of the proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protoInt64.zero;
        /**
         * address is the admin of the group policy or one of the proposer of the proposal.
         *
         * @generated from field: string address = 2;
         */
        this.address = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgWithdrawProposal().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgWithdrawProposal().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgWithdrawProposal().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgWithdrawProposal, a, b);
    }
}
MsgWithdrawProposal.runtime = proto3;
MsgWithdrawProposal.typeName = "cosmos.group.v1.MsgWithdrawProposal";
MsgWithdrawProposal.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgWithdrawProposalResponse is the Msg/WithdrawProposal response type.
 *
 * @generated from message cosmos.group.v1.MsgWithdrawProposalResponse
 */
export class MsgWithdrawProposalResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgWithdrawProposalResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgWithdrawProposalResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgWithdrawProposalResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgWithdrawProposalResponse, a, b);
    }
}
MsgWithdrawProposalResponse.runtime = proto3;
MsgWithdrawProposalResponse.typeName = "cosmos.group.v1.MsgWithdrawProposalResponse";
MsgWithdrawProposalResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgVote is the Msg/Vote request type.
 *
 * @generated from message cosmos.group.v1.MsgVote
 */
export class MsgVote extends Message {
    constructor(data) {
        super();
        /**
         * proposal is the unique ID of the proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protoInt64.zero;
        /**
         * voter is the voter account address.
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
        /**
         * exec defines whether the proposal should be executed
         * immediately after voting or not.
         *
         * @generated from field: cosmos.group.v1.Exec exec = 5;
         */
        this.exec = Exec.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgVote().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgVote().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgVote().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgVote, a, b);
    }
}
MsgVote.runtime = proto3;
MsgVote.typeName = "cosmos.group.v1.MsgVote";
MsgVote.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "voter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "option", kind: "enum", T: proto3.getEnumType(VoteOption) },
    { no: 4, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "exec", kind: "enum", T: proto3.getEnumType(Exec) },
]);
/**
 * MsgVoteResponse is the Msg/Vote response type.
 *
 * @generated from message cosmos.group.v1.MsgVoteResponse
 */
export class MsgVoteResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgVoteResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgVoteResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgVoteResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgVoteResponse, a, b);
    }
}
MsgVoteResponse.runtime = proto3;
MsgVoteResponse.typeName = "cosmos.group.v1.MsgVoteResponse";
MsgVoteResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgExec is the Msg/Exec request type.
 *
 * @generated from message cosmos.group.v1.MsgExec
 */
export class MsgExec extends Message {
    constructor(data) {
        super();
        /**
         * proposal is the unique ID of the proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protoInt64.zero;
        /**
         * executor is the account address used to execute the proposal.
         *
         * @generated from field: string executor = 2;
         */
        this.executor = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgExec().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgExec().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgExec().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgExec, a, b);
    }
}
MsgExec.runtime = proto3;
MsgExec.typeName = "cosmos.group.v1.MsgExec";
MsgExec.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "executor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgExecResponse is the Msg/Exec request type.
 *
 * @generated from message cosmos.group.v1.MsgExecResponse
 */
export class MsgExecResponse extends Message {
    constructor(data) {
        super();
        /**
         * result is the final result of the proposal execution.
         *
         * @generated from field: cosmos.group.v1.ProposalExecutorResult result = 2;
         */
        this.result = ProposalExecutorResult.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgExecResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgExecResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgExecResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgExecResponse, a, b);
    }
}
MsgExecResponse.runtime = proto3;
MsgExecResponse.typeName = "cosmos.group.v1.MsgExecResponse";
MsgExecResponse.fields = proto3.util.newFieldList(() => [
    { no: 2, name: "result", kind: "enum", T: proto3.getEnumType(ProposalExecutorResult) },
]);
/**
 * MsgLeaveGroup is the Msg/LeaveGroup request type.
 *
 * @generated from message cosmos.group.v1.MsgLeaveGroup
 */
export class MsgLeaveGroup extends Message {
    constructor(data) {
        super();
        /**
         * address is the account address of the group member.
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
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgLeaveGroup().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgLeaveGroup().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgLeaveGroup().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgLeaveGroup, a, b);
    }
}
MsgLeaveGroup.runtime = proto3;
MsgLeaveGroup.typeName = "cosmos.group.v1.MsgLeaveGroup";
MsgLeaveGroup.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "group_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * MsgLeaveGroupResponse is the Msg/LeaveGroup response type.
 *
 * @generated from message cosmos.group.v1.MsgLeaveGroupResponse
 */
export class MsgLeaveGroupResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgLeaveGroupResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgLeaveGroupResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgLeaveGroupResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgLeaveGroupResponse, a, b);
    }
}
MsgLeaveGroupResponse.runtime = proto3;
MsgLeaveGroupResponse.typeName = "cosmos.group.v1.MsgLeaveGroupResponse";
MsgLeaveGroupResponse.fields = proto3.util.newFieldList(() => []);
//# sourceMappingURL=tx_pb.js.map