import { PlainMessage } from "@bufbuild/protobuf";
import { CosmosStakingV1beta1MsgBeginRedelegate as ProtoMsgBeginRedelegate } from "../../protobufs/index.js";
import { DeepPrettify } from "../../typeutils/prettify.js";
import { Adapter } from "./Adapter.js";
type Data = DeepPrettify<PlainMessage<ProtoMsgBeginRedelegate>>;
export declare class MsgBeginRedelegate implements Adapter {
    private readonly data;
    constructor(data: Data);
    toProto(): ProtoMsgBeginRedelegate;
    toAmino(): {
        type: string;
        value: {
            delegator_address: string;
            validator_src_address: string;
            validator_dst_address: string;
            amount: {
                denom: string;
                amount: string;
            } | undefined;
        };
    };
}
export {};
//# sourceMappingURL=MsgBeginRedelegate.d.ts.map