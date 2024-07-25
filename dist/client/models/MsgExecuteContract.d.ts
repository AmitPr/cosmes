import { PlainMessage } from "@bufbuild/protobuf";
import { CosmwasmWasmV1MsgExecuteContract as ProtoMsgExecuteContract } from "cosmes/protobufs";
import { DeepPrettify, Prettify } from "../../typeutils/prettify";
import { Adapter } from "./Adapter";
type Data<T> = Prettify<DeepPrettify<Omit<PlainMessage<ProtoMsgExecuteContract>, "msg">> & {
    msg: T;
}>;
export declare class MsgExecuteContract<T> implements Adapter {
    private readonly data;
    constructor(data: Data<T>);
    toProto(): ProtoMsgExecuteContract;
    toAmino(): {
        type: string;
        value: {
            sender: string;
            contract: string;
            funds: {
                denom: string;
                amount: string;
            }[];
            msg: T;
        };
    };
}
export {};
//# sourceMappingURL=MsgExecuteContract.d.ts.map