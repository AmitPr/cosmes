// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file tendermint/types/params.proto (package tendermint.types, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Duration, Message, proto3, protoInt64 } from "@bufbuild/protobuf";
/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 *
 * @generated from message tendermint.types.ConsensusParams
 */
export class ConsensusParams extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ConsensusParams().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ConsensusParams().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ConsensusParams().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ConsensusParams, a, b);
    }
}
ConsensusParams.runtime = proto3;
ConsensusParams.typeName = "tendermint.types.ConsensusParams";
ConsensusParams.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "block", kind: "message", T: BlockParams },
    { no: 2, name: "evidence", kind: "message", T: EvidenceParams },
    { no: 3, name: "validator", kind: "message", T: ValidatorParams },
    { no: 4, name: "version", kind: "message", T: VersionParams },
]);
/**
 * BlockParams contains limits on the block size.
 *
 * @generated from message tendermint.types.BlockParams
 */
export class BlockParams extends Message {
    constructor(data) {
        super();
        /**
         * Max block size, in bytes.
         * Note: must be greater than 0
         *
         * @generated from field: int64 max_bytes = 1;
         */
        this.maxBytes = protoInt64.zero;
        /**
         * Max gas per block.
         * Note: must be greater or equal to -1
         *
         * @generated from field: int64 max_gas = 2;
         */
        this.maxGas = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new BlockParams().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new BlockParams().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new BlockParams().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(BlockParams, a, b);
    }
}
BlockParams.runtime = proto3;
BlockParams.typeName = "tendermint.types.BlockParams";
BlockParams.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "max_bytes", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "max_gas", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
]);
/**
 * EvidenceParams determine how we handle evidence of malfeasance.
 *
 * @generated from message tendermint.types.EvidenceParams
 */
export class EvidenceParams extends Message {
    constructor(data) {
        super();
        /**
         * Max age of evidence, in blocks.
         *
         * The basic formula for calculating this is: MaxAgeDuration / {average block
         * time}.
         *
         * @generated from field: int64 max_age_num_blocks = 1;
         */
        this.maxAgeNumBlocks = protoInt64.zero;
        /**
         * This sets the maximum size of total evidence in bytes that can be committed in a single block.
         * and should fall comfortably under the max block bytes.
         * Default is 1048576 or 1MB
         *
         * @generated from field: int64 max_bytes = 3;
         */
        this.maxBytes = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new EvidenceParams().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new EvidenceParams().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new EvidenceParams().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(EvidenceParams, a, b);
    }
}
EvidenceParams.runtime = proto3;
EvidenceParams.typeName = "tendermint.types.EvidenceParams";
EvidenceParams.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "max_age_num_blocks", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "max_age_duration", kind: "message", T: Duration },
    { no: 3, name: "max_bytes", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
]);
/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 *
 * @generated from message tendermint.types.ValidatorParams
 */
export class ValidatorParams extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated string pub_key_types = 1;
         */
        this.pubKeyTypes = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new ValidatorParams().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new ValidatorParams().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new ValidatorParams().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(ValidatorParams, a, b);
    }
}
ValidatorParams.runtime = proto3;
ValidatorParams.typeName = "tendermint.types.ValidatorParams";
ValidatorParams.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "pub_key_types", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
/**
 * VersionParams contains the ABCI application version.
 *
 * @generated from message tendermint.types.VersionParams
 */
export class VersionParams extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint64 app = 1;
         */
        this.app = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new VersionParams().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new VersionParams().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new VersionParams().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(VersionParams, a, b);
    }
}
VersionParams.runtime = proto3;
VersionParams.typeName = "tendermint.types.VersionParams";
VersionParams.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "app", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
]);
/**
 * HashedParams is a subset of ConsensusParams.
 *
 * It is hashed into the Header.ConsensusHash.
 *
 * @generated from message tendermint.types.HashedParams
 */
export class HashedParams extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: int64 block_max_bytes = 1;
         */
        this.blockMaxBytes = protoInt64.zero;
        /**
         * @generated from field: int64 block_max_gas = 2;
         */
        this.blockMaxGas = protoInt64.zero;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new HashedParams().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new HashedParams().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new HashedParams().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(HashedParams, a, b);
    }
}
HashedParams.runtime = proto3;
HashedParams.typeName = "tendermint.types.HashedParams";
HashedParams.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "block_max_bytes", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "block_max_gas", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
]);
//# sourceMappingURL=params_pb.js.map