// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file cosmwasm/wasm/v1/query.proto (package cosmwasm.wasm.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { AccessConfig, ContractCodeHistoryEntry, ContractInfo, Model, Params } from "./types_pb.js";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination_pb.js";
/**
 * QueryContractInfoRequest is the request type for the Query/ContractInfo RPC
 * method
 *
 * @generated from message cosmwasm.wasm.v1.QueryContractInfoRequest
 */
export class QueryContractInfoRequest extends Message {
    constructor(data) {
        super();
        /**
         * address is the address of the contract to query
         *
         * @generated from field: string address = 1;
         */
        this.address = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryContractInfoRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryContractInfoRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryContractInfoRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryContractInfoRequest, a, b);
    }
}
QueryContractInfoRequest.runtime = proto3;
QueryContractInfoRequest.typeName = "cosmwasm.wasm.v1.QueryContractInfoRequest";
QueryContractInfoRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
/**
 * QueryContractInfoResponse is the response type for the Query/ContractInfo RPC
 * method
 *
 * @generated from message cosmwasm.wasm.v1.QueryContractInfoResponse
 */
export class QueryContractInfoResponse extends Message {
    constructor(data) {
        super();
        /**
         * address is the address of the contract
         *
         * @generated from field: string address = 1;
         */
        this.address = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryContractInfoResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryContractInfoResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryContractInfoResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryContractInfoResponse, a, b);
    }
}
QueryContractInfoResponse.runtime = proto3;
QueryContractInfoResponse.typeName = "cosmwasm.wasm.v1.QueryContractInfoResponse";
QueryContractInfoResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "contract_info", kind: "message", T: ContractInfo },
]);
/**
 * QueryContractHistoryRequest is the request type for the Query/ContractHistory
 * RPC method
 *
 * @generated from message cosmwasm.wasm.v1.QueryContractHistoryRequest
 */
export class QueryContractHistoryRequest extends Message {
    constructor(data) {
        super();
        /**
         * address is the address of the contract to query
         *
         * @generated from field: string address = 1;
         */
        this.address = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryContractHistoryRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryContractHistoryRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryContractHistoryRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryContractHistoryRequest, a, b);
    }
}
QueryContractHistoryRequest.runtime = proto3;
QueryContractHistoryRequest.typeName = "cosmwasm.wasm.v1.QueryContractHistoryRequest";
QueryContractHistoryRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
]);
/**
 * QueryContractHistoryResponse is the response type for the
 * Query/ContractHistory RPC method
 *
 * @generated from message cosmwasm.wasm.v1.QueryContractHistoryResponse
 */
export class QueryContractHistoryResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated cosmwasm.wasm.v1.ContractCodeHistoryEntry entries = 1;
         */
        this.entries = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryContractHistoryResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryContractHistoryResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryContractHistoryResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryContractHistoryResponse, a, b);
    }
}
QueryContractHistoryResponse.runtime = proto3;
QueryContractHistoryResponse.typeName = "cosmwasm.wasm.v1.QueryContractHistoryResponse";
QueryContractHistoryResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "entries", kind: "message", T: ContractCodeHistoryEntry, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
]);
/**
 * QueryContractsByCodeRequest is the request type for the Query/ContractsByCode
 * RPC method
 *
 * @generated from message cosmwasm.wasm.v1.QueryContractsByCodeRequest
 */
export class QueryContractsByCodeRequest extends Message {
    constructor(data) {
        super();
        /**
         * grpc-gateway_out does not support Go style CodID
         *
         * @generated from field: uint64 code_id = 1;
         */
        this.codeId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryContractsByCodeRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryContractsByCodeRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryContractsByCodeRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryContractsByCodeRequest, a, b);
    }
}
QueryContractsByCodeRequest.runtime = proto3;
QueryContractsByCodeRequest.typeName = "cosmwasm.wasm.v1.QueryContractsByCodeRequest";
QueryContractsByCodeRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "code_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
]);
/**
 * QueryContractsByCodeResponse is the response type for the
 * Query/ContractsByCode RPC method
 *
 * @generated from message cosmwasm.wasm.v1.QueryContractsByCodeResponse
 */
export class QueryContractsByCodeResponse extends Message {
    constructor(data) {
        super();
        /**
         * contracts are a set of contract addresses
         *
         * @generated from field: repeated string contracts = 1;
         */
        this.contracts = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryContractsByCodeResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryContractsByCodeResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryContractsByCodeResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryContractsByCodeResponse, a, b);
    }
}
QueryContractsByCodeResponse.runtime = proto3;
QueryContractsByCodeResponse.typeName = "cosmwasm.wasm.v1.QueryContractsByCodeResponse";
QueryContractsByCodeResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "contracts", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
]);
/**
 * QueryAllContractStateRequest is the request type for the
 * Query/AllContractState RPC method
 *
 * @generated from message cosmwasm.wasm.v1.QueryAllContractStateRequest
 */
export class QueryAllContractStateRequest extends Message {
    constructor(data) {
        super();
        /**
         * address is the address of the contract
         *
         * @generated from field: string address = 1;
         */
        this.address = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryAllContractStateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryAllContractStateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryAllContractStateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryAllContractStateRequest, a, b);
    }
}
QueryAllContractStateRequest.runtime = proto3;
QueryAllContractStateRequest.typeName = "cosmwasm.wasm.v1.QueryAllContractStateRequest";
QueryAllContractStateRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
]);
/**
 * QueryAllContractStateResponse is the response type for the
 * Query/AllContractState RPC method
 *
 * @generated from message cosmwasm.wasm.v1.QueryAllContractStateResponse
 */
export class QueryAllContractStateResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated cosmwasm.wasm.v1.Model models = 1;
         */
        this.models = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryAllContractStateResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryAllContractStateResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryAllContractStateResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryAllContractStateResponse, a, b);
    }
}
QueryAllContractStateResponse.runtime = proto3;
QueryAllContractStateResponse.typeName = "cosmwasm.wasm.v1.QueryAllContractStateResponse";
QueryAllContractStateResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "models", kind: "message", T: Model, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
]);
/**
 * QueryRawContractStateRequest is the request type for the
 * Query/RawContractState RPC method
 *
 * @generated from message cosmwasm.wasm.v1.QueryRawContractStateRequest
 */
export class QueryRawContractStateRequest extends Message {
    constructor(data) {
        super();
        /**
         * address is the address of the contract
         *
         * @generated from field: string address = 1;
         */
        this.address = "";
        /**
         * @generated from field: bytes query_data = 2;
         */
        this.queryData = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryRawContractStateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryRawContractStateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryRawContractStateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryRawContractStateRequest, a, b);
    }
}
QueryRawContractStateRequest.runtime = proto3;
QueryRawContractStateRequest.typeName = "cosmwasm.wasm.v1.QueryRawContractStateRequest";
QueryRawContractStateRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "query_data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
/**
 * QueryRawContractStateResponse is the response type for the
 * Query/RawContractState RPC method
 *
 * @generated from message cosmwasm.wasm.v1.QueryRawContractStateResponse
 */
export class QueryRawContractStateResponse extends Message {
    constructor(data) {
        super();
        /**
         * Data contains the raw store data
         *
         * @generated from field: bytes data = 1;
         */
        this.data = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryRawContractStateResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryRawContractStateResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryRawContractStateResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryRawContractStateResponse, a, b);
    }
}
QueryRawContractStateResponse.runtime = proto3;
QueryRawContractStateResponse.typeName = "cosmwasm.wasm.v1.QueryRawContractStateResponse";
QueryRawContractStateResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
/**
 * QuerySmartContractStateRequest is the request type for the
 * Query/SmartContractState RPC method
 *
 * @generated from message cosmwasm.wasm.v1.QuerySmartContractStateRequest
 */
export class QuerySmartContractStateRequest extends Message {
    constructor(data) {
        super();
        /**
         * address is the address of the contract
         *
         * @generated from field: string address = 1;
         */
        this.address = "";
        /**
         * QueryData contains the query data passed to the contract
         *
         * @generated from field: bytes query_data = 2;
         */
        this.queryData = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QuerySmartContractStateRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QuerySmartContractStateRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QuerySmartContractStateRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QuerySmartContractStateRequest, a, b);
    }
}
QuerySmartContractStateRequest.runtime = proto3;
QuerySmartContractStateRequest.typeName = "cosmwasm.wasm.v1.QuerySmartContractStateRequest";
QuerySmartContractStateRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "query_data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
/**
 * QuerySmartContractStateResponse is the response type for the
 * Query/SmartContractState RPC method
 *
 * @generated from message cosmwasm.wasm.v1.QuerySmartContractStateResponse
 */
export class QuerySmartContractStateResponse extends Message {
    constructor(data) {
        super();
        /**
         * Data contains the json data returned from the smart contract
         *
         * @generated from field: bytes data = 1;
         */
        this.data = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QuerySmartContractStateResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QuerySmartContractStateResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QuerySmartContractStateResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QuerySmartContractStateResponse, a, b);
    }
}
QuerySmartContractStateResponse.runtime = proto3;
QuerySmartContractStateResponse.typeName = "cosmwasm.wasm.v1.QuerySmartContractStateResponse";
QuerySmartContractStateResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
/**
 * QueryCodeRequest is the request type for the Query/Code RPC method
 *
 * @generated from message cosmwasm.wasm.v1.QueryCodeRequest
 */
export class QueryCodeRequest extends Message {
    constructor(data) {
        super();
        /**
         * grpc-gateway_out does not support Go style CodID
         *
         * @generated from field: uint64 code_id = 1;
         */
        this.codeId = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryCodeRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryCodeRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryCodeRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryCodeRequest, a, b);
    }
}
QueryCodeRequest.runtime = proto3;
QueryCodeRequest.typeName = "cosmwasm.wasm.v1.QueryCodeRequest";
QueryCodeRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "code_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * CodeInfoResponse contains code meta data from CodeInfo
 *
 * @generated from message cosmwasm.wasm.v1.CodeInfoResponse
 */
export class CodeInfoResponse extends Message {
    constructor(data) {
        super();
        /**
         * id for legacy support
         *
         * @generated from field: uint64 code_id = 1;
         */
        this.codeId = protoInt64.zero;
        /**
         * @generated from field: string creator = 2;
         */
        this.creator = "";
        /**
         * @generated from field: bytes data_hash = 3;
         */
        this.dataHash = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new CodeInfoResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new CodeInfoResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new CodeInfoResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(CodeInfoResponse, a, b);
    }
}
CodeInfoResponse.runtime = proto3;
CodeInfoResponse.typeName = "cosmwasm.wasm.v1.CodeInfoResponse";
CodeInfoResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "code_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "creator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "data_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 6, name: "instantiate_permission", kind: "message", T: AccessConfig },
]);
/**
 * QueryCodeResponse is the response type for the Query/Code RPC method
 *
 * @generated from message cosmwasm.wasm.v1.QueryCodeResponse
 */
export class QueryCodeResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: bytes data = 2;
         */
        this.data = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryCodeResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryCodeResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryCodeResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryCodeResponse, a, b);
    }
}
QueryCodeResponse.runtime = proto3;
QueryCodeResponse.typeName = "cosmwasm.wasm.v1.QueryCodeResponse";
QueryCodeResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "code_info", kind: "message", T: CodeInfoResponse },
    { no: 2, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
/**
 * QueryCodesRequest is the request type for the Query/Codes RPC method
 *
 * @generated from message cosmwasm.wasm.v1.QueryCodesRequest
 */
export class QueryCodesRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryCodesRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryCodesRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryCodesRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryCodesRequest, a, b);
    }
}
QueryCodesRequest.runtime = proto3;
QueryCodesRequest.typeName = "cosmwasm.wasm.v1.QueryCodesRequest";
QueryCodesRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "pagination", kind: "message", T: PageRequest },
]);
/**
 * QueryCodesResponse is the response type for the Query/Codes RPC method
 *
 * @generated from message cosmwasm.wasm.v1.QueryCodesResponse
 */
export class QueryCodesResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated cosmwasm.wasm.v1.CodeInfoResponse code_infos = 1;
         */
        this.codeInfos = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryCodesResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryCodesResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryCodesResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryCodesResponse, a, b);
    }
}
QueryCodesResponse.runtime = proto3;
QueryCodesResponse.typeName = "cosmwasm.wasm.v1.QueryCodesResponse";
QueryCodesResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "code_infos", kind: "message", T: CodeInfoResponse, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
]);
/**
 * QueryPinnedCodesRequest is the request type for the Query/PinnedCodes
 * RPC method
 *
 * @generated from message cosmwasm.wasm.v1.QueryPinnedCodesRequest
 */
export class QueryPinnedCodesRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryPinnedCodesRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryPinnedCodesRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryPinnedCodesRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryPinnedCodesRequest, a, b);
    }
}
QueryPinnedCodesRequest.runtime = proto3;
QueryPinnedCodesRequest.typeName = "cosmwasm.wasm.v1.QueryPinnedCodesRequest";
QueryPinnedCodesRequest.fields = proto3.util.newFieldList(() => [
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
]);
/**
 * QueryPinnedCodesResponse is the response type for the
 * Query/PinnedCodes RPC method
 *
 * @generated from message cosmwasm.wasm.v1.QueryPinnedCodesResponse
 */
export class QueryPinnedCodesResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated uint64 code_ids = 1;
         */
        this.codeIds = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryPinnedCodesResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryPinnedCodesResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryPinnedCodesResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryPinnedCodesResponse, a, b);
    }
}
QueryPinnedCodesResponse.runtime = proto3;
QueryPinnedCodesResponse.typeName = "cosmwasm.wasm.v1.QueryPinnedCodesResponse";
QueryPinnedCodesResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "code_ids", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
]);
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message cosmwasm.wasm.v1.QueryParamsRequest
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
QueryParamsRequest.typeName = "cosmwasm.wasm.v1.QueryParamsRequest";
QueryParamsRequest.fields = proto3.util.newFieldList(() => []);
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 *
 * @generated from message cosmwasm.wasm.v1.QueryParamsResponse
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
QueryParamsResponse.typeName = "cosmwasm.wasm.v1.QueryParamsResponse";
QueryParamsResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
]);
/**
 * QueryContractsByCreatorRequest is the request type for the
 * Query/ContractsByCreator RPC method.
 *
 * @generated from message cosmwasm.wasm.v1.QueryContractsByCreatorRequest
 */
export class QueryContractsByCreatorRequest extends Message {
    constructor(data) {
        super();
        /**
         * CreatorAddress is the address of contract creator
         *
         * @generated from field: string creator_address = 1;
         */
        this.creatorAddress = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryContractsByCreatorRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryContractsByCreatorRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryContractsByCreatorRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryContractsByCreatorRequest, a, b);
    }
}
QueryContractsByCreatorRequest.runtime = proto3;
QueryContractsByCreatorRequest.typeName = "cosmwasm.wasm.v1.QueryContractsByCreatorRequest";
QueryContractsByCreatorRequest.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "creator_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
]);
/**
 * QueryContractsByCreatorResponse is the response type for the
 * Query/ContractsByCreator RPC method.
 *
 * @generated from message cosmwasm.wasm.v1.QueryContractsByCreatorResponse
 */
export class QueryContractsByCreatorResponse extends Message {
    constructor(data) {
        super();
        /**
         * ContractAddresses result set
         *
         * @generated from field: repeated string contract_addresses = 1;
         */
        this.contractAddresses = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new QueryContractsByCreatorResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new QueryContractsByCreatorResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new QueryContractsByCreatorResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(QueryContractsByCreatorResponse, a, b);
    }
}
QueryContractsByCreatorResponse.runtime = proto3;
QueryContractsByCreatorResponse.typeName = "cosmwasm.wasm.v1.QueryContractsByCreatorResponse";
QueryContractsByCreatorResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "contract_addresses", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
]);
//# sourceMappingURL=query_pb.js.map