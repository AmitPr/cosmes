import { ABCIQueryRequest, ABCIQueryResponse, GetBlockByHeightRequest, GetBlockByHeightResponse, GetLatestBlockRequest, GetLatestBlockResponse, GetLatestValidatorSetRequest, GetLatestValidatorSetResponse, GetNodeInfoRequest, GetNodeInfoResponse, GetSyncingRequest, GetSyncingResponse, GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse } from "./query_pb.js";
/**
 * GetNodeInfo queries the current node info.
 *
 * @generated from rpc cosmos.base.tendermint.v1beta1.Service.GetNodeInfo
 */
export declare const ServiceGetNodeInfoService: {
    readonly typeName: "cosmos.base.tendermint.v1beta1.Service";
    readonly method: "GetNodeInfo";
    readonly Request: typeof GetNodeInfoRequest;
    readonly Response: typeof GetNodeInfoResponse;
};
/**
 * GetSyncing queries node syncing.
 *
 * @generated from rpc cosmos.base.tendermint.v1beta1.Service.GetSyncing
 */
export declare const ServiceGetSyncingService: {
    readonly typeName: "cosmos.base.tendermint.v1beta1.Service";
    readonly method: "GetSyncing";
    readonly Request: typeof GetSyncingRequest;
    readonly Response: typeof GetSyncingResponse;
};
/**
 * GetLatestBlock returns the latest block.
 *
 * @generated from rpc cosmos.base.tendermint.v1beta1.Service.GetLatestBlock
 */
export declare const ServiceGetLatestBlockService: {
    readonly typeName: "cosmos.base.tendermint.v1beta1.Service";
    readonly method: "GetLatestBlock";
    readonly Request: typeof GetLatestBlockRequest;
    readonly Response: typeof GetLatestBlockResponse;
};
/**
 * GetBlockByHeight queries block for given height.
 *
 * @generated from rpc cosmos.base.tendermint.v1beta1.Service.GetBlockByHeight
 */
export declare const ServiceGetBlockByHeightService: {
    readonly typeName: "cosmos.base.tendermint.v1beta1.Service";
    readonly method: "GetBlockByHeight";
    readonly Request: typeof GetBlockByHeightRequest;
    readonly Response: typeof GetBlockByHeightResponse;
};
/**
 * GetLatestValidatorSet queries latest validator-set.
 *
 * @generated from rpc cosmos.base.tendermint.v1beta1.Service.GetLatestValidatorSet
 */
export declare const ServiceGetLatestValidatorSetService: {
    readonly typeName: "cosmos.base.tendermint.v1beta1.Service";
    readonly method: "GetLatestValidatorSet";
    readonly Request: typeof GetLatestValidatorSetRequest;
    readonly Response: typeof GetLatestValidatorSetResponse;
};
/**
 * GetValidatorSetByHeight queries validator-set at a given height.
 *
 * @generated from rpc cosmos.base.tendermint.v1beta1.Service.GetValidatorSetByHeight
 */
export declare const ServiceGetValidatorSetByHeightService: {
    readonly typeName: "cosmos.base.tendermint.v1beta1.Service";
    readonly method: "GetValidatorSetByHeight";
    readonly Request: typeof GetValidatorSetByHeightRequest;
    readonly Response: typeof GetValidatorSetByHeightResponse;
};
/**
 * ABCIQuery defines a query handler that supports ABCI queries directly to the
 * application, bypassing Tendermint completely. The ABCI query must contain
 * a valid and supported path, including app, custom, p2p, and store.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from rpc cosmos.base.tendermint.v1beta1.Service.ABCIQuery
 */
export declare const ServiceABCIQueryService: {
    readonly typeName: "cosmos.base.tendermint.v1beta1.Service";
    readonly method: "ABCIQuery";
    readonly Request: typeof ABCIQueryRequest;
    readonly Response: typeof ABCIQueryResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map