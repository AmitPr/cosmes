// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file ibc/core/client/v1/query.proto (package ibc.core.client.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { QueryClientParamsRequest, QueryClientParamsResponse, QueryClientStateRequest, QueryClientStateResponse, QueryClientStatesRequest, QueryClientStatesResponse, QueryClientStatusRequest, QueryClientStatusResponse, QueryConsensusStateHeightsRequest, QueryConsensusStateHeightsResponse, QueryConsensusStateRequest, QueryConsensusStateResponse, QueryConsensusStatesRequest, QueryConsensusStatesResponse, QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse } from "./query_pb.js";
const TYPE_NAME = "ibc.core.client.v1.Query";
/**
 * ClientState queries an IBC light client.
 *
 * @generated from rpc ibc.core.client.v1.Query.ClientState
 */
export const QueryClientStateService = {
    typeName: TYPE_NAME,
    method: "ClientState",
    Request: QueryClientStateRequest,
    Response: QueryClientStateResponse,
};
/**
 * ClientStates queries all the IBC light clients of a chain.
 *
 * @generated from rpc ibc.core.client.v1.Query.ClientStates
 */
export const QueryClientStatesService = {
    typeName: TYPE_NAME,
    method: "ClientStates",
    Request: QueryClientStatesRequest,
    Response: QueryClientStatesResponse,
};
/**
 * ConsensusState queries a consensus state associated with a client state at
 * a given height.
 *
 * @generated from rpc ibc.core.client.v1.Query.ConsensusState
 */
export const QueryConsensusStateService = {
    typeName: TYPE_NAME,
    method: "ConsensusState",
    Request: QueryConsensusStateRequest,
    Response: QueryConsensusStateResponse,
};
/**
 * ConsensusStates queries all the consensus state associated with a given
 * client.
 *
 * @generated from rpc ibc.core.client.v1.Query.ConsensusStates
 */
export const QueryConsensusStatesService = {
    typeName: TYPE_NAME,
    method: "ConsensusStates",
    Request: QueryConsensusStatesRequest,
    Response: QueryConsensusStatesResponse,
};
/**
 * ConsensusStateHeights queries the height of every consensus states associated with a given client.
 *
 * @generated from rpc ibc.core.client.v1.Query.ConsensusStateHeights
 */
export const QueryConsensusStateHeightsService = {
    typeName: TYPE_NAME,
    method: "ConsensusStateHeights",
    Request: QueryConsensusStateHeightsRequest,
    Response: QueryConsensusStateHeightsResponse,
};
/**
 * Status queries the status of an IBC client.
 *
 * @generated from rpc ibc.core.client.v1.Query.ClientStatus
 */
export const QueryClientStatusService = {
    typeName: TYPE_NAME,
    method: "ClientStatus",
    Request: QueryClientStatusRequest,
    Response: QueryClientStatusResponse,
};
/**
 * ClientParams queries all parameters of the ibc client submodule.
 *
 * @generated from rpc ibc.core.client.v1.Query.ClientParams
 */
export const QueryClientParamsService = {
    typeName: TYPE_NAME,
    method: "ClientParams",
    Request: QueryClientParamsRequest,
    Response: QueryClientParamsResponse,
};
/**
 * UpgradedClientState queries an Upgraded IBC light client.
 *
 * @generated from rpc ibc.core.client.v1.Query.UpgradedClientState
 */
export const QueryUpgradedClientStateService = {
    typeName: TYPE_NAME,
    method: "UpgradedClientState",
    Request: QueryUpgradedClientStateRequest,
    Response: QueryUpgradedClientStateResponse,
};
/**
 * UpgradedConsensusState queries an Upgraded IBC consensus state.
 *
 * @generated from rpc ibc.core.client.v1.Query.UpgradedConsensusState
 */
export const QueryUpgradedConsensusStateService = {
    typeName: TYPE_NAME,
    method: "UpgradedConsensusState",
    Request: QueryUpgradedConsensusStateRequest,
    Response: QueryUpgradedConsensusStateResponse,
};
//# sourceMappingURL=query_cosmes.js.map