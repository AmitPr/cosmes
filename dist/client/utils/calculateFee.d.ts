import { CosmosBaseV1beta1Coin as Coin, CosmosTxV1beta1Fee as Fee } from "cosmes/protobufs";
/**
 * Estimates the fee for a transaction. For txs which uses more gas, the
 * `multiplier` can be decreased (default: `1.4`).
 */
export declare function calculateFee(gasUsed: string | bigint, { amount, denom }: Coin, multiplier?: number): Fee;
//# sourceMappingURL=calculateFee.d.ts.map