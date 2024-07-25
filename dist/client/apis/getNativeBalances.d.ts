import { RpcClient } from "../clients/RpcClient.js";
export type GetNativeBalancesParams = {
    address: string;
};
export declare function getNativeBalances(rpc: RpcClient, params: GetNativeBalancesParams): Promise<import("../../protobufs/index.js").CosmosBaseV1beta1Coin[]>;
//# sourceMappingURL=getNativeBalances.d.ts.map