import { PlainMessage } from "@bufbuild/protobuf";
import { CosmosStakingV1beta1MsgUndelegate as ProtoMsgUndelegate } from "cosmes/protobufs";
import { DeepPrettify } from "../../typeutils/prettify";
import { Adapter } from "./Adapter";
type Data = DeepPrettify<PlainMessage<ProtoMsgUndelegate>>;
export declare class MsgUndelegate implements Adapter {
    private readonly data;
    constructor(data: Data);
    toProto(): ProtoMsgUndelegate;
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
//# sourceMappingURL=MsgUndelegate.d.ts.map