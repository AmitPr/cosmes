// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file cosmos/params/v1beta1/query.proto (package cosmos.params.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
import { ParamChange } from "./params_pb.js";
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 *
 * @generated from message cosmos.params.v1beta1.QueryParamsRequest
 */
export class QueryParamsRequest extends Message {
    constructor(data) {
        super();
        /**
         * subspace defines the module to query the parameter for.
         *
         * @generated from field: string subspace = 1;
         */
        this.subspace = "";
        /**
         * key defines the key of the parameter in the subspace.
         *
         * @generated from field: string key = 2;
         */
        this.key = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryParamsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryParamsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryParamsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryParamsRequest, a, b);
    }
}
QueryParamsRequest.runtime = proto3;
QueryParamsRequest.typeName = "cosmos.params.v1beta1.QueryParamsRequest";
QueryParamsRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "subspace", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 *
 * @generated from message cosmos.params.v1beta1.QueryParamsResponse
 */
export class QueryParamsResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryParamsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryParamsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryParamsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryParamsResponse, a, b);
    }
}
QueryParamsResponse.runtime = proto3;
QueryParamsResponse.typeName = "cosmos.params.v1beta1.QueryParamsResponse";
QueryParamsResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "param", kind: "message", T: ParamChange },
]);
/**
 * QuerySubspacesRequest defines a request type for querying for all registered
 * subspaces and all keys for a subspace.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.params.v1beta1.QuerySubspacesRequest
 */
export class QuerySubspacesRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QuerySubspacesRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QuerySubspacesRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QuerySubspacesRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QuerySubspacesRequest, a, b);
    }
}
QuerySubspacesRequest.runtime = proto3;
QuerySubspacesRequest.typeName = "cosmos.params.v1beta1.QuerySubspacesRequest";
QuerySubspacesRequest.fields = proto3.util.newFieldList(() => []);
/**
 * QuerySubspacesResponse defines the response types for querying for all
 * registered subspaces and all keys for a subspace.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.params.v1beta1.QuerySubspacesResponse
 */
export class QuerySubspacesResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated cosmos.params.v1beta1.Subspace subspaces = 1;
         */
        this.subspaces = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QuerySubspacesResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QuerySubspacesResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QuerySubspacesResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QuerySubspacesResponse, a, b);
    }
}
QuerySubspacesResponse.runtime = proto3;
QuerySubspacesResponse.typeName = "cosmos.params.v1beta1.QuerySubspacesResponse";
QuerySubspacesResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "subspaces", kind: "message", T: Subspace, repeated: true },
]);
/**
 * Subspace defines a parameter subspace name and all the keys that exist for
 * the subspace.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.params.v1beta1.Subspace
 */
export class Subspace extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string subspace = 1;
         */
        this.subspace = "";
        /**
         * @generated from field: repeated string keys = 2;
         */
        this.keys = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Subspace().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Subspace().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Subspace().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Subspace, a, b);
    }
}
Subspace.runtime = proto3;
Subspace.typeName = "cosmos.params.v1beta1.Subspace";
Subspace.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "subspace", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "keys", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
//# sourceMappingURL=query_pb.js.map