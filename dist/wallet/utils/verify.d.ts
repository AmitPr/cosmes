import { WalletName } from "../constants/WalletName.js";
type VerifyArbitraryParams = {
    /** The identifier of the wallet which created the signature */
    wallet: WalletName;
    /** The base64 encoded public key which created the signature */
    pubKey: string;
    /** The bech32 account address prefix of the signer */
    bech32Prefix: string;
    /** The utf-8 encoded arbitrary string that was signed */
    data: string;
    /** The base64 encoded string of the signature */
    signature: string;
    /** The type of the signature */
    type?: "secp256k1" | "ethsecp256k1";
};
/**
 * Verifies the signature output of a valid call to `ConnectedWallet.signArbitrary`.
 * Returns `true` if and only if the signature is valid.
 *
 * @param wallet The identifier of the wallet which created the signature
 * @param pubKey The base64 encoded public key which created the signature
 * @param bech32Prefix The bech32 account address prefix of the signer
 * @param data The utf-8 encoded arbitrary string that was signed
 * @param signature The base64 encoded string of the signature
 * @param type The type of the signature (default: `secp256k1`)
 */
export declare function verifyArbitrary({ wallet, pubKey, bech32Prefix, data, signature, type, }: VerifyArbitraryParams): boolean;
export {};
//# sourceMappingURL=verify.d.ts.map