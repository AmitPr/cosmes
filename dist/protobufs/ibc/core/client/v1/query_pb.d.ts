import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { ConsensusStateWithHeight, Height, IdentifiedClientState, Params } from "./client_pb.js";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination_pb.js";
/**
 * QueryClientStateRequest is the request type for the Query/ClientState RPC
 * method
 *
 * @generated from message ibc.core.client.v1.QueryClientStateRequest
 */
export declare class QueryClientStateRequest extends Message<QueryClientStateRequest> {
    /**
     * client state unique identifier
     *
     * @generated from field: string client_id = 1;
     */
    clientId: string;
    constructor(data?: PartialMessage<QueryClientStateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.QueryClientStateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryClientStateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryClientStateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryClientStateRequest;
    static equals(a: QueryClientStateRequest | PlainMessage<QueryClientStateRequest> | undefined, b: QueryClientStateRequest | PlainMessage<QueryClientStateRequest> | undefined): boolean;
}
/**
 * QueryClientStateResponse is the response type for the Query/ClientState RPC
 * method. Besides the client state, it includes a proof and the height from
 * which the proof was retrieved.
 *
 * @generated from message ibc.core.client.v1.QueryClientStateResponse
 */
export declare class QueryClientStateResponse extends Message<QueryClientStateResponse> {
    /**
     * client state associated with the request identifier
     *
     * @generated from field: google.protobuf.Any client_state = 1;
     */
    clientState?: Any;
    /**
     * merkle proof of existence
     *
     * @generated from field: bytes proof = 2;
     */
    proof: Uint8Array;
    /**
     * height at which the proof was retrieved
     *
     * @generated from field: ibc.core.client.v1.Height proof_height = 3;
     */
    proofHeight?: Height;
    constructor(data?: PartialMessage<QueryClientStateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.QueryClientStateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryClientStateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryClientStateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryClientStateResponse;
    static equals(a: QueryClientStateResponse | PlainMessage<QueryClientStateResponse> | undefined, b: QueryClientStateResponse | PlainMessage<QueryClientStateResponse> | undefined): boolean;
}
/**
 * QueryClientStatesRequest is the request type for the Query/ClientStates RPC
 * method
 *
 * @generated from message ibc.core.client.v1.QueryClientStatesRequest
 */
export declare class QueryClientStatesRequest extends Message<QueryClientStatesRequest> {
    /**
     * pagination request
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryClientStatesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.QueryClientStatesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryClientStatesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryClientStatesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryClientStatesRequest;
    static equals(a: QueryClientStatesRequest | PlainMessage<QueryClientStatesRequest> | undefined, b: QueryClientStatesRequest | PlainMessage<QueryClientStatesRequest> | undefined): boolean;
}
/**
 * QueryClientStatesResponse is the response type for the Query/ClientStates RPC
 * method.
 *
 * @generated from message ibc.core.client.v1.QueryClientStatesResponse
 */
export declare class QueryClientStatesResponse extends Message<QueryClientStatesResponse> {
    /**
     * list of stored ClientStates of the chain.
     *
     * @generated from field: repeated ibc.core.client.v1.IdentifiedClientState client_states = 1;
     */
    clientStates: IdentifiedClientState[];
    /**
     * pagination response
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryClientStatesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.QueryClientStatesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryClientStatesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryClientStatesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryClientStatesResponse;
    static equals(a: QueryClientStatesResponse | PlainMessage<QueryClientStatesResponse> | undefined, b: QueryClientStatesResponse | PlainMessage<QueryClientStatesResponse> | undefined): boolean;
}
/**
 * QueryConsensusStateRequest is the request type for the Query/ConsensusState
 * RPC method. Besides the consensus state, it includes a proof and the height
 * from which the proof was retrieved.
 *
 * @generated from message ibc.core.client.v1.QueryConsensusStateRequest
 */
export declare class QueryConsensusStateRequest extends Message<QueryConsensusStateRequest> {
    /**
     * client identifier
     *
     * @generated from field: string client_id = 1;
     */
    clientId: string;
    /**
     * consensus state revision number
     *
     * @generated from field: uint64 revision_number = 2;
     */
    revisionNumber: bigint;
    /**
     * consensus state revision height
     *
     * @generated from field: uint64 revision_height = 3;
     */
    revisionHeight: bigint;
    /**
     * latest_height overrrides the height field and queries the latest stored
     * ConsensusState
     *
     * @generated from field: bool latest_height = 4;
     */
    latestHeight: boolean;
    constructor(data?: PartialMessage<QueryConsensusStateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.QueryConsensusStateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryConsensusStateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryConsensusStateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryConsensusStateRequest;
    static equals(a: QueryConsensusStateRequest | PlainMessage<QueryConsensusStateRequest> | undefined, b: QueryConsensusStateRequest | PlainMessage<QueryConsensusStateRequest> | undefined): boolean;
}
/**
 * QueryConsensusStateResponse is the response type for the Query/ConsensusState
 * RPC method
 *
 * @generated from message ibc.core.client.v1.QueryConsensusStateResponse
 */
export declare class QueryConsensusStateResponse extends Message<QueryConsensusStateResponse> {
    /**
     * consensus state associated with the client identifier at the given height
     *
     * @generated from field: google.protobuf.Any consensus_state = 1;
     */
    consensusState?: Any;
    /**
     * merkle proof of existence
     *
     * @generated from field: bytes proof = 2;
     */
    proof: Uint8Array;
    /**
     * height at which the proof was retrieved
     *
     * @generated from field: ibc.core.client.v1.Height proof_height = 3;
     */
    proofHeight?: Height;
    constructor(data?: PartialMessage<QueryConsensusStateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.QueryConsensusStateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryConsensusStateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryConsensusStateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryConsensusStateResponse;
    static equals(a: QueryConsensusStateResponse | PlainMessage<QueryConsensusStateResponse> | undefined, b: QueryConsensusStateResponse | PlainMessage<QueryConsensusStateResponse> | undefined): boolean;
}
/**
 * QueryConsensusStatesRequest is the request type for the Query/ConsensusStates
 * RPC method.
 *
 * @generated from message ibc.core.client.v1.QueryConsensusStatesRequest
 */
export declare class QueryConsensusStatesRequest extends Message<QueryConsensusStatesRequest> {
    /**
     * client identifier
     *
     * @generated from field: string client_id = 1;
     */
    clientId: string;
    /**
     * pagination request
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryConsensusStatesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.QueryConsensusStatesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryConsensusStatesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryConsensusStatesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryConsensusStatesRequest;
    static equals(a: QueryConsensusStatesRequest | PlainMessage<QueryConsensusStatesRequest> | undefined, b: QueryConsensusStatesRequest | PlainMessage<QueryConsensusStatesRequest> | undefined): boolean;
}
/**
 * QueryConsensusStatesResponse is the response type for the
 * Query/ConsensusStates RPC method
 *
 * @generated from message ibc.core.client.v1.QueryConsensusStatesResponse
 */
export declare class QueryConsensusStatesResponse extends Message<QueryConsensusStatesResponse> {
    /**
     * consensus states associated with the identifier
     *
     * @generated from field: repeated ibc.core.client.v1.ConsensusStateWithHeight consensus_states = 1;
     */
    consensusStates: ConsensusStateWithHeight[];
    /**
     * pagination response
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryConsensusStatesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.QueryConsensusStatesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryConsensusStatesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryConsensusStatesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryConsensusStatesResponse;
    static equals(a: QueryConsensusStatesResponse | PlainMessage<QueryConsensusStatesResponse> | undefined, b: QueryConsensusStatesResponse | PlainMessage<QueryConsensusStatesResponse> | undefined): boolean;
}
/**
 * QueryConsensusStateHeightsRequest is the request type for Query/ConsensusStateHeights
 * RPC method.
 *
 * @generated from message ibc.core.client.v1.QueryConsensusStateHeightsRequest
 */
export declare class QueryConsensusStateHeightsRequest extends Message<QueryConsensusStateHeightsRequest> {
    /**
     * client identifier
     *
     * @generated from field: string client_id = 1;
     */
    clientId: string;
    /**
     * pagination request
     *
     * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
     */
    pagination?: PageRequest;
    constructor(data?: PartialMessage<QueryConsensusStateHeightsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.QueryConsensusStateHeightsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryConsensusStateHeightsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryConsensusStateHeightsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryConsensusStateHeightsRequest;
    static equals(a: QueryConsensusStateHeightsRequest | PlainMessage<QueryConsensusStateHeightsRequest> | undefined, b: QueryConsensusStateHeightsRequest | PlainMessage<QueryConsensusStateHeightsRequest> | undefined): boolean;
}
/**
 * QueryConsensusStateHeightsResponse is the response type for the
 * Query/ConsensusStateHeights RPC method
 *
 * @generated from message ibc.core.client.v1.QueryConsensusStateHeightsResponse
 */
export declare class QueryConsensusStateHeightsResponse extends Message<QueryConsensusStateHeightsResponse> {
    /**
     * consensus state heights
     *
     * @generated from field: repeated ibc.core.client.v1.Height consensus_state_heights = 1;
     */
    consensusStateHeights: Height[];
    /**
     * pagination response
     *
     * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
     */
    pagination?: PageResponse;
    constructor(data?: PartialMessage<QueryConsensusStateHeightsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.QueryConsensusStateHeightsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryConsensusStateHeightsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryConsensusStateHeightsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryConsensusStateHeightsResponse;
    static equals(a: QueryConsensusStateHeightsResponse | PlainMessage<QueryConsensusStateHeightsResponse> | undefined, b: QueryConsensusStateHeightsResponse | PlainMessage<QueryConsensusStateHeightsResponse> | undefined): boolean;
}
/**
 * QueryClientStatusRequest is the request type for the Query/ClientStatus RPC
 * method
 *
 * @generated from message ibc.core.client.v1.QueryClientStatusRequest
 */
export declare class QueryClientStatusRequest extends Message<QueryClientStatusRequest> {
    /**
     * client unique identifier
     *
     * @generated from field: string client_id = 1;
     */
    clientId: string;
    constructor(data?: PartialMessage<QueryClientStatusRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.QueryClientStatusRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryClientStatusRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryClientStatusRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryClientStatusRequest;
    static equals(a: QueryClientStatusRequest | PlainMessage<QueryClientStatusRequest> | undefined, b: QueryClientStatusRequest | PlainMessage<QueryClientStatusRequest> | undefined): boolean;
}
/**
 * QueryClientStatusResponse is the response type for the Query/ClientStatus RPC
 * method. It returns the current status of the IBC client.
 *
 * @generated from message ibc.core.client.v1.QueryClientStatusResponse
 */
export declare class QueryClientStatusResponse extends Message<QueryClientStatusResponse> {
    /**
     * @generated from field: string status = 1;
     */
    status: string;
    constructor(data?: PartialMessage<QueryClientStatusResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.QueryClientStatusResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryClientStatusResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryClientStatusResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryClientStatusResponse;
    static equals(a: QueryClientStatusResponse | PlainMessage<QueryClientStatusResponse> | undefined, b: QueryClientStatusResponse | PlainMessage<QueryClientStatusResponse> | undefined): boolean;
}
/**
 * QueryClientParamsRequest is the request type for the Query/ClientParams RPC
 * method.
 *
 * @generated from message ibc.core.client.v1.QueryClientParamsRequest
 */
export declare class QueryClientParamsRequest extends Message<QueryClientParamsRequest> {
    constructor(data?: PartialMessage<QueryClientParamsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.QueryClientParamsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryClientParamsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryClientParamsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryClientParamsRequest;
    static equals(a: QueryClientParamsRequest | PlainMessage<QueryClientParamsRequest> | undefined, b: QueryClientParamsRequest | PlainMessage<QueryClientParamsRequest> | undefined): boolean;
}
/**
 * QueryClientParamsResponse is the response type for the Query/ClientParams RPC
 * method.
 *
 * @generated from message ibc.core.client.v1.QueryClientParamsResponse
 */
export declare class QueryClientParamsResponse extends Message<QueryClientParamsResponse> {
    /**
     * params defines the parameters of the module.
     *
     * @generated from field: ibc.core.client.v1.Params params = 1;
     */
    params?: Params;
    constructor(data?: PartialMessage<QueryClientParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.QueryClientParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryClientParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryClientParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryClientParamsResponse;
    static equals(a: QueryClientParamsResponse | PlainMessage<QueryClientParamsResponse> | undefined, b: QueryClientParamsResponse | PlainMessage<QueryClientParamsResponse> | undefined): boolean;
}
/**
 * QueryUpgradedClientStateRequest is the request type for the
 * Query/UpgradedClientState RPC method
 *
 * @generated from message ibc.core.client.v1.QueryUpgradedClientStateRequest
 */
export declare class QueryUpgradedClientStateRequest extends Message<QueryUpgradedClientStateRequest> {
    constructor(data?: PartialMessage<QueryUpgradedClientStateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.QueryUpgradedClientStateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryUpgradedClientStateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryUpgradedClientStateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryUpgradedClientStateRequest;
    static equals(a: QueryUpgradedClientStateRequest | PlainMessage<QueryUpgradedClientStateRequest> | undefined, b: QueryUpgradedClientStateRequest | PlainMessage<QueryUpgradedClientStateRequest> | undefined): boolean;
}
/**
 * QueryUpgradedClientStateResponse is the response type for the
 * Query/UpgradedClientState RPC method.
 *
 * @generated from message ibc.core.client.v1.QueryUpgradedClientStateResponse
 */
export declare class QueryUpgradedClientStateResponse extends Message<QueryUpgradedClientStateResponse> {
    /**
     * client state associated with the request identifier
     *
     * @generated from field: google.protobuf.Any upgraded_client_state = 1;
     */
    upgradedClientState?: Any;
    constructor(data?: PartialMessage<QueryUpgradedClientStateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.QueryUpgradedClientStateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryUpgradedClientStateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryUpgradedClientStateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryUpgradedClientStateResponse;
    static equals(a: QueryUpgradedClientStateResponse | PlainMessage<QueryUpgradedClientStateResponse> | undefined, b: QueryUpgradedClientStateResponse | PlainMessage<QueryUpgradedClientStateResponse> | undefined): boolean;
}
/**
 * QueryUpgradedConsensusStateRequest is the request type for the
 * Query/UpgradedConsensusState RPC method
 *
 * @generated from message ibc.core.client.v1.QueryUpgradedConsensusStateRequest
 */
export declare class QueryUpgradedConsensusStateRequest extends Message<QueryUpgradedConsensusStateRequest> {
    constructor(data?: PartialMessage<QueryUpgradedConsensusStateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.QueryUpgradedConsensusStateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryUpgradedConsensusStateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryUpgradedConsensusStateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryUpgradedConsensusStateRequest;
    static equals(a: QueryUpgradedConsensusStateRequest | PlainMessage<QueryUpgradedConsensusStateRequest> | undefined, b: QueryUpgradedConsensusStateRequest | PlainMessage<QueryUpgradedConsensusStateRequest> | undefined): boolean;
}
/**
 * QueryUpgradedConsensusStateResponse is the response type for the
 * Query/UpgradedConsensusState RPC method.
 *
 * @generated from message ibc.core.client.v1.QueryUpgradedConsensusStateResponse
 */
export declare class QueryUpgradedConsensusStateResponse extends Message<QueryUpgradedConsensusStateResponse> {
    /**
     * Consensus state associated with the request identifier
     *
     * @generated from field: google.protobuf.Any upgraded_consensus_state = 1;
     */
    upgradedConsensusState?: Any;
    constructor(data?: PartialMessage<QueryUpgradedConsensusStateResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.QueryUpgradedConsensusStateResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryUpgradedConsensusStateResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryUpgradedConsensusStateResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryUpgradedConsensusStateResponse;
    static equals(a: QueryUpgradedConsensusStateResponse | PlainMessage<QueryUpgradedConsensusStateResponse> | undefined, b: QueryUpgradedConsensusStateResponse | PlainMessage<QueryUpgradedConsensusStateResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map