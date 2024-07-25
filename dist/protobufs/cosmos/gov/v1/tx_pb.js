// Since: cosmos-sdk 0.46
import { Any, Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Coin } from "../../base/v1beta1/coin_pb.js";
import { Params, VoteOption, WeightedVoteOption } from "./gov_pb.js";
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 *
 * @generated from message cosmos.gov.v1.MsgSubmitProposal
 */
export class MsgSubmitProposal extends Message {
    constructor(data) {
        super();
        /**
         * messages are the arbitrary messages to be executed if proposal passes.
         *
         * @generated from field: repeated google.protobuf.Any messages = 1;
         */
        this.messages = [];
        /**
         * initial_deposit is the deposit value that must be paid at proposal submission.
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin initial_deposit = 2;
         */
        this.initialDeposit = [];
        /**
         * proposer is the account address of the proposer.
         *
         * @generated from field: string proposer = 3;
         */
        this.proposer = "";
        /**
         * metadata is any arbitrary metadata attached to the proposal.
         *
         * @generated from field: string metadata = 4;
         */
        this.metadata = "";
        /**
         * title is the title of the proposal.
         *
         * Since: cosmos-sdk 0.47
         *
         * @generated from field: string title = 5;
         */
        this.title = "";
        /**
         * summary is the summary of the proposal
         *
         * Since: cosmos-sdk 0.47
         *
         * @generated from field: string summary = 6;
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
MsgSubmitProposal.typeName = "cosmos.gov.v1.MsgSubmitProposal";
MsgSubmitProposal.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "messages", kind: "message", T: Any, repeated: true },
    { no: 2, name: "initial_deposit", kind: "message", T: Coin, repeated: true },
    { no: 3, name: "proposer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "summary", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgSubmitProposalResponse defines the Msg/SubmitProposal response type.
 *
 * @generated from message cosmos.gov.v1.MsgSubmitProposalResponse
 */
export class MsgSubmitProposalResponse extends Message {
    constructor(data) {
        super();
        /**
         * proposal_id defines the unique id of the proposal.
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
MsgSubmitProposalResponse.typeName = "cosmos.gov.v1.MsgSubmitProposalResponse";
MsgSubmitProposalResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * MsgExecLegacyContent is used to wrap the legacy content field into a message.
 * This ensures backwards compatibility with v1beta1.MsgSubmitProposal.
 *
 * @generated from message cosmos.gov.v1.MsgExecLegacyContent
 */
export class MsgExecLegacyContent extends Message {
    constructor(data) {
        super();
        /**
         * authority must be the gov module address.
         *
         * @generated from field: string authority = 2;
         */
        this.authority = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgExecLegacyContent().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgExecLegacyContent().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgExecLegacyContent().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgExecLegacyContent, a, b);
    }
}
MsgExecLegacyContent.runtime = proto3;
MsgExecLegacyContent.typeName = "cosmos.gov.v1.MsgExecLegacyContent";
MsgExecLegacyContent.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "content", kind: "message", T: Any },
    { no: 2, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgExecLegacyContentResponse defines the Msg/ExecLegacyContent response type.
 *
 * @generated from message cosmos.gov.v1.MsgExecLegacyContentResponse
 */
export class MsgExecLegacyContentResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgExecLegacyContentResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgExecLegacyContentResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgExecLegacyContentResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgExecLegacyContentResponse, a, b);
    }
}
MsgExecLegacyContentResponse.runtime = proto3;
MsgExecLegacyContentResponse.typeName = "cosmos.gov.v1.MsgExecLegacyContentResponse";
MsgExecLegacyContentResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgVote defines a message to cast a vote.
 *
 * @generated from message cosmos.gov.v1.MsgVote
 */
export class MsgVote extends Message {
    constructor(data) {
        super();
        /**
         * proposal_id defines the unique id of the proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protoInt64.zero;
        /**
         * voter is the voter address for the proposal.
         *
         * @generated from field: string voter = 2;
         */
        this.voter = "";
        /**
         * option defines the vote option.
         *
         * @generated from field: cosmos.gov.v1.VoteOption option = 3;
         */
        this.option = VoteOption.UNSPECIFIED;
        /**
         * metadata is any arbitrary metadata attached to the Vote.
         *
         * @generated from field: string metadata = 4;
         */
        this.metadata = "";
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
MsgVote.typeName = "cosmos.gov.v1.MsgVote";
MsgVote.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "voter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "option", kind: "enum", T: proto3.getEnumType(VoteOption) },
    { no: 4, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgVoteResponse defines the Msg/Vote response type.
 *
 * @generated from message cosmos.gov.v1.MsgVoteResponse
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
MsgVoteResponse.typeName = "cosmos.gov.v1.MsgVoteResponse";
MsgVoteResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgVoteWeighted defines a message to cast a vote.
 *
 * @generated from message cosmos.gov.v1.MsgVoteWeighted
 */
export class MsgVoteWeighted extends Message {
    constructor(data) {
        super();
        /**
         * proposal_id defines the unique id of the proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protoInt64.zero;
        /**
         * voter is the voter address for the proposal.
         *
         * @generated from field: string voter = 2;
         */
        this.voter = "";
        /**
         * options defines the weighted vote options.
         *
         * @generated from field: repeated cosmos.gov.v1.WeightedVoteOption options = 3;
         */
        this.options = [];
        /**
         * metadata is any arbitrary metadata attached to the VoteWeighted.
         *
         * @generated from field: string metadata = 4;
         */
        this.metadata = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgVoteWeighted().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgVoteWeighted().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgVoteWeighted().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgVoteWeighted, a, b);
    }
}
MsgVoteWeighted.runtime = proto3;
MsgVoteWeighted.typeName = "cosmos.gov.v1.MsgVoteWeighted";
MsgVoteWeighted.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "voter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "options", kind: "message", T: WeightedVoteOption, repeated: true },
    { no: 4, name: "metadata", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgVoteWeightedResponse defines the Msg/VoteWeighted response type.
 *
 * @generated from message cosmos.gov.v1.MsgVoteWeightedResponse
 */
export class MsgVoteWeightedResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgVoteWeightedResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgVoteWeightedResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgVoteWeightedResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgVoteWeightedResponse, a, b);
    }
}
MsgVoteWeightedResponse.runtime = proto3;
MsgVoteWeightedResponse.typeName = "cosmos.gov.v1.MsgVoteWeightedResponse";
MsgVoteWeightedResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgDeposit defines a message to submit a deposit to an existing proposal.
 *
 * @generated from message cosmos.gov.v1.MsgDeposit
 */
export class MsgDeposit extends Message {
    constructor(data) {
        super();
        /**
         * proposal_id defines the unique id of the proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protoInt64.zero;
        /**
         * depositor defines the deposit addresses from the proposals.
         *
         * @generated from field: string depositor = 2;
         */
        this.depositor = "";
        /**
         * amount to be deposited by depositor.
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 3;
         */
        this.amount = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgDeposit().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgDeposit().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgDeposit().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgDeposit, a, b);
    }
}
MsgDeposit.runtime = proto3;
MsgDeposit.typeName = "cosmos.gov.v1.MsgDeposit";
MsgDeposit.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "depositor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: Coin, repeated: true },
]);
/**
 * MsgDepositResponse defines the Msg/Deposit response type.
 *
 * @generated from message cosmos.gov.v1.MsgDepositResponse
 */
export class MsgDepositResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgDepositResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgDepositResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgDepositResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgDepositResponse, a, b);
    }
}
MsgDepositResponse.runtime = proto3;
MsgDepositResponse.typeName = "cosmos.gov.v1.MsgDepositResponse";
MsgDepositResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.gov.v1.MsgUpdateParams
 */
export class MsgUpdateParams extends Message {
    constructor(data) {
        super();
        /**
         * authority is the address that controls the module (defaults to x/gov unless overwritten).
         *
         * @generated from field: string authority = 1;
         */
        this.authority = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateParams().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateParams().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateParams().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgUpdateParams, a, b);
    }
}
MsgUpdateParams.runtime = proto3;
MsgUpdateParams.typeName = "cosmos.gov.v1.MsgUpdateParams";
MsgUpdateParams.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "params", kind: "message", T: Params },
]);
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.gov.v1.MsgUpdateParamsResponse
 */
export class MsgUpdateParamsResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateParamsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateParamsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateParamsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgUpdateParamsResponse, a, b);
    }
}
MsgUpdateParamsResponse.runtime = proto3;
MsgUpdateParamsResponse.typeName = "cosmos.gov.v1.MsgUpdateParamsResponse";
MsgUpdateParamsResponse.fields = proto3.util.newFieldList(() => []);
//# sourceMappingURL=tx_pb.js.map