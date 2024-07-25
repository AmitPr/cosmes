import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * MsgAggregateExchangeRatePrevote represents a message to submit
 * aggregate exchange rate prevote.
 *
 * @generated from message kujira.oracle.MsgAggregateExchangeRatePrevote
 */
export declare class MsgAggregateExchangeRatePrevote extends Message<MsgAggregateExchangeRatePrevote> {
    /**
     * @generated from field: string hash = 1;
     */
    hash: string;
    /**
     * @generated from field: string feeder = 2;
     */
    feeder: string;
    /**
     * @generated from field: string validator = 3;
     */
    validator: string;
    constructor(data?: PartialMessage<MsgAggregateExchangeRatePrevote>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.oracle.MsgAggregateExchangeRatePrevote";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAggregateExchangeRatePrevote;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAggregateExchangeRatePrevote;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAggregateExchangeRatePrevote;
    static equals(a: MsgAggregateExchangeRatePrevote | PlainMessage<MsgAggregateExchangeRatePrevote> | undefined, b: MsgAggregateExchangeRatePrevote | PlainMessage<MsgAggregateExchangeRatePrevote> | undefined): boolean;
}
/**
 * MsgAggregateExchangeRatePrevoteResponse defines the Msg/AggregateExchangeRatePrevote response type.
 *
 * @generated from message kujira.oracle.MsgAggregateExchangeRatePrevoteResponse
 */
export declare class MsgAggregateExchangeRatePrevoteResponse extends Message<MsgAggregateExchangeRatePrevoteResponse> {
    constructor(data?: PartialMessage<MsgAggregateExchangeRatePrevoteResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.oracle.MsgAggregateExchangeRatePrevoteResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAggregateExchangeRatePrevoteResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAggregateExchangeRatePrevoteResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAggregateExchangeRatePrevoteResponse;
    static equals(a: MsgAggregateExchangeRatePrevoteResponse | PlainMessage<MsgAggregateExchangeRatePrevoteResponse> | undefined, b: MsgAggregateExchangeRatePrevoteResponse | PlainMessage<MsgAggregateExchangeRatePrevoteResponse> | undefined): boolean;
}
/**
 * MsgAggregateExchangeRateVote represents a message to submit
 * aggregate exchange rate vote.
 *
 * @generated from message kujira.oracle.MsgAggregateExchangeRateVote
 */
export declare class MsgAggregateExchangeRateVote extends Message<MsgAggregateExchangeRateVote> {
    /**
     * @generated from field: string salt = 1;
     */
    salt: string;
    /**
     * @generated from field: string exchange_rates = 2;
     */
    exchangeRates: string;
    /**
     * @generated from field: string feeder = 3;
     */
    feeder: string;
    /**
     * @generated from field: string validator = 4;
     */
    validator: string;
    constructor(data?: PartialMessage<MsgAggregateExchangeRateVote>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.oracle.MsgAggregateExchangeRateVote";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAggregateExchangeRateVote;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAggregateExchangeRateVote;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAggregateExchangeRateVote;
    static equals(a: MsgAggregateExchangeRateVote | PlainMessage<MsgAggregateExchangeRateVote> | undefined, b: MsgAggregateExchangeRateVote | PlainMessage<MsgAggregateExchangeRateVote> | undefined): boolean;
}
/**
 * MsgAggregateExchangeRateVoteResponse defines the Msg/AggregateExchangeRateVote response type.
 *
 * @generated from message kujira.oracle.MsgAggregateExchangeRateVoteResponse
 */
export declare class MsgAggregateExchangeRateVoteResponse extends Message<MsgAggregateExchangeRateVoteResponse> {
    constructor(data?: PartialMessage<MsgAggregateExchangeRateVoteResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.oracle.MsgAggregateExchangeRateVoteResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAggregateExchangeRateVoteResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAggregateExchangeRateVoteResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAggregateExchangeRateVoteResponse;
    static equals(a: MsgAggregateExchangeRateVoteResponse | PlainMessage<MsgAggregateExchangeRateVoteResponse> | undefined, b: MsgAggregateExchangeRateVoteResponse | PlainMessage<MsgAggregateExchangeRateVoteResponse> | undefined): boolean;
}
/**
 * MsgDelegateFeedConsent represents a message to
 * delegate oracle voting rights to another address.
 *
 * @generated from message kujira.oracle.MsgDelegateFeedConsent
 */
export declare class MsgDelegateFeedConsent extends Message<MsgDelegateFeedConsent> {
    /**
     * @generated from field: string operator = 1;
     */
    operator: string;
    /**
     * @generated from field: string delegate = 2;
     */
    delegate: string;
    constructor(data?: PartialMessage<MsgDelegateFeedConsent>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.oracle.MsgDelegateFeedConsent";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgDelegateFeedConsent;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgDelegateFeedConsent;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgDelegateFeedConsent;
    static equals(a: MsgDelegateFeedConsent | PlainMessage<MsgDelegateFeedConsent> | undefined, b: MsgDelegateFeedConsent | PlainMessage<MsgDelegateFeedConsent> | undefined): boolean;
}
/**
 * MsgDelegateFeedConsentResponse defines the Msg/DelegateFeedConsent response type.
 *
 * @generated from message kujira.oracle.MsgDelegateFeedConsentResponse
 */
export declare class MsgDelegateFeedConsentResponse extends Message<MsgDelegateFeedConsentResponse> {
    constructor(data?: PartialMessage<MsgDelegateFeedConsentResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.oracle.MsgDelegateFeedConsentResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgDelegateFeedConsentResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgDelegateFeedConsentResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgDelegateFeedConsentResponse;
    static equals(a: MsgDelegateFeedConsentResponse | PlainMessage<MsgDelegateFeedConsentResponse> | undefined, b: MsgDelegateFeedConsentResponse | PlainMessage<MsgDelegateFeedConsentResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map