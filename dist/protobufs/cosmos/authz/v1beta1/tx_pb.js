// Since: cosmos-sdk 0.43
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { Grant } from "./authz_pb.js";
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 *
 * @generated from message cosmos.authz.v1beta1.MsgGrant
 */
export class MsgGrant extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string granter = 1;
         */
        this.granter = "";
        /**
         * @generated from field: string grantee = 2;
         */
        this.grantee = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgGrant().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgGrant().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgGrant().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgGrant, a, b);
    }
}
MsgGrant.runtime = proto3;
MsgGrant.typeName = "cosmos.authz.v1beta1.MsgGrant";
MsgGrant.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "granter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "grantee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "grant", kind: "message", T: Grant },
]);
/**
 * MsgExecResponse defines the Msg/MsgExecResponse response type.
 *
 * @generated from message cosmos.authz.v1beta1.MsgExecResponse
 */
export class MsgExecResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated bytes results = 1;
         */
        this.results = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgExecResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgExecResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgExecResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgExecResponse, a, b);
    }
}
MsgExecResponse.runtime = proto3;
MsgExecResponse.typeName = "cosmos.authz.v1beta1.MsgExecResponse";
MsgExecResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "results", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
]);
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 *
 * @generated from message cosmos.authz.v1beta1.MsgExec
 */
export class MsgExec extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string grantee = 1;
         */
        this.grantee = "";
        /**
         * Execute Msg.
         * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
         * triple and validate it.
         *
         * @generated from field: repeated google.protobuf.Any msgs = 2;
         */
        this.msgs = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgExec().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgExec().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgExec().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgExec, a, b);
    }
}
MsgExec.runtime = proto3;
MsgExec.typeName = "cosmos.authz.v1beta1.MsgExec";
MsgExec.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "grantee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "msgs", kind: "message", T: Any, repeated: true },
]);
/**
 * MsgGrantResponse defines the Msg/MsgGrant response type.
 *
 * @generated from message cosmos.authz.v1beta1.MsgGrantResponse
 */
export class MsgGrantResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgGrantResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgGrantResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgGrantResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgGrantResponse, a, b);
    }
}
MsgGrantResponse.runtime = proto3;
MsgGrantResponse.typeName = "cosmos.authz.v1beta1.MsgGrantResponse";
MsgGrantResponse.fields = proto3.util.newFieldList(() => []);
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 *
 * @generated from message cosmos.authz.v1beta1.MsgRevoke
 */
export class MsgRevoke extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string granter = 1;
         */
        this.granter = "";
        /**
         * @generated from field: string grantee = 2;
         */
        this.grantee = "";
        /**
         * @generated from field: string msg_type_url = 3;
         */
        this.msgTypeUrl = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgRevoke().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgRevoke().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgRevoke().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgRevoke, a, b);
    }
}
MsgRevoke.runtime = proto3;
MsgRevoke.typeName = "cosmos.authz.v1beta1.MsgRevoke";
MsgRevoke.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "granter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "grantee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "msg_type_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * MsgRevokeResponse defines the Msg/MsgRevokeResponse response type.
 *
 * @generated from message cosmos.authz.v1beta1.MsgRevokeResponse
 */
export class MsgRevokeResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgRevokeResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgRevokeResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgRevokeResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgRevokeResponse, a, b);
    }
}
MsgRevokeResponse.runtime = proto3;
MsgRevokeResponse.typeName = "cosmos.authz.v1beta1.MsgRevokeResponse";
MsgRevokeResponse.fields = proto3.util.newFieldList(() => []);
//# sourceMappingURL=tx_pb.js.map