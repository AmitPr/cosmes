// Since: cosmos-sdk 0.43
import { Message, proto3 } from "@bufbuild/protobuf";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination_pb.js";
import { Grant, GrantAuthorization } from "./authz_pb.js";
/**
 * QueryGrantsRequest is the request type for the Query/Grants RPC method.
 *
 * @generated from message cosmos.authz.v1beta1.QueryGrantsRequest
 */
export class QueryGrantsRequest extends Message {
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
         * Optional, msg_type_url, when set, will query only grants matching given msg type.
         *
         * @generated from field: string msg_type_url = 3;
         */
        this.msgTypeUrl = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGrantsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGrantsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGrantsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryGrantsRequest, a, b);
    }
}
QueryGrantsRequest.runtime = proto3;
QueryGrantsRequest.typeName = "cosmos.authz.v1beta1.QueryGrantsRequest";
QueryGrantsRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "granter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "grantee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "msg_type_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "pagination", kind: "message", T: PageRequest },
]);
/**
 * QueryGrantsResponse is the response type for the Query/Authorizations RPC method.
 *
 * @generated from message cosmos.authz.v1beta1.QueryGrantsResponse
 */
export class QueryGrantsResponse extends Message {
    constructor(data) {
        super();
        /**
         * authorizations is a list of grants granted for grantee by granter.
         *
         * @generated from field: repeated cosmos.authz.v1beta1.Grant grants = 1;
         */
        this.grants = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGrantsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGrantsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGrantsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryGrantsResponse, a, b);
    }
}
QueryGrantsResponse.runtime = proto3;
QueryGrantsResponse.typeName = "cosmos.authz.v1beta1.QueryGrantsResponse";
QueryGrantsResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "grants", kind: "message", T: Grant, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
]);
/**
 * QueryGranterGrantsRequest is the request type for the Query/GranterGrants RPC method.
 *
 * @generated from message cosmos.authz.v1beta1.QueryGranterGrantsRequest
 */
export class QueryGranterGrantsRequest extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string granter = 1;
         */
        this.granter = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGranterGrantsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGranterGrantsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGranterGrantsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryGranterGrantsRequest, a, b);
    }
}
QueryGranterGrantsRequest.runtime = proto3;
QueryGranterGrantsRequest.typeName = "cosmos.authz.v1beta1.QueryGranterGrantsRequest";
QueryGranterGrantsRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "granter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
]);
/**
 * QueryGranterGrantsResponse is the response type for the Query/GranterGrants RPC method.
 *
 * @generated from message cosmos.authz.v1beta1.QueryGranterGrantsResponse
 */
export class QueryGranterGrantsResponse extends Message {
    constructor(data) {
        super();
        /**
         * grants is a list of grants granted by the granter.
         *
         * @generated from field: repeated cosmos.authz.v1beta1.GrantAuthorization grants = 1;
         */
        this.grants = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGranterGrantsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGranterGrantsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGranterGrantsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryGranterGrantsResponse, a, b);
    }
}
QueryGranterGrantsResponse.runtime = proto3;
QueryGranterGrantsResponse.typeName = "cosmos.authz.v1beta1.QueryGranterGrantsResponse";
QueryGranterGrantsResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "grants", kind: "message", T: GrantAuthorization, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
]);
/**
 * QueryGranteeGrantsRequest is the request type for the Query/IssuedGrants RPC method.
 *
 * @generated from message cosmos.authz.v1beta1.QueryGranteeGrantsRequest
 */
export class QueryGranteeGrantsRequest extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string grantee = 1;
         */
        this.grantee = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGranteeGrantsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGranteeGrantsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGranteeGrantsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryGranteeGrantsRequest, a, b);
    }
}
QueryGranteeGrantsRequest.runtime = proto3;
QueryGranteeGrantsRequest.typeName = "cosmos.authz.v1beta1.QueryGranteeGrantsRequest";
QueryGranteeGrantsRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "grantee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
]);
/**
 * QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants RPC method.
 *
 * @generated from message cosmos.authz.v1beta1.QueryGranteeGrantsResponse
 */
export class QueryGranteeGrantsResponse extends Message {
    constructor(data) {
        super();
        /**
         * grants is a list of grants granted to the grantee.
         *
         * @generated from field: repeated cosmos.authz.v1beta1.GrantAuthorization grants = 1;
         */
        this.grants = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryGranteeGrantsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryGranteeGrantsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryGranteeGrantsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryGranteeGrantsResponse, a, b);
    }
}
QueryGranteeGrantsResponse.runtime = proto3;
QueryGranteeGrantsResponse.typeName = "cosmos.authz.v1beta1.QueryGranteeGrantsResponse";
QueryGranteeGrantsResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "grants", kind: "message", T: GrantAuthorization, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
]);
//# sourceMappingURL=query_pb.js.map