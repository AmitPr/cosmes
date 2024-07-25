import { SignDoc, StdSignDoc } from "../../registry/index.js";
import { MobileAppDetails } from "./QRCodeModal.js";
type GetAccountResponse = {
    address: string;
    algo: string;
    pubkey: string;
};
/**
 * The data returned by the `cosmos_signAmino` method. `signed` is optional
 * because some wallets (like Cosmostation) may not return it.
 */
type WcSignAminoResponse = {
    signature: {
        signature: string;
    };
    signed?: StdSignDoc | undefined;
};
type SignAminoResponse = Required<WcSignAminoResponse>;
/**
 * The data returned by the `cosmos_signDirect` method. `signed` is optional
 * because some wallets (like Cosmostation) may not return it.
 */
type WcSignDirectResponse = {
    signature: {
        signature: string;
    };
    signed?: SignDoc | undefined;
};
type SignDirectResponse = Required<WcSignDirectResponse>;
export declare class WalletConnectV2 {
    private readonly projectId;
    private readonly mobileAppDetails;
    private readonly sessionStorageKey;
    private readonly onDisconnectCbs;
    private readonly onAccountChangeCbs;
    private signClient;
    constructor(projectId: string, mobileAppDetails: MobileAppDetails);
    connect(chainIds: string[], clearRequired?: boolean): Promise<void>;
    onDisconnect(cb: () => unknown): () => void;
    onAccountChange(cb: () => unknown): () => void;
    getAccount(chainId: string): Promise<GetAccountResponse>;
    signAmino(chainId: string, signerAddress: string, stdSignDoc: StdSignDoc): Promise<SignAminoResponse>;
    signDirect(chainId: string, signerAddress: string, signDoc: SignDoc): Promise<SignDirectResponse>;
    /**
     * Checks if the current session is **really connected**. The `ping` method may
     * never return a response if the session is already disconnected. Thus, we
     * listen to the `session_delete` and `session_expire` events to detect if the
     * session is disconnected. If all else fails, we timeout after `timeoutSeconds`
     * and assume the session is not connected.
     */
    private isConnected;
    private disconnect;
    private request;
    private toCosmosNamespace;
}
export {};
//# sourceMappingURL=WalletConnectV2.d.ts.map