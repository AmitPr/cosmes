import { RpcClient } from "../clients/RpcClient";
export type GetCw20BalanceParams = {
    address: string;
    token: string;
};
export declare function getCw20Balance(rpc: RpcClient, { address, token }: GetCw20BalanceParams): Promise<bigint>;
//# sourceMappingURL=getCw20Balance.d.ts.map