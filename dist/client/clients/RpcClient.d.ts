import { Message, PartialMessage } from "@bufbuild/protobuf";
import { CosmosTxV1beta1TxRaw as TxRaw } from "../../protobufs/index.js";
import { RpcStatusResponse } from "./types/rpc.js";
type QueryService<T extends Message<T>, U extends Message<U>> = {
    typeName: string;
    method: string;
    Request: new (msg: PartialMessage<T>) => T;
    Response: {
        fromBinary: (bytes: Uint8Array) => U;
    };
};
/**
 * Wraps the request message with an optional `height` field.
 */
type RequestMessage<T extends Message<T>> = T extends {
    height: bigint | string | number;
} ? PartialMessage<T> : PartialMessage<T> & {
    /**
     * The block height at which the query should be executed. Providing a height
     * that is outside the range of the full node will result in an error. Leave
     * this field empty to default to the latest block.
     */
    height?: number | undefined;
};
export declare class RpcClient {
    private endpoint;
    constructor(endpoint: string);
    private doRequest;
    /**
     * Posts an ABCI query to the RPC `endpoint`. If successful, returns the response,
     * otherwise throws an error.
     */
    query<T extends Message<T>, U extends Message<U>>({ typeName, method, Request, Response }: QueryService<T, U>, requestMsg: RequestMessage<T>): Promise<U>;
    /**
     * Posts a Status query to the RPC `endpoint`. If successful, returns the response,
     * otherwise throws an error.
     */
    status(): Promise<RpcStatusResponse>;
    /**
     * Posts a `broadcast_tx_sync` request to the RPC `endpoint`. If successful,
     * returns the tx hash, otherwise throws an error.
     */
    broadcastTx(txRaw: TxRaw): Promise<string>;
    /**
     * Creates a new ABCI batch query.
     */
    newBatchQuery(): BatchQuery;
}
declare class BatchQuery {
    private readonly endpoint;
    private readonly queries;
    constructor(endpoint: string);
    /**
     * Adds an `abci_query` to this query batch.
     *
     * @param callback An error-first callback function for the response of the query.
     * If `err` is not `null`, `response` will be `null` and should not be used.
     */
    add<T extends Message<T>, U extends Message<U>>(queryService: QueryService<T, U>, requestMsg: RequestMessage<T>, callback: (err: Error | null, response: U) => unknown): this;
    /**
     * Executes the batched query.
     */
    send(): Promise<void>;
}
export {};
//# sourceMappingURL=RpcClient.d.ts.map