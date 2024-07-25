import { WalletType } from "../../constants/WalletType.js";
import { WalletConnectV2 } from "../../walletconnect/WalletConnectV2.js";
import { ConnectedWallet } from "../ConnectedWallet.js";
import { ChainInfo, WalletController } from "../WalletController.js";
export declare class CompassController extends WalletController {
    constructor();
    isInstalled(type: WalletType): Promise<boolean>;
    protected connectWalletConnect<T extends string>(_chains: ChainInfo<T>[]): Promise<{
        wallets: Map<T, ConnectedWallet>;
        wc: WalletConnectV2;
    }>;
    protected connectExtension<T extends string>(chains: ChainInfo<T>[]): Promise<Map<T, ConnectedWallet>>;
    protected registerAccountChangeHandlers(): void;
}
//# sourceMappingURL=CompassController.d.ts.map