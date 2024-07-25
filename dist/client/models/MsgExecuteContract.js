import { utf8 } from "cosmes/codec";
import { CosmwasmWasmV1MsgExecuteContract as ProtoMsgExecuteContract } from "cosmes/protobufs";
export class MsgExecuteContract {
    constructor(data) {
        this.data = data;
    }
    toProto() {
        return new ProtoMsgExecuteContract({
            ...this.data,
            msg: utf8.decode(JSON.stringify(this.data.msg)),
        });
    }
    toAmino() {
        return {
            type: "wasm/MsgExecuteContract",
            value: this.data,
        };
    }
}
//# sourceMappingURL=MsgExecuteContract.js.map