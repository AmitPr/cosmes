import { MsgDeposit, MsgDepositResponse, MsgSubmitProposal, MsgSubmitProposalResponse, MsgVote, MsgVoteResponse, MsgVoteWeighted, MsgVoteWeightedResponse } from "./tx_pb.js";
/**
 * SubmitProposal defines a method to create new proposal given a content.
 *
 * @generated from rpc cosmos.gov.v1beta1.Msg.SubmitProposal
 */
export declare const MsgSubmitProposalService: {
    readonly typeName: "cosmos.gov.v1beta1.Msg";
    readonly method: "SubmitProposal";
    readonly Request: typeof MsgSubmitProposal;
    readonly Response: typeof MsgSubmitProposalResponse;
};
/**
 * Vote defines a method to add a vote on a specific proposal.
 *
 * @generated from rpc cosmos.gov.v1beta1.Msg.Vote
 */
export declare const MsgVoteService: {
    readonly typeName: "cosmos.gov.v1beta1.Msg";
    readonly method: "Vote";
    readonly Request: typeof MsgVote;
    readonly Response: typeof MsgVoteResponse;
};
/**
 * VoteWeighted defines a method to add a weighted vote on a specific proposal.
 *
 * Since: cosmos-sdk 0.43
 *
 * @generated from rpc cosmos.gov.v1beta1.Msg.VoteWeighted
 */
export declare const MsgVoteWeightedService: {
    readonly typeName: "cosmos.gov.v1beta1.Msg";
    readonly method: "VoteWeighted";
    readonly Request: typeof MsgVoteWeighted;
    readonly Response: typeof MsgVoteWeightedResponse;
};
/**
 * Deposit defines a method to add deposit on a specific proposal.
 *
 * @generated from rpc cosmos.gov.v1beta1.Msg.Deposit
 */
export declare const MsgDepositService: {
    readonly typeName: "cosmos.gov.v1beta1.Msg";
    readonly method: "Deposit";
    readonly Request: typeof MsgDeposit;
    readonly Response: typeof MsgDepositResponse;
};
//# sourceMappingURL=tx_cosmes.d.ts.map