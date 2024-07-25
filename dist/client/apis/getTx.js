import { CosmosTxV1beta1ServiceGetTxService as GetTxService, } from "cosmes/protobufs";
/**
 * Returns the tx matching the given hash. Throws if the tx is not found.
 */
export async function getTx(rpc, params) {
    const res = await rpc.query(GetTxService, params);
    if (!res.tx || !res.txResponse) {
        throw new Error("Tx not found");
    }
    return res;
}
//# sourceMappingURL=getTx.js.map