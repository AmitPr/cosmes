// Since: cosmos-sdk 0.43
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * EventGrant is emitted on Msg/Grant
 *
 * @generated from message cosmos.authz.v1beta1.EventGrant
 */
export class EventGrant extends Message {
    constructor(data) {
        super();
        /**
         * Msg type URL for which an autorization is granted
         *
         * @generated from field: string msg_type_url = 2;
         */
        this.msgTypeUrl = "";
        /**
         * Granter account address
         *
         * @generated from field: string granter = 3;
         */
        this.granter = "";
        /**
         * Grantee account address
         *
         * @generated from field: string grantee = 4;
         */
        this.grantee = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EventGrant().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventGrant().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventGrant().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EventGrant, a, b);
    }
}
EventGrant.runtime = proto3;
EventGrant.typeName = "cosmos.authz.v1beta1.EventGrant";
EventGrant.fields = proto3.util.newFieldList(() => [
    { no: 2, name: "msg_type_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "granter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "grantee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * EventRevoke is emitted on Msg/Revoke
 *
 * @generated from message cosmos.authz.v1beta1.EventRevoke
 */
export class EventRevoke extends Message {
    constructor(data) {
        super();
        /**
         * Msg type URL for which an autorization is revoked
         *
         * @generated from field: string msg_type_url = 2;
         */
        this.msgTypeUrl = "";
        /**
         * Granter account address
         *
         * @generated from field: string granter = 3;
         */
        this.granter = "";
        /**
         * Grantee account address
         *
         * @generated from field: string grantee = 4;
         */
        this.grantee = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EventRevoke().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EventRevoke().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EventRevoke().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EventRevoke, a, b);
    }
}
EventRevoke.runtime = proto3;
EventRevoke.typeName = "cosmos.authz.v1beta1.EventRevoke";
EventRevoke.fields = proto3.util.newFieldList(() => [
    { no: 2, name: "msg_type_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "granter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "grantee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
//# sourceMappingURL=event_pb.js.map