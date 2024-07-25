import { PlainMessage } from "@bufbuild/protobuf";
import { RpcClient, Secp256k1PubKey } from "cosmes/client";
import { CosmosBaseV1beta1Coin as Coin, CosmosTxV1beta1Fee as Fee } from "cosmes/protobufs";
import type { Keplr } from "cosmes/registry";
import { WalletName } from "../../constants/WalletName";
import { ConnectedWallet, SignArbitraryResponse, UnsignedTx } from "../ConnectedWallet";
export declare class KeplrExtension extends ConnectedWallet {
    private readonly ext;
    private readonly useAmino;
    constructor(walletName: WalletName, ext: Keplr, chainId: string, pubKey: Secp256k1PubKey, address: string, gasPrice: PlainMessage<Coin>, useAmino: boolean);
    signArbitrary(data: string): Promise<SignArbitraryResponse>;
    protected signAndBroadcastTx(rpc: RpcClient, { msgs, memo, timeoutHeight }: UnsignedTx, fee: Fee, accountNumber: bigint, sequence: bigint): Promise<string>;
}
//# sourceMappingURL=KeplrExtension.d.ts.map