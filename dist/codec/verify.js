import { sha256 } from "@noble/hashes/sha256";
import { keccak_256 } from "@noble/hashes/sha3";
import * as secp256k1 from "@noble/secp256k1";
import { base64 } from "@scure/base";
import { resolveBech32Address } from "./address.js";
import { serialiseSignDoc } from "./serialise.js";
import { recoverPubKeyFromEthSignature } from "./sign.js";
export function verifyECDSA({ pubKey, data, signature, type, }) {
    return secp256k1.verify(signature, type === "ethsecp256k1" ? keccak_256(data) : sha256(data), pubKey);
}
export function verifyADR36({ pubKey, bech32Prefix, data, signature, type, }) {
    const msg = serialiseSignDoc({
        chain_id: "",
        account_number: "0",
        sequence: "0",
        fee: {
            gas: "0",
            amount: [],
        },
        msgs: [
            {
                type: "sign/MsgSignData",
                value: {
                    signer: resolveBech32Address(pubKey, bech32Prefix, type),
                    data: base64.encode(data),
                },
            },
        ],
        memo: "",
    });
    return verifyECDSA({
        pubKey,
        data: msg,
        signature,
        type,
    });
}
export function verifyEIP191({ pubKey, data, signature, }) {
    const recoveredPubKey = recoverPubKeyFromEthSignature(data, signature);
    return (pubKey.length === recoveredPubKey.length &&
        pubKey.every((v, i) => v === recoveredPubKey[i]));
}
//# sourceMappingURL=verify.js.map