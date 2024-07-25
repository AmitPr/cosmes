import { base64 } from "cosmes/codec";
import { CosmwasmWasmV1MsgStoreCode as ProtoMsgStoreCode } from "cosmes/protobufs";
export class MsgStoreCode {
    constructor(data) {
        this.data = data;
    }
    toProto() {
        return new ProtoMsgStoreCode({
            ...this.data,
        });
    }
    toAmino() {
        return {
            type: "wasm/MsgStoreCode",
            value: {
                sender: this.data.sender,
                wasm_byte_code: base64.encode(this.data.wasmByteCode),
                instantiate_permission: this.data.instantiatePermission,
            }
        };
    }
}
//# sourceMappingURL=MsgStoreCode.js.map