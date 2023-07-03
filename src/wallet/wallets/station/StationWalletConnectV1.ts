import { PlainMessage } from "@bufbuild/protobuf";
import { isMobile } from "@walletconnect-v1/browser-utils";
import WalletConnect from "@walletconnect-v1/client";
import { Adapter } from "cosmes/client";
import { fromStringToBase64 } from "cosmes/codec";
import { CosmosBaseV1beta1Coin as Coin } from "cosmes/protobufs";

import { WalletName } from "../../constants/WalletName";
import { WalletType } from "../../constants/WalletType";
import {
  BroadcastTxOptions,
  ConnectedWallet,
  SignArbitraryResponse,
  UnsignedTx,
} from "../ConnectedWallet";
import { PostResponse, SignBytesResponse } from "./types";
import { toStationTx } from "./utils/toStationTx";

export class StationWalletConnectV1 extends ConnectedWallet {
  private readonly wc: WalletConnect;

  constructor(
    wc: WalletConnect,
    chainId: string,
    pubKey: Adapter,
    address: string,
    rpc: string,
    gasPrice: PlainMessage<Coin>
  ) {
    super(
      WalletName.STATION,
      WalletType.WALLETCONNECT,
      chainId,
      pubKey,
      address,
      rpc,
      gasPrice
    );
    this.wc = wc;
  }

  public async signArbitrary(data: string): Promise<SignArbitraryResponse> {
    const res = await this.sendRequest<SignBytesResponse["result"]>(
      "signBytes",
      fromStringToBase64(data)
    );
    return {
      data,
      pubKey: res.public_key,
      signature: res.signature,
    };
  }

  public async broadcastTx(
    unsignedTx: UnsignedTx,
    opts?: BroadcastTxOptions | undefined
  ): Promise<string> {
    const { fee } = await this.prepBroadcastTx(unsignedTx, opts);
    const { msgs, memo } = unsignedTx;
    const { txhash } = await this.sendRequest<PostResponse["result"]>(
      "post",
      toStationTx(this.chainId, fee, msgs, memo)
    );
    return txhash;
  }

  private async sendRequest<T>(method: string, params: unknown): Promise<T> {
    // https://github.com/terra-money/wallet-provider/blob/interchain-wallet-provider/packages/src/%40terra-money/wallet-controller/modules/walletconnect/connect.ts#L327-L352
    const id = Date.now();
    if (isMobile()) {
      const payload = fromStringToBase64(
        JSON.stringify({
          id,
          handshakeTopic: this.wc.handshakeTopic,
          method,
          params,
        })
      );
      window.location.href = `terrastation://walletconnect_confirm/?action=walletconnect_confirm&payload=${payload}`;
    }
    try {
      return await this.wc.sendCustomRequest({
        id,
        method,
        params: [params],
      });
    } catch (err) {
      if (err instanceof Error) {
        // Error messages are JSON stringified (eg. '{"code":1,"message":"Denied by user"}')
        const { message } = JSON.parse(err.message);
        throw new Error(message);
      }
      throw err;
    }
  }
}