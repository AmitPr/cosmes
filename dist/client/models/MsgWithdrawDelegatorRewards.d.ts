import { PlainMessage } from "@bufbuild/protobuf";
import { CosmosDistributionV1beta1MsgWithdrawDelegatorReward as ProtoMsgWithdrawDelegatorRewards } from "cosmes/protobufs";
import { DeepPrettify } from "../../typeutils/prettify";
import { Adapter } from "./Adapter";
type Data = DeepPrettify<PlainMessage<ProtoMsgWithdrawDelegatorRewards>>;
export declare class MsgWithdrawDelegatorRewards implements Adapter {
    private readonly data;
    private readonly isLegacy;
    constructor(data: Data, isLegacy?: boolean);
    toProto(): ProtoMsgWithdrawDelegatorRewards;
    toAmino(): {
        type: string;
        value: {
            validator_address: string;
            delegator_address: string;
        };
    };
}
export {};
//# sourceMappingURL=MsgWithdrawDelegatorRewards.d.ts.map