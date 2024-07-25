// Since: cosmos-sdk 0.43
import { Message, proto3 } from "@bufbuild/protobuf";
import { Grant } from "./feegrant_pb.js";
/**
 * GenesisState contains a set of fee allowances, persisted from the store
 *
 * @generated from message cosmos.feegrant.v1beta1.GenesisState
 */
export class GenesisState extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated cosmos.feegrant.v1beta1.Grant allowances = 1;
         */
        this.allowances = [];
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
GenesisState.typeName = "cosmos.feegrant.v1beta1.GenesisState";
GenesisState.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "allowances", kind: "message", T: Grant, repeated: true },
]);
//# sourceMappingURL=genesis_pb.js.map