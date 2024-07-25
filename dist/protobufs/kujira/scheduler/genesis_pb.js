// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file kujira/scheduler/genesis.proto (package kujira.scheduler, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { Hook } from "./hook_pb.js";
/**
 * GenesisState defines the scheduler module's genesis state.
 *
 * @generated from message kujira.scheduler.GenesisState
 */
export class GenesisState extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated kujira.scheduler.Hook hookList = 2;
         */
        this.hookList = [];
        /**
         * @generated from field: uint64 hookCount = 3;
         */
        this.hookCount = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GenesisState().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GenesisState().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GenesisState().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(GenesisState, a, b);
    }
}
GenesisState.runtime = proto3;
GenesisState.typeName = "kujira.scheduler.GenesisState";
GenesisState.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
    { no: 2, name: "hookList", kind: "message", T: Hook, repeated: true },
    { no: 3, name: "hookCount", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
//# sourceMappingURL=genesis_pb.js.map