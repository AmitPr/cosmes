import { QueryClientParamsRequest, QueryClientParamsResponse, QueryClientStateRequest, QueryClientStateResponse, QueryClientStatesRequest, QueryClientStatesResponse, QueryClientStatusRequest, QueryClientStatusResponse, QueryConsensusStateHeightsRequest, QueryConsensusStateHeightsResponse, QueryConsensusStateRequest, QueryConsensusStateResponse, QueryConsensusStatesRequest, QueryConsensusStatesResponse, QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse } from "./query_pb.js";
/**
 * ClientState queries an IBC light client.
 *
 * @generated from rpc ibc.core.client.v1.Query.ClientState
 */
export declare const QueryClientStateService: {
    readonly typeName: "ibc.core.client.v1.Query";
    readonly method: "ClientState";
    readonly Request: typeof QueryClientStateRequest;
    readonly Response: typeof QueryClientStateResponse;
};
/**
 * ClientStates queries all the IBC light clients of a chain.
 *
 * @generated from rpc ibc.core.client.v1.Query.ClientStates
 */
export declare const QueryClientStatesService: {
    readonly typeName: "ibc.core.client.v1.Query";
    readonly method: "ClientStates";
    readonly Request: typeof QueryClientStatesRequest;
    readonly Response: typeof QueryClientStatesResponse;
};
/**
 * ConsensusState queries a consensus state associated with a client state at
 * a given height.
 *
 * @generated from rpc ibc.core.client.v1.Query.ConsensusState
 */
export declare const QueryConsensusStateService: {
    readonly typeName: "ibc.core.client.v1.Query";
    readonly method: "ConsensusState";
    readonly Request: typeof QueryConsensusStateRequest;
    readonly Response: typeof QueryConsensusStateResponse;
};
/**
 * ConsensusStates queries all the consensus state associated with a given
 * client.
 *
 * @generated from rpc ibc.core.client.v1.Query.ConsensusStates
 */
export declare const QueryConsensusStatesService: {
    readonly typeName: "ibc.core.client.v1.Query";
    readonly method: "ConsensusStates";
    readonly Request: typeof QueryConsensusStatesRequest;
    readonly Response: typeof QueryConsensusStatesResponse;
};
/**
 * ConsensusStateHeights queries the height of every consensus states associated with a given client.
 *
 * @generated from rpc ibc.core.client.v1.Query.ConsensusStateHeights
 */
export declare const QueryConsensusStateHeightsService: {
    readonly typeName: "ibc.core.client.v1.Query";
    readonly method: "ConsensusStateHeights";
    readonly Request: typeof QueryConsensusStateHeightsRequest;
    readonly Response: typeof QueryConsensusStateHeightsResponse;
};
/**
 * Status queries the status of an IBC client.
 *
 * @generated from rpc ibc.core.client.v1.Query.ClientStatus
 */
export declare const QueryClientStatusService: {
    readonly typeName: "ibc.core.client.v1.Query";
    readonly method: "ClientStatus";
    readonly Request: typeof QueryClientStatusRequest;
    readonly Response: typeof QueryClientStatusResponse;
};
/**
 * ClientParams queries all parameters of the ibc client submodule.
 *
 * @generated from rpc ibc.core.client.v1.Query.ClientParams
 */
export declare const QueryClientParamsService: {
    readonly typeName: "ibc.core.client.v1.Query";
    readonly method: "ClientParams";
    readonly Request: typeof QueryClientParamsRequest;
    readonly Response: typeof QueryClientParamsResponse;
};
/**
 * UpgradedClientState queries an Upgraded IBC light client.
 *
 * @generated from rpc ibc.core.client.v1.Query.UpgradedClientState
 */
export declare const QueryUpgradedClientStateService: {
    readonly typeName: "ibc.core.client.v1.Query";
    readonly method: "UpgradedClientState";
    readonly Request: typeof QueryUpgradedClientStateRequest;
    readonly Response: typeof QueryUpgradedClientStateResponse;
};
/**
 * UpgradedConsensusState queries an Upgraded IBC consensus state.
 *
 * @generated from rpc ibc.core.client.v1.Query.UpgradedConsensusState
 */
export declare const QueryUpgradedConsensusStateService: {
    readonly typeName: "ibc.core.client.v1.Query";
    readonly method: "UpgradedConsensusState";
    readonly Request: typeof QueryUpgradedConsensusStateRequest;
    readonly Response: typeof QueryUpgradedConsensusStateResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map