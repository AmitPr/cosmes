import { CosmosTxV1beta1Fee as Fee, } from "../../protobufs/index.js";
/**
 * Estimates the fee for a transaction. For txs which uses more gas, the
 * `multiplier` can be decreased (default: `1.4`).
 */
export function calculateFee({ gasUsed }, { amount, denom }, multiplier = 1.4) {
    const gasLimit = Number(gasUsed) * multiplier;
    return new Fee({
        amount: [
            {
                amount: Math.ceil(gasLimit * Number(amount)).toFixed(0),
                denom: denom,
            },
        ],
        gasLimit: BigInt(Math.floor(gasLimit)),
    });
}
//# sourceMappingURL=calculateFee.js.map