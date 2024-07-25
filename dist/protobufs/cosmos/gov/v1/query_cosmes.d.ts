import { QueryDepositRequest, QueryDepositResponse, QueryDepositsRequest, QueryDepositsResponse, QueryParamsRequest, QueryParamsResponse, QueryProposalRequest, QueryProposalResponse, QueryProposalsRequest, QueryProposalsResponse, QueryTallyResultRequest, QueryTallyResultResponse, QueryVoteRequest, QueryVoteResponse, QueryVotesRequest, QueryVotesResponse } from "./query_pb.js";
/**
 * Proposal queries proposal details based on ProposalID.
 *
 * @generated from rpc cosmos.gov.v1.Query.Proposal
 */
export declare const QueryProposalService: {
    readonly typeName: "cosmos.gov.v1.Query";
    readonly method: "Proposal";
    readonly Request: typeof QueryProposalRequest;
    readonly Response: typeof QueryProposalResponse;
};
/**
 * Proposals queries all proposals based on given status.
 *
 * @generated from rpc cosmos.gov.v1.Query.Proposals
 */
export declare const QueryProposalsService: {
    readonly typeName: "cosmos.gov.v1.Query";
    readonly method: "Proposals";
    readonly Request: typeof QueryProposalsRequest;
    readonly Response: typeof QueryProposalsResponse;
};
/**
 * Vote queries voted information based on proposalID, voterAddr.
 *
 * @generated from rpc cosmos.gov.v1.Query.Vote
 */
export declare const QueryVoteService: {
    readonly typeName: "cosmos.gov.v1.Query";
    readonly method: "Vote";
    readonly Request: typeof QueryVoteRequest;
    readonly Response: typeof QueryVoteResponse;
};
/**
 * Votes queries votes of a given proposal.
 *
 * @generated from rpc cosmos.gov.v1.Query.Votes
 */
export declare const QueryVotesService: {
    readonly typeName: "cosmos.gov.v1.Query";
    readonly method: "Votes";
    readonly Request: typeof QueryVotesRequest;
    readonly Response: typeof QueryVotesResponse;
};
/**
 * Params queries all parameters of the gov module.
 *
 * @generated from rpc cosmos.gov.v1.Query.Params
 */
export declare const QueryParamsService: {
    readonly typeName: "cosmos.gov.v1.Query";
    readonly method: "Params";
    readonly Request: typeof QueryParamsRequest;
    readonly Response: typeof QueryParamsResponse;
};
/**
 * Deposit queries single deposit information based proposalID, depositAddr.
 *
 * @generated from rpc cosmos.gov.v1.Query.Deposit
 */
export declare const QueryDepositService: {
    readonly typeName: "cosmos.gov.v1.Query";
    readonly method: "Deposit";
    readonly Request: typeof QueryDepositRequest;
    readonly Response: typeof QueryDepositResponse;
};
/**
 * Deposits queries all deposits of a single proposal.
 *
 * @generated from rpc cosmos.gov.v1.Query.Deposits
 */
export declare const QueryDepositsService: {
    readonly typeName: "cosmos.gov.v1.Query";
    readonly method: "Deposits";
    readonly Request: typeof QueryDepositsRequest;
    readonly Response: typeof QueryDepositsResponse;
};
/**
 * TallyResult queries the tally of a proposal vote.
 *
 * @generated from rpc cosmos.gov.v1.Query.TallyResult
 */
export declare const QueryTallyResultService: {
    readonly typeName: "cosmos.gov.v1.Query";
    readonly method: "TallyResult";
    readonly Request: typeof QueryTallyResultRequest;
    readonly Response: typeof QueryTallyResultResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map