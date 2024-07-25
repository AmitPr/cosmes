import { Prettify } from "../../typeutils/prettify";
import { RpcClient } from "../clients/RpcClient";
import { ToUnsignedProtoParams, Tx } from "../models/Tx";
export type SimulateTxParams = Prettify<ToUnsignedProtoParams & {
    tx: Tx;
}>;
/**
 * Simulates a tx for the purpose of estimating gas fees.
 */
export declare function simulateTx(rpc: RpcClient, { tx, ...params }: SimulateTxParams): Promise<import("cosmes/protobufs").CosmosTxV1beta1SimulateResponse>;
//# sourceMappingURL=simulateTx.d.ts.map