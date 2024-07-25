import { BroadcastTxRequest, GetBlockWithTxsRequest, GetTxRequest, GetTxsEventRequest, SimulateRequest, TxDecodeAminoRequest, TxDecodeRequest, TxEncodeAminoRequest, TxEncodeRequest } from "./service_pb.js";
export declare const ServiceRegistry: {
    "cosmos.tx.v1beta1.ServiceSimulate": typeof SimulateRequest;
    "cosmos.tx.v1beta1.ServiceGetTx": typeof GetTxRequest;
    "cosmos.tx.v1beta1.ServiceBroadcastTx": typeof BroadcastTxRequest;
    "cosmos.tx.v1beta1.ServiceGetTxsEvent": typeof GetTxsEventRequest;
    "cosmos.tx.v1beta1.ServiceGetBlockWithTxs": typeof GetBlockWithTxsRequest;
    "cosmos.tx.v1beta1.ServiceTxDecode": typeof TxDecodeRequest;
    "cosmos.tx.v1beta1.ServiceTxEncode": typeof TxEncodeRequest;
    "cosmos.tx.v1beta1.ServiceTxEncodeAmino": typeof TxEncodeAminoRequest;
    "cosmos.tx.v1beta1.ServiceTxDecodeAmino": typeof TxDecodeAminoRequest;
};
//# sourceMappingURL=service_registry.d.ts.map