import { Secp256k1PubKey } from "cosmes/client";
import { WalletName } from "../../constants/WalletName";
import { WalletType } from "../../constants/WalletType";
import { onWindowEvent } from "../../utils/window";
import { WalletController } from "../WalletController";
import { WalletError } from "../WalletError";
import { XDefiExtension } from "./XDefiExtension";
export class XDefiController extends WalletController {
    constructor() {
        super(WalletName.XDEFI);
        this.registerAccountChangeHandlers();
    }
    async isInstalled(type) {
        return type === WalletType.EXTENSION ? "xfi" in window : false;
    }
    async connectWalletConnect(_) {
        throw new Error("WalletConnect is not supported by XDefi");
    }
    async connectExtension(chains) {
        const wallets = new Map();
        const ext = window.keplr;
        if (!window.xfi || !ext) {
            throw new Error("XDefi extension is not installed");
        }
        await WalletError.wrap(ext.enable(chains.map(({ chainId }) => chainId)));
        for (const { chainId, gasPrice } of Object.values(chains)) {
            const { bech32Address, pubKey, isNanoLedger } = await WalletError.wrap(ext.getKey(chainId));
            const key = new Secp256k1PubKey({
                chainId,
                key: pubKey,
            });
            wallets.set(chainId, new XDefiExtension(this.id, ext, chainId, key, bech32Address, gasPrice, isNanoLedger));
        }
        return wallets;
    }
    registerAccountChangeHandlers() {
        onWindowEvent("keplr_keystorechange", () => this.changeAccount(WalletType.EXTENSION));
    }
}
//# sourceMappingURL=XDefiController.js.map