// Since: cosmos-sdk 0.46
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Deposit, DepositParams, Params, Proposal, ProposalStatus, TallyParams, TallyResult, Vote, VotingParams } from "./gov_pb.js";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination_pb.js";
/**
 * QueryProposalRequest is the request type for the Query/Proposal RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryProposalRequest
 */
export class QueryProposalRequest extends Message {
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
QueryProposalRequest.typeName = "cosmos.gov.v1.QueryProposalRequest";
QueryProposalRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * QueryProposalResponse is the response type for the Query/Proposal RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryProposalResponse
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
QueryProposalResponse.typeName = "cosmos.gov.v1.QueryProposalResponse";
QueryProposalResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal", kind: "message", T: Proposal },
]);
/**
 * QueryProposalsRequest is the request type for the Query/Proposals RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryProposalsRequest
 */
export class QueryProposalsRequest extends Message {
    constructor(data) {
        super();
        /**
         * proposal_status defines the status of the proposals.
         *
         * @generated from field: cosmos.gov.v1.ProposalStatus proposal_status = 1;
         */
        this.proposalStatus = ProposalStatus.UNSPECIFIED;
        /**
         * voter defines the voter address for the proposals.
         *
         * @generated from field: string voter = 2;
         */
        this.voter = "";
        /**
         * depositor defines the deposit addresses from the proposals.
         *
         * @generated from field: string depositor = 3;
         */
        this.depositor = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryProposalsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryProposalsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryProposalsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryProposalsRequest, a, b);
    }
}
QueryProposalsRequest.runtime = proto3;
QueryProposalsRequest.typeName = "cosmos.gov.v1.QueryProposalsRequest";
QueryProposalsRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_status", kind: "enum", T: proto3.getEnumType(ProposalStatus) },
    { no: 2, name: "voter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "depositor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "pagination", kind: "message", T: PageRequest },
]);
/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 *
 * @generated from message cosmos.gov.v1.QueryProposalsResponse
 */
export class QueryProposalsResponse extends Message {
    constructor(data) {
        super();
        /**
         * proposals defines all the requested governance proposals.
         *
         * @generated from field: repeated cosmos.gov.v1.Proposal proposals = 1;
         */
        this.proposals = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryProposalsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryProposalsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryProposalsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryProposalsResponse, a, b);
    }
}
QueryProposalsResponse.runtime = proto3;
QueryProposalsResponse.typeName = "cosmos.gov.v1.QueryProposalsResponse";
QueryProposalsResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "proposals", kind: "message", T: Proposal, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
]);
/**
 * QueryVoteRequest is the request type for the Query/Vote RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryVoteRequest
 */
export class QueryVoteRequest extends Message {
    constructor(data) {
        super();
        /**
         * proposal_id defines the unique id of the proposal.
         *
         * @generated from field: uint64 proposal_id = 1;
         */
        this.proposalId = protoInt64.zero;
        /**
         * voter defines the voter address for the proposals.
         *
         * @generated from field: string voter = 2;
         */
        this.voter = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryVoteRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryVoteRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryVoteRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryVoteRequest, a, b);
    }
}
QueryVoteRequest.runtime = proto3;
QueryVoteRequest.typeName = "cosmos.gov.v1.QueryVoteRequest";
QueryVoteRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "voter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * QueryVoteResponse is the response type for the Query/Vote RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryVoteResponse
 */
export class QueryVoteResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryVoteResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryVoteResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryVoteResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryVoteResponse, a, b);
    }
}
QueryVoteResponse.runtime = proto3;
QueryVoteResponse.typeName = "cosmos.gov.v1.QueryVoteResponse";
QueryVoteResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "vote", kind: "message", T: Vote },
]);
/**
 * QueryVotesRequest is the request type for the Query/Votes RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryVotesRequest
 */
export class QueryVotesRequest extends Message {
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
        return new QueryVotesRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryVotesRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryVotesRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryVotesRequest, a, b);
    }
}
QueryVotesRequest.runtime = proto3;
QueryVotesRequest.typeName = "cosmos.gov.v1.QueryVotesRequest";
QueryVotesRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
]);
/**
 * QueryVotesResponse is the response type for the Query/Votes RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryVotesResponse
 */
export class QueryVotesResponse extends Message {
    constructor(data) {
        super();
        /**
         * votes defines the queried votes.
         *
         * @generated from field: repeated cosmos.gov.v1.Vote votes = 1;
         */
        this.votes = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryVotesResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryVotesResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryVotesResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryVotesResponse, a, b);
    }
}
QueryVotesResponse.runtime = proto3;
QueryVotesResponse.typeName = "cosmos.gov.v1.QueryVotesResponse";
QueryVotesResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "votes", kind: "message", T: Vote, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
]);
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryParamsRequest
 */
export class QueryParamsRequest extends Message {
    constructor(data) {
        super();
        /**
         * params_type defines which parameters to query for, can be one of "voting",
         * "tallying" or "deposit".
         *
         * @generated from field: string params_type = 1;
         */
        this.paramsType = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryParamsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryParamsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryParamsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryParamsRequest, a, b);
    }
}
QueryParamsRequest.runtime = proto3;
QueryParamsRequest.typeName = "cosmos.gov.v1.QueryParamsRequest";
QueryParamsRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "params_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryParamsResponse
 */
export class QueryParamsResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryParamsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryParamsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryParamsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryParamsResponse, a, b);
    }
}
QueryParamsResponse.runtime = proto3;
QueryParamsResponse.typeName = "cosmos.gov.v1.QueryParamsResponse";
QueryParamsResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "voting_params", kind: "message", T: VotingParams },
    { no: 2, name: "deposit_params", kind: "message", T: DepositParams },
    { no: 3, name: "tally_params", kind: "message", T: TallyParams },
    { no: 4, name: "params", kind: "message", T: Params },
]);
/**
 * QueryDepositRequest is the request type for the Query/Deposit RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryDepositRequest
 */
export class QueryDepositRequest extends Message {
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
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryDepositRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryDepositRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryDepositRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryDepositRequest, a, b);
    }
}
QueryDepositRequest.runtime = proto3;
QueryDepositRequest.typeName = "cosmos.gov.v1.QueryDepositRequest";
QueryDepositRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "depositor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * QueryDepositResponse is the response type for the Query/Deposit RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryDepositResponse
 */
export class QueryDepositResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryDepositResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryDepositResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryDepositResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryDepositResponse, a, b);
    }
}
QueryDepositResponse.runtime = proto3;
QueryDepositResponse.typeName = "cosmos.gov.v1.QueryDepositResponse";
QueryDepositResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "deposit", kind: "message", T: Deposit },
]);
/**
 * QueryDepositsRequest is the request type for the Query/Deposits RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryDepositsRequest
 */
export class QueryDepositsRequest extends Message {
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
        return new QueryDepositsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryDepositsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryDepositsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryDepositsRequest, a, b);
    }
}
QueryDepositsRequest.runtime = proto3;
QueryDepositsRequest.typeName = "cosmos.gov.v1.QueryDepositsRequest";
QueryDepositsRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
]);
/**
 * QueryDepositsResponse is the response type for the Query/Deposits RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryDepositsResponse
 */
export class QueryDepositsResponse extends Message {
    constructor(data) {
        super();
        /**
         * deposits defines the requested deposits.
         *
         * @generated from field: repeated cosmos.gov.v1.Deposit deposits = 1;
         */
        this.deposits = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryDepositsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryDepositsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryDepositsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryDepositsResponse, a, b);
    }
}
QueryDepositsResponse.runtime = proto3;
QueryDepositsResponse.typeName = "cosmos.gov.v1.QueryDepositsResponse";
QueryDepositsResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "deposits", kind: "message", T: Deposit, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
]);
/**
 * QueryTallyResultRequest is the request type for the Query/Tally RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryTallyResultRequest
 */
export class QueryTallyResultRequest extends Message {
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
QueryTallyResultRequest.typeName = "cosmos.gov.v1.QueryTallyResultRequest";
QueryTallyResultRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * QueryTallyResultResponse is the response type for the Query/Tally RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryTallyResultResponse
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
QueryTallyResultResponse.typeName = "cosmos.gov.v1.QueryTallyResultResponse";
QueryTallyResultResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "tally", kind: "message", T: TallyResult },
]);
//# sourceMappingURL=query_pb.js.map