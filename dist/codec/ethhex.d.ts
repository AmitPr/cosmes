/**
 * Convenience wrapper around `hex` that deals with hex strings typically
 * seen in Ethereum, where strings start with `0x` and are lower case.
 *
 * - For `encode`, the resulting string will be lower case
 * - For `decode`, the `str` arg can either be lower or upper case
 */
export declare const ethhex: {
    encode: (bytes: Uint8Array) => string;
    decode: (str: string) => Uint8Array;
};
//# sourceMappingURL=ethhex.d.ts.map