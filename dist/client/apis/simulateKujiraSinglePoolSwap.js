import { queryContract } from "./queryContract.js";
/**
 * Simulates the amount of assets that would be received by swapping
 * `fromAmount` amount of `fromAsset` assets via the `poolId` pool.
 */
export async function simulateKujiraSinglePoolSwap(rpc, { poolId, fromAsset, fromAmount }) {
    try {
        const { return_amount } = await queryContract(rpc, {
            address: poolId,
            query: {
                simulation: {
                    offer_asset: {
                        info: {
                            native_token: {
                                denom: fromAsset,
                            },
                        },
                        amount: fromAmount.toString(),
                    },
                },
            },
        });
        return BigInt(return_amount);
    }
    catch (err) {
        console.error(err);
        return 0n;
    }
}
//# sourceMappingURL=simulateKujiraSinglePoolSwap.js.map