import { JsonValue } from "@bufbuild/protobuf";
import { RpcClient } from "../clients/RpcClient.js";
export type QueryContractParams = {
    address: string;
    query: JsonValue;
    height?: number;
};
/**
 * Queries the contract at `address` with the given `query` JSON message,
 * and returns the parsed JSON response.
 */
export declare function queryContract<T>(rpc: RpcClient, { address, query, height }: QueryContractParams): Promise<T>;
//# sourceMappingURL=queryContract.d.ts.map