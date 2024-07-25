import { PlainMessage } from "@bufbuild/protobuf";
import { RpcClient, Secp256k1PubKey } from "cosmes/client";
import { CosmosBaseV1beta1Coin as Coin, CosmosTxV1beta1Fee as Fee } from "cosmes/protobufs";
import { WalletName } from "cosmes/wallet";
import { WalletConnectV2 } from "../../walletconnect/WalletConnectV2";
import { ConnectedWallet, SignArbitraryResponse, UnsignedTx } from "../ConnectedWallet";
export declare class KeplrWalletConnectV2 extends ConnectedWallet {
    private readonly wc;
    private readonly useAmino;
    constructor(walletName: WalletName, wc: WalletConnectV2, chainId: string, pubKey: Secp256k1PubKey, address: string, gasPrice: PlainMessage<Coin>, useAmino: boolean);
    signArbitrary(_data: string): Promise<SignArbitraryResponse>;
    signAndBroadcastTx(rpc: RpcClient, { msgs, memo, timeoutHeight }: UnsignedTx, fee: Fee, accountNumber: bigint, sequence: bigint): Promise<string>;
}
//# sourceMappingURL=KeplrWalletConnectV2.d.ts.map