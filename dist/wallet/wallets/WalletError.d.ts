/**
 * Custom error class which wraps around an error thrown by a wallet.
 */
export declare class WalletError extends Error {
    /**
     * Holds the original error and type thrown by the wallet.
     */
    raw: unknown;
    constructor(message: string, raw: unknown);
    /**
     * Returns the result of the `promise` if it resolves successfully, normalising
     * any errors thrown into a `WalletError` instance.
     *
     * It is best to wrap all wallet API calls with this function as some wallets
     * throw other data types other than actual `Error` instances.
     */
    static wrap<T>(promise: Promise<T>): Promise<T>;
}
//# sourceMappingURL=WalletError.d.ts.map