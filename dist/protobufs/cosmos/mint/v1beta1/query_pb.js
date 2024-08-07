// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file cosmos/mint/v1beta1/query.proto (package cosmos.mint.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./mint_pb.js";
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message cosmos.mint.v1beta1.QueryParamsRequest
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
QueryParamsRequest.typeName = "cosmos.mint.v1beta1.QueryParamsRequest";
QueryParamsRequest.fields = proto3.util.newFieldList(() => []);
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 *
 * @generated from message cosmos.mint.v1beta1.QueryParamsResponse
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
QueryParamsResponse.typeName = "cosmos.mint.v1beta1.QueryParamsResponse";
QueryParamsResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
]);
/**
 * QueryInflationRequest is the request type for the Query/Inflation RPC method.
 *
 * @generated from message cosmos.mint.v1beta1.QueryInflationRequest
 */
export class QueryInflationRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryInflationRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryInflationRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryInflationRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryInflationRequest, a, b);
    }
}
QueryInflationRequest.runtime = proto3;
QueryInflationRequest.typeName = "cosmos.mint.v1beta1.QueryInflationRequest";
QueryInflationRequest.fields = proto3.util.newFieldList(() => []);
/**
 * QueryInflationResponse is the response type for the Query/Inflation RPC
 * method.
 *
 * @generated from message cosmos.mint.v1beta1.QueryInflationResponse
 */
export class QueryInflationResponse extends Message {
    constructor(data) {
        super();
        /**
         * inflation is the current minting inflation value.
         *
         * @generated from field: bytes inflation = 1;
         */
        this.inflation = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryInflationResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryInflationResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryInflationResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryInflationResponse, a, b);
    }
}
QueryInflationResponse.runtime = proto3;
QueryInflationResponse.typeName = "cosmos.mint.v1beta1.QueryInflationResponse";
QueryInflationResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "inflation", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 *
 * @generated from message cosmos.mint.v1beta1.QueryAnnualProvisionsRequest
 */
export class QueryAnnualProvisionsRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryAnnualProvisionsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryAnnualProvisionsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryAnnualProvisionsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryAnnualProvisionsRequest, a, b);
    }
}
QueryAnnualProvisionsRequest.runtime = proto3;
QueryAnnualProvisionsRequest.typeName = "cosmos.mint.v1beta1.QueryAnnualProvisionsRequest";
QueryAnnualProvisionsRequest.fields = proto3.util.newFieldList(() => []);
/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 *
 * @generated from message cosmos.mint.v1beta1.QueryAnnualProvisionsResponse
 */
export class QueryAnnualProvisionsResponse extends Message {
    constructor(data) {
        super();
        /**
         * annual_provisions is the current minting annual provisions value.
         *
         * @generated from field: bytes annual_provisions = 1;
         */
        this.annualProvisions = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryAnnualProvisionsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryAnnualProvisionsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryAnnualProvisionsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryAnnualProvisionsResponse, a, b);
    }
}
QueryAnnualProvisionsResponse.runtime = proto3;
QueryAnnualProvisionsResponse.typeName = "cosmos.mint.v1beta1.QueryAnnualProvisionsResponse";
QueryAnnualProvisionsResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "annual_provisions", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
//# sourceMappingURL=query_pb.js.map