import { utf8 } from "cosmes/codec";
import { CosmwasmWasmV1QuerySmartContractStateService as QuerySmartContractStateService } from "cosmes/protobufs";
/**
 * Queries the contract at `address` with the given `query` JSON message,
 * and returns the parsed JSON response.
 */
export async function queryContract(rpc, { address, query, height }) {
    const { data } = await rpc.query(QuerySmartContractStateService, {
        address,
        queryData: utf8.decode(JSON.stringify(query)),
        height,
    });
    return JSON.parse(utf8.encode(data));
}
//# sourceMappingURL=queryContract.js.map