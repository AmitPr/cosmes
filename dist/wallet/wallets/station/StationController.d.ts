import { WalletType } from "../../constants/WalletType";
import { ConnectedWallet } from "../ConnectedWallet";
import { ChainInfo, WalletController } from "../WalletController";
import { WalletConnectV2 } from "cosmes/wallet/walletconnect/WalletConnectV2";
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