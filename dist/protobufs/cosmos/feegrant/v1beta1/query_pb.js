// Since: cosmos-sdk 0.43
import { Message, proto3 } from "@bufbuild/protobuf";
import { Grant } from "./feegrant_pb.js";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination_pb.js";
/**
 * QueryAllowanceRequest is the request type for the Query/Allowance RPC method.
 *
 * @generated from message cosmos.feegrant.v1beta1.QueryAllowanceRequest
 */
export class QueryAllowanceRequest extends Message {
    constructor(data) {
        super();
        /**
         * granter is the address of the user granting an allowance of their funds.
         *
         * @generated from field: string granter = 1;
         */
        this.granter = "";
        /**
         * grantee is the address of the user being granted an allowance of another user's funds.
         *
         * @generated from field: string grantee = 2;
         */
        this.grantee = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryAllowanceRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryAllowanceRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryAllowanceRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryAllowanceRequest, a, b);
    }
}
QueryAllowanceRequest.runtime = proto3;
QueryAllowanceRequest.typeName = "cosmos.feegrant.v1beta1.QueryAllowanceRequest";
QueryAllowanceRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "granter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "grantee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * QueryAllowanceResponse is the response type for the Query/Allowance RPC method.
 *
 * @generated from message cosmos.feegrant.v1beta1.QueryAllowanceResponse
 */
export class QueryAllowanceResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryAllowanceResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryAllowanceResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryAllowanceResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryAllowanceResponse, a, b);
    }
}
QueryAllowanceResponse.runtime = proto3;
QueryAllowanceResponse.typeName = "cosmos.feegrant.v1beta1.QueryAllowanceResponse";
QueryAllowanceResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "allowance", kind: "message", T: Grant },
]);
/**
 * QueryAllowancesRequest is the request type for the Query/Allowances RPC method.
 *
 * @generated from message cosmos.feegrant.v1beta1.QueryAllowancesRequest
 */
export class QueryAllowancesRequest extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string grantee = 1;
         */
        this.grantee = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryAllowancesRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryAllowancesRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryAllowancesRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryAllowancesRequest, a, b);
    }
}
QueryAllowancesRequest.runtime = proto3;
QueryAllowancesRequest.typeName = "cosmos.feegrant.v1beta1.QueryAllowancesRequest";
QueryAllowancesRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "grantee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
]);
/**
 * QueryAllowancesResponse is the response type for the Query/Allowances RPC method.
 *
 * @generated from message cosmos.feegrant.v1beta1.QueryAllowancesResponse
 */
export class QueryAllowancesResponse extends Message {
    constructor(data) {
        super();
        /**
         * allowances are allowance's granted for grantee by granter.
         *
         * @generated from field: repeated cosmos.feegrant.v1beta1.Grant allowances = 1;
         */
        this.allowances = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryAllowancesResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryAllowancesResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryAllowancesResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryAllowancesResponse, a, b);
    }
}
QueryAllowancesResponse.runtime = proto3;
QueryAllowancesResponse.typeName = "cosmos.feegrant.v1beta1.QueryAllowancesResponse";
QueryAllowancesResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "allowances", kind: "message", T: Grant, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
]);
/**
 * QueryAllowancesByGranterRequest is the request type for the Query/AllowancesByGranter RPC method.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.feegrant.v1beta1.QueryAllowancesByGranterRequest
 */
export class QueryAllowancesByGranterRequest extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string granter = 1;
         */
        this.granter = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryAllowancesByGranterRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryAllowancesByGranterRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryAllowancesByGranterRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryAllowancesByGranterRequest, a, b);
    }
}
QueryAllowancesByGranterRequest.runtime = proto3;
QueryAllowancesByGranterRequest.typeName = "cosmos.feegrant.v1beta1.QueryAllowancesByGranterRequest";
QueryAllowancesByGranterRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "granter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
]);
/**
 * QueryAllowancesByGranterResponse is the response type for the Query/AllowancesByGranter RPC method.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.feegrant.v1beta1.QueryAllowancesByGranterResponse
 */
export class QueryAllowancesByGranterResponse extends Message {
    constructor(data) {
        super();
        /**
         * allowances that have been issued by the granter.
         *
         * @generated from field: repeated cosmos.feegrant.v1beta1.Grant allowances = 1;
         */
        this.allowances = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryAllowancesByGranterResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryAllowancesByGranterResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryAllowancesByGranterResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryAllowancesByGranterResponse, a, b);
    }
}
QueryAllowancesByGranterResponse.runtime = proto3;
QueryAllowancesByGranterResponse.typeName = "cosmos.feegrant.v1beta1.QueryAllowancesByGranterResponse";
QueryAllowancesByGranterResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "allowances", kind: "message", T: Grant, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
]);
//# sourceMappingURL=query_pb.js.map