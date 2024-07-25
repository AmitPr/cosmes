import { MsgAggregateExchangeRatePrevote, MsgAggregateExchangeRatePrevoteResponse, MsgAggregateExchangeRateVote, MsgAggregateExchangeRateVoteResponse, MsgDelegateFeedConsent, MsgDelegateFeedConsentResponse } from "./tx_pb.js";
/**
 * AggregateExchangeRatePrevote defines a method for submitting
 * aggregate exchange rate prevote
 *
 * @generated from rpc kujira.oracle.Msg.AggregateExchangeRatePrevote
 */
export declare const MsgAggregateExchangeRatePrevoteService: {
    readonly typeName: "kujira.oracle.Msg";
    readonly method: "AggregateExchangeRatePrevote";
    readonly Request: typeof MsgAggregateExchangeRatePrevote;
    readonly Response: typeof MsgAggregateExchangeRatePrevoteResponse;
};
/**
 * AggregateExchangeRateVote defines a method for submitting
 * aggregate exchange rate vote
 *
 * @generated from rpc kujira.oracle.Msg.AggregateExchangeRateVote
 */
export declare const MsgAggregateExchangeRateVoteService: {
    readonly typeName: "kujira.oracle.Msg";
    readonly method: "AggregateExchangeRateVote";
    readonly Request: typeof MsgAggregateExchangeRateVote;
    readonly Response: typeof MsgAggregateExchangeRateVoteResponse;
};
/**
 * DelegateFeedConsent defines a method for setting the feeder delegation
 *
 * @generated from rpc kujira.oracle.Msg.DelegateFeedConsent
 */
export declare const MsgDelegateFeedConsentService: {
    readonly typeName: "kujira.oracle.Msg";
    readonly method: "DelegateFeedConsent";
    readonly Request: typeof MsgDelegateFeedConsent;
    readonly Response: typeof MsgDelegateFeedConsentResponse;
};
//# sourceMappingURL=tx_cosmes.d.ts.map