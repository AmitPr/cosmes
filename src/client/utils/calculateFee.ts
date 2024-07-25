import {
  CosmosBaseV1beta1Coin as Coin,
  CosmosTxV1beta1Fee as Fee,
  CosmosBaseAbciV1beta1GasInfo as GasInfo,
} from "cosmes/protobufs";

/**
 * Estimates the fee for a transaction. For txs which uses more gas, the
 * `multiplier` can be decreased (default: `1.4`).
 */
export function calculateFee(
  gasUsed: string | bigint,
  { amount, denom }: Coin,
  multiplier = 1.4
): Fee {
  gasUsed = BigInt(gasUsed).toString();
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
