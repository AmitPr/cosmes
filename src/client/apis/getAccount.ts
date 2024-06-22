import { CosmosAuthV1beta1QueryAccountService as QueryAccountService } from "cosmes/protobufs";

import { RpcClient } from "../clients/RpcClient";

export type GetAccountParams = {
  address: string;
};

export async function getAccount(rpc: RpcClient, params: GetAccountParams) {
  const { account } = await rpc.query(
    QueryAccountService,
    params
  );
  if (!account) {
    throw new Error("Account not found");
  }
  return account;
}
