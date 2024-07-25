import { PlainMessage } from "@bufbuild/protobuf";
import { IbcApplicationsTransferV1MsgTransfer as ProtoMsgIbcTransfer } from "../../protobufs/index.js";
import { DeepPrettify } from "../../typeutils/prettify.js";
import { Adapter } from "./Adapter.js";
type Data = DeepPrettify<PlainMessage<ProtoMsgIbcTransfer>>;
export declare class MsgIbcTransfer implements Adapter {
    private readonly data;
    constructor(data: Data);
    toProto(): ProtoMsgIbcTransfer;
    toAmino(): {
        type: string;
        value: {
            source_port: string;
            source_channel: string;
            token: {
                denom: string;
                amount: string;
            } | undefined;
            sender: string;
            receiver: string;
            /**
             * Protobuf type is optional, but Amino type is non-optional.
             *
             * @see https://github.com/cosmos/cosmjs/blob/358260bff71c9d3e7ad6644fcf64dc00325cdfb9/packages/stargate/src/modules/ibc/aminomessages.ts#L16-L42
             */
            timeout_height: {
                revision_number: string;
                revision_height: string;
            } | {
                revision_number?: undefined;
                revision_height?: undefined;
            };
            timeout_timestamp: string;
            memo: string;
        };
    };
}
export {};
//# sourceMappingURL=MsgIbcTransfer.d.ts.map