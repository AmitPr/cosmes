// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file cosmos/evidence/v1beta1/query.proto (package cosmos.evidence.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination_pb.js";
/**
 * QueryEvidenceRequest is the request type for the Query/Evidence RPC method.
 *
 * @generated from message cosmos.evidence.v1beta1.QueryEvidenceRequest
 */
export class QueryEvidenceRequest extends Message {
    constructor(data) {
        super();
        /**
         * evidence_hash defines the hash of the requested evidence.
         * Deprecated: Use hash, a HEX encoded string, instead.
         *
         * @generated from field: bytes evidence_hash = 1 [deprecated = true];
         * @deprecated
         */
        this.evidenceHash = new Uint8Array(0);
        /**
         * hash defines the evidence hash of the requested evidence.
         *
         * Since: cosmos-sdk 0.47
         *
         * @generated from field: string hash = 2;
         */
        this.hash = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryEvidenceRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryEvidenceRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryEvidenceRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryEvidenceRequest, a, b);
    }
}
QueryEvidenceRequest.runtime = proto3;
QueryEvidenceRequest.typeName = "cosmos.evidence.v1beta1.QueryEvidenceRequest";
QueryEvidenceRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "evidence_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * QueryEvidenceResponse is the response type for the Query/Evidence RPC method.
 *
 * @generated from message cosmos.evidence.v1beta1.QueryEvidenceResponse
 */
export class QueryEvidenceResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryEvidenceResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryEvidenceResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryEvidenceResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryEvidenceResponse, a, b);
    }
}
QueryEvidenceResponse.runtime = proto3;
QueryEvidenceResponse.typeName = "cosmos.evidence.v1beta1.QueryEvidenceResponse";
QueryEvidenceResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "evidence", kind: "message", T: Any },
]);
/**
 * QueryEvidenceRequest is the request type for the Query/AllEvidence RPC
 * method.
 *
 * @generated from message cosmos.evidence.v1beta1.QueryAllEvidenceRequest
 */
export class QueryAllEvidenceRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryAllEvidenceRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryAllEvidenceRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryAllEvidenceRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryAllEvidenceRequest, a, b);
    }
}
QueryAllEvidenceRequest.runtime = proto3;
QueryAllEvidenceRequest.typeName = "cosmos.evidence.v1beta1.QueryAllEvidenceRequest";
QueryAllEvidenceRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
]);
/**
 * QueryAllEvidenceResponse is the response type for the Query/AllEvidence RPC
 * method.
 *
 * @generated from message cosmos.evidence.v1beta1.QueryAllEvidenceResponse
 */
export class QueryAllEvidenceResponse extends Message {
    constructor(data) {
        super();
        /**
         * evidence returns all evidences.
         *
         * @generated from field: repeated google.protobuf.Any evidence = 1;
         */
        this.evidence = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryAllEvidenceResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryAllEvidenceResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryAllEvidenceResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryAllEvidenceResponse, a, b);
    }
}
QueryAllEvidenceResponse.runtime = proto3;
QueryAllEvidenceResponse.typeName = "cosmos.evidence.v1beta1.QueryAllEvidenceResponse";
QueryAllEvidenceResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "evidence", kind: "message", T: Any, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
]);
//# sourceMappingURL=query_pb.js.map