import { CosmosStakingV1beta1MsgUndelegate as ProtoMsgUndelegate } from "../../protobufs/index.js";
export class MsgUndelegate {
    constructor(data) {
        this.data = data;
    }
    toProto() {
        return new ProtoMsgUndelegate(this.data);
    }
    toAmino() {
        return {
            type: "cosmos-sdk/MsgUndelegate",
            value: {
                delegator_address: this.data.delegatorAddress,
                validator_address: this.data.validatorAddress,
                amount: this.data.amount,
            },
        };
    }
}
//# sourceMappingURL=MsgUndelegate.js.map