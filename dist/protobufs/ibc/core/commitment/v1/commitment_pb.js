// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file ibc/core/commitment/v1/commitment.proto (package ibc.core.commitment.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
import { CommitmentProof } from "../../../../cosmos/ics23/v1/proofs_pb.js";
/**
 * MerkleRoot defines a merkle root hash.
 * In the Cosmos SDK, the AppHash of a block header becomes the root.
 *
 * @generated from message ibc.core.commitment.v1.MerkleRoot
 */
export class MerkleRoot extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: bytes hash = 1;
         */
        this.hash = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MerkleRoot().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MerkleRoot().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MerkleRoot().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MerkleRoot, a, b);
    }
}
MerkleRoot.runtime = proto3;
MerkleRoot.typeName = "ibc.core.commitment.v1.MerkleRoot";
MerkleRoot.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
/**
 * MerklePrefix is merkle path prefixed to the key.
 * The constructed key from the Path and the key will be append(Path.KeyPath,
 * append(Path.KeyPrefix, key...))
 *
 * @generated from message ibc.core.commitment.v1.MerklePrefix
 */
export class MerklePrefix extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: bytes key_prefix = 1;
         */
        this.keyPrefix = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MerklePrefix().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MerklePrefix().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MerklePrefix().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MerklePrefix, a, b);
    }
}
MerklePrefix.runtime = proto3;
MerklePrefix.typeName = "ibc.core.commitment.v1.MerklePrefix";
MerklePrefix.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "key_prefix", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
/**
 * MerklePath is the path used to verify commitment proofs, which can be an
 * arbitrary structured object (defined by a commitment type).
 * MerklePath is represented from root-to-leaf
 *
 * @generated from message ibc.core.commitment.v1.MerklePath
 */
export class MerklePath extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated string key_path = 1;
         */
        this.keyPath = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MerklePath().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MerklePath().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MerklePath().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MerklePath, a, b);
    }
}
MerklePath.runtime = proto3;
MerklePath.typeName = "ibc.core.commitment.v1.MerklePath";
MerklePath.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "key_path", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
]);
/**
 * MerkleProof is a wrapper type over a chain of CommitmentProofs.
 * It demonstrates membership or non-membership for an element or set of
 * elements, verifiable in conjunction with a known commitment root. Proofs
 * should be succinct.
 * MerkleProofs are ordered from leaf-to-root
 *
 * @generated from message ibc.core.commitment.v1.MerkleProof
 */
export class MerkleProof extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated cosmos.ics23.v1.CommitmentProof proofs = 1;
         */
        this.proofs = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MerkleProof().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MerkleProof().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MerkleProof().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MerkleProof, a, b);
    }
}
MerkleProof.runtime = proto3;
MerkleProof.typeName = "ibc.core.commitment.v1.MerkleProof";
MerkleProof.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "proofs", kind: "message", T: CommitmentProof, repeated: true },
]);
//# sourceMappingURL=commitment_pb.js.map