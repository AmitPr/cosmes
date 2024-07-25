// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file ibc/applications/transfer/v1/transfer.proto (package ibc.applications.transfer.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * DenomTrace contains the base denomination for ICS20 fungible tokens and the
 * source tracing information path.
 *
 * @generated from message ibc.applications.transfer.v1.DenomTrace
 */
export class DenomTrace extends Message {
    constructor(data) {
        super();
        /**
         * path defines the chain of port/channel identifiers used for tracing the
         * source of the fungible token.
         *
         * @generated from field: string path = 1;
         */
        this.path = "";
        /**
         * base denomination of the relayed fungible token.
         *
         * @generated from field: string base_denom = 2;
         */
        this.baseDenom = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new DenomTrace().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new DenomTrace().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new DenomTrace().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(DenomTrace, a, b);
    }
}
DenomTrace.runtime = proto3;
DenomTrace.typeName = "ibc.applications.transfer.v1.DenomTrace";
DenomTrace.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "base_denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * Params defines the set of IBC transfer parameters.
 * NOTE: To prevent a single token from being transferred, set the
 * TransfersEnabled parameter to true and then set the bank module's SendEnabled
 * parameter for the denomination to false.
 *
 * @generated from message ibc.applications.transfer.v1.Params
 */
export class Params extends Message {
    constructor(data) {
        super();
        /**
         * send_enabled enables or disables all cross-chain token transfers from this
         * chain.
         *
         * @generated from field: bool send_enabled = 1;
         */
        this.sendEnabled = false;
        /**
         * receive_enabled enables or disables all cross-chain token transfers to this
         * chain.
         *
         * @generated from field: bool receive_enabled = 2;
         */
        this.receiveEnabled = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Params().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Params().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Params().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Params, a, b);
    }
}
Params.runtime = proto3;
Params.typeName = "ibc.applications.transfer.v1.Params";
Params.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "send_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "receive_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
]);
//# sourceMappingURL=transfer_pb.js.map