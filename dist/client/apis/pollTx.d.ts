import { RpcClient } from "../clients/RpcClient.js";
export type PollTxParams = {
    hash: string;
    intervalSeconds?: number;
    maxAttempts?: number;
};
/**
 * Polls for the tx matching the given `hash`, with a minimum interval of
 * `intervalSeconds`. Throws if the tx is not found after the given number
 * of `maxAttempts`.
 */
export declare function pollTx(rpc: RpcClient, { intervalSeconds, maxAttempts, ...getTxParams }: PollTxParams): Promise<Required<import("../../protobufs/index.js").CosmosTxV1beta1GetTxResponse>>;
//# sourceMappingURL=pollTx.d.ts.map