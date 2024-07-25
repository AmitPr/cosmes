import { CosmosBankV1beta1MsgSend as ProtoMsgSend } from "../../protobufs/index.js";
export class MsgSend {
    constructor(data) {
        this.data = data;
    }
    toProto() {
        return new ProtoMsgSend(this.data);
    }
    toAmino() {
        return {
            type: "cosmos-sdk/MsgSend",
            value: {
                from_address: this.data.fromAddress,
                to_address: this.data.toAddress,
                amount: this.data.amount,
            },
        };
    }
}
//# sourceMappingURL=MsgSend.js.map