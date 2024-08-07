// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file cosmos/autocli/v1/query.proto (package cosmos.autocli.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
import { ModuleOptions } from "./options_pb.js";
/**
 * AppOptionsRequest is the RemoteInfoService/AppOptions request type.
 *
 * @generated from message cosmos.autocli.v1.AppOptionsRequest
 */
export class AppOptionsRequest extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new AppOptionsRequest().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new AppOptionsRequest().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new AppOptionsRequest().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(AppOptionsRequest, a, b);
    }
}
AppOptionsRequest.runtime = proto3;
AppOptionsRequest.typeName = "cosmos.autocli.v1.AppOptionsRequest";
AppOptionsRequest.fields = proto3.util.newFieldList(() => []);
/**
 * AppOptionsResponse is the RemoteInfoService/AppOptions response type.
 *
 * @generated from message cosmos.autocli.v1.AppOptionsResponse
 */
export class AppOptionsResponse extends Message {
    constructor(data) {
        super();
        /**
         * module_options is a map of module name to autocli module options.
         *
         * @generated from field: map<string, cosmos.autocli.v1.ModuleOptions> module_options = 1;
         */
        this.moduleOptions = {};
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new AppOptionsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new AppOptionsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new AppOptionsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(AppOptionsResponse, a, b);
    }
}
AppOptionsResponse.runtime = proto3;
AppOptionsResponse.typeName = "cosmos.autocli.v1.AppOptionsResponse";
AppOptionsResponse.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "module_options", kind: "map", K: 9 /* ScalarType.STRING */, V: { kind: "message", T: ModuleOptions } },
]);
//# sourceMappingURL=query_pb.js.map