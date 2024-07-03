// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file ibc/core/commitment/v1/commitment.proto (package ibc.core.commitment.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { CommitmentProof } from "../../../../cosmos/ics23/v1/proofs_pb.js";

/**
 * MerkleRoot defines a merkle root hash.
 * In the Cosmos SDK, the AppHash of a block header becomes the root.
 *
 * @generated from message ibc.core.commitment.v1.MerkleRoot
 */
export class MerkleRoot extends Message<MerkleRoot> {
  /**
   * @generated from field: bytes hash = 1;
   */
  hash = new Uint8Array(0);

  constructor(data?: PartialMessage<MerkleRoot>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.core.commitment.v1.MerkleRoot";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MerkleRoot {
    return new MerkleRoot().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MerkleRoot {
    return new MerkleRoot().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MerkleRoot {
    return new MerkleRoot().fromJsonString(jsonString, options);
  }

  static equals(a: MerkleRoot | PlainMessage<MerkleRoot> | undefined, b: MerkleRoot | PlainMessage<MerkleRoot> | undefined): boolean {
    return proto3.util.equals(MerkleRoot, a, b);
  }
}

/**
 * MerklePrefix is merkle path prefixed to the key.
 * The constructed key from the Path and the key will be append(Path.KeyPath,
 * append(Path.KeyPrefix, key...))
 *
 * @generated from message ibc.core.commitment.v1.MerklePrefix
 */
export class MerklePrefix extends Message<MerklePrefix> {
  /**
   * @generated from field: bytes key_prefix = 1;
   */
  keyPrefix = new Uint8Array(0);

  constructor(data?: PartialMessage<MerklePrefix>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.core.commitment.v1.MerklePrefix";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key_prefix", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MerklePrefix {
    return new MerklePrefix().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MerklePrefix {
    return new MerklePrefix().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MerklePrefix {
    return new MerklePrefix().fromJsonString(jsonString, options);
  }

  static equals(a: MerklePrefix | PlainMessage<MerklePrefix> | undefined, b: MerklePrefix | PlainMessage<MerklePrefix> | undefined): boolean {
    return proto3.util.equals(MerklePrefix, a, b);
  }
}

/**
 * MerklePath is the path used to verify commitment proofs, which can be an
 * arbitrary structured object (defined by a commitment type).
 * MerklePath is represented from root-to-leaf
 *
 * @generated from message ibc.core.commitment.v1.MerklePath
 */
export class MerklePath extends Message<MerklePath> {
  /**
   * @generated from field: repeated string key_path = 1;
   */
  keyPath: string[] = [];

  constructor(data?: PartialMessage<MerklePath>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.core.commitment.v1.MerklePath";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key_path", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MerklePath {
    return new MerklePath().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MerklePath {
    return new MerklePath().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MerklePath {
    return new MerklePath().fromJsonString(jsonString, options);
  }

  static equals(a: MerklePath | PlainMessage<MerklePath> | undefined, b: MerklePath | PlainMessage<MerklePath> | undefined): boolean {
    return proto3.util.equals(MerklePath, a, b);
  }
}

/**
 * MerkleProof is a wrapper type over a chain of CommitmentProofs.
 * It demonstrates membership or non-membership for an element or set of
 * elements, verifiable in conjunction with a known commitment root. Proofs
 * should be succinct.
 * MerkleProofs are ordered from leaf-to-root
 *
 * @generated from message ibc.core.commitment.v1.MerkleProof
 */
export class MerkleProof extends Message<MerkleProof> {
  /**
   * @generated from field: repeated cosmos.ics23.v1.CommitmentProof proofs = 1;
   */
  proofs: CommitmentProof[] = [];

  constructor(data?: PartialMessage<MerkleProof>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.core.commitment.v1.MerkleProof";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "proofs", kind: "message", T: CommitmentProof, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MerkleProof {
    return new MerkleProof().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MerkleProof {
    return new MerkleProof().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MerkleProof {
    return new MerkleProof().fromJsonString(jsonString, options);
  }

  static equals(a: MerkleProof | PlainMessage<MerkleProof> | undefined, b: MerkleProof | PlainMessage<MerkleProof> | undefined): boolean {
    return proto3.util.equals(MerkleProof, a, b);
  }
}

