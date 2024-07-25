import { CosmosBankV1beta1QueryAllBalancesService as QueryAllBalancesService } from "cosmes/protobufs";
export async function getNativeBalances(rpc, params) {
    // TODO: handle pagination
    const { balances } = await rpc.query(QueryAllBalancesService, params);
    return balances;
}
//# sourceMappingURL=getNativeBalances.js.map