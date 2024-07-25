import { Secp256k1PubKey } from "../../../client/index.js";
import { base64 } from "../../../codec/index.js";
import { WalletName } from "../../constants/WalletName.js";
import { WalletType } from "../../constants/WalletType.js";
import { onWindowEvent } from "../../utils/window.js";
import { WalletConnectV2 } from "../../walletconnect/WalletConnectV2.js";
import { WalletController } from "../WalletController.js";
import { WalletError } from "../WalletError.js";
import { CosmostationExtension } from "./CosmostationExtension.js";
import { CosmostationWalletConnectV2 } from "./CosmostationWalletConnectV2.js";
export class CosmostationController extends WalletController {
    constructor(wcProjectId) {
        super(WalletName.COSMOSTATION);
        this.wc = new WalletConnectV2(wcProjectId, {
            // https://github.com/cosmostation/cosmostation-wc-modal/blob/main/src/modal.tsx#L22-L34
            name: "Cosmostation",
            android: "intent://wc#Intent;package=wannabit.io.cosmostaion;scheme=cosmostation;end;",
            ios: "cosmostation://wc",
        });
        this.registerAccountChangeHandlers();
    }
    async isInstalled(type) {
        return type === WalletType.EXTENSION ? "cosmostation" in window : true;
    }
    async connectWalletConnect(chains) {
        const wallets = new Map();
        await WalletError.wrap(this.wc.connect(chains.map(({ chainId }) => chainId)));
        for (let i = 0; i < chains.length; i++) {
            const { chainId, gasPrice } = chains[i];
            const { pubkey, address } = await WalletError.wrap(this.wc.getAccount(chainId));
            const key = new Secp256k1PubKey({
                chainId,
                key: base64.decode(pubkey),
            });
            wallets.set(chainId, new CosmostationWalletConnectV2(this.id, this.wc, chainId, key, address, gasPrice, true // TODO: use sign mode direct when supported
            ));
        }
        return { wallets, wc: this.wc };
    }
    async connectExtension(chains) {
        const wallets = new Map();
        const ext = window.cosmostation?.providers.keplr;
        if (!ext) {
            throw new Error("Cosmostation extension is not installed");
        }
        await WalletError.wrap(ext.enable(chains.map(({ chainId }) => chainId)));
        for (const { chainId, gasPrice } of Object.values(chains)) {
            const { bech32Address, pubKey, isNanoLedger } = await WalletError.wrap(ext.getKey(chainId));
            const key = new Secp256k1PubKey({
                chainId,
                key: pubKey,
            });
            wallets.set(chainId, new CosmostationExtension(this.id, ext, chainId, key, bech32Address, gasPrice, isNanoLedger));
        }
        return wallets;
    }
    registerAccountChangeHandlers() {
        onWindowEvent("cosmostation_keystorechange", () => this.changeAccount(WalletType.EXTENSION));
        this.wc.onAccountChange(() => this.changeAccount(WalletType.WALLETCONNECT));
    }
}
//# sourceMappingURL=CosmostationController.js.map