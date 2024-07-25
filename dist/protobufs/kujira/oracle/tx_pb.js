// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file kujira/oracle/tx.proto (package kujira.oracle, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * MsgAggregateExchangeRatePrevote represents a message to submit
 * aggregate exchange rate prevote.
 *
 * @generated from message kujira.oracle.MsgAggregateExchangeRatePrevote
 */
export class MsgAggregateExchangeRatePrevote extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string hash = 1;
         */
        this.hash = "";
        /**
         * @generated from field: string feeder = 2;
         */
        this.feeder = "";
        /**
         * @generated from field: string validator = 3;
         */
        this.validator = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgAggregateExchangeRatePrevote().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgAggregateExchangeRatePrevote().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgAggregateExchangeRatePrevote().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgAggregateExchangeRatePrevote, a, b);
    }
}
MsgAggregateExchangeRatePrevote.runtime = proto3;
MsgAggregateExchangeRatePrevote.typeName = "kujira.oracle.MsgAggregateExchangeRatePrevote";
MsgAggregateExchangeRatePrevote.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "feeder", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "validator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgAggregateExchangeRatePrevoteResponse defines the Msg/AggregateExchangeRatePrevote response type.
 *
 * @generated from message kujira.oracle.MsgAggregateExchangeRatePrevoteResponse
 */
export class MsgAggregateExchangeRatePrevoteResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgAggregateExchangeRatePrevoteResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgAggregateExchangeRatePrevoteResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgAggregateExchangeRatePrevoteResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgAggregateExchangeRatePrevoteResponse, a, b);
    }
}
MsgAggregateExchangeRatePrevoteResponse.runtime = proto3;
MsgAggregateExchangeRatePrevoteResponse.typeName = "kujira.oracle.MsgAggregateExchangeRatePrevoteResponse";
MsgAggregateExchangeRatePrevoteResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgAggregateExchangeRateVote represents a message to submit
 * aggregate exchange rate vote.
 *
 * @generated from message kujira.oracle.MsgAggregateExchangeRateVote
 */
export class MsgAggregateExchangeRateVote extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string salt = 1;
         */
        this.salt = "";
        /**
         * @generated from field: string exchange_rates = 2;
         */
        this.exchangeRates = "";
        /**
         * @generated from field: string feeder = 3;
         */
        this.feeder = "";
        /**
         * @generated from field: string validator = 4;
         */
        this.validator = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgAggregateExchangeRateVote().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgAggregateExchangeRateVote().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgAggregateExchangeRateVote().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgAggregateExchangeRateVote, a, b);
    }
}
MsgAggregateExchangeRateVote.runtime = proto3;
MsgAggregateExchangeRateVote.typeName = "kujira.oracle.MsgAggregateExchangeRateVote";
MsgAggregateExchangeRateVote.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "salt", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "exchange_rates", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "feeder", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "validator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgAggregateExchangeRateVoteResponse defines the Msg/AggregateExchangeRateVote response type.
 *
 * @generated from message kujira.oracle.MsgAggregateExchangeRateVoteResponse
 */
export class MsgAggregateExchangeRateVoteResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgAggregateExchangeRateVoteResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgAggregateExchangeRateVoteResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgAggregateExchangeRateVoteResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgAggregateExchangeRateVoteResponse, a, b);
    }
}
MsgAggregateExchangeRateVoteResponse.runtime = proto3;
MsgAggregateExchangeRateVoteResponse.typeName = "kujira.oracle.MsgAggregateExchangeRateVoteResponse";
MsgAggregateExchangeRateVoteResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgDelegateFeedConsent represents a message to
 * delegate oracle voting rights to another address.
 *
 * @generated from message kujira.oracle.MsgDelegateFeedConsent
 */
export class MsgDelegateFeedConsent extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string operator = 1;
         */
        this.operator = "";
        /**
         * @generated from field: string delegate = 2;
         */
        this.delegate = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgDelegateFeedConsent().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgDelegateFeedConsent().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgDelegateFeedConsent().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgDelegateFeedConsent, a, b);
    }
}
MsgDelegateFeedConsent.runtime = proto3;
MsgDelegateFeedConsent.typeName = "kujira.oracle.MsgDelegateFeedConsent";
MsgDelegateFeedConsent.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "operator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "delegate", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgDelegateFeedConsentResponse defines the Msg/DelegateFeedConsent response type.
 *
 * @generated from message kujira.oracle.MsgDelegateFeedConsentResponse
 */
export class MsgDelegateFeedConsentResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgDelegateFeedConsentResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgDelegateFeedConsentResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgDelegateFeedConsentResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgDelegateFeedConsentResponse, a, b);
    }
}
MsgDelegateFeedConsentResponse.runtime = proto3;
MsgDelegateFeedConsentResponse.typeName = "kujira.oracle.MsgDelegateFeedConsentResponse";
MsgDelegateFeedConsentResponse.fields = proto3.util.newFieldList(() => []);
//# sourceMappingURL=tx_pb.js.map