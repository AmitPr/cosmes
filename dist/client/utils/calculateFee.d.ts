import { CosmosBaseV1beta1Coin as Coin, CosmosTxV1beta1Fee as Fee, CosmosBaseAbciV1beta1GasInfo as GasInfo } from "../../protobufs/index.js";
/**
 * Estimates the fee for a transaction. For txs which uses more gas, the
 * `multiplier` can be decreased (default: `1.4`).
 */
export declare function calculateFee({ gasUsed }: GasInfo, { amount, denom }: Coin, multiplier?: number): Fee;
//# sourceMappingURL=calculateFee.d.ts.map