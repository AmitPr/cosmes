import { PlainMessage } from "@bufbuild/protobuf";
import { CosmwasmWasmV1MsgStoreCode as ProtoMsgStoreCode } from "cosmes/protobufs";
import { DeepPrettify } from "../../typeutils/prettify";
import { Adapter } from "./Adapter";
type Data = DeepPrettify<PlainMessage<ProtoMsgStoreCode>>;
export declare class MsgStoreCode implements Adapter {
    private readonly data;
    constructor(data: Data);
    toProto(): ProtoMsgStoreCode;
    toAmino(): {
        type: string;
        value: {
            sender: string;
            wasm_byte_code: string;
            instantiate_permission: {
                permission: import("cosmes/protobufs").CosmwasmWasmV1AccessType;
                addresses: string[];
            } | undefined;
        };
    };
}
export {};
//# sourceMappingURL=MsgStoreCode.d.ts.map