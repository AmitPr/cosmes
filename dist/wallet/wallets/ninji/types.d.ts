import { Keplr } from "../../../registry/index.js";
export type Ninji = Keplr & {
    on: (event: string, callback: () => void) => void;
};
export type Window = {
    ninji?: Ninji | undefined;
};
//# sourceMappingURL=types.d.ts.map