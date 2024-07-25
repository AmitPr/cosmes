// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file cosmos/vesting/v1beta1/tx.proto (package cosmos.vesting.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Coin } from "../../base/v1beta1/coin_pb.js";
import { Period } from "./vesting_pb.js";
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 *
 * @generated from message cosmos.vesting.v1beta1.MsgCreateVestingAccount
 */
export class MsgCreateVestingAccount extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string from_address = 1;
         */
        this.fromAddress = "";
        /**
         * @generated from field: string to_address = 2;
         */
        this.toAddress = "";
        /**
         * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 3;
         */
        this.amount = [];
        /**
         * end of vesting as unix time (in seconds).
         *
         * @generated from field: int64 end_time = 4;
         */
        this.endTime = protoInt64.zero;
        /**
         * @generated from field: bool delayed = 5;
         */
        this.delayed = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCreateVestingAccount().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCreateVestingAccount().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCreateVestingAccount().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgCreateVestingAccount, a, b);
    }
}
MsgCreateVestingAccount.runtime = proto3;
MsgCreateVestingAccount.typeName = "cosmos.vesting.v1beta1.MsgCreateVestingAccount";
MsgCreateVestingAccount.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "from_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "to_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: Coin, repeated: true },
    { no: 4, name: "end_time", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "delayed", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
]);
/**
 * MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type.
 *
 * @generated from message cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse
 */
export class MsgCreateVestingAccountResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCreateVestingAccountResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCreateVestingAccountResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCreateVestingAccountResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgCreateVestingAccountResponse, a, b);
    }
}
MsgCreateVestingAccountResponse.runtime = proto3;
MsgCreateVestingAccountResponse.typeName = "cosmos.vesting.v1beta1.MsgCreateVestingAccountResponse";
MsgCreateVestingAccountResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgCreatePermanentLockedAccount defines a message that enables creating a permanent
 * locked account.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount
 */
export class MsgCreatePermanentLockedAccount extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string from_address = 1;
         */
        this.fromAddress = "";
        /**
         * @generated from field: string to_address = 2;
         */
        this.toAddress = "";
        /**
         * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 3;
         */
        this.amount = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCreatePermanentLockedAccount().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCreatePermanentLockedAccount().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCreatePermanentLockedAccount().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgCreatePermanentLockedAccount, a, b);
    }
}
MsgCreatePermanentLockedAccount.runtime = proto3;
MsgCreatePermanentLockedAccount.typeName = "cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount";
MsgCreatePermanentLockedAccount.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "from_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "to_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: Coin, repeated: true },
]);
/**
 * MsgCreatePermanentLockedAccountResponse defines the Msg/CreatePermanentLockedAccount response type.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse
 */
export class MsgCreatePermanentLockedAccountResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCreatePermanentLockedAccountResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCreatePermanentLockedAccountResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCreatePermanentLockedAccountResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgCreatePermanentLockedAccountResponse, a, b);
    }
}
MsgCreatePermanentLockedAccountResponse.runtime = proto3;
MsgCreatePermanentLockedAccountResponse.typeName = "cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccountResponse";
MsgCreatePermanentLockedAccountResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgCreateVestingAccount defines a message that enables creating a vesting
 * account.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount
 */
export class MsgCreatePeriodicVestingAccount extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string from_address = 1;
         */
        this.fromAddress = "";
        /**
         * @generated from field: string to_address = 2;
         */
        this.toAddress = "";
        /**
         * start of vesting as unix time (in seconds).
         *
         * @generated from field: int64 start_time = 3;
         */
        this.startTime = protoInt64.zero;
        /**
         * @generated from field: repeated cosmos.vesting.v1beta1.Period vesting_periods = 4;
         */
        this.vestingPeriods = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCreatePeriodicVestingAccount().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCreatePeriodicVestingAccount().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCreatePeriodicVestingAccount().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgCreatePeriodicVestingAccount, a, b);
    }
}
MsgCreatePeriodicVestingAccount.runtime = proto3;
MsgCreatePeriodicVestingAccount.typeName = "cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount";
MsgCreatePeriodicVestingAccount.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "from_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "to_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "start_time", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "vesting_periods", kind: "message", T: Period, repeated: true },
]);
/**
 * MsgCreateVestingAccountResponse defines the Msg/CreatePeriodicVestingAccount
 * response type.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse
 */
export class MsgCreatePeriodicVestingAccountResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCreatePeriodicVestingAccountResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCreatePeriodicVestingAccountResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCreatePeriodicVestingAccountResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgCreatePeriodicVestingAccountResponse, a, b);
    }
}
MsgCreatePeriodicVestingAccountResponse.runtime = proto3;
MsgCreatePeriodicVestingAccountResponse.typeName = "cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccountResponse";
MsgCreatePeriodicVestingAccountResponse.fields = proto3.util.newFieldList(() => []);
//# sourceMappingURL=tx_pb.js.map