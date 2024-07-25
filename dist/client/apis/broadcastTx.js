/**
 * Broadcasts a tx to the network and returns the tx hash if successful.
 */
export async function broadcastTx(rpc, { tx, ...params }) {
    return rpc.broadcastTx(tx.toSignedProto(params));
}
//# sourceMappingURL=broadcastTx.js.map