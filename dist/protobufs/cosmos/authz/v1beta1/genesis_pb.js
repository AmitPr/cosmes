// Since: cosmos-sdk 0.43
import { Message, proto3 } from "@bufbuild/protobuf";
import { GrantAuthorization } from "./authz_pb.js";
/**
 * GenesisState defines the authz module's genesis state.
 *
 * @generated from message cosmos.authz.v1beta1.GenesisState
 */
export class GenesisState extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated cosmos.authz.v1beta1.GrantAuthorization authorization = 1;
         */
        this.authorization = [];
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
GenesisState.typeName = "cosmos.authz.v1beta1.GenesisState";
GenesisState.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "authorization", kind: "message", T: GrantAuthorization, repeated: true },
]);
//# sourceMappingURL=genesis_pb.js.map