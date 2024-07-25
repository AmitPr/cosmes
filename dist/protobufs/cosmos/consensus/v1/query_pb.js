// Since: cosmos-sdk 0.47
import { Message, proto3 } from "@bufbuild/protobuf";
import { ConsensusParams } from "../../../tendermint/types/params_pb.js";
/**
 * QueryParamsRequest defines the request type for querying x/consensus parameters.
 *
 * @generated from message cosmos.consensus.v1.QueryParamsRequest
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
QueryParamsRequest.typeName = "cosmos.consensus.v1.QueryParamsRequest";
QueryParamsRequest.fields = proto3.util.newFieldList(() => []);
/**
 * QueryParamsResponse defines the response type for querying x/consensus parameters.
 *
 * @generated from message cosmos.consensus.v1.QueryParamsResponse
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
QueryParamsResponse.typeName = "cosmos.consensus.v1.QueryParamsResponse";
QueryParamsResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: ConsensusParams },
]);
//# sourceMappingURL=query_pb.js.map