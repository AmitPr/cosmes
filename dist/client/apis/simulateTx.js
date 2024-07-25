import { CosmosTxV1beta1ServiceSimulateService as SimulateService } from "cosmes/protobufs";
/**
 * Simulates a tx for the purpose of estimating gas fees.
 */
export async function simulateTx(rpc, { tx, ...params }) {
    return rpc.query(SimulateService, {
        txBytes: tx.toUnsignedProto(params).toBinary(),
    });
}
//# sourceMappingURL=simulateTx.js.map