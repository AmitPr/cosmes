import { WalletType } from "../../constants/WalletType.js";
import { WalletConnectV2 } from "../../walletconnect/WalletConnectV2.js";
import { ConnectedWallet } from "../ConnectedWallet.js";
import { ChainInfo, WalletController } from "../WalletController.js";
export declare class CosmostationController extends WalletController {
    private readonly wc;
    constructor(wcProjectId: string);
    isInstalled(type: WalletType): Promise<boolean>;
    protected connectWalletConnect<T extends string>(chains: ChainInfo<T>[]): Promise<{
        wallets: Map<T, ConnectedWallet>;
        wc: WalletConnectV2;
    }>;
    protected connectExtension<T extends string>(chains: ChainInfo<T>[]): Promise<Map<T, ConnectedWallet>>;
    protected registerAccountChangeHandlers(): void;
}
//# sourceMappingURL=CosmostationController.d.ts.map