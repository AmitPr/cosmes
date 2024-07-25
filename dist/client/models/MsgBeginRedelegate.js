import { CosmosStakingV1beta1MsgBeginRedelegate as ProtoMsgBeginRedelegate } from "../../protobufs/index.js";
export class MsgBeginRedelegate {
    constructor(data) {
        this.data = data;
    }
    toProto() {
        return new ProtoMsgBeginRedelegate(this.data);
    }
    toAmino() {
        return {
            type: "cosmos-sdk/MsgBeginRedelegate",
            value: {
                delegator_address: this.data.delegatorAddress,
                validator_src_address: this.data.validatorSrcAddress,
                validator_dst_address: this.data.validatorDstAddress,
                amount: this.data.amount,
            },
        };
    }
}
//# sourceMappingURL=MsgBeginRedelegate.js.map