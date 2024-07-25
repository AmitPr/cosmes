import { CosmosDistributionV1beta1MsgWithdrawDelegatorReward as ProtoMsgWithdrawDelegatorRewards } from "../../protobufs/index.js";
export class MsgWithdrawDelegatorRewards {
    constructor(data, isLegacy = false) {
        this.data = data;
        this.isLegacy = isLegacy;
    }
    toProto() {
        return new ProtoMsgWithdrawDelegatorRewards(this.data);
    }
    toAmino() {
        return {
            type: this.isLegacy ? "distribution/MsgWithdrawDelegationReward" : "cosmos-sdk/MsgWithdrawDelegationReward",
            value: {
                validator_address: this.data.validatorAddress,
                delegator_address: this.data.delegatorAddress,
            },
        };
    }
}
//# sourceMappingURL=MsgWithdrawDelegatorRewards.js.map