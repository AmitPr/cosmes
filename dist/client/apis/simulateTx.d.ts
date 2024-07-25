import { Prettify } from "../../typeutils/prettify.js";
import { RpcClient } from "../clients/RpcClient.js";
import { ToUnsignedProtoParams, Tx } from "../models/Tx.js";
export type SimulateTxParams = Prettify<ToUnsignedProtoParams & {
    tx: Tx;
}>;
/**
 * Simulates a tx for the purpose of estimating gas fees.
 */
export declare function simulateTx(rpc: RpcClient, { tx, ...params }: SimulateTxParams): Promise<import("../../protobufs/index.js").CosmosTxV1beta1SimulateResponse>;
//# sourceMappingURL=simulateTx.d.ts.map