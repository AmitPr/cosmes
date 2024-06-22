import { CosmosTxV1beta1ServiceSimulateService as SimulateService } from "cosmes/protobufs";

import { Prettify } from "../../typeutils/prettify";
import { RpcClient } from "../clients/RpcClient";
import { ToUnsignedProtoParams, Tx } from "../models/Tx";

export type SimulateTxParams = Prettify<
  ToUnsignedProtoParams & {
    tx: Tx;
  }
>;

/**
 * Simulates a tx for the purpose of estimating gas fees.
 */
export async function simulateTx(
  rpc: RpcClient,
  { tx, ...params }: SimulateTxParams
) {
  return rpc.query(SimulateService, {
    txBytes: tx.toUnsignedProto(params).toBinary(),
  });
}
