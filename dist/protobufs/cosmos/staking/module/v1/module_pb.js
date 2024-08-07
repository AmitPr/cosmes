// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file cosmos/staking/module/v1/module.proto (package cosmos.staking.module.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * Module is the config object of the staking module.
 *
 * @generated from message cosmos.staking.module.v1.Module
 */
export class Module extends Message {
    constructor(data) {
        super();
        /**
         * hooks_order specifies the order of staking hooks and should be a list
         * of module names which provide a staking hooks instance. If no order is
         * provided, then hooks will be applied in alphabetical order of module names.
         *
         * @generated from field: repeated string hooks_order = 1;
         */
        this.hooksOrder = [];
        /**
         * authority defines the custom module authority. If not set, defaults to the governance module.
         *
         * @generated from field: string authority = 2;
         */
        this.authority = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Module().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Module().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Module().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Module, a, b);
    }
}
Module.runtime = proto3;
Module.typeName = "cosmos.staking.module.v1.Module";
Module.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "hooks_order", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
]);
//# sourceMappingURL=module_pb.js.map