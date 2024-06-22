import { Secp256k1PubKey } from "cosmes/client";
import { base64 } from "cosmes/codec";

import { WalletName } from "../../constants/WalletName";
import { WalletType } from "../../constants/WalletType";
import { WalletConnectV2 } from "../../walletconnect/WalletConnectV2";
import { ConnectedWallet } from "../ConnectedWallet";
import { ChainInfo, WalletController } from "../WalletController";
import { WalletError } from "../WalletError";
import { SonarWalletConnectV2 } from "./SonarWalletConnectV2";

export class SonarController extends WalletController {
  private readonly wc: WalletConnectV2;

  constructor(wcProjectId: string) {
    super(WalletName.SONAR);
    this.wc = new WalletConnectV2(wcProjectId, {
      name: "Sonar",
    });
    this.registerAccountChangeHandlers();
  }

  public async isInstalled(type: WalletType) {
    return type === WalletType.WALLETCONNECT;
  }

  protected async connectWalletConnect<T extends string>(
    chains: ChainInfo<T>[]
  ) {
    const wallets = new Map<T, ConnectedWallet>();
    await WalletError.wrap(
      this.wc.connect(chains.map(({ chainId }) => chainId), true)
    );
    for (let i = 0; i < chains.length; i++) {
      const { chainId, gasPrice } = chains[i];
      const { pubkey, address } = await WalletError.wrap(
        this.wc.getAccount(chainId)
      );
      const key = new Secp256k1PubKey({
        chainId,
        key: base64.decode(pubkey),
      });
      wallets.set(
        chainId,
        new SonarWalletConnectV2(
          this.id,
          this.wc,
          chainId,
          key,
          address,
          gasPrice,
          false // TODO: use sign mode direct when supported
        )
      );
    }
    return { wallets, wc: this.wc };
  }

  protected async connectExtension<T extends string>(_: ChainInfo<T>[]): Promise<Map<T, ConnectedWallet>> {
    throw new Error("Sonar does not support extension");
  }

  protected registerAccountChangeHandlers() { }
}
