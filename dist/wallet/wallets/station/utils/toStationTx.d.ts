import { Adapter } from "cosmes/client";
import { CosmosTxV1beta1Fee as Fee } from "cosmes/protobufs";
import { StationTx } from "../types";
/**
 * Translates the given args to a tx that can be sent to either
 * the Station extension wallet or WalletConnect wallet.
 */
export declare function toStationTx(chainId: string, fee: Fee, msgs: Adapter[], memo?: string | undefined): StationTx;
//# sourceMappingURL=toStationTx.d.ts.map