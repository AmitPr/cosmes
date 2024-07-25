// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file cosmos/base/node/v1beta1/query.proto (package cosmos.base.node.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * ConfigRequest defines the request structure for the Config gRPC query.
 *
 * @generated from message cosmos.base.node.v1beta1.ConfigRequest
 */
export class ConfigRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ConfigRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ConfigRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ConfigRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ConfigRequest, a, b);
    }
}
ConfigRequest.runtime = proto3;
ConfigRequest.typeName = "cosmos.base.node.v1beta1.ConfigRequest";
ConfigRequest.fields = proto3.util.newFieldList(() => []);
/**
 * ConfigResponse defines the response structure for the Config gRPC query.
 *
 * @generated from message cosmos.base.node.v1beta1.ConfigResponse
 */
export class ConfigResponse extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string minimum_gas_price = 1;
         */
        this.minimumGasPrice = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ConfigResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ConfigResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ConfigResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ConfigResponse, a, b);
    }
}
ConfigResponse.runtime = proto3;
ConfigResponse.typeName = "cosmos.base.node.v1beta1.ConfigResponse";
ConfigResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "minimum_gas_price", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
//# sourceMappingURL=query_pb.js.map