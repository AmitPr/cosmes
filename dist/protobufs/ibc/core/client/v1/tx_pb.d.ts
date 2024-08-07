import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
/**
 * MsgCreateClient defines a message to create an IBC client
 *
 * @generated from message ibc.core.client.v1.MsgCreateClient
 */
export declare class MsgCreateClient extends Message<MsgCreateClient> {
    /**
     * light client state
     *
     * @generated from field: google.protobuf.Any client_state = 1;
     */
    clientState?: Any;
    /**
     * consensus state associated with the client that corresponds to a given
     * height.
     *
     * @generated from field: google.protobuf.Any consensus_state = 2;
     */
    consensusState?: Any;
    /**
     * signer address
     *
     * @generated from field: string signer = 3;
     */
    signer: string;
    constructor(data?: PartialMessage<MsgCreateClient>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.MsgCreateClient";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateClient;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateClient;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateClient;
    static equals(a: MsgCreateClient | PlainMessage<MsgCreateClient> | undefined, b: MsgCreateClient | PlainMessage<MsgCreateClient> | undefined): boolean;
}
/**
 * MsgCreateClientResponse defines the Msg/CreateClient response type.
 *
 * @generated from message ibc.core.client.v1.MsgCreateClientResponse
 */
export declare class MsgCreateClientResponse extends Message<MsgCreateClientResponse> {
    constructor(data?: PartialMessage<MsgCreateClientResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.MsgCreateClientResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateClientResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateClientResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateClientResponse;
    static equals(a: MsgCreateClientResponse | PlainMessage<MsgCreateClientResponse> | undefined, b: MsgCreateClientResponse | PlainMessage<MsgCreateClientResponse> | undefined): boolean;
}
/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given client message.
 *
 * @generated from message ibc.core.client.v1.MsgUpdateClient
 */
export declare class MsgUpdateClient extends Message<MsgUpdateClient> {
    /**
     * client unique identifier
     *
     * @generated from field: string client_id = 1;
     */
    clientId: string;
    /**
     * client message to update the light client
     *
     * @generated from field: google.protobuf.Any client_message = 2;
     */
    clientMessage?: Any;
    /**
     * signer address
     *
     * @generated from field: string signer = 3;
     */
    signer: string;
    constructor(data?: PartialMessage<MsgUpdateClient>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.MsgUpdateClient";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateClient;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateClient;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateClient;
    static equals(a: MsgUpdateClient | PlainMessage<MsgUpdateClient> | undefined, b: MsgUpdateClient | PlainMessage<MsgUpdateClient> | undefined): boolean;
}
/**
 * MsgUpdateClientResponse defines the Msg/UpdateClient response type.
 *
 * @generated from message ibc.core.client.v1.MsgUpdateClientResponse
 */
export declare class MsgUpdateClientResponse extends Message<MsgUpdateClientResponse> {
    constructor(data?: PartialMessage<MsgUpdateClientResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.MsgUpdateClientResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateClientResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateClientResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateClientResponse;
    static equals(a: MsgUpdateClientResponse | PlainMessage<MsgUpdateClientResponse> | undefined, b: MsgUpdateClientResponse | PlainMessage<MsgUpdateClientResponse> | undefined): boolean;
}
/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 *
 * @generated from message ibc.core.client.v1.MsgUpgradeClient
 */
export declare class MsgUpgradeClient extends Message<MsgUpgradeClient> {
    /**
     * client unique identifier
     *
     * @generated from field: string client_id = 1;
     */
    clientId: string;
    /**
     * upgraded client state
     *
     * @generated from field: google.protobuf.Any client_state = 2;
     */
    clientState?: Any;
    /**
     * upgraded consensus state, only contains enough information to serve as a
     * basis of trust in update logic
     *
     * @generated from field: google.protobuf.Any consensus_state = 3;
     */
    consensusState?: Any;
    /**
     * proof that old chain committed to new client
     *
     * @generated from field: bytes proof_upgrade_client = 4;
     */
    proofUpgradeClient: Uint8Array;
    /**
     * proof that old chain committed to new consensus state
     *
     * @generated from field: bytes proof_upgrade_consensus_state = 5;
     */
    proofUpgradeConsensusState: Uint8Array;
    /**
     * signer address
     *
     * @generated from field: string signer = 6;
     */
    signer: string;
    constructor(data?: PartialMessage<MsgUpgradeClient>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.MsgUpgradeClient";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpgradeClient;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpgradeClient;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpgradeClient;
    static equals(a: MsgUpgradeClient | PlainMessage<MsgUpgradeClient> | undefined, b: MsgUpgradeClient | PlainMessage<MsgUpgradeClient> | undefined): boolean;
}
/**
 * MsgUpgradeClientResponse defines the Msg/UpgradeClient response type.
 *
 * @generated from message ibc.core.client.v1.MsgUpgradeClientResponse
 */
export declare class MsgUpgradeClientResponse extends Message<MsgUpgradeClientResponse> {
    constructor(data?: PartialMessage<MsgUpgradeClientResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.MsgUpgradeClientResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpgradeClientResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpgradeClientResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpgradeClientResponse;
    static equals(a: MsgUpgradeClientResponse | PlainMessage<MsgUpgradeClientResponse> | undefined, b: MsgUpgradeClientResponse | PlainMessage<MsgUpgradeClientResponse> | undefined): boolean;
}
/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 * Warning: DEPRECATED
 *
 * @generated from message ibc.core.client.v1.MsgSubmitMisbehaviour
 */
export declare class MsgSubmitMisbehaviour extends Message<MsgSubmitMisbehaviour> {
    /**
     * client unique identifier
     *
     * @generated from field: string client_id = 1 [deprecated = true];
     * @deprecated
     */
    clientId: string;
    /**
     * misbehaviour used for freezing the light client
     *
     * @generated from field: google.protobuf.Any misbehaviour = 2 [deprecated = true];
     * @deprecated
     */
    misbehaviour?: Any;
    /**
     * signer address
     *
     * @generated from field: string signer = 3 [deprecated = true];
     * @deprecated
     */
    signer: string;
    constructor(data?: PartialMessage<MsgSubmitMisbehaviour>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.MsgSubmitMisbehaviour";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSubmitMisbehaviour;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSubmitMisbehaviour;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSubmitMisbehaviour;
    static equals(a: MsgSubmitMisbehaviour | PlainMessage<MsgSubmitMisbehaviour> | undefined, b: MsgSubmitMisbehaviour | PlainMessage<MsgSubmitMisbehaviour> | undefined): boolean;
}
/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 *
 * @generated from message ibc.core.client.v1.MsgSubmitMisbehaviourResponse
 */
export declare class MsgSubmitMisbehaviourResponse extends Message<MsgSubmitMisbehaviourResponse> {
    constructor(data?: PartialMessage<MsgSubmitMisbehaviourResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.MsgSubmitMisbehaviourResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSubmitMisbehaviourResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSubmitMisbehaviourResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSubmitMisbehaviourResponse;
    static equals(a: MsgSubmitMisbehaviourResponse | PlainMessage<MsgSubmitMisbehaviourResponse> | undefined, b: MsgSubmitMisbehaviourResponse | PlainMessage<MsgSubmitMisbehaviourResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map