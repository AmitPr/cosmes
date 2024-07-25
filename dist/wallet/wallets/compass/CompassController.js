import { Secp256k1PubKey } from "cosmes/client";
import { WalletName } from "../../constants/WalletName";
import { WalletType } from "../../constants/WalletType";
import { onWindowEvent } from "../../utils/window";
import { WalletController } from "../WalletController";
import { WalletError } from "../WalletError";
import { CompassExtension } from "./CompassExtension";
export class CompassController extends WalletController {
    constructor() {
        super(WalletName.COMPASS);
        this.registerAccountChangeHandlers();
    }
    async isInstalled(type) {
        return type === WalletType.EXTENSION ? "compass" in window : false;
    }
    async connectWalletConnect(_chains) {
        // Compass does not support WC yet
        throw new Error("WalletConnect not supported");
    }
    async connectExtension(chains) {
        const wallets = new Map();
        const ext = window.compass;
        if (!ext) {
            throw new Error("Compass extension is not installed");
        }
        await WalletError.wrap(ext.enable(chains.map(({ chainId }) => chainId)));
        for (const { chainId, gasPrice } of Object.values(chains)) {
            const { bech32Address, pubKey, isNanoLedger } = await WalletError.wrap(ext.getKey(chainId));
            const key = new Secp256k1PubKey({
                chainId,
                key: pubKey,
            });
            wallets.set(chainId, new CompassExtension(this.id, ext, chainId, key, bech32Address, gasPrice, isNanoLedger));
        }
        return wallets;
    }
    registerAccountChangeHandlers() {
        /**
         * ! IMPORTANT !
         *
         * Since Leap also uses the same event key, this causes issues when a user
         * has both leap and compass wallets connected simultaneously. For example,
         * a change in Leap's keystore will trigger Compass to emit this event as
         * well, leading to a race condition when `changeAccount` is called.
         *
         * The Compass team has been notified to possibly change this event emitted
         * to `compass_keystorechange` instead.
         */
        onWindowEvent("leap_keystorechange", () => this.changeAccount(WalletType.EXTENSION));
    }
}
//# sourceMappingURL=CompassController.js.map