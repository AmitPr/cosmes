import { WalletType } from "../../constants/WalletType.js";
import { ConnectedWallet } from "../ConnectedWallet.js";
import { ChainInfo, WalletController } from "../WalletController.js";
import { WalletConnectV2 } from "../../../wallet/walletconnect/WalletConnectV2.js";
export declare class StationController extends WalletController {
    constructor();
    isInstalled(type: WalletType): Promise<boolean>;
    protected connectWalletConnect<T extends string>(_: ChainInfo<T>[]): Promise<{
        wallets: Map<T, ConnectedWallet>;
        wc: WalletConnectV2;
    }>;
    protected connectExtension<T extends string>(chains: ChainInfo<T>[]): Promise<Map<T, ConnectedWallet>>;
    protected registerAccountChangeHandlers(): void;
}
//# sourceMappingURL=StationController.d.ts.map