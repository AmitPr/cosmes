// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file ibc/core/client/v1/client.proto (package ibc.core.client.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Any, Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Plan } from "../../../../cosmos/upgrade/v1beta1/upgrade_pb.js";
/**
 * IdentifiedClientState defines a client state with an additional client
 * identifier field.
 *
 * @generated from message ibc.core.client.v1.IdentifiedClientState
 */
export class IdentifiedClientState extends Message {
    constructor(data) {
        super();
        /**
         * client identifier
         *
         * @generated from field: string client_id = 1;
         */
        this.clientId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new IdentifiedClientState().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new IdentifiedClientState().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new IdentifiedClientState().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(IdentifiedClientState, a, b);
    }
}
IdentifiedClientState.runtime = proto3;
IdentifiedClientState.typeName = "ibc.core.client.v1.IdentifiedClientState";
IdentifiedClientState.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "client_state", kind: "message", T: Any },
]);
/**
 * ConsensusStateWithHeight defines a consensus state with an additional height
 * field.
 *
 * @generated from message ibc.core.client.v1.ConsensusStateWithHeight
 */
export class ConsensusStateWithHeight extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ConsensusStateWithHeight().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ConsensusStateWithHeight().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ConsensusStateWithHeight().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ConsensusStateWithHeight, a, b);
    }
}
ConsensusStateWithHeight.runtime = proto3;
ConsensusStateWithHeight.typeName = "ibc.core.client.v1.ConsensusStateWithHeight";
ConsensusStateWithHeight.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "height", kind: "message", T: Height },
    { no: 2, name: "consensus_state", kind: "message", T: Any },
]);
/**
 * ClientConsensusStates defines all the stored consensus states for a given
 * client.
 *
 * @generated from message ibc.core.client.v1.ClientConsensusStates
 */
export class ClientConsensusStates extends Message {
    constructor(data) {
        super();
        /**
         * client identifier
         *
         * @generated from field: string client_id = 1;
         */
        this.clientId = "";
        /**
         * consensus states and their heights associated with the client
         *
         * @generated from field: repeated ibc.core.client.v1.ConsensusStateWithHeight consensus_states = 2;
         */
        this.consensusStates = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ClientConsensusStates().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ClientConsensusStates().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ClientConsensusStates().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ClientConsensusStates, a, b);
    }
}
ClientConsensusStates.runtime = proto3;
ClientConsensusStates.typeName = "ibc.core.client.v1.ClientConsensusStates";
ClientConsensusStates.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "consensus_states", kind: "message", T: ConsensusStateWithHeight, repeated: true },
]);
/**
 * ClientUpdateProposal is a governance proposal. If it passes, the substitute
 * client's latest consensus state is copied over to the subject client. The proposal
 * handler may fail if the subject and the substitute do not match in client and
 * chain parameters (with exception to latest height, frozen height, and chain-id).
 *
 * @generated from message ibc.core.client.v1.ClientUpdateProposal
 */
export class ClientUpdateProposal extends Message {
    constructor(data) {
        super();
        /**
         * the title of the update proposal
         *
         * @generated from field: string title = 1;
         */
        this.title = "";
        /**
         * the description of the proposal
         *
         * @generated from field: string description = 2;
         */
        this.description = "";
        /**
         * the client identifier for the client to be updated if the proposal passes
         *
         * @generated from field: string subject_client_id = 3;
         */
        this.subjectClientId = "";
        /**
         * the substitute client identifier for the client standing in for the subject
         * client
         *
         * @generated from field: string substitute_client_id = 4;
         */
        this.substituteClientId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ClientUpdateProposal().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ClientUpdateProposal().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ClientUpdateProposal().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ClientUpdateProposal, a, b);
    }
}
ClientUpdateProposal.runtime = proto3;
ClientUpdateProposal.typeName = "ibc.core.client.v1.ClientUpdateProposal";
ClientUpdateProposal.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "subject_client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "substitute_client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * UpgradeProposal is a gov Content type for initiating an IBC breaking
 * upgrade.
 *
 * @generated from message ibc.core.client.v1.UpgradeProposal
 */
export class UpgradeProposal extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string title = 1;
         */
        this.title = "";
        /**
         * @generated from field: string description = 2;
         */
        this.description = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new UpgradeProposal().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new UpgradeProposal().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new UpgradeProposal().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(UpgradeProposal, a, b);
    }
}
UpgradeProposal.runtime = proto3;
UpgradeProposal.typeName = "ibc.core.client.v1.UpgradeProposal";
UpgradeProposal.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "plan", kind: "message", T: Plan },
    { no: 4, name: "upgraded_client_state", kind: "message", T: Any },
]);
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
export class Height extends Message {
    constructor(data) {
        super();
        /**
         * the revision that the client is currently on
         *
         * @generated from field: uint64 revision_number = 1;
         */
        this.revisionNumber = protoInt64.zero;
        /**
         * the height within the given revision
         *
         * @generated from field: uint64 revision_height = 2;
         */
        this.revisionHeight = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Height().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Height().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Height().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Height, a, b);
    }
}
Height.runtime = proto3;
Height.typeName = "ibc.core.client.v1.Height";
Height.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "revision_number", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "revision_height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * Params defines the set of IBC light client parameters.
 *
 * @generated from message ibc.core.client.v1.Params
 */
export class Params extends Message {
    constructor(data) {
        super();
        /**
         * allowed_clients defines the list of allowed client state types which can be created
         * and interacted with. If a client type is removed from the allowed clients list, usage
         * of this client will be disabled until it is added again to the list.
         *
         * @generated from field: repeated string allowed_clients = 1;
         */
        this.allowedClients = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Params().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Params().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Params().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Params, a, b);
    }
}
Params.runtime = proto3;
Params.typeName = "ibc.core.client.v1.Params";
Params.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "allowed_clients", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
//# sourceMappingURL=client_pb.js.map