// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file cosmos/slashing/v1beta1/query.proto (package cosmos.slashing.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params, ValidatorSigningInfo } from "./slashing_pb.js";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination_pb.js";
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method
 *
 * @generated from message cosmos.slashing.v1beta1.QueryParamsRequest
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
QueryParamsRequest.typeName = "cosmos.slashing.v1beta1.QueryParamsRequest";
QueryParamsRequest.fields = proto3.util.newFieldList(() => []);
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method
 *
 * @generated from message cosmos.slashing.v1beta1.QueryParamsResponse
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
QueryParamsResponse.typeName = "cosmos.slashing.v1beta1.QueryParamsResponse";
QueryParamsResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
]);
/**
 * QuerySigningInfoRequest is the request type for the Query/SigningInfo RPC
 * method
 *
 * @generated from message cosmos.slashing.v1beta1.QuerySigningInfoRequest
 */
export class QuerySigningInfoRequest extends Message {
    constructor(data) {
        super();
        /**
         * cons_address is the address to query signing info of
         *
         * @generated from field: string cons_address = 1;
         */
        this.consAddress = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QuerySigningInfoRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QuerySigningInfoRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QuerySigningInfoRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QuerySigningInfoRequest, a, b);
    }
}
QuerySigningInfoRequest.runtime = proto3;
QuerySigningInfoRequest.typeName = "cosmos.slashing.v1beta1.QuerySigningInfoRequest";
QuerySigningInfoRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "cons_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * QuerySigningInfoResponse is the response type for the Query/SigningInfo RPC
 * method
 *
 * @generated from message cosmos.slashing.v1beta1.QuerySigningInfoResponse
 */
export class QuerySigningInfoResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QuerySigningInfoResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QuerySigningInfoResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QuerySigningInfoResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QuerySigningInfoResponse, a, b);
    }
}
QuerySigningInfoResponse.runtime = proto3;
QuerySigningInfoResponse.typeName = "cosmos.slashing.v1beta1.QuerySigningInfoResponse";
QuerySigningInfoResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "val_signing_info", kind: "message", T: ValidatorSigningInfo },
]);
/**
 * QuerySigningInfosRequest is the request type for the Query/SigningInfos RPC
 * method
 *
 * @generated from message cosmos.slashing.v1beta1.QuerySigningInfosRequest
 */
export class QuerySigningInfosRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QuerySigningInfosRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QuerySigningInfosRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QuerySigningInfosRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QuerySigningInfosRequest, a, b);
    }
}
QuerySigningInfosRequest.runtime = proto3;
QuerySigningInfosRequest.typeName = "cosmos.slashing.v1beta1.QuerySigningInfosRequest";
QuerySigningInfosRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
]);
/**
 * QuerySigningInfosResponse is the response type for the Query/SigningInfos RPC
 * method
 *
 * @generated from message cosmos.slashing.v1beta1.QuerySigningInfosResponse
 */
export class QuerySigningInfosResponse extends Message {
    constructor(data) {
        super();
        /**
         * info is the signing info of all validators
         *
         * @generated from field: repeated cosmos.slashing.v1beta1.ValidatorSigningInfo info = 1;
         */
        this.info = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QuerySigningInfosResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QuerySigningInfosResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QuerySigningInfosResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QuerySigningInfosResponse, a, b);
    }
}
QuerySigningInfosResponse.runtime = proto3;
QuerySigningInfosResponse.typeName = "cosmos.slashing.v1beta1.QuerySigningInfosResponse";
QuerySigningInfosResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "info", kind: "message", T: ValidatorSigningInfo, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
]);
//# sourceMappingURL=query_pb.js.map