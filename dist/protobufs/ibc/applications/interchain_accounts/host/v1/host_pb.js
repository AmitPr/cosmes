// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file ibc/applications/interchain_accounts/host/v1/host.proto (package ibc.applications.interchain_accounts.host.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * Params defines the set of on-chain interchain accounts parameters.
 * The following parameters may be used to disable the host submodule.
 *
 * @generated from message ibc.applications.interchain_accounts.host.v1.Params
 */
export class Params extends Message {
    constructor(data) {
        super();
        /**
         * host_enabled enables or disables the host submodule.
         *
         * @generated from field: bool host_enabled = 1;
         */
        this.hostEnabled = false;
        /**
         * allow_messages defines a list of sdk message typeURLs allowed to be executed on a host chain.
         *
         * @generated from field: repeated string allow_messages = 2;
         */
        this.allowMessages = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Params().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Params().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Params().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Params, a, b);
    }
}
Params.runtime = proto3;
Params.typeName = "ibc.applications.interchain_accounts.host.v1.Params";
Params.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "host_enabled", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "allow_messages", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
/**
 * QueryRequest defines the parameters for a particular query request
 * by an interchain account.
 *
 * @generated from message ibc.applications.interchain_accounts.host.v1.QueryRequest
 */
export class QueryRequest extends Message {
    constructor(data) {
        super();
        /**
         * path defines the path of the query request as defined by ADR-021.
         * https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-021-protobuf-query-encoding.md#custom-query-registration-and-routing
         *
         * @generated from field: string path = 1;
         */
        this.path = "";
        /**
         * data defines the payload of the query request as defined by ADR-021.
         * https://github.com/cosmos/cosmos-sdk/blob/main/docs/architecture/adr-021-protobuf-query-encoding.md#custom-query-registration-and-routing
         *
         * @generated from field: bytes data = 2;
         */
        this.data = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryRequest, a, b);
    }
}
QueryRequest.runtime = proto3;
QueryRequest.typeName = "ibc.applications.interchain_accounts.host.v1.QueryRequest";
QueryRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "path", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
//# sourceMappingURL=host_pb.js.map