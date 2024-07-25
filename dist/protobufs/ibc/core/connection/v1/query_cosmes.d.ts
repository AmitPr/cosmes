import { QueryClientConnectionsRequest, QueryClientConnectionsResponse, QueryConnectionClientStateRequest, QueryConnectionClientStateResponse, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse, QueryConnectionParamsRequest, QueryConnectionParamsResponse, QueryConnectionRequest, QueryConnectionResponse, QueryConnectionsRequest, QueryConnectionsResponse } from "./query_pb.js";
/**
 * Connection queries an IBC connection end.
 *
 * @generated from rpc ibc.core.connection.v1.Query.Connection
 */
export declare const QueryConnectionService: {
    readonly typeName: "ibc.core.connection.v1.Query";
    readonly method: "Connection";
    readonly Request: typeof QueryConnectionRequest;
    readonly Response: typeof QueryConnectionResponse;
};
/**
 * Connections queries all the IBC connections of a chain.
 *
 * @generated from rpc ibc.core.connection.v1.Query.Connections
 */
export declare const QueryConnectionsService: {
    readonly typeName: "ibc.core.connection.v1.Query";
    readonly method: "Connections";
    readonly Request: typeof QueryConnectionsRequest;
    readonly Response: typeof QueryConnectionsResponse;
};
/**
 * ClientConnections queries the connection paths associated with a client
 * state.
 *
 * @generated from rpc ibc.core.connection.v1.Query.ClientConnections
 */
export declare const QueryClientConnectionsService: {
    readonly typeName: "ibc.core.connection.v1.Query";
    readonly method: "ClientConnections";
    readonly Request: typeof QueryClientConnectionsRequest;
    readonly Response: typeof QueryClientConnectionsResponse;
};
/**
 * ConnectionClientState queries the client state associated with the
 * connection.
 *
 * @generated from rpc ibc.core.connection.v1.Query.ConnectionClientState
 */
export declare const QueryConnectionClientStateService: {
    readonly typeName: "ibc.core.connection.v1.Query";
    readonly method: "ConnectionClientState";
    readonly Request: typeof QueryConnectionClientStateRequest;
    readonly Response: typeof QueryConnectionClientStateResponse;
};
/**
 * ConnectionConsensusState queries the consensus state associated with the
 * connection.
 *
 * @generated from rpc ibc.core.connection.v1.Query.ConnectionConsensusState
 */
export declare const QueryConnectionConsensusStateService: {
    readonly typeName: "ibc.core.connection.v1.Query";
    readonly method: "ConnectionConsensusState";
    readonly Request: typeof QueryConnectionConsensusStateRequest;
    readonly Response: typeof QueryConnectionConsensusStateResponse;
};
/**
 * ConnectionParams queries all parameters of the ibc connection submodule.
 *
 * @generated from rpc ibc.core.connection.v1.Query.ConnectionParams
 */
export declare const QueryConnectionParamsService: {
    readonly typeName: "ibc.core.connection.v1.Query";
    readonly method: "ConnectionParams";
    readonly Request: typeof QueryConnectionParamsRequest;
    readonly Response: typeof QueryConnectionParamsResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map