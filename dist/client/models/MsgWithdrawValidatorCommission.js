import { CosmosDistributionV1beta1MsgWithdrawValidatorCommission as ProtoMsgWithdrawValidatorCommission } from "../../protobufs/index.js";
export class MsgWithdrawValidatorCommission {
    constructor(data) {
        this.data = data;
    }
    toProto() {
        return new ProtoMsgWithdrawValidatorCommission(this.data);
    }
    toAmino() {
        return {
            type: "cosmos-sdk/MsgWithdrawValidatorCommission",
            value: {
                validator_address: this.data.validatorAddress,
            },
        };
    }
}
//# sourceMappingURL=MsgWithdrawValidatorCommission.js.map