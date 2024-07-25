import { Keplr } from "cosmes/registry";
export type Cosmostation = Keplr;
export type Window = {
    cosmostation?: {
        providers: {
            keplr: Cosmostation;
        };
    } | undefined;
};
//# sourceMappingURL=types.d.ts.map