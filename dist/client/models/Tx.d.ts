import { Message } from "@bufbuild/protobuf";
import { CosmosTxV1beta1Fee as ProtoFee, CosmosTxV1beta1SignDoc as ProtoSignDoc, CosmosTxSigningV1beta1SignMode as ProtoSignMode, CosmosTxV1beta1TxRaw as ProtoTxRaw } from "../../protobufs/index.js";
import { SignDoc, StdSignDoc } from "../../registry/index.js";
import { Adapter } from "./Adapter.js";
import { Secp256k1PubKey } from "./Secp256k1PubKey.js";
type Data = {
    chainId: string;
    pubKey: Secp256k1PubKey;
    msgs: Adapter[];
};
export type ToSignedProtoParams = {
    sequence: bigint;
    fee: ProtoFee;
    signMode: ProtoSignMode;
    signature: Uint8Array;
    memo?: string | undefined;
    timeoutHeight?: bigint | undefined;
    extensionOptions?: Message[] | undefined;
};
export type ToUnsignedProtoParams = Pick<ToSignedProtoParams, "sequence" | "memo" | "timeoutHeight">;
export type ToSignDocParams = {
    accountNumber: bigint;
    sequence: bigint;
    fee: ProtoFee;
    memo?: string | undefined;
    timeoutHeight?: bigint | undefined;
};
export type ToStdSignDocParams = ToSignDocParams;
export declare class Tx {
    private readonly data;
    constructor(data: Data);
    /**
     * Returns the signed, proto-encoded tx, ready to be broadcasted. To create an
     * unsigned tx for the purpose of simulating it, use {@link toUnsignedProto}.
     */
    toSignedProto({ fee, sequence, signMode, signature, memo, timeoutHeight, extensionOptions, }: ToSignedProtoParams): ProtoTxRaw;
    /**
     * Returns the proto-encoded tx with the sign mode set to `UNSPECIFIED`, useful
     * for simulating the tx. To create a signed tx, use {@link toSignedProto}.
     */
    toUnsignedProto(info: ToUnsignedProtoParams): ProtoTxRaw;
    /**
     * Combines the given `StdSignDoc` and `signature` and returns the proto-encoded
     * tx with sign mode set to `LEGACY_AMINO_JSON`, ready to be broadcasted.
     *
     * @param signature Must be a base64 encoded string or an `Uint8Array`
     */
    toSignedAmino({ sequence, fee, memo, timeout_height }: StdSignDoc, signature: string | Uint8Array): ProtoTxRaw;
    /**
     * Combines the given `SignDoc` and `signature` and returns the proto-encoded tx,
     * ready to be broadcasted.
     *
     * @param signature Must be a base64 encoded string or an `Uint8Array`
     */
    toSignedDirect({ bodyBytes, authInfoBytes }: SignDoc, signature: string | Uint8Array): ProtoTxRaw;
    /**
     * Returns the unsigned, proto-encoded tx ready to be signed by a wallet.
     */
    toSignDoc({ accountNumber, sequence, fee, memo, timeoutHeight, }: ToSignDocParams): ProtoSignDoc;
    /**
     * Returns the unsigned, amino-encoded tx ready to be signed by a wallet.
     */
    toStdSignDoc({ accountNumber, sequence, fee, memo, timeoutHeight, }: ToStdSignDocParams): StdSignDoc;
    /**
     * Returns the signer info. The chain ID is used to determine if the public key
     * should be encoded using Injective's custom protobuf.
     *
     * **Warning**: Injective's chain ID might change, causing potential issues here.
     */
    private getSignerInfo;
}
export {};
//# sourceMappingURL=Tx.d.ts.map