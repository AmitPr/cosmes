import { ABCIQueryRequest, GetBlockByHeightRequest, GetLatestBlockRequest, GetLatestValidatorSetRequest, GetNodeInfoRequest, GetSyncingRequest, GetValidatorSetByHeightRequest } from "./query_pb.js";
export declare const ServiceRegistry: {
    "cosmos.base.tendermint.v1beta1.ServiceGetNodeInfo": typeof GetNodeInfoRequest;
    "cosmos.base.tendermint.v1beta1.ServiceGetSyncing": typeof GetSyncingRequest;
    "cosmos.base.tendermint.v1beta1.ServiceGetLatestBlock": typeof GetLatestBlockRequest;
    "cosmos.base.tendermint.v1beta1.ServiceGetBlockByHeight": typeof GetBlockByHeightRequest;
    "cosmos.base.tendermint.v1beta1.ServiceGetLatestValidatorSet": typeof GetLatestValidatorSetRequest;
    "cosmos.base.tendermint.v1beta1.ServiceGetValidatorSetByHeight": typeof GetValidatorSetByHeightRequest;
    "cosmos.base.tendermint.v1beta1.ServiceABCIQuery": typeof ABCIQueryRequest;
};
//# sourceMappingURL=query_registry.d.ts.map