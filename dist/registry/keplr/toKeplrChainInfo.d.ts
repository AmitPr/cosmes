import type { ChainInfo as KeplrChainInfo } from "@keplr-wallet/types";
import { ChainRegistryAssetList } from "../types/ChainRegistryAssetList.js";
import { ChainRegistryChainInfo } from "../types/ChainRegistryChainInfo.js";
/**
 * Generates the Keplr compatible chain info using Chain Registry's chain info and asset list.
 * This is useful when using Keplr's `experimentalSuggestChain` API.
 *
 * ```typescript
 * // Example
 * const chain = "archway"
 * const [chainInfo, assetList] = await Promise.all([
 *   getChainRegistryChainInfo(chain),
 *   getChainRegistryAssetList(chain),
 * ]);
 * const info = toKeplrChainInfo(chainInfo, assetList);
 * window.keplr.experimentalSuggestChain(info);
 * ```
 *
 * @see https://docs.keplr.app/api/suggest-chain.html
 */
export declare function toKeplrChainInfo(chainRegistryChainInfo: ChainRegistryChainInfo, chainRegistryAssetList: ChainRegistryAssetList, options?: {
    /**
     * Override the default RPC endpoint getter.
     *
     * Default getter will use the first RPC endpoint in the chain's `apis.rpc` array
     */
    getRpcEndpoint?: (chain: ChainRegistryChainInfo) => string;
    /**
     * Override the default REST endpoint getter.
     *
     * Default getter will use the first REST endpoint in the chain's `apis.rest` array
     */
    getRestEndpoint?: (chain: ChainRegistryChainInfo) => string;
}): KeplrChainInfo;
//# sourceMappingURL=toKeplrChainInfo.d.ts.map