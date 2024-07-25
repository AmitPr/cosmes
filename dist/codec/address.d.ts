/**
 * Returns the bech32 address from the given `publicKey` and `prefix`. If needed,
 * the `type` of the key should be appropriately set.
 *
 * @param publicKey Must be either a base64 encoded string or a `Uint8Array`.
 */
export declare function resolveBech32Address(publicKey: string | Uint8Array, prefix: string, type?: "secp256k1" | "ed25519" | "ethsecp256k1"): string;
/**
 * Translates the given ethereum address to a bech32 address.
 * @param ethAddress Must be a valid ethereum address (eg. `0x123...DeF`).
 */
export declare function translateEthToBech32Address(ethAddress: string, prefix: string): `${Lowercase<string>}1${string}`;
//# sourceMappingURL=address.d.ts.map