import { WalletType } from "../../constants/WalletType";
import { WalletConnectV2 } from "../../walletconnect/WalletConnectV2";
import { ConnectedWallet } from "../ConnectedWallet";
import { ChainInfo, WalletController } from "../WalletController";
export declare class KeplrController extends WalletController {
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
//# sourceMappingURL=KeplrController.d.ts.map