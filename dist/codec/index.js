// Re-export @scure/base for their codecs
export * from "@scure/base";
export { resolveBech32Address, translateEthToBech32Address } from "./address.js";
export { ethhex } from "./ethhex.js";
export { resolveKeyPair } from "./key.js";
export { serialiseSignDoc } from "./serialise.js";
export { hashEthArbitraryMessage, recoverPubKeyFromEthSignature, signAmino, signDirect, } from "./sign.js";
export { verifyADR36, verifyECDSA, verifyEIP191 } from "./verify.js";
//# sourceMappingURL=index.js.map