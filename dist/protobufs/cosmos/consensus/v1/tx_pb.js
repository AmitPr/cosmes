// Since: cosmos-sdk 0.47
import { Message, proto3 } from "@bufbuild/protobuf";
import { BlockParams, EvidenceParams, ValidatorParams } from "../../../tendermint/types/params_pb.js";
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * @generated from message cosmos.consensus.v1.MsgUpdateParams
 */
export class MsgUpdateParams extends Message {
    constructor(data) {
        super();
        /**
         * authority is the address that controls the module (defaults to x/gov unless overwritten).
         *
         * @generated from field: string authority = 1;
         */
        this.authority = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateParams().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateParams().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateParams().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgUpdateParams, a, b);
    }
}
MsgUpdateParams.runtime = proto3;
MsgUpdateParams.typeName = "cosmos.consensus.v1.MsgUpdateParams";
MsgUpdateParams.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "authority", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "block", kind: "message", T: BlockParams },
    { no: 3, name: "evidence", kind: "message", T: EvidenceParams },
    { no: 4, name: "validator", kind: "message", T: ValidatorParams },
]);
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * @generated from message cosmos.consensus.v1.MsgUpdateParamsResponse
 */
export class MsgUpdateParamsResponse extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MsgUpdateParamsResponse().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MsgUpdateParamsResponse().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MsgUpdateParamsResponse().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MsgUpdateParamsResponse, a, b);
    }
}
MsgUpdateParamsResponse.runtime = proto3;
MsgUpdateParamsResponse.typeName = "cosmos.consensus.v1.MsgUpdateParamsResponse";
MsgUpdateParamsResponse.fields = proto3.util.newFieldList(() => []);
//# sourceMappingURL=tx_pb.js.map