import { PlainMessage } from "@bufbuild/protobuf";
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
import { Station } from "./types";
import { toStationTx } from "./utils/toStationTx";

export class StationExtension extends ConnectedWallet {
  private readonly ext: Station;

  constructor(
    ext: Station,
    chainId: string,
    pubKey: Adapter,
    address: string,
    rpc: string,
    gasPrice: PlainMessage<Coin>
  ) {
    super(
      WalletName.STATION,
      WalletType.EXTENSION,
      chainId,
      pubKey,
      address,
      rpc,
      gasPrice
    );
    this.ext = ext;
  }

  public async signArbitrary(data: string): Promise<SignArbitraryResponse> {
    const { public_key, signature } = await this.normaliseError(
      this.ext.signBytes(fromStringToBase64(data), true)
    );
    return {
      data,
      pubKey: public_key,
      signature: signature,
    };
  }

  public async broadcastTx(
    unsignedTx: UnsignedTx,
    opts?: BroadcastTxOptions | undefined
  ): Promise<string> {
    const { fee } = await this.prepBroadcastTx(unsignedTx, opts);
    const { msgs, memo } = unsignedTx;
    const { code, raw_log, txhash } = await this.normaliseError(
      this.ext.post(toStationTx(this.chainId, fee, msgs, memo), true)
    );
    if (code) {
      throw new Error(raw_log);
    }
    return txhash;
  }

  /**
   * Normalises the error thrown by the Station extension into a standard `Error`
   * instance. Returns the result of the `promise` if it resolves successfully.
   */
  private async normaliseError<T>(promise: Promise<T>): Promise<T> {
    try {
      return await promise;
    } catch (err) {
      if (typeof err === "string") {
        throw new Error(err);
      }
      if (err instanceof Error) {
        throw err;
      }
      throw new Error("Unknown error from Station extension: " + err);
    }
  }
}
