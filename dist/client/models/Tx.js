import { base64 } from "@scure/base";
import { CosmosTxV1beta1AuthInfo as ProtoAuthInfo, CosmosTxV1beta1Fee as ProtoFee, CosmosTxV1beta1SignDoc as ProtoSignDoc, CosmosTxSigningV1beta1SignMode as ProtoSignMode, CosmosTxV1beta1TxBody as ProtoTxBody, CosmosTxV1beta1TxRaw as ProtoTxRaw, } from "../../protobufs/index.js";
import { toAny } from "../utils/toAny.js";
export class Tx {
    constructor(data) {
        this.data = data;
    }
    /**
     * Returns the signed, proto-encoded tx, ready to be broadcasted. To create an
     * unsigned tx for the purpose of simulating it, use {@link toUnsignedProto}.
     */
    toSignedProto({ fee, sequence, signMode, signature, memo, timeoutHeight, extensionOptions, }) {
        return new ProtoTxRaw({
            authInfoBytes: new ProtoAuthInfo({
                fee: fee,
                signerInfos: [this.getSignerInfo(sequence, signMode)],
            }).toBinary(),
            bodyBytes: new ProtoTxBody({
                messages: this.data.msgs.map((m) => toAny(m.toProto())),
                memo: memo,
                timeoutHeight: timeoutHeight,
                extensionOptions: extensionOptions?.map(toAny),
            }).toBinary(),
            signatures: [signature],
        });
    }
    /**
     * Returns the proto-encoded tx with the sign mode set to `UNSPECIFIED`, useful
     * for simulating the tx. To create a signed tx, use {@link toSignedProto}.
     */
    toUnsignedProto(info) {
        return this.toSignedProto({
            ...info,
            fee: new ProtoFee(),
            signMode: ProtoSignMode.UNSPECIFIED,
            signature: new Uint8Array(),
        });
    }
    /**
     * Combines the given `StdSignDoc` and `signature` and returns the proto-encoded
     * tx with sign mode set to `LEGACY_AMINO_JSON`, ready to be broadcasted.
     *
     * @param signature Must be a base64 encoded string or an `Uint8Array`
     */
    toSignedAmino({ sequence, fee, memo, timeout_height }, signature) {
        return this.toSignedProto({
            sequence: BigInt(sequence),
            fee: new ProtoFee({
                amount: fee.amount.slice(),
                gasLimit: BigInt(fee.gas),
                payer: fee.payer,
                granter: fee.granter,
            }),
            signMode: ProtoSignMode.LEGACY_AMINO_JSON,
            signature: typeof signature === "string" ? base64.decode(signature) : signature,
            memo: memo,
            timeoutHeight: timeout_height ? BigInt(timeout_height) : undefined,
        });
    }
    /**
     * Combines the given `SignDoc` and `signature` and returns the proto-encoded tx,
     * ready to be broadcasted.
     *
     * @param signature Must be a base64 encoded string or an `Uint8Array`
     */
    toSignedDirect({ bodyBytes, authInfoBytes }, signature) {
        return new ProtoTxRaw({
            authInfoBytes,
            bodyBytes,
            signatures: [
                typeof signature === "string" ? base64.decode(signature) : signature,
            ],
        });
    }
    /**
     * Returns the unsigned, proto-encoded tx ready to be signed by a wallet.
     */
    toSignDoc({ accountNumber, sequence, fee, memo, timeoutHeight, }) {
        return new ProtoSignDoc({
            chainId: this.data.chainId,
            accountNumber: accountNumber,
            authInfoBytes: new ProtoAuthInfo({
                fee: fee,
                signerInfos: [this.getSignerInfo(sequence, ProtoSignMode.DIRECT)],
            }).toBinary(),
            bodyBytes: new ProtoTxBody({
                messages: this.data.msgs.map((m) => toAny(m.toProto())),
                memo: memo,
                timeoutHeight: timeoutHeight,
            }).toBinary(),
        });
    }
    /**
     * Returns the unsigned, amino-encoded tx ready to be signed by a wallet.
     */
    toStdSignDoc({ accountNumber, sequence, fee, memo, timeoutHeight, }) {
        return {
            chain_id: this.data.chainId,
            account_number: accountNumber.toString(),
            sequence: sequence.toString(),
            fee: {
                amount: fee.amount,
                gas: fee.gasLimit.toString(),
            },
            msgs: this.data.msgs.map((m) => m.toAmino()),
            memo: memo ?? "",
            timeout_height: timeoutHeight?.toString(),
        };
    }
    /**
     * Returns the signer info. The chain ID is used to determine if the public key
     * should be encoded using Injective's custom protobuf.
     *
     * **Warning**: Injective's chain ID might change, causing potential issues here.
     */
    getSignerInfo(sequence, mode) {
        return {
            publicKey: toAny(this.data.pubKey.toProto()),
            sequence: sequence,
            modeInfo: {
                sum: {
                    case: "single",
                    value: {
                        mode: mode,
                    },
                },
            },
        };
    }
}
//# sourceMappingURL=Tx.js.map