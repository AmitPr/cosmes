import { CosmosStakingV1beta1MsgDelegate as ProtoMsgDelegate } from "../../protobufs/index.js";
export class MsgDelegate {
    constructor(data) {
        this.data = data;
    }
    toProto() {
        return new ProtoMsgDelegate(this.data);
    }
    toAmino() {
        return {
            type: "cosmos-sdk/MsgDelegate",
            value: {
                delegator_address: this.data.delegatorAddress,
                validator_address: this.data.validatorAddress,
                amount: this.data.amount,
            },
        };
    }
}
//# sourceMappingURL=MsgDelegate.js.map