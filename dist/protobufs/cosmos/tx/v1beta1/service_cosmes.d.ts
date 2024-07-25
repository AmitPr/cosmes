import { BroadcastTxRequest, BroadcastTxResponse, GetBlockWithTxsRequest, GetBlockWithTxsResponse, GetTxRequest, GetTxResponse, GetTxsEventRequest, GetTxsEventResponse, SimulateRequest, SimulateResponse, TxDecodeAminoRequest, TxDecodeAminoResponse, TxDecodeRequest, TxDecodeResponse, TxEncodeAminoRequest, TxEncodeAminoResponse, TxEncodeRequest, TxEncodeResponse } from "./service_pb.js";
/**
 * Simulate simulates executing a transaction for estimating gas usage.
 *
 * @generated from rpc cosmos.tx.v1beta1.Service.Simulate
 */
export declare const ServiceSimulateService: {
    readonly typeName: "cosmos.tx.v1beta1.Service";
    readonly method: "Simulate";
    readonly Request: typeof SimulateRequest;
    readonly Response: typeof SimulateResponse;
};
/**
 * GetTx fetches a tx by hash.
 *
 * @generated from rpc cosmos.tx.v1beta1.Service.GetTx
 */
export declare const ServiceGetTxService: {
    readonly typeName: "cosmos.tx.v1beta1.Service";
    readonly method: "GetTx";
    readonly Request: typeof GetTxRequest;
    readonly Response: typeof GetTxResponse;
};
/**
 * BroadcastTx broadcast transaction.
 *
 * @generated from rpc cosmos.tx.v1beta1.Service.BroadcastTx
 */
export declare const ServiceBroadcastTxService: {
    readonly typeName: "cosmos.tx.v1beta1.Service";
    readonly method: "BroadcastTx";
    readonly Request: typeof BroadcastTxRequest;
    readonly Response: typeof BroadcastTxResponse;
};
/**
 * GetTxsEvent fetches txs by event.
 *
 * @generated from rpc cosmos.tx.v1beta1.Service.GetTxsEvent
 */
export declare const ServiceGetTxsEventService: {
    readonly typeName: "cosmos.tx.v1beta1.Service";
    readonly method: "GetTxsEvent";
    readonly Request: typeof GetTxsEventRequest;
    readonly Response: typeof GetTxsEventResponse;
};
/**
 * GetBlockWithTxs fetches a block with decoded txs.
 *
 * Since: cosmos-sdk 0.45.2
 *
 * @generated from rpc cosmos.tx.v1beta1.Service.GetBlockWithTxs
 */
export declare const ServiceGetBlockWithTxsService: {
    readonly typeName: "cosmos.tx.v1beta1.Service";
    readonly method: "GetBlockWithTxs";
    readonly Request: typeof GetBlockWithTxsRequest;
    readonly Response: typeof GetBlockWithTxsResponse;
};
/**
 * TxDecode decodes the transaction.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from rpc cosmos.tx.v1beta1.Service.TxDecode
 */
export declare const ServiceTxDecodeService: {
    readonly typeName: "cosmos.tx.v1beta1.Service";
    readonly method: "TxDecode";
    readonly Request: typeof TxDecodeRequest;
    readonly Response: typeof TxDecodeResponse;
};
/**
 * TxEncode encodes the transaction.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from rpc cosmos.tx.v1beta1.Service.TxEncode
 */
export declare const ServiceTxEncodeService: {
    readonly typeName: "cosmos.tx.v1beta1.Service";
    readonly method: "TxEncode";
    readonly Request: typeof TxEncodeRequest;
    readonly Response: typeof TxEncodeResponse;
};
/**
 * TxEncodeAmino encodes an Amino transaction from JSON to encoded bytes.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from rpc cosmos.tx.v1beta1.Service.TxEncodeAmino
 */
export declare const ServiceTxEncodeAminoService: {
    readonly typeName: "cosmos.tx.v1beta1.Service";
    readonly method: "TxEncodeAmino";
    readonly Request: typeof TxEncodeAminoRequest;
    readonly Response: typeof TxEncodeAminoResponse;
};
/**
 * TxDecodeAmino decodes an Amino transaction from encoded bytes to JSON.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from rpc cosmos.tx.v1beta1.Service.TxDecodeAmino
 */
export declare const ServiceTxDecodeAminoService: {
    readonly typeName: "cosmos.tx.v1beta1.Service";
    readonly method: "TxDecodeAmino";
    readonly Request: typeof TxDecodeAminoRequest;
    readonly Response: typeof TxDecodeAminoResponse;
};
//# sourceMappingURL=service_cosmes.d.ts.map