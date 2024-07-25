import { Secp256k1PubKey } from "cosmes/client";
import { WalletName } from "../../constants/WalletName";
import { WalletType } from "../../constants/WalletType";
import { onWindowEvent } from "../../utils/window";
import { WalletController } from "../WalletController";
import { WalletError } from "../WalletError";
import { StationExtension } from "./StationExtension";
const TERRA_CLASSIC_MAINNET_CHAIN_ID = "columbus-5";
const TERRA_MAINNET_CHAIN_ID = "phoenix-1";
const TERRA_TESTNET_CHAIN_ID = "pisco-1";
const COIN_TYPE_330_CHAINS = [
    TERRA_CLASSIC_MAINNET_CHAIN_ID,
    TERRA_MAINNET_CHAIN_ID,
    TERRA_TESTNET_CHAIN_ID,
];
export class StationController extends WalletController {
    // private readonly wc: WalletConnectV1;
    constructor() {
        super(WalletName.STATION);
        this.registerAccountChangeHandlers();
    }
    async isInstalled(type) {
        return type === WalletType.EXTENSION ? "station" in window : true;
    }
    async connectWalletConnect(_) {
        // Removing legacy WalletConnectV1 support does not support WC yet
        throw new Error("WalletConnect not supported");
    }
    async connectExtension(chains) {
        const wallets = new Map();
        const ext = window.station?.keplr;
        if (!ext) {
            throw new Error("Station extension is not installed");
        }
        // This method never throws on Station
        await WalletError.wrap(ext.enable(chains.map(({ chainId }) => chainId)));
        for (const { chainId, gasPrice } of Object.values(chains)) {
            try {
                const { bech32Address, pubKey, isNanoLedger } = await WalletError.wrap(ext.getKey(chainId));
                const key = new Secp256k1PubKey({
                    key: pubKey,
                    chainId,
                });
                wallets.set(chainId, new StationExtension(this.id, ext, chainId, key, bech32Address, gasPrice, isNanoLedger));
            }
            catch (err) {
                if (err instanceof Error) {
                    // The `getKey` method throws if the chain is not supported
                    console.warn(`Failed to get public key for ${chainId}`, err);
                    continue;
                }
                throw err; // Rethrow other stuff
            }
        }
        return wallets;
    }
    registerAccountChangeHandlers() {
        onWindowEvent("station_wallet_change", () => this.changeAccount(WalletType.EXTENSION));
        onWindowEvent("station_network_change", () => this.changeAccount(WalletType.EXTENSION));
        // Station's WalletConnect v1 doesn't support account change events
    }
}
//# sourceMappingURL=StationController.js.map