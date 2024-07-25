// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file ibc/applications/fee/v1/fee.proto (package ibc.applications.fee.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../../cosmos/base/v1beta1/coin_pb.js";
import { PacketId } from "../../../core/channel/v1/channel_pb.js";
/**
 * Fee defines the ICS29 receive, acknowledgement and timeout fees
 *
 * @generated from message ibc.applications.fee.v1.Fee
 */
export class Fee extends Message {
    constructor(data) {
        super();
        /**
         * the packet receive fee
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin recv_fee = 1;
         */
        this.recvFee = [];
        /**
         * the packet acknowledgement fee
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin ack_fee = 2;
         */
        this.ackFee = [];
        /**
         * the packet timeout fee
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin timeout_fee = 3;
         */
        this.timeoutFee = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Fee().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Fee().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Fee().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Fee, a, b);
    }
}
Fee.runtime = proto3;
Fee.typeName = "ibc.applications.fee.v1.Fee";
Fee.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "recv_fee", kind: "message", T: Coin, repeated: true },
    { no: 2, name: "ack_fee", kind: "message", T: Coin, repeated: true },
    { no: 3, name: "timeout_fee", kind: "message", T: Coin, repeated: true },
]);
/**
 * PacketFee contains ICS29 relayer fees, refund address and optional list of permitted relayers
 *
 * @generated from message ibc.applications.fee.v1.PacketFee
 */
export class PacketFee extends Message {
    constructor(data) {
        super();
        /**
         * the refund address for unspent fees
         *
         * @generated from field: string refund_address = 2;
         */
        this.refundAddress = "";
        /**
         * optional list of relayers permitted to receive fees
         *
         * @generated from field: repeated string relayers = 3;
         */
        this.relayers = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PacketFee().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PacketFee().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PacketFee().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(PacketFee, a, b);
    }
}
PacketFee.runtime = proto3;
PacketFee.typeName = "ibc.applications.fee.v1.PacketFee";
PacketFee.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "fee", kind: "message", T: Fee },
    { no: 2, name: "refund_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "relayers", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
/**
 * PacketFees contains a list of type PacketFee
 *
 * @generated from message ibc.applications.fee.v1.PacketFees
 */
export class PacketFees extends Message {
    constructor(data) {
        super();
        /**
         * list of packet fees
         *
         * @generated from field: repeated ibc.applications.fee.v1.PacketFee packet_fees = 1;
         */
        this.packetFees = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PacketFees().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PacketFees().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PacketFees().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(PacketFees, a, b);
    }
}
PacketFees.runtime = proto3;
PacketFees.typeName = "ibc.applications.fee.v1.PacketFees";
PacketFees.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "packet_fees", kind: "message", T: PacketFee, repeated: true },
]);
/**
 * IdentifiedPacketFees contains a list of type PacketFee and associated PacketId
 *
 * @generated from message ibc.applications.fee.v1.IdentifiedPacketFees
 */
export class IdentifiedPacketFees extends Message {
    constructor(data) {
        super();
        /**
         * list of packet fees
         *
         * @generated from field: repeated ibc.applications.fee.v1.PacketFee packet_fees = 2;
         */
        this.packetFees = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new IdentifiedPacketFees().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new IdentifiedPacketFees().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new IdentifiedPacketFees().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(IdentifiedPacketFees, a, b);
    }
}
IdentifiedPacketFees.runtime = proto3;
IdentifiedPacketFees.typeName = "ibc.applications.fee.v1.IdentifiedPacketFees";
IdentifiedPacketFees.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "packet_id", kind: "message", T: PacketId },
    { no: 2, name: "packet_fees", kind: "message", T: PacketFee, repeated: true },
]);
//# sourceMappingURL=fee_pb.js.map