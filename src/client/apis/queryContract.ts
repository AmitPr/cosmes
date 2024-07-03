import { JsonValue } from "@bufbuild/protobuf";
import { utf8 } from "cosmes/codec";
import { CosmwasmWasmV1QuerySmartContractStateService as QuerySmartContractStateService } from "cosmes/protobufs";

import { RpcClient } from "../clients/RpcClient";

export type QueryContractParams = {
  address: string;
  query: JsonValue;
  height?: number;
};

/**
 * Queries the contract at `address` with the given `query` JSON message,
 * and returns the parsed JSON response.
 */
export async function queryContract<T>(
  rpc: RpcClient,
  { address, query, height }: QueryContractParams
): Promise<T> {
  const { data } = await rpc.query(
    QuerySmartContractStateService,
    {
      address,
      queryData: utf8.decode(JSON.stringify(query)),
      height,
    }
  );
  return JSON.parse(utf8.encode(data));
}
