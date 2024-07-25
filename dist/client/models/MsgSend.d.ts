import { PlainMessage } from "@bufbuild/protobuf";
import { CosmosBankV1beta1MsgSend as ProtoMsgSend } from "cosmes/protobufs";
import { DeepPrettify } from "../../typeutils/prettify";
import { Adapter } from "./Adapter";
type Data = DeepPrettify<PlainMessage<ProtoMsgSend>>;
export declare class MsgSend implements Adapter {
    private readonly data;
    constructor(data: Data);
    toProto(): ProtoMsgSend;
    toAmino(): {
        type: string;
        value: {
            from_address: string;
            to_address: string;
            amount: {
                denom: string;
                amount: string;
            }[];
        };
    };
}
export {};
//# sourceMappingURL=MsgSend.d.ts.map