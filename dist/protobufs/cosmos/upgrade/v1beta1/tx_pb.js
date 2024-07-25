// Since: cosmos-sdk 0.46
import { Message, proto3 } from "@bufbuild/protobuf";
import { Plan } from "./upgrade_pb.js";
/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.upgrade.v1beta1.MsgSoftwareUpgrade
 */
export class MsgSoftwareUpgrade extends Message {
    constructor(data) {
        super();
        /**
         * authority is the address that controls the module (defaults to x/gov unless overwritten).
         *
         * @generated from field: string authority = 1;
         */
        this.authority = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSoftwareUpgrade().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSoftwareUpgrade().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSoftwareUpgrade().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgSoftwareUpgrade, a, b);
    }
}
MsgSoftwareUpgrade.runtime = proto3;
MsgSoftwareUpgrade.typeName = "cosmos.upgrade.v1beta1.MsgSoftwareUpgrade";
MsgSoftwareUpgrade.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "plan", kind: "message", T: Plan },
]);
/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse
 */
export class MsgSoftwareUpgradeResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSoftwareUpgradeResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSoftwareUpgradeResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSoftwareUpgradeResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgSoftwareUpgradeResponse, a, b);
    }
}
MsgSoftwareUpgradeResponse.runtime = proto3;
MsgSoftwareUpgradeResponse.typeName = "cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse";
MsgSoftwareUpgradeResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.upgrade.v1beta1.MsgCancelUpgrade
 */
export class MsgCancelUpgrade extends Message {
    constructor(data) {
        super();
        /**
         * authority is the address that controls the module (defaults to x/gov unless overwritten).
         *
         * @generated from field: string authority = 1;
         */
        this.authority = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCancelUpgrade().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCancelUpgrade().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCancelUpgrade().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgCancelUpgrade, a, b);
    }
}
MsgCancelUpgrade.runtime = proto3;
MsgCancelUpgrade.typeName = "cosmos.upgrade.v1beta1.MsgCancelUpgrade";
MsgCancelUpgrade.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse
 */
export class MsgCancelUpgradeResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCancelUpgradeResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCancelUpgradeResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCancelUpgradeResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgCancelUpgradeResponse, a, b);
    }
}
MsgCancelUpgradeResponse.runtime = proto3;
MsgCancelUpgradeResponse.typeName = "cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse";
MsgCancelUpgradeResponse.fields = proto3.util.newFieldList(() => []);
//# sourceMappingURL=tx_pb.js.map