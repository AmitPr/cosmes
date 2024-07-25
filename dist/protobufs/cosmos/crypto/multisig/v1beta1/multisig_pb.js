// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file cosmos/crypto/multisig/v1beta1/multisig.proto (package cosmos.crypto.multisig.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * MultiSignature wraps the signatures from a multisig.LegacyAminoPubKey.
 * See cosmos.tx.v1betata1.ModeInfo.Multi for how to specify which signers
 * signed and with which modes.
 *
 * @generated from message cosmos.crypto.multisig.v1beta1.MultiSignature
 */
export class MultiSignature extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: repeated bytes signatures = 1;
         */
        this.signatures = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new MultiSignature().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new MultiSignature().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new MultiSignature().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(MultiSignature, a, b);
    }
}
MultiSignature.runtime = proto3;
MultiSignature.typeName = "cosmos.crypto.multisig.v1beta1.MultiSignature";
MultiSignature.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "signatures", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
]);
/**
 * CompactBitArray is an implementation of a space efficient bit array.
 * This is used to ensure that the encoded data takes up a minimal amount of
 * space after proto encoding.
 * This is not thread safe, and is not intended for concurrent usage.
 *
 * @generated from message cosmos.crypto.multisig.v1beta1.CompactBitArray
 */
export class CompactBitArray extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: uint32 extra_bits_stored = 1;
         */
        this.extraBitsStored = 0;
        /**
         * @generated from field: bytes elems = 2;
         */
        this.elems = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new CompactBitArray().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new CompactBitArray().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new CompactBitArray().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(CompactBitArray, a, b);
    }
}
CompactBitArray.runtime = proto3;
CompactBitArray.typeName = "cosmos.crypto.multisig.v1beta1.CompactBitArray";
CompactBitArray.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "extra_bits_stored", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "elems", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
//# sourceMappingURL=multisig_pb.js.map