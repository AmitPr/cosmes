// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file ibc/applications/interchain_accounts/controller/v1/query.proto (package ibc.applications.interchain_accounts.controller.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./controller_pb.js";
/**
 * QueryInterchainAccountRequest is the request type for the Query/InterchainAccount RPC method.
 *
 * @generated from message ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountRequest
 */
export class QueryInterchainAccountRequest extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string owner = 1;
         */
        this.owner = "";
        /**
         * @generated from field: string connection_id = 2;
         */
        this.connectionId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryInterchainAccountRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryInterchainAccountRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryInterchainAccountRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryInterchainAccountRequest, a, b);
    }
}
QueryInterchainAccountRequest.runtime = proto3;
QueryInterchainAccountRequest.typeName = "ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountRequest";
QueryInterchainAccountRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "connection_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * QueryInterchainAccountResponse the response type for the Query/InterchainAccount RPC method.
 *
 * @generated from message ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountResponse
 */
export class QueryInterchainAccountResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string address = 1;
         */
        this.address = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryInterchainAccountResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryInterchainAccountResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryInterchainAccountResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryInterchainAccountResponse, a, b);
    }
}
QueryInterchainAccountResponse.runtime = proto3;
QueryInterchainAccountResponse.typeName = "ibc.applications.interchain_accounts.controller.v1.QueryInterchainAccountResponse";
QueryInterchainAccountResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message ibc.applications.interchain_accounts.controller.v1.QueryParamsRequest
 */
export class QueryParamsRequest extends Message {
    constructor(data) {
        super();
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
QueryParamsRequest.typeName = "ibc.applications.interchain_accounts.controller.v1.QueryParamsRequest";
QueryParamsRequest.fields = proto3.util.newFieldList(() => []);
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 *
 * @generated from message ibc.applications.interchain_accounts.controller.v1.QueryParamsResponse
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
QueryParamsResponse.typeName = "ibc.applications.interchain_accounts.controller.v1.QueryParamsResponse";
QueryParamsResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
]);
//# sourceMappingURL=query_pb.js.map