import { CosmosBankV1beta1QueryAllBalancesService as QueryAllBalancesService } from "cosmes/protobufs";

import { RpcClient } from "../clients/RpcClient";

export type GetNativeBalancesParams = {
  address: string;
};

export async function getNativeBalances(
  rpc: RpcClient,
  params: GetNativeBalancesParams
) {
  // TODO: handle pagination
  const { balances } = await rpc.query(
    QueryAllBalancesService,
    params
  );
  return balances;
}
