export async function getChainRegistryAssetList(chain) {
    const res = await fetch(`https://raw.githubusercontent.com/cosmos/chain-registry/master/${chain}/assetlist.json`);
    return res.json();
}
//# sourceMappingURL=getChainRegistryAssetList.js.map