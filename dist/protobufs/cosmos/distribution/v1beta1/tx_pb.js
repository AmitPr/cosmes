// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file cosmos/distribution/v1beta1/tx.proto (package cosmos.distribution.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../base/v1beta1/coin_pb.js";
import { Params } from "./distribution_pb.js";
/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 *
 * @generated from message cosmos.distribution.v1beta1.MsgSetWithdrawAddress
 */
export class MsgSetWithdrawAddress extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string delegator_address = 1;
         */
        this.delegatorAddress = "";
        /**
         * @generated from field: string withdraw_address = 2;
         */
        this.withdrawAddress = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSetWithdrawAddress().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSetWithdrawAddress().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSetWithdrawAddress().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgSetWithdrawAddress, a, b);
    }
}
MsgSetWithdrawAddress.runtime = proto3;
MsgSetWithdrawAddress.typeName = "cosmos.distribution.v1beta1.MsgSetWithdrawAddress";
MsgSetWithdrawAddress.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "delegator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "withdraw_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response
 * type.
 *
 * @generated from message cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse
 */
export class MsgSetWithdrawAddressResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSetWithdrawAddressResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSetWithdrawAddressResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSetWithdrawAddressResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgSetWithdrawAddressResponse, a, b);
    }
}
MsgSetWithdrawAddressResponse.runtime = proto3;
MsgSetWithdrawAddressResponse.typeName = "cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse";
MsgSetWithdrawAddressResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 *
 * @generated from message cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward
 */
export class MsgWithdrawDelegatorReward extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string delegator_address = 1;
         */
        this.delegatorAddress = "";
        /**
         * @generated from field: string validator_address = 2;
         */
        this.validatorAddress = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgWithdrawDelegatorReward().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgWithdrawDelegatorReward().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgWithdrawDelegatorReward().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgWithdrawDelegatorReward, a, b);
    }
}
MsgWithdrawDelegatorReward.runtime = proto3;
MsgWithdrawDelegatorReward.typeName = "cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward";
MsgWithdrawDelegatorReward.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "delegator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward
 * response type.
 *
 * @generated from message cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse
 */
export class MsgWithdrawDelegatorRewardResponse extends Message {
    constructor(data) {
        super();
        /**
         * Since: cosmos-sdk 0.46
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 1;
         */
        this.amount = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgWithdrawDelegatorRewardResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgWithdrawDelegatorRewardResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgWithdrawDelegatorRewardResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgWithdrawDelegatorRewardResponse, a, b);
    }
}
MsgWithdrawDelegatorRewardResponse.runtime = proto3;
MsgWithdrawDelegatorRewardResponse.typeName = "cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse";
MsgWithdrawDelegatorRewardResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "amount", kind: "message", T: Coin, repeated: true },
]);
/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 *
 * @generated from message cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission
 */
export class MsgWithdrawValidatorCommission extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string validator_address = 1;
         */
        this.validatorAddress = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgWithdrawValidatorCommission().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgWithdrawValidatorCommission().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgWithdrawValidatorCommission().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgWithdrawValidatorCommission, a, b);
    }
}
MsgWithdrawValidatorCommission.runtime = proto3;
MsgWithdrawValidatorCommission.typeName = "cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission";
MsgWithdrawValidatorCommission.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "validator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgWithdrawValidatorCommissionResponse defines the
 * Msg/WithdrawValidatorCommission response type.
 *
 * @generated from message cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse
 */
export class MsgWithdrawValidatorCommissionResponse extends Message {
    constructor(data) {
        super();
        /**
         * Since: cosmos-sdk 0.46
         *
         * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 1;
         */
        this.amount = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgWithdrawValidatorCommissionResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgWithdrawValidatorCommissionResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgWithdrawValidatorCommissionResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgWithdrawValidatorCommissionResponse, a, b);
    }
}
MsgWithdrawValidatorCommissionResponse.runtime = proto3;
MsgWithdrawValidatorCommissionResponse.typeName = "cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse";
MsgWithdrawValidatorCommissionResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "amount", kind: "message", T: Coin, repeated: true },
]);
/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 *
 * @generated from message cosmos.distribution.v1beta1.MsgFundCommunityPool
 */
export class MsgFundCommunityPool extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 1;
         */
        this.amount = [];
        /**
         * @generated from field: string depositor = 2;
         */
        this.depositor = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgFundCommunityPool().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgFundCommunityPool().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgFundCommunityPool().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgFundCommunityPool, a, b);
    }
}
MsgFundCommunityPool.runtime = proto3;
MsgFundCommunityPool.typeName = "cosmos.distribution.v1beta1.MsgFundCommunityPool";
MsgFundCommunityPool.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "amount", kind: "message", T: Coin, repeated: true },
    { no: 2, name: "depositor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type.
 *
 * @generated from message cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse
 */
export class MsgFundCommunityPoolResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgFundCommunityPoolResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgFundCommunityPoolResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgFundCommunityPoolResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgFundCommunityPoolResponse, a, b);
    }
}
MsgFundCommunityPoolResponse.runtime = proto3;
MsgFundCommunityPoolResponse.typeName = "cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse";
MsgFundCommunityPoolResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.distribution.v1beta1.MsgUpdateParams
 */
export class MsgUpdateParams extends Message {
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
        return new MsgUpdateParams().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateParams().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateParams().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgUpdateParams, a, b);
    }
}
MsgUpdateParams.runtime = proto3;
MsgUpdateParams.typeName = "cosmos.distribution.v1beta1.MsgUpdateParams";
MsgUpdateParams.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "params", kind: "message", T: Params },
]);
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.distribution.v1beta1.MsgUpdateParamsResponse
 */
export class MsgUpdateParamsResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateParamsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateParamsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateParamsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgUpdateParamsResponse, a, b);
    }
}
MsgUpdateParamsResponse.runtime = proto3;
MsgUpdateParamsResponse.typeName = "cosmos.distribution.v1beta1.MsgUpdateParamsResponse";
MsgUpdateParamsResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgCommunityPoolSpend defines a message for sending tokens from the community
 * pool to another account. This message is typically executed via a governance
 * proposal with the governance module being the executing authority.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.distribution.v1beta1.MsgCommunityPoolSpend
 */
export class MsgCommunityPoolSpend extends Message {
    constructor(data) {
        super();
        /**
         * authority is the address that controls the module (defaults to x/gov unless overwritten).
         *
         * @generated from field: string authority = 1;
         */
        this.authority = "";
        /**
         * @generated from field: string recipient = 2;
         */
        this.recipient = "";
        /**
         * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 3;
         */
        this.amount = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCommunityPoolSpend().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCommunityPoolSpend().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCommunityPoolSpend().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgCommunityPoolSpend, a, b);
    }
}
MsgCommunityPoolSpend.runtime = proto3;
MsgCommunityPoolSpend.typeName = "cosmos.distribution.v1beta1.MsgCommunityPoolSpend";
MsgCommunityPoolSpend.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "recipient", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "message", T: Coin, repeated: true },
]);
/**
 * MsgCommunityPoolSpendResponse defines the response to executing a
 * MsgCommunityPoolSpend message.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.distribution.v1beta1.MsgCommunityPoolSpendResponse
 */
export class MsgCommunityPoolSpendResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCommunityPoolSpendResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCommunityPoolSpendResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCommunityPoolSpendResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgCommunityPoolSpendResponse, a, b);
    }
}
MsgCommunityPoolSpendResponse.runtime = proto3;
MsgCommunityPoolSpendResponse.typeName = "cosmos.distribution.v1beta1.MsgCommunityPoolSpendResponse";
MsgCommunityPoolSpendResponse.fields = proto3.util.newFieldList(() => []);
//# sourceMappingURL=tx_pb.js.map