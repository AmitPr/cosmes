import { Keplr } from "../../../registry/index.js";
export type OWallet = Keplr & {
    isOwallet: true;
};
export type Window = {
    owallet?: OWallet | undefined;
};
//# sourceMappingURL=types.d.ts.map