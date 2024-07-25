// Since: cosmos-sdk 0.43
import { Any, Message, proto3, Timestamp } from "@bufbuild/protobuf";
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 *
 * @generated from message cosmos.authz.v1beta1.GenericAuthorization
 */
export class GenericAuthorization extends Message {
    constructor(data) {
        super();
        /**
         * Msg, identified by it's type URL, to grant unrestricted permissions to execute
         *
         * @generated from field: string msg = 1;
         */
        this.msg = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GenericAuthorization().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GenericAuthorization().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GenericAuthorization().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(GenericAuthorization, a, b);
    }
}
GenericAuthorization.runtime = proto3;
GenericAuthorization.typeName = "cosmos.authz.v1beta1.GenericAuthorization";
GenericAuthorization.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "msg", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 *
 * @generated from message cosmos.authz.v1beta1.Grant
 */
export class Grant extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Grant().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Grant().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Grant().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Grant, a, b);
    }
}
Grant.runtime = proto3;
Grant.typeName = "cosmos.authz.v1beta1.Grant";
Grant.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "authorization", kind: "message", T: Any },
    { no: 2, name: "expiration", kind: "message", T: Timestamp },
]);
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 *
 * @generated from message cosmos.authz.v1beta1.GrantAuthorization
 */
export class GrantAuthorization extends Message {
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
        return new GrantAuthorization().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GrantAuthorization().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GrantAuthorization().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(GrantAuthorization, a, b);
    }
}
GrantAuthorization.runtime = proto3;
GrantAuthorization.typeName = "cosmos.authz.v1beta1.GrantAuthorization";
GrantAuthorization.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "granter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "grantee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "authorization", kind: "message", T: Any },
    { no: 4, name: "expiration", kind: "message", T: Timestamp },
]);
/**
 * GrantQueueItem contains the list of TypeURL of a sdk.Msg.
 *
 * @generated from message cosmos.authz.v1beta1.GrantQueueItem
 */
export class GrantQueueItem extends Message {
    constructor(data) {
        super();
        /**
         * msg_type_urls contains the list of TypeURL of a sdk.Msg.
         *
         * @generated from field: repeated string msg_type_urls = 1;
         */
        this.msgTypeUrls = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GrantQueueItem().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GrantQueueItem().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GrantQueueItem().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(GrantQueueItem, a, b);
    }
}
GrantQueueItem.runtime = proto3;
GrantQueueItem.typeName = "cosmos.authz.v1beta1.GrantQueueItem";
GrantQueueItem.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "msg_type_urls", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
//# sourceMappingURL=authz_pb.js.map