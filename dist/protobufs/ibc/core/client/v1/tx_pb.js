// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file ibc/core/client/v1/tx.proto (package ibc.core.client.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Any, Message, proto3 } from "@bufbuild/protobuf";
/**
 * MsgCreateClient defines a message to create an IBC client
 *
 * @generated from message ibc.core.client.v1.MsgCreateClient
 */
export class MsgCreateClient extends Message {
    constructor(data) {
        super();
        /**
         * signer address
         *
         * @generated from field: string signer = 3;
         */
        this.signer = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCreateClient().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCreateClient().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCreateClient().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgCreateClient, a, b);
    }
}
MsgCreateClient.runtime = proto3;
MsgCreateClient.typeName = "ibc.core.client.v1.MsgCreateClient";
MsgCreateClient.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "client_state", kind: "message", T: Any },
    { no: 2, name: "consensus_state", kind: "message", T: Any },
    { no: 3, name: "signer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgCreateClientResponse defines the Msg/CreateClient response type.
 *
 * @generated from message ibc.core.client.v1.MsgCreateClientResponse
 */
export class MsgCreateClientResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgCreateClientResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgCreateClientResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgCreateClientResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgCreateClientResponse, a, b);
    }
}
MsgCreateClientResponse.runtime = proto3;
MsgCreateClientResponse.typeName = "ibc.core.client.v1.MsgCreateClientResponse";
MsgCreateClientResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given client message.
 *
 * @generated from message ibc.core.client.v1.MsgUpdateClient
 */
export class MsgUpdateClient extends Message {
    constructor(data) {
        super();
        /**
         * client unique identifier
         *
         * @generated from field: string client_id = 1;
         */
        this.clientId = "";
        /**
         * signer address
         *
         * @generated from field: string signer = 3;
         */
        this.signer = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateClient().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateClient().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateClient().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgUpdateClient, a, b);
    }
}
MsgUpdateClient.runtime = proto3;
MsgUpdateClient.typeName = "ibc.core.client.v1.MsgUpdateClient";
MsgUpdateClient.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "client_message", kind: "message", T: Any },
    { no: 3, name: "signer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgUpdateClientResponse defines the Msg/UpdateClient response type.
 *
 * @generated from message ibc.core.client.v1.MsgUpdateClientResponse
 */
export class MsgUpdateClientResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateClientResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateClientResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateClientResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgUpdateClientResponse, a, b);
    }
}
MsgUpdateClientResponse.runtime = proto3;
MsgUpdateClientResponse.typeName = "ibc.core.client.v1.MsgUpdateClientResponse";
MsgUpdateClientResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 *
 * @generated from message ibc.core.client.v1.MsgUpgradeClient
 */
export class MsgUpgradeClient extends Message {
    constructor(data) {
        super();
        /**
         * client unique identifier
         *
         * @generated from field: string client_id = 1;
         */
        this.clientId = "";
        /**
         * proof that old chain committed to new client
         *
         * @generated from field: bytes proof_upgrade_client = 4;
         */
        this.proofUpgradeClient = new Uint8Array(0);
        /**
         * proof that old chain committed to new consensus state
         *
         * @generated from field: bytes proof_upgrade_consensus_state = 5;
         */
        this.proofUpgradeConsensusState = new Uint8Array(0);
        /**
         * signer address
         *
         * @generated from field: string signer = 6;
         */
        this.signer = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpgradeClient().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpgradeClient().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpgradeClient().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgUpgradeClient, a, b);
    }
}
MsgUpgradeClient.runtime = proto3;
MsgUpgradeClient.typeName = "ibc.core.client.v1.MsgUpgradeClient";
MsgUpgradeClient.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "client_state", kind: "message", T: Any },
    { no: 3, name: "consensus_state", kind: "message", T: Any },
    { no: 4, name: "proof_upgrade_client", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 5, name: "proof_upgrade_consensus_state", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 6, name: "signer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgUpgradeClientResponse defines the Msg/UpgradeClient response type.
 *
 * @generated from message ibc.core.client.v1.MsgUpgradeClientResponse
 */
export class MsgUpgradeClientResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpgradeClientResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpgradeClientResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpgradeClientResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgUpgradeClientResponse, a, b);
    }
}
MsgUpgradeClientResponse.runtime = proto3;
MsgUpgradeClientResponse.typeName = "ibc.core.client.v1.MsgUpgradeClientResponse";
MsgUpgradeClientResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 * Warning: DEPRECATED
 *
 * @generated from message ibc.core.client.v1.MsgSubmitMisbehaviour
 */
export class MsgSubmitMisbehaviour extends Message {
    constructor(data) {
        super();
        /**
         * client unique identifier
         *
         * @generated from field: string client_id = 1 [deprecated = true];
         * @deprecated
         */
        this.clientId = "";
        /**
         * signer address
         *
         * @generated from field: string signer = 3 [deprecated = true];
         * @deprecated
         */
        this.signer = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSubmitMisbehaviour().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSubmitMisbehaviour().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSubmitMisbehaviour().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgSubmitMisbehaviour, a, b);
    }
}
MsgSubmitMisbehaviour.runtime = proto3;
MsgSubmitMisbehaviour.typeName = "ibc.core.client.v1.MsgSubmitMisbehaviour";
MsgSubmitMisbehaviour.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "client_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "misbehaviour", kind: "message", T: Any },
    { no: 3, name: "signer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 *
 * @generated from message ibc.core.client.v1.MsgSubmitMisbehaviourResponse
 */
export class MsgSubmitMisbehaviourResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgSubmitMisbehaviourResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgSubmitMisbehaviourResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgSubmitMisbehaviourResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgSubmitMisbehaviourResponse, a, b);
    }
}
MsgSubmitMisbehaviourResponse.runtime = proto3;
MsgSubmitMisbehaviourResponse.typeName = "ibc.core.client.v1.MsgSubmitMisbehaviourResponse";
MsgSubmitMisbehaviourResponse.fields = proto3.util.newFieldList(() => []);
//# sourceMappingURL=tx_pb.js.map