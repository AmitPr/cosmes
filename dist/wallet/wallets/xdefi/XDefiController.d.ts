import { WalletType } from "../../constants/WalletType.js";
import { WalletConnectV2 } from "../../walletconnect/WalletConnectV2.js";
import { ConnectedWallet } from "../ConnectedWallet.js";
import { ChainInfo, WalletController } from "../WalletController.js";
export declare class XDefiController extends WalletController {
    constructor();
    isInstalled(type: WalletType): Promise<boolean>;
    protected connectWalletConnect<T extends string>(_: ChainInfo<T>[]): Promise<{
        wallets: Map<T, ConnectedWallet>;
        wc: WalletConnectV2;
    }>;
    protected connectExtension<T extends string>(chains: ChainInfo<T>[]): Promise<Map<T, ConnectedWallet>>;
    protected registerAccountChangeHandlers(): void;
}
//# sourceMappingURL=XDefiController.d.ts.map