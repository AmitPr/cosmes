// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file batch/tx.proto (package batch, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../cosmos/base/v1beta1/coin_pb.js";
/**
 * MsgWithdrawAllDelegatorRewards represents delegation withdrawal to a delegator
 * from all staked validators.
 *
 * @generated from message batch.MsgWithdrawAllDelegatorRewards
 */
export class MsgWithdrawAllDelegatorRewards extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string delegator_address = 1;
         */
        this.delegatorAddress = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgWithdrawAllDelegatorRewards().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgWithdrawAllDelegatorRewards().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgWithdrawAllDelegatorRewards().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgWithdrawAllDelegatorRewards, a, b);
    }
}
MsgWithdrawAllDelegatorRewards.runtime = proto3;
MsgWithdrawAllDelegatorRewards.typeName = "batch.MsgWithdrawAllDelegatorRewards";
MsgWithdrawAllDelegatorRewards.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "delegator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgWithdrawAllDelegatorRewardsResponse defines the Msg/WithdrawAllDelegatorRewards response type.
 *
 * @generated from message batch.MsgWithdrawAllDelegatorRewardsResponse
 */
export class MsgWithdrawAllDelegatorRewardsResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 1;
         */
        this.amount = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgWithdrawAllDelegatorRewardsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgWithdrawAllDelegatorRewardsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgWithdrawAllDelegatorRewardsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgWithdrawAllDelegatorRewardsResponse, a, b);
    }
}
MsgWithdrawAllDelegatorRewardsResponse.runtime = proto3;
MsgWithdrawAllDelegatorRewardsResponse.typeName = "batch.MsgWithdrawAllDelegatorRewardsResponse";
MsgWithdrawAllDelegatorRewardsResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "amount", kind: "message", T: Coin, repeated: true },
]);
/**
 * @generated from message batch.MsgBatchResetDelegation
 */
export class MsgBatchResetDelegation extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string delegator_address = 1;
         */
        this.delegatorAddress = "";
        /**
         * @generated from field: repeated string validators = 2;
         */
        this.validators = [];
        /**
         * @generated from field: repeated string amounts = 3;
         */
        this.amounts = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgBatchResetDelegation().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgBatchResetDelegation().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgBatchResetDelegation().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgBatchResetDelegation, a, b);
    }
}
MsgBatchResetDelegation.runtime = proto3;
MsgBatchResetDelegation.typeName = "batch.MsgBatchResetDelegation";
MsgBatchResetDelegation.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "delegator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "validators", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "amounts", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
/**
 * @generated from message batch.MsgBatchResetDelegationResponse
 */
export class MsgBatchResetDelegationResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgBatchResetDelegationResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgBatchResetDelegationResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgBatchResetDelegationResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgBatchResetDelegationResponse, a, b);
    }
}
MsgBatchResetDelegationResponse.runtime = proto3;
MsgBatchResetDelegationResponse.typeName = "batch.MsgBatchResetDelegationResponse";
MsgBatchResetDelegationResponse.fields = proto3.util.newFieldList(() => []);
//# sourceMappingURL=tx_pb.js.map