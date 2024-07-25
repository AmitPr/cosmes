import { PlainMessage } from "@bufbuild/protobuf";
import { CosmwasmWasmV1MsgInstantiateContract as ProtoMsgInstantiateContract } from "cosmes/protobufs";
import { DeepPrettify, Prettify } from "../../typeutils/prettify";
import { Adapter } from "./Adapter";
type Data<T> = Prettify<DeepPrettify<Omit<PlainMessage<ProtoMsgInstantiateContract>, "msg">> & {
    msg: T;
}>;
export declare class MsgInstantiateContract<T> implements Adapter {
    private readonly data;
    constructor(data: Data<T>);
    toProto(): ProtoMsgInstantiateContract;
    toAmino(): {
        type: string;
        value: {
            sender: string;
            admin: string;
            code_id: string;
            label: string;
            msg: T;
            funds: {
                denom: string;
                amount: string;
            }[];
        };
    };
}
export {};
//# sourceMappingURL=MsgInstantiateContract.d.ts.map