import { Secp256k1PubKey } from "../../../client/index.js";
import { base64 } from "../../../codec/index.js";
import { WalletName } from "../../constants/WalletName.js";
import { WalletType } from "../../constants/WalletType.js";
import { WalletConnectV2 } from "../../walletconnect/WalletConnectV2.js";
import { WalletController } from "../WalletController.js";
import { WalletError } from "../WalletError.js";
import { SonarWalletConnectV2 } from "./SonarWalletConnectV2.js";
export class SonarController extends WalletController {
    constructor(wcProjectId) {
        super(WalletName.SONAR);
        this.wc = new WalletConnectV2(wcProjectId, {
            name: "Sonar",
        });
        this.registerAccountChangeHandlers();
    }
    async isInstalled(type) {
        return type === WalletType.WALLETCONNECT;
    }
    async connectWalletConnect(chains) {
        const wallets = new Map();
        await WalletError.wrap(this.wc.connect(chains.map(({ chainId }) => chainId), true));
        for (let i = 0; i < chains.length; i++) {
            const { chainId, gasPrice } = chains[i];
            const { pubkey, address } = await WalletError.wrap(this.wc.getAccount(chainId));
            const key = new Secp256k1PubKey({
                chainId,
                key: base64.decode(pubkey),
            });
            wallets.set(chainId, new SonarWalletConnectV2(this.id, this.wc, chainId, key, address, gasPrice, false // TODO: use sign mode direct when supported
            ));
        }
        return { wallets, wc: this.wc };
    }
    async connectExtension(_) {
        throw new Error("Sonar does not support extension");
    }
    registerAccountChangeHandlers() { }
}
//# sourceMappingURL=SonarController.js.map