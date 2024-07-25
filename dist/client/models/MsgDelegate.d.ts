import { PlainMessage } from "@bufbuild/protobuf";
import { CosmosStakingV1beta1MsgDelegate as ProtoMsgDelegate } from "../../protobufs/index.js";
import { DeepPrettify } from "../../typeutils/prettify.js";
import { Adapter } from "./Adapter.js";
type Data = DeepPrettify<PlainMessage<ProtoMsgDelegate>>;
export declare class MsgDelegate implements Adapter {
    private readonly data;
    constructor(data: Data);
    toProto(): ProtoMsgDelegate;
    toAmino(): {
        type: string;
        value: {
            delegator_address: string;
            validator_address: string;
            amount: {
                denom: string;
                amount: string;
            } | undefined;
        };
    };
}
export {};
//# sourceMappingURL=MsgDelegate.d.ts.map