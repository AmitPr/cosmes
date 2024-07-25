import type { PlainMessage } from "@bufbuild/protobuf";
import type { CosmosBaseV1beta1Coin as Coin } from "../../protobufs/index.js";
import type { WalletName } from "../constants/WalletName.js";
import { WalletType } from "../constants/WalletType.js";
import { WalletConnectV2 } from "../walletconnect/WalletConnectV2.js";
import type { ConnectedWallet } from "./ConnectedWallet.js";
/**
 * Represents a chain that the wallet can connect to.
 */
export type ChainInfo<T extends string> = {
    /**
     * The unique identifier for the chain (eg. `phoenix-1`).
     */
    chainId: T;
    /**
     * The current gas price of the chain.
     */
    gasPrice: PlainMessage<Coin>;
};
export type EventCallback = (wallets: ConnectedWallet[]) => unknown;
/**
 * Controls initial connection to the wallet, and instantiates the
 * various `ConnectedWallet` instances.
 */
export declare abstract class WalletController {
    /** The identifier of this wallet. */
    readonly id: WalletName;
    /** Map of chain ID to connected wallets. */
    readonly connectedWallets: Map<string, ConnectedWallet>;
    private readonly onDisconnectCbs;
    protected readonly onAccountChangeCbs: Set<EventCallback>;
    private isWcOnDisconnectRegistered;
    constructor(id: WalletName);
    /**
     * Returns `true` iff the wallet is installed.
     */
    abstract isInstalled(type: WalletType): Promise<boolean>;
    /**
     * Connects to the wallet and returns a map of `ConnectedWallet` instances.
     * The keys of the map are the chain IDs.
     */
    connect<T extends string>(type: WalletType, chains: ChainInfo<T>[]): Promise<Map<T, ConnectedWallet>>;
    /**
     * Disconnects the wallet connected to the given `chainIds`.
     */
    disconnect(chainIds: string[]): void;
    /**
     * Should be called when any account changes are detected. This will disconnect
     * from all chains that were connected via the given `walletType`, and emit the
     * `onAccountChange` event.
     */
    protected changeAccount(walletType: WalletType): void;
    /**
     * Registers a callback that is called when the wallet is disconnected.
     * Returns an `unsubscribe` function that should be called after the
     * callback is no longer needed.
     *
     * ```ts
     * const unsubscribe = walletController.onDisconnect((wallets) => {
     *   // do something with the wallets that were disconnected
     *   console.log(wallets);
     *   // unsubscribe from this callback (if necessary)
     *   unsubsribe();
     * });
     * ```
     */
    onDisconnect(cb: EventCallback): () => void;
    /**
     * Registers a callback that is called when the wallet's account is changed after
     * the initial connection. When the account changes, the `onDisconnect` event
     * will also be fired before this `onAccountChange` event. Returns an `unsubscribe`
     * function that should be called after the callback is no longer needed.
     *
     * ```ts
     * const unsubscribe = walletController.onAccountChange((wallets) => {
     *   // do something with the wallets that were affected
     *   console.log(wallets);
     *   // unsubscribe from this callback (if necessary)
     *   unsubsribe();
     * });
     * ```
     */
    onAccountChange(cb: EventCallback): () => void;
    protected abstract connectExtension<T extends string>(chains: ChainInfo<T>[]): Promise<Map<T, ConnectedWallet>>;
    protected abstract connectWalletConnect<T extends string>(chains: ChainInfo<T>[]): Promise<{
        wallets: Map<T, ConnectedWallet>;
        wc: WalletConnectV2;
    }>;
    protected abstract registerAccountChangeHandlers(): void;
}
//# sourceMappingURL=WalletController.d.ts.map