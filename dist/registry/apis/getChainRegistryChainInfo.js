export async function getChainRegistryChainInfo(chain) {
    const res = await fetch(`https://raw.githubusercontent.com/cosmos/chain-registry/master/${chain}/chain.json`);
    return res.json();
}
//# sourceMappingURL=getChainRegistryChainInfo.js.map