import { RpcClient } from "../clients/RpcClient";
export type GetNativeBalancesParams = {
    address: string;
};
export declare function getNativeBalances(rpc: RpcClient, params: GetNativeBalancesParams): Promise<import("cosmes/protobufs").CosmosBaseV1beta1Coin[]>;
//# sourceMappingURL=getNativeBalances.d.ts.map