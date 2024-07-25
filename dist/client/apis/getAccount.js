import { CosmosAuthV1beta1QueryAccountService as QueryAccountService } from "../../protobufs/index.js";
export async function getAccount(rpc, params) {
    const { account } = await rpc.query(QueryAccountService, params);
    if (!account) {
        throw new Error("Account not found");
    }
    return account;
}
//# sourceMappingURL=getAccount.js.map