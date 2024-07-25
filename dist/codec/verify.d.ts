type VerifyArbitraryParams = {
    /** The public key which created the signature */
    pubKey: Uint8Array;
    /** The bech32 account address prefix of the signer */
    bech32Prefix: string;
    /** The arbitrary bytes that was signed */
    data: Uint8Array;
    /** The signature bytes */
    signature: Uint8Array;
    /** The type of the signature */
    type?: "secp256k1" | "ethsecp256k1";
};
export declare function verifyECDSA({ pubKey, data, signature, type, }: Omit<VerifyArbitraryParams, "bech32Prefix">): boolean;
export declare function verifyADR36({ pubKey, bech32Prefix, data, signature, type, }: VerifyArbitraryParams): boolean;
export declare function verifyEIP191({ pubKey, data, signature, }: Omit<VerifyArbitraryParams, "bech32Prefix">): boolean;
export {};
//# sourceMappingURL=verify.d.ts.map