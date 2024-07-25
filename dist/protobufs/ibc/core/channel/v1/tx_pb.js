// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file ibc/core/channel/v1/tx.proto (package ibc.core.channel.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Channel, Packet } from "./channel_pb.js";
import { Height } from "../../client/v1/client_pb.js";
/**
 * ResponseResultType defines the possible outcomes of the execution of a message
 *
 * @generated from enum ibc.core.channel.v1.ResponseResultType
 */
export var ResponseResultType;
(function (ResponseResultType) {
    /**
     * Default zero value enumeration
     *
     * @generated from enum value: RESPONSE_RESULT_TYPE_UNSPECIFIED = 0;
     */
    ResponseResultType[ResponseResultType["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * The message did not call the IBC application callbacks (because, for example, the packet had already been relayed)
     *
     * @generated from enum value: RESPONSE_RESULT_TYPE_NOOP = 1;
     */
    ResponseResultType[ResponseResultType["NOOP"] = 1] = "NOOP";
    /**
     * The message was executed successfully
     *
     * @generated from enum value: RESPONSE_RESULT_TYPE_SUCCESS = 2;
     */
    ResponseResultType[ResponseResultType["SUCCESS"] = 2] = "SUCCESS";
})(ResponseResultType || (ResponseResultType = {}));
// Retrieve enum metadata with: proto3.getEnumType(ResponseResultType)
proto3.util.setEnumType(ResponseResultType, "ibc.core.channel.v1.ResponseResultType", [
    { no: 0, name: "RESPONSE_RESULT_TYPE_UNSPECIFIED" },
    { no: 1, name: "RESPONSE_RESULT_TYPE_NOOP" },
    { no: 2, name: "RESPONSE_RESULT_TYPE_SUCCESS" },
]);
/**
 * MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It
 * is called by a relayer on Chain A.
 *
 * @generated from message ibc.core.channel.v1.MsgChannelOpenInit
 */
export class MsgChannelOpenInit extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string port_id = 1;
         */
        this.portId = "";
        /**
         * @generated from field: string signer = 3;
         */
        this.signer = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgChannelOpenInit().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgChannelOpenInit().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgChannelOpenInit().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgChannelOpenInit, a, b);
    }
}
MsgChannelOpenInit.runtime = proto3;
MsgChannelOpenInit.typeName = "ibc.core.channel.v1.MsgChannelOpenInit";
MsgChannelOpenInit.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "port_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "channel", kind: "message", T: Channel },
    { no: 3, name: "signer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type.
 *
 * @generated from message ibc.core.channel.v1.MsgChannelOpenInitResponse
 */
export class MsgChannelOpenInitResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string channel_id = 1;
         */
        this.channelId = "";
        /**
         * @generated from field: string version = 2;
         */
        this.version = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgChannelOpenInitResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgChannelOpenInitResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgChannelOpenInitResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgChannelOpenInitResponse, a, b);
    }
}
MsgChannelOpenInitResponse.runtime = proto3;
MsgChannelOpenInitResponse.typeName = "ibc.core.channel.v1.MsgChannelOpenInitResponse";
MsgChannelOpenInitResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "channel_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
 * on Chain B. The version field within the Channel field has been deprecated. Its
 * value will be ignored by core IBC.
 *
 * @generated from message ibc.core.channel.v1.MsgChannelOpenTry
 */
export class MsgChannelOpenTry extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string port_id = 1;
         */
        this.portId = "";
        /**
         * Deprecated: this field is unused. Crossing hello's are no longer supported in core IBC.
         *
         * @generated from field: string previous_channel_id = 2 [deprecated = true];
         * @deprecated
         */
        this.previousChannelId = "";
        /**
         * @generated from field: string counterparty_version = 4;
         */
        this.counterpartyVersion = "";
        /**
         * @generated from field: bytes proof_init = 5;
         */
        this.proofInit = new Uint8Array(0);
        /**
         * @generated from field: string signer = 7;
         */
        this.signer = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgChannelOpenTry().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgChannelOpenTry().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgChannelOpenTry().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgChannelOpenTry, a, b);
    }
}
MsgChannelOpenTry.runtime = proto3;
MsgChannelOpenTry.typeName = "ibc.core.channel.v1.MsgChannelOpenTry";
MsgChannelOpenTry.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "port_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "previous_channel_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "channel", kind: "message", T: Channel },
    { no: 4, name: "counterparty_version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "proof_init", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 6, name: "proof_height", kind: "message", T: Height },
    { no: 7, name: "signer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type.
 *
 * @generated from message ibc.core.channel.v1.MsgChannelOpenTryResponse
 */
export class MsgChannelOpenTryResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string version = 1;
         */
        this.version = "";
        /**
         * @generated from field: string channel_id = 2;
         */
        this.channelId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgChannelOpenTryResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgChannelOpenTryResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgChannelOpenTryResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgChannelOpenTryResponse, a, b);
    }
}
MsgChannelOpenTryResponse.runtime = proto3;
MsgChannelOpenTryResponse.typeName = "ibc.core.channel.v1.MsgChannelOpenTryResponse";
MsgChannelOpenTryResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "channel_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
 * the change of channel state to TRYOPEN on Chain B.
 *
 * @generated from message ibc.core.channel.v1.MsgChannelOpenAck
 */
export class MsgChannelOpenAck extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string port_id = 1;
         */
        this.portId = "";
        /**
         * @generated from field: string channel_id = 2;
         */
        this.channelId = "";
        /**
         * @generated from field: string counterparty_channel_id = 3;
         */
        this.counterpartyChannelId = "";
        /**
         * @generated from field: string counterparty_version = 4;
         */
        this.counterpartyVersion = "";
        /**
         * @generated from field: bytes proof_try = 5;
         */
        this.proofTry = new Uint8Array(0);
        /**
         * @generated from field: string signer = 7;
         */
        this.signer = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgChannelOpenAck().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgChannelOpenAck().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgChannelOpenAck().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgChannelOpenAck, a, b);
    }
}
MsgChannelOpenAck.runtime = proto3;
MsgChannelOpenAck.typeName = "ibc.core.channel.v1.MsgChannelOpenAck";
MsgChannelOpenAck.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "port_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "channel_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "counterparty_channel_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "counterparty_version", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "proof_try", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 6, name: "proof_height", kind: "message", T: Height },
    { no: 7, name: "signer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type.
 *
 * @generated from message ibc.core.channel.v1.MsgChannelOpenAckResponse
 */
export class MsgChannelOpenAckResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgChannelOpenAckResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgChannelOpenAckResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgChannelOpenAckResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgChannelOpenAckResponse, a, b);
    }
}
MsgChannelOpenAckResponse.runtime = proto3;
MsgChannelOpenAckResponse.typeName = "ibc.core.channel.v1.MsgChannelOpenAckResponse";
MsgChannelOpenAckResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of channel state to OPEN on Chain A.
 *
 * @generated from message ibc.core.channel.v1.MsgChannelOpenConfirm
 */
export class MsgChannelOpenConfirm extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string port_id = 1;
         */
        this.portId = "";
        /**
         * @generated from field: string channel_id = 2;
         */
        this.channelId = "";
        /**
         * @generated from field: bytes proof_ack = 3;
         */
        this.proofAck = new Uint8Array(0);
        /**
         * @generated from field: string signer = 5;
         */
        this.signer = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgChannelOpenConfirm().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgChannelOpenConfirm().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgChannelOpenConfirm().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgChannelOpenConfirm, a, b);
    }
}
MsgChannelOpenConfirm.runtime = proto3;
MsgChannelOpenConfirm.typeName = "ibc.core.channel.v1.MsgChannelOpenConfirm";
MsgChannelOpenConfirm.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "port_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "channel_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "proof_ack", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "proof_height", kind: "message", T: Height },
    { no: 5, name: "signer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response
 * type.
 *
 * @generated from message ibc.core.channel.v1.MsgChannelOpenConfirmResponse
 */
export class MsgChannelOpenConfirmResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgChannelOpenConfirmResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgChannelOpenConfirmResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgChannelOpenConfirmResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgChannelOpenConfirmResponse, a, b);
    }
}
MsgChannelOpenConfirmResponse.runtime = proto3;
MsgChannelOpenConfirmResponse.typeName = "ibc.core.channel.v1.MsgChannelOpenConfirmResponse";
MsgChannelOpenConfirmResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgChannelCloseInit defines a msg sent by a Relayer to Chain A
 * to close a channel with Chain B.
 *
 * @generated from message ibc.core.channel.v1.MsgChannelCloseInit
 */
export class MsgChannelCloseInit extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string port_id = 1;
         */
        this.portId = "";
        /**
         * @generated from field: string channel_id = 2;
         */
        this.channelId = "";
        /**
         * @generated from field: string signer = 3;
         */
        this.signer = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgChannelCloseInit().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgChannelCloseInit().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgChannelCloseInit().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgChannelCloseInit, a, b);
    }
}
MsgChannelCloseInit.runtime = proto3;
MsgChannelCloseInit.typeName = "ibc.core.channel.v1.MsgChannelCloseInit";
MsgChannelCloseInit.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "port_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "channel_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "signer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type.
 *
 * @generated from message ibc.core.channel.v1.MsgChannelCloseInitResponse
 */
export class MsgChannelCloseInitResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgChannelCloseInitResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgChannelCloseInitResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgChannelCloseInitResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgChannelCloseInitResponse, a, b);
    }
}
MsgChannelCloseInitResponse.runtime = proto3;
MsgChannelCloseInitResponse.typeName = "ibc.core.channel.v1.MsgChannelCloseInitResponse";
MsgChannelCloseInitResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B
 * to acknowledge the change of channel state to CLOSED on Chain A.
 *
 * @generated from message ibc.core.channel.v1.MsgChannelCloseConfirm
 */
export class MsgChannelCloseConfirm extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string port_id = 1;
         */
        this.portId = "";
        /**
         * @generated from field: string channel_id = 2;
         */
        this.channelId = "";
        /**
         * @generated from field: bytes proof_init = 3;
         */
        this.proofInit = new Uint8Array(0);
        /**
         * @generated from field: string signer = 5;
         */
        this.signer = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgChannelCloseConfirm().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgChannelCloseConfirm().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgChannelCloseConfirm().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgChannelCloseConfirm, a, b);
    }
}
MsgChannelCloseConfirm.runtime = proto3;
MsgChannelCloseConfirm.typeName = "ibc.core.channel.v1.MsgChannelCloseConfirm";
MsgChannelCloseConfirm.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "port_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "channel_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "proof_init", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "proof_height", kind: "message", T: Height },
    { no: 5, name: "signer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response
 * type.
 *
 * @generated from message ibc.core.channel.v1.MsgChannelCloseConfirmResponse
 */
export class MsgChannelCloseConfirmResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgChannelCloseConfirmResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgChannelCloseConfirmResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgChannelCloseConfirmResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgChannelCloseConfirmResponse, a, b);
    }
}
MsgChannelCloseConfirmResponse.runtime = proto3;
MsgChannelCloseConfirmResponse.typeName = "ibc.core.channel.v1.MsgChannelCloseConfirmResponse";
MsgChannelCloseConfirmResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgRecvPacket receives incoming IBC packet
 *
 * @generated from message ibc.core.channel.v1.MsgRecvPacket
 */
export class MsgRecvPacket extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: bytes proof_commitment = 2;
         */
        this.proofCommitment = new Uint8Array(0);
        /**
         * @generated from field: string signer = 4;
         */
        this.signer = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgRecvPacket().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgRecvPacket().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgRecvPacket().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgRecvPacket, a, b);
    }
}
MsgRecvPacket.runtime = proto3;
MsgRecvPacket.typeName = "ibc.core.channel.v1.MsgRecvPacket";
MsgRecvPacket.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "packet", kind: "message", T: Packet },
    { no: 2, name: "proof_commitment", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "proof_height", kind: "message", T: Height },
    { no: 4, name: "signer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgRecvPacketResponse defines the Msg/RecvPacket response type.
 *
 * @generated from message ibc.core.channel.v1.MsgRecvPacketResponse
 */
export class MsgRecvPacketResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: ibc.core.channel.v1.ResponseResultType result = 1;
         */
        this.result = ResponseResultType.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgRecvPacketResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgRecvPacketResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgRecvPacketResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgRecvPacketResponse, a, b);
    }
}
MsgRecvPacketResponse.runtime = proto3;
MsgRecvPacketResponse.typeName = "ibc.core.channel.v1.MsgRecvPacketResponse";
MsgRecvPacketResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "enum", T: proto3.getEnumType(ResponseResultType) },
]);
/**
 * MsgTimeout receives timed-out packet
 *
 * @generated from message ibc.core.channel.v1.MsgTimeout
 */
export class MsgTimeout extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: bytes proof_unreceived = 2;
         */
        this.proofUnreceived = new Uint8Array(0);
        /**
         * @generated from field: uint64 next_sequence_recv = 4;
         */
        this.nextSequenceRecv = protoInt64.zero;
        /**
         * @generated from field: string signer = 5;
         */
        this.signer = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgTimeout().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgTimeout().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgTimeout().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgTimeout, a, b);
    }
}
MsgTimeout.runtime = proto3;
MsgTimeout.typeName = "ibc.core.channel.v1.MsgTimeout";
MsgTimeout.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "packet", kind: "message", T: Packet },
    { no: 2, name: "proof_unreceived", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "proof_height", kind: "message", T: Height },
    { no: 4, name: "next_sequence_recv", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "signer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgTimeoutResponse defines the Msg/Timeout response type.
 *
 * @generated from message ibc.core.channel.v1.MsgTimeoutResponse
 */
export class MsgTimeoutResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: ibc.core.channel.v1.ResponseResultType result = 1;
         */
        this.result = ResponseResultType.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgTimeoutResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgTimeoutResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgTimeoutResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgTimeoutResponse, a, b);
    }
}
MsgTimeoutResponse.runtime = proto3;
MsgTimeoutResponse.typeName = "ibc.core.channel.v1.MsgTimeoutResponse";
MsgTimeoutResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "enum", T: proto3.getEnumType(ResponseResultType) },
]);
/**
 * MsgTimeoutOnClose timed-out packet upon counterparty channel closure.
 *
 * @generated from message ibc.core.channel.v1.MsgTimeoutOnClose
 */
export class MsgTimeoutOnClose extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: bytes proof_unreceived = 2;
         */
        this.proofUnreceived = new Uint8Array(0);
        /**
         * @generated from field: bytes proof_close = 3;
         */
        this.proofClose = new Uint8Array(0);
        /**
         * @generated from field: uint64 next_sequence_recv = 5;
         */
        this.nextSequenceRecv = protoInt64.zero;
        /**
         * @generated from field: string signer = 6;
         */
        this.signer = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgTimeoutOnClose().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgTimeoutOnClose().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgTimeoutOnClose().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgTimeoutOnClose, a, b);
    }
}
MsgTimeoutOnClose.runtime = proto3;
MsgTimeoutOnClose.typeName = "ibc.core.channel.v1.MsgTimeoutOnClose";
MsgTimeoutOnClose.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "packet", kind: "message", T: Packet },
    { no: 2, name: "proof_unreceived", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "proof_close", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "proof_height", kind: "message", T: Height },
    { no: 5, name: "next_sequence_recv", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 6, name: "signer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type.
 *
 * @generated from message ibc.core.channel.v1.MsgTimeoutOnCloseResponse
 */
export class MsgTimeoutOnCloseResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: ibc.core.channel.v1.ResponseResultType result = 1;
         */
        this.result = ResponseResultType.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgTimeoutOnCloseResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgTimeoutOnCloseResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgTimeoutOnCloseResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgTimeoutOnCloseResponse, a, b);
    }
}
MsgTimeoutOnCloseResponse.runtime = proto3;
MsgTimeoutOnCloseResponse.typeName = "ibc.core.channel.v1.MsgTimeoutOnCloseResponse";
MsgTimeoutOnCloseResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "enum", T: proto3.getEnumType(ResponseResultType) },
]);
/**
 * MsgAcknowledgement receives incoming IBC acknowledgement
 *
 * @generated from message ibc.core.channel.v1.MsgAcknowledgement
 */
export class MsgAcknowledgement extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: bytes acknowledgement = 2;
         */
        this.acknowledgement = new Uint8Array(0);
        /**
         * @generated from field: bytes proof_acked = 3;
         */
        this.proofAcked = new Uint8Array(0);
        /**
         * @generated from field: string signer = 5;
         */
        this.signer = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgAcknowledgement().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgAcknowledgement().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgAcknowledgement().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgAcknowledgement, a, b);
    }
}
MsgAcknowledgement.runtime = proto3;
MsgAcknowledgement.typeName = "ibc.core.channel.v1.MsgAcknowledgement";
MsgAcknowledgement.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "packet", kind: "message", T: Packet },
    { no: 2, name: "acknowledgement", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "proof_acked", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "proof_height", kind: "message", T: Height },
    { no: 5, name: "signer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgAcknowledgementResponse defines the Msg/Acknowledgement response type.
 *
 * @generated from message ibc.core.channel.v1.MsgAcknowledgementResponse
 */
export class MsgAcknowledgementResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: ibc.core.channel.v1.ResponseResultType result = 1;
         */
        this.result = ResponseResultType.UNSPECIFIED;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgAcknowledgementResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgAcknowledgementResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgAcknowledgementResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgAcknowledgementResponse, a, b);
    }
}
MsgAcknowledgementResponse.runtime = proto3;
MsgAcknowledgementResponse.typeName = "ibc.core.channel.v1.MsgAcknowledgementResponse";
MsgAcknowledgementResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "result", kind: "enum", T: proto3.getEnumType(ResponseResultType) },
]);
//# sourceMappingURL=tx_pb.js.map