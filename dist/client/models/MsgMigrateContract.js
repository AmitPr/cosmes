import { utf8 } from "cosmes/codec";
import { CosmwasmWasmV1MsgMigrateContract as ProtoMsgMigrateContract } from "cosmes/protobufs";
export class MsgMigrateContract {
    constructor(data) {
        this.data = data;
    }
    toProto() {
        return new ProtoMsgMigrateContract({
            ...this.data,
            msg: utf8.decode(JSON.stringify(this.data.msg)),
        });
    }
    toAmino() {
        return {
            type: "wasm/MsgMigrateContract",
            value: {
                sender: this.data.sender,
                code_id: this.data.codeId,
                contract: this.data.contract,
                msg: this.data.msg,
            }
        };
    }
}
//# sourceMappingURL=MsgMigrateContract.js.map