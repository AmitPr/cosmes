import { RpcClient } from "../clients/RpcClient";
import { queryContract } from "./queryContract";

export type GetCw20BalanceParams = {
  address: string;
  token: string;
};

type Response = {
  balance: string;
};

export async function getCw20Balance(
  rpc: RpcClient,
  { address, token }: GetCw20BalanceParams
): Promise<bigint> {
  try {
    const { balance } = await queryContract<Response>(rpc, {
      address: token,
      query: {
        balance: {
          address: address,
        },
      },
    });
    return BigInt(balance);
  } catch (err) {
    console.error(err);
    return 0n;
  }
}
