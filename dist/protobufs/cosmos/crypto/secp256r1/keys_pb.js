// Since: cosmos-sdk 0.43
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * PubKey defines a secp256r1 ECDSA public key.
 *
 * @generated from message cosmos.crypto.secp256r1.PubKey
 */
export class PubKey extends Message {
    constructor(data) {
        super();
        /**
         * Point on secp256r1 curve in a compressed representation as specified in section
         * 4.3.6 of ANSI X9.62: https://webstore.ansi.org/standards/ascx9/ansix9621998
         *
         * @generated from field: bytes key = 1;
         */
        this.key = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PubKey().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PubKey().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PubKey().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(PubKey, a, b);
    }
}
PubKey.runtime = proto3;
PubKey.typeName = "cosmos.crypto.secp256r1.PubKey";
PubKey.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
/**
 * PrivKey defines a secp256r1 ECDSA private key.
 *
 * @generated from message cosmos.crypto.secp256r1.PrivKey
 */
export class PrivKey extends Message {
    constructor(data) {
        super();
        /**
         * secret number serialized using big-endian encoding
         *
         * @generated from field: bytes secret = 1;
         */
        this.secret = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new PrivKey().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new PrivKey().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new PrivKey().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(PrivKey, a, b);
    }
}
PrivKey.runtime = proto3;
PrivKey.typeName = "cosmos.crypto.secp256r1.PrivKey";
PrivKey.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "secret", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
//# sourceMappingURL=keys_pb.js.map