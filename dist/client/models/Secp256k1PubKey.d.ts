import { PlainMessage } from "@bufbuild/protobuf";
import { CosmosCryptoSecp256k1PubKey as ProtoSecp256k1PubKey } from "cosmes/protobufs";
import { DeepPrettify } from "../../typeutils/prettify";
import { Adapter } from "./Adapter";
type Data = DeepPrettify<{
    chainId?: string | undefined;
} & PlainMessage<ProtoSecp256k1PubKey>>;
export declare class Secp256k1PubKey implements Adapter {
    private readonly data;
    private readonly type;
    constructor(data: Data);
    toProto(): ProtoSecp256k1PubKey;
    toAmino(): {
        type: string;
        value: {
            key: string;
        };
    };
}
export {};
//# sourceMappingURL=Secp256k1PubKey.d.ts.map