import { Secp256k1PubKey } from "../../../client/index.js";
import { base64 } from "../../../codec/index.js";
import { WalletName } from "../../constants/WalletName.js";
import { WalletType } from "../../constants/WalletType.js";
import { onWindowEvent } from "../../utils/window.js";
import { WalletConnectV2 } from "../../walletconnect/WalletConnectV2.js";
import { WalletController } from "../WalletController.js";
import { WalletError } from "../WalletError.js";
import { LeapExtension } from "./LeapExtension.js";
import { LeapWalletConnectV2 } from "./LeapWalletConnectV2.js";
export class LeapController extends WalletController {
    constructor(wcProjectId) {
        super(WalletName.LEAP);
        this.wc = new WalletConnectV2(wcProjectId, {
            name: "Leap",
            android: "leapcosmos://wcV2#Intent;package=io.leapwallet.cosmos;scheme=leapwallet;end;",
            ios: "leapcosmos://wcV2",
        });
        this.registerAccountChangeHandlers();
    }
    async isInstalled(type) {
        return type === WalletType.EXTENSION ? "leap" in window : true;
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
            wallets.set(chainId, new LeapWalletConnectV2(this.id, this.wc, chainId, key, address, gasPrice, true // TODO: use sign mode direct when supported
            ));
        }
        return { wallets, wc: this.wc };
    }
    async connectExtension(chains) {
        const wallets = new Map();
        const ext = window.leap;
        if (!ext) {
            throw new Error("Leap extension is not installed");
        }
        await WalletError.wrap(ext.enable(chains.map(({ chainId }) => chainId)));
        for (const { chainId, gasPrice } of Object.values(chains)) {
            const { bech32Address, pubKey, isNanoLedger } = await WalletError.wrap(ext.getKey(chainId));
            const key = new Secp256k1PubKey({
                chainId,
                key: pubKey,
            });
            wallets.set(chainId, new LeapExtension(this.id, ext, chainId, key, bech32Address, gasPrice, isNanoLedger));
        }
        return wallets;
    }
    registerAccountChangeHandlers() {
        onWindowEvent("leap_keystorechange", () => this.changeAccount(WalletType.EXTENSION));
        this.wc.onAccountChange(() => this.changeAccount(WalletType.WALLETCONNECT));
    }
}
//# sourceMappingURL=LeapController.js.map