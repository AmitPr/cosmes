import { MsgDeposit, MsgDepositResponse, MsgExecLegacyContent, MsgExecLegacyContentResponse, MsgSubmitProposal, MsgSubmitProposalResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgVote, MsgVoteResponse, MsgVoteWeighted, MsgVoteWeightedResponse } from "./tx_pb.js";
/**
 * SubmitProposal defines a method to create new proposal given the messages.
 *
 * @generated from rpc cosmos.gov.v1.Msg.SubmitProposal
 */
export declare const MsgSubmitProposalService: {
    readonly typeName: "cosmos.gov.v1.Msg";
    readonly method: "SubmitProposal";
    readonly Request: typeof MsgSubmitProposal;
    readonly Response: typeof MsgSubmitProposalResponse;
};
/**
 * ExecLegacyContent defines a Msg to be in included in a MsgSubmitProposal
 * to execute a legacy content-based proposal.
 *
 * @generated from rpc cosmos.gov.v1.Msg.ExecLegacyContent
 */
export declare const MsgExecLegacyContentService: {
    readonly typeName: "cosmos.gov.v1.Msg";
    readonly method: "ExecLegacyContent";
    readonly Request: typeof MsgExecLegacyContent;
    readonly Response: typeof MsgExecLegacyContentResponse;
};
/**
 * Vote defines a method to add a vote on a specific proposal.
 *
 * @generated from rpc cosmos.gov.v1.Msg.Vote
 */
export declare const MsgVoteService: {
    readonly typeName: "cosmos.gov.v1.Msg";
    readonly method: "Vote";
    readonly Request: typeof MsgVote;
    readonly Response: typeof MsgVoteResponse;
};
/**
 * VoteWeighted defines a method to add a weighted vote on a specific proposal.
 *
 * @generated from rpc cosmos.gov.v1.Msg.VoteWeighted
 */
export declare const MsgVoteWeightedService: {
    readonly typeName: "cosmos.gov.v1.Msg";
    readonly method: "VoteWeighted";
    readonly Request: typeof MsgVoteWeighted;
    readonly Response: typeof MsgVoteWeightedResponse;
};
/**
 * Deposit defines a method to add deposit on a specific proposal.
 *
 * @generated from rpc cosmos.gov.v1.Msg.Deposit
 */
export declare const MsgDepositService: {
    readonly typeName: "cosmos.gov.v1.Msg";
    readonly method: "Deposit";
    readonly Request: typeof MsgDeposit;
    readonly Response: typeof MsgDepositResponse;
};
/**
 * UpdateParams defines a governance operation for updating the x/gov module
 * parameters. The authority is defined in the keeper.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from rpc cosmos.gov.v1.Msg.UpdateParams
 */
export declare const MsgUpdateParamsService: {
    readonly typeName: "cosmos.gov.v1.Msg";
    readonly method: "UpdateParams";
    readonly Request: typeof MsgUpdateParams;
    readonly Response: typeof MsgUpdateParamsResponse;
};
//# sourceMappingURL=tx_cosmes.d.ts.map