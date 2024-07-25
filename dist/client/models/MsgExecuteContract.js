import { utf8 } from "../../codec/index.js";
import { CosmwasmWasmV1MsgExecuteContract as ProtoMsgExecuteContract } from "../../protobufs/index.js";
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