import { Prettify } from "../../typeutils/prettify";
import { RpcClient } from "../clients/RpcClient";
import { ToSignedProtoParams, Tx } from "../models/Tx";
export type BroadcastTxParams = Prettify<ToSignedProtoParams & {
    tx: Tx;
}>;
/**
 * Broadcasts a tx to the network and returns the tx hash if successful.
 */
export declare function broadcastTx(rpc: RpcClient, { tx, ...params }: BroadcastTxParams): Promise<string>;
//# sourceMappingURL=broadcastTx.d.ts.map