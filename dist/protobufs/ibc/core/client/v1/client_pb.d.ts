import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { Plan } from "../../../../cosmos/upgrade/v1beta1/upgrade_pb.js";
/**
 * IdentifiedClientState defines a client state with an additional client
 * identifier field.
 *
 * @generated from message ibc.core.client.v1.IdentifiedClientState
 */
export declare class IdentifiedClientState extends Message<IdentifiedClientState> {
    /**
     * client identifier
     *
     * @generated from field: string client_id = 1;
     */
    clientId: string;
    /**
     * client state
     *
     * @generated from field: google.protobuf.Any client_state = 2;
     */
    clientState?: Any;
    constructor(data?: PartialMessage<IdentifiedClientState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.IdentifiedClientState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IdentifiedClientState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IdentifiedClientState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IdentifiedClientState;
    static equals(a: IdentifiedClientState | PlainMessage<IdentifiedClientState> | undefined, b: IdentifiedClientState | PlainMessage<IdentifiedClientState> | undefined): boolean;
}
/**
 * ConsensusStateWithHeight defines a consensus state with an additional height
 * field.
 *
 * @generated from message ibc.core.client.v1.ConsensusStateWithHeight
 */
export declare class ConsensusStateWithHeight extends Message<ConsensusStateWithHeight> {
    /**
     * consensus state height
     *
     * @generated from field: ibc.core.client.v1.Height height = 1;
     */
    height?: Height;
    /**
     * consensus state
     *
     * @generated from field: google.protobuf.Any consensus_state = 2;
     */
    consensusState?: Any;
    constructor(data?: PartialMessage<ConsensusStateWithHeight>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.ConsensusStateWithHeight";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConsensusStateWithHeight;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConsensusStateWithHeight;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConsensusStateWithHeight;
    static equals(a: ConsensusStateWithHeight | PlainMessage<ConsensusStateWithHeight> | undefined, b: ConsensusStateWithHeight | PlainMessage<ConsensusStateWithHeight> | undefined): boolean;
}
/**
 * ClientConsensusStates defines all the stored consensus states for a given
 * client.
 *
 * @generated from message ibc.core.client.v1.ClientConsensusStates
 */
export declare class ClientConsensusStates extends Message<ClientConsensusStates> {
    /**
     * client identifier
     *
     * @generated from field: string client_id = 1;
     */
    clientId: string;
    /**
     * consensus states and their heights associated with the client
     *
     * @generated from field: repeated ibc.core.client.v1.ConsensusStateWithHeight consensus_states = 2;
     */
    consensusStates: ConsensusStateWithHeight[];
    constructor(data?: PartialMessage<ClientConsensusStates>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.ClientConsensusStates";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientConsensusStates;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientConsensusStates;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientConsensusStates;
    static equals(a: ClientConsensusStates | PlainMessage<ClientConsensusStates> | undefined, b: ClientConsensusStates | PlainMessage<ClientConsensusStates> | undefined): boolean;
}
/**
 * ClientUpdateProposal is a governance proposal. If it passes, the substitute
 * client's latest consensus state is copied over to the subject client. The proposal
 * handler may fail if the subject and the substitute do not match in client and
 * chain parameters (with exception to latest height, frozen height, and chain-id).
 *
 * @generated from message ibc.core.client.v1.ClientUpdateProposal
 */
export declare class ClientUpdateProposal extends Message<ClientUpdateProposal> {
    /**
     * the title of the update proposal
     *
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * the description of the proposal
     *
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * the client identifier for the client to be updated if the proposal passes
     *
     * @generated from field: string subject_client_id = 3;
     */
    subjectClientId: string;
    /**
     * the substitute client identifier for the client standing in for the subject
     * client
     *
     * @generated from field: string substitute_client_id = 4;
     */
    substituteClientId: string;
    constructor(data?: PartialMessage<ClientUpdateProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.ClientUpdateProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientUpdateProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientUpdateProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientUpdateProposal;
    static equals(a: ClientUpdateProposal | PlainMessage<ClientUpdateProposal> | undefined, b: ClientUpdateProposal | PlainMessage<ClientUpdateProposal> | undefined): boolean;
}
/**
 * UpgradeProposal is a gov Content type for initiating an IBC breaking
 * upgrade.
 *
 * @generated from message ibc.core.client.v1.UpgradeProposal
 */
export declare class UpgradeProposal extends Message<UpgradeProposal> {
    /**
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * @generated from field: cosmos.upgrade.v1beta1.Plan plan = 3;
     */
    plan?: Plan;
    /**
     * An UpgradedClientState must be provided to perform an IBC breaking upgrade.
     * This will make the chain commit to the correct upgraded (self) client state
     * before the upgrade occurs, so that connecting chains can verify that the
     * new upgraded client is valid by verifying a proof on the previous version
     * of the chain. This will allow IBC connections to persist smoothly across
     * planned chain upgrades
     *
     * @generated from field: google.protobuf.Any upgraded_client_state = 4;
     */
    upgradedClientState?: Any;
    constructor(data?: PartialMessage<UpgradeProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.UpgradeProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpgradeProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpgradeProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpgradeProposal;
    static equals(a: UpgradeProposal | PlainMessage<UpgradeProposal> | undefined, b: UpgradeProposal | PlainMessage<UpgradeProposal> | undefined): boolean;
}
/**
 * Height is a monotonically increasing data type
 * that can be compared against another Height for the purposes of updating and
 * freezing clients
 *
 * Normally the RevisionHeight is incremented at each height while keeping
 * RevisionNumber the same. However some consensus algorithms may choose to
 * reset the height in certain conditions e.g. hard forks, state-machine
 * breaking changes In these cases, the RevisionNumber is incremented so that
 * height continues to be monitonically increasing even as the RevisionHeight
 * gets reset
 *
 * @generated from message ibc.core.client.v1.Height
 */
export declare class Height extends Message<Height> {
    /**
     * the revision that the client is currently on
     *
     * @generated from field: uint64 revision_number = 1;
     */
    revisionNumber: bigint;
    /**
     * the height within the given revision
     *
     * @generated from field: uint64 revision_height = 2;
     */
    revisionHeight: bigint;
    constructor(data?: PartialMessage<Height>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.Height";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Height;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Height;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Height;
    static equals(a: Height | PlainMessage<Height> | undefined, b: Height | PlainMessage<Height> | undefined): boolean;
}
/**
 * Params defines the set of IBC light client parameters.
 *
 * @generated from message ibc.core.client.v1.Params
 */
export declare class Params extends Message<Params> {
    /**
     * allowed_clients defines the list of allowed client state types which can be created
     * and interacted with. If a client type is removed from the allowed clients list, usage
     * of this client will be disabled until it is added again to the list.
     *
     * @generated from field: repeated string allowed_clients = 1;
     */
    allowedClients: string[];
    constructor(data?: PartialMessage<Params>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.client.v1.Params";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params;
    static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean;
}
//# sourceMappingURL=client_pb.d.ts.map