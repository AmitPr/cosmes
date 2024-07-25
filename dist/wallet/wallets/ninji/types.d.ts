import { Keplr } from "cosmes/registry";
export type Ninji = Keplr & {
    on: (event: string, callback: () => void) => void;
};
export type Window = {
    ninji?: Ninji | undefined;
};
//# sourceMappingURL=types.d.ts.map