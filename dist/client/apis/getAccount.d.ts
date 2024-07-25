import { RpcClient } from "../clients/RpcClient";
export type GetAccountParams = {
    address: string;
};
export declare function getAccount(rpc: RpcClient, params: GetAccountParams): Promise<import("@bufbuild/protobuf").Any>;
//# sourceMappingURL=getAccount.d.ts.map