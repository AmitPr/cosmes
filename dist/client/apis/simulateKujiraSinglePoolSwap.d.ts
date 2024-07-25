import { RpcClient } from "../clients/RpcClient.js";
export type SimulateKujiraSinglePoolSwapParams = {
    poolId: string;
    fromAsset: string;
    fromAmount: bigint;
};
/**
 * Simulates the amount of assets that would be received by swapping
 * `fromAmount` amount of `fromAsset` assets via the `poolId` pool.
 */
export declare function simulateKujiraSinglePoolSwap(rpc: RpcClient, { poolId, fromAsset, fromAmount }: SimulateKujiraSinglePoolSwapParams): Promise<bigint>;
//# sourceMappingURL=simulateKujiraSinglePoolSwap.d.ts.map