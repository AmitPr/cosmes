import { PlainMessage } from "@bufbuild/protobuf";
import { CosmwasmWasmV1MsgMigrateContract as ProtoMsgMigrateContract } from "cosmes/protobufs";
import { DeepPrettify, Prettify } from "../../typeutils/prettify";
import { Adapter } from "./Adapter";
type Data<T> = Prettify<DeepPrettify<Omit<PlainMessage<ProtoMsgMigrateContract>, "msg">> & {
    msg: T;
}>;
export declare class MsgMigrateContract<T> implements Adapter {
    private readonly data;
    constructor(data: Data<T>);
    toProto(): ProtoMsgMigrateContract;
    toAmino(): {
        type: string;
        value: {
            sender: string;
            code_id: bigint;
            contract: string;
            msg: T;
        };
    };
}
export {};
//# sourceMappingURL=MsgMigrateContract.d.ts.map