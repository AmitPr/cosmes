// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file batch/params.proto (package batch, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * Params holds parameters for the batch module
 *
 * @generated from message batch.Params
 */
export class Params extends Message {
    constructor(data) {
        super();
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
Params.typeName = "batch.Params";
Params.fields = proto3.util.newFieldList(() => []);
//# sourceMappingURL=params_pb.js.map