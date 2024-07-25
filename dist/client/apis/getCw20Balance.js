import { queryContract } from "./queryContract";
export async function getCw20Balance(rpc, { address, token }) {
    try {
        const { balance } = await queryContract(rpc, {
            address: token,
            query: {
                balance: {
                    address: address,
                },
            },
        });
        return BigInt(balance);
    }
    catch (err) {
        console.error(err);
        return 0n;
    }
}
//# sourceMappingURL=getCw20Balance.js.map