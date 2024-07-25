import { RpcClient } from "../../../client/index.js";
import { CosmosTxV1beta1Fee as Fee } from "../../../protobufs/index.js";
import { Prettify } from "../../../typeutils/prettify.js";
import { ConnectedWallet, SignArbitraryResponse, UnsignedTx } from "../ConnectedWallet.js";
import { ChainInfo } from "../WalletController.js";
export type ConnectMnemonicWalletOptions = Prettify<{
    /**
     * Also known as the 12-24 words seed phrase. **Warning: keep this safe!**
     */
    mnemonic: string;
    /**
     * The address prefix for the chain (eg. "osmo").
     */
    bech32Prefix: string;
    /**
     * Coin type number for HD derivation (default: `118`). For Terra chains, change
     * this to `330`.
     */
    coinType?: number | undefined;
    /**
     * Address index number for HD derivation (default: `0`).
     */
    index?: number | undefined;
} & ChainInfo<string>>;
/**
 * This wallet accepts a mnemonic (aka seed phrase) and is able to directly sign
 * and broadcast transactions to the chain without relying on an external wallet
 * like Keplr or Station. Use this if you want to programmatically broadcast
 * transactions. Unlike the other wallets, there is no Controller class and this
 * object must be instantiated directly.
 *
 * ```ts
 * // Example usage for Osmosis chain
 * const wallet = new MnemonicWallet({
 *   mnemonic: "REPLACE WITH 12-24 WORDS SEED PHRASE", // TODO
 *   bech32Prefix: "osmo",
 *   chainId: "osmosis-1",
 *   rpc: "https://rpc.osmosis.zone",
 *   gasPrice: {
 *     amount: "0.0025",
 *     denom: "uosmo",
 *   },
 *   coinType: 118, // optional (default: 118)
 *   index: 0, // optional (default: 0)
 * });
 * console.log("Address:", wallet.address); // prints the bech32 address
 *
 * // Sign an arbitrary message
 * const { signature } = await wallet.signArbitrary("Hello from CosmES!");
 * console.log("Signature:", signature);
 *
 * // Sign and broadcast a tx
 * const res = await wallet.broadcastTxSync( ... ); // TODO
 * console.log("Tx result:", res);
 * ```
 */
export declare class MnemonicWallet extends ConnectedWallet {
    readonly publicKey: string;
    readonly privateKey: Uint8Array;
    readonly keyType: "secp256k1" | "ethsecp256k1";
    constructor({ mnemonic, bech32Prefix, coinType, index, chainId, gasPrice, }: ConnectMnemonicWalletOptions);
    signArbitrary(data: string): Promise<SignArbitraryResponse>;
    signAndBroadcastTx(rpc: RpcClient, { msgs, memo, timeoutHeight }: UnsignedTx, fee: Fee, accountNumber: bigint, sequence: bigint): Promise<string>;
}
//# sourceMappingURL=MnemonicWallet.d.ts.map