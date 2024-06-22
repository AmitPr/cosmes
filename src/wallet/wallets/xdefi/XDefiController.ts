import { Secp256k1PubKey } from "cosmes/client";
import { base64 } from "cosmes/codec";

import { WalletName } from "../../constants/WalletName";
import { WalletType } from "../../constants/WalletType";
import { onWindowEvent } from "../../utils/window";
import { WalletConnectV2 } from "../../walletconnect/WalletConnectV2";
import { ConnectedWallet } from "../ConnectedWallet";
import { ChainInfo, WalletController } from "../WalletController";
import { WalletError } from "../WalletError";
import { XDefiExtension } from "./XDefiExtension";

export class XDefiController extends WalletController {

  constructor() {
    super(WalletName.XDEFI);
    this.registerAccountChangeHandlers();
  }

  public async isInstalled(type: WalletType) {
    return type === WalletType.EXTENSION ? "xfi" in window : false;
  }

  protected async connectWalletConnect<T extends string>(
    _: ChainInfo<T>[]
  ): Promise<{ wallets: Map<T, ConnectedWallet>; wc: WalletConnectV2 }> {
    throw new Error("WalletConnect is not supported by XDefi");
  }

  protected async connectExtension<T extends string>(chains: ChainInfo<T>[]) {
    const wallets = new Map<T, ConnectedWallet>();
    const ext = window.keplr;
    if (!window.xfi || !ext) {
      throw new Error("XDefi extension is not installed");
    }
    await WalletError.wrap(ext.enable(chains.map(({ chainId }) => chainId)));
    for (const { chainId, gasPrice } of Object.values(chains)) {
      const { bech32Address, pubKey, isNanoLedger } = await WalletError.wrap(
        ext.getKey(chainId)
      );
      const key = new Secp256k1PubKey({
        chainId,
        key: pubKey,
      });
      wallets.set(
        chainId,
        new XDefiExtension(
          this.id,
          ext,
          chainId,
          key,
          bech32Address,
          gasPrice,
          isNanoLedger
        )
      );
    }
    return wallets;
  }

  protected registerAccountChangeHandlers() {
    onWindowEvent("keplr_keystorechange", () =>
      this.changeAccount(WalletType.EXTENSION)
    );
  }
}
