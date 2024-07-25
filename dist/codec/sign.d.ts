import { CosmosTxV1beta1SignDoc as SignDoc } from "../protobufs/index.js";
import { StdSignDoc } from "../registry/index.js";
/**
 * Signs the given amino-encoded `stdSignDoc` with the given `privateKey` using
 * secp256k1, and returns the signature bytes. For Injective, the `type` param
 * must be set to `ethsecp256k1`.
 */
export declare function signAmino(stdSignDoc: StdSignDoc, privateKey: Uint8Array, type?: "secp256k1" | "ethsecp256k1"): Uint8Array;
/**
 * Signs the given proto-encoded `signDoc` with the given `privateKey` using
 * secp256k1, and returns the signature bytes. For Injective, the `type` param
 * must be set to `ethsecp256k1`.
 */
export declare function signDirect(signDoc: SignDoc, privateKey: Uint8Array, type?: "secp256k1" | "ethsecp256k1"): Uint8Array;
/**
 * Hashes and returns the digest of the given EIP191 `message` bytes.
 */
export declare function hashEthArbitraryMessage(message: Uint8Array): Uint8Array;
/**
 * Recovers and returns the secp256k1 public key of the signer given the arbitrary
 * `message` and `signature` that was signed using EIP191.
 */
export declare function recoverPubKeyFromEthSignature(message: Uint8Array, signature: Uint8Array): Uint8Array;
//# sourceMappingURL=sign.d.ts.map