import { base16, base64 } from "../../codec/index.js";
import { FetchClient } from "./FetchClient.js";
export class RpcClient {
    constructor(endpoint) {
        this.endpoint = endpoint;
    }
    async doRequest(method, params) {
        const { result, error } = await FetchClient.post(this.endpoint, {
            id: Date.now(),
            jsonrpc: "2.0",
            method,
            params,
        });
        if (error != null) {
            throw new Error(error.data);
        }
        return result;
    }
    /**
     * Posts an ABCI query to the RPC `endpoint`. If successful, returns the response,
     * otherwise throws an error.
     */
    async query({ typeName, method, Request, Response }, requestMsg) {
        const { response } = await this.doRequest("abci_query", {
            path: `/${typeName}/${method}`,
            data: base16.encode(new Request(requestMsg).toBinary()),
            ...(requestMsg.height ? { height: requestMsg.height.toString() } : {}),
        });
        const { log, value } = response;
        if (!value) {
            throw new Error(log);
        }
        return Response.fromBinary(base64.decode(value));
    }
    /**
     * Posts a Status query to the RPC `endpoint`. If successful, returns the response,
     * otherwise throws an error.
     */
    async status() {
        return await this.doRequest("status", {});
    }
    /**
     * Posts a `broadcast_tx_sync` request to the RPC `endpoint`. If successful,
     * returns the tx hash, otherwise throws an error.
     */
    async broadcastTx(txRaw) {
        const { code, log, hash } = await this.doRequest("broadcast_tx_sync", {
            tx: base64.encode(txRaw.toBinary()),
        });
        if (code !== 0) {
            throw new Error(log);
        }
        return hash;
    }
    /**
     * Creates a new ABCI batch query.
     */
    newBatchQuery() {
        return new BatchQuery(this.endpoint);
    }
}
class BatchQuery {
    constructor(endpoint) {
        this.queries = [];
        this.endpoint = endpoint;
    }
    /**
     * Adds an `abci_query` to this query batch.
     *
     * @param callback An error-first callback function for the response of the query.
     * If `err` is not `null`, `response` will be `null` and should not be used.
     */
    add(queryService, requestMsg, callback) {
        this.queries.push({ queryService, requestMsg, callback });
        return this;
    }
    /**
     * Executes the batched query.
     */
    async send() {
        if (this.queries.length === 0) {
            return;
        }
        const payload = this.queries.map(({ queryService, requestMsg }, idx) => ({
            id: idx,
            jsonrpc: "2.0",
            method: "abci_query",
            params: {
                path: `/${queryService.typeName}/${queryService.method}`,
                data: base16.encode(new queryService.Request(requestMsg).toBinary()),
                ...(requestMsg.height ? { height: requestMsg.height.toString() } : {}),
            },
        }));
        const res = await FetchClient.post(this.endpoint, payload);
        const results = Array.isArray(res) ? res : [res];
        for (const { id, result, error } of results) {
            const { queryService, callback: handler } = this.queries[id];
            if (error != null) {
                handler(new Error(error.data), null);
                continue;
            }
            const { log, value } = result.response;
            if (!value) {
                handler(new Error(log), null);
                continue;
            }
            const responseMsg = queryService.Response.fromBinary(base64.decode(value));
            handler(null, responseMsg);
        }
    }
}
//# sourceMappingURL=RpcClient.js.map