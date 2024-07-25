/**
 * Resolves the given `mnemonic` (aka 12-24 words seed phrase) to its public and
 * private key pair. Derivation path uses the default for Cosmos chains - provide
 * the optional `opts` to override.
 */
export declare function resolveKeyPair(mnemonic: string, opts?: {
    coinType?: number | undefined;
    index?: number | undefined;
} | undefined): {
    publicKey: Uint8Array;
    privateKey: Uint8Array;
};
//# sourceMappingURL=key.d.ts.map