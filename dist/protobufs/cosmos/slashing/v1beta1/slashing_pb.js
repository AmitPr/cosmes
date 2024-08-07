// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file cosmos/slashing/v1beta1/slashing.proto (package cosmos.slashing.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Duration, Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 *
 * @generated from message cosmos.slashing.v1beta1.ValidatorSigningInfo
 */
export class ValidatorSigningInfo extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string address = 1;
         */
        this.address = "";
        /**
         * Height at which validator was first a candidate OR was unjailed
         *
         * @generated from field: int64 start_height = 2;
         */
        this.startHeight = protoInt64.zero;
        /**
         * Index which is incremented each time the validator was a bonded
         * in a block and may have signed a precommit or not. This in conjunction with the
         * `SignedBlocksWindow` param determines the index in the `MissedBlocksBitArray`.
         *
         * @generated from field: int64 index_offset = 3;
         */
        this.indexOffset = protoInt64.zero;
        /**
         * Whether or not a validator has been tombstoned (killed out of validator set). It is set
         * once the validator commits an equivocation or for any other configured misbehiavor.
         *
         * @generated from field: bool tombstoned = 5;
         */
        this.tombstoned = false;
        /**
         * A counter kept to avoid unnecessary array reads.
         * Note that `Sum(MissedBlocksBitArray)` always equals `MissedBlocksCounter`.
         *
         * @generated from field: int64 missed_blocks_counter = 6;
         */
        this.missedBlocksCounter = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ValidatorSigningInfo().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ValidatorSigningInfo().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ValidatorSigningInfo().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ValidatorSigningInfo, a, b);
    }
}
ValidatorSigningInfo.runtime = proto3;
ValidatorSigningInfo.typeName = "cosmos.slashing.v1beta1.ValidatorSigningInfo";
ValidatorSigningInfo.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "start_height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "index_offset", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "jailed_until", kind: "message", T: Timestamp },
    { no: 5, name: "tombstoned", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 6, name: "missed_blocks_counter", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
]);
/**
 * Params represents the parameters used for by the slashing module.
 *
 * @generated from message cosmos.slashing.v1beta1.Params
 */
export class Params extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: int64 signed_blocks_window = 1;
         */
        this.signedBlocksWindow = protoInt64.zero;
        /**
         * @generated from field: bytes min_signed_per_window = 2;
         */
        this.minSignedPerWindow = new Uint8Array(0);
        /**
         * @generated from field: bytes slash_fraction_double_sign = 4;
         */
        this.slashFractionDoubleSign = new Uint8Array(0);
        /**
         * @generated from field: bytes slash_fraction_downtime = 5;
         */
        this.slashFractionDowntime = new Uint8Array(0);
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
Params.typeName = "cosmos.slashing.v1beta1.Params";
Params.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "signed_blocks_window", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "min_signed_per_window", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "downtime_jail_duration", kind: "message", T: Duration },
    { no: 4, name: "slash_fraction_double_sign", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 5, name: "slash_fraction_downtime", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
//# sourceMappingURL=slashing_pb.js.map