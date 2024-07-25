import { PlainMessage } from "@bufbuild/protobuf";
import { CosmosDistributionV1beta1MsgWithdrawValidatorCommission as ProtoMsgWithdrawValidatorCommission } from "../../protobufs/index.js";
import { DeepPrettify } from "../../typeutils/prettify.js";
import { Adapter } from "./Adapter.js";
type Data = DeepPrettify<PlainMessage<ProtoMsgWithdrawValidatorCommission>>;
export declare class MsgWithdrawValidatorCommission implements Adapter {
    private readonly data;
    constructor(data: Data);
    toProto(): ProtoMsgWithdrawValidatorCommission;
    toAmino(): {
        type: string;
        value: {
            validator_address: string;
        };
    };
}
export {};
//# sourceMappingURL=MsgWithdrawValidatorCommission.d.ts.map