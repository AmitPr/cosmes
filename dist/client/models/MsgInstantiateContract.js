import { utf8 } from "cosmes/codec";
import { CosmwasmWasmV1MsgInstantiateContract as ProtoMsgInstantiateContract } from "cosmes/protobufs";
export class MsgInstantiateContract {
    constructor(data) {
        this.data = data;
    }
    toProto() {
        return new ProtoMsgInstantiateContract({
            ...this.data,
            msg: utf8.decode(JSON.stringify(this.data.msg)),
        });
    }
    toAmino() {
        return {
            type: "wasm/MsgInstantiateContract",
            value: {
                sender: this.data.sender,
                admin: this.data.admin,
                code_id: this.data.codeId.toString(),
                label: this.data.label,
                msg: this.data.msg,
                funds: this.data.funds,
            },
        };
    }
}
//# sourceMappingURL=MsgInstantiateContract.js.map