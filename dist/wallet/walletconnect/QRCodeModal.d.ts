import type { IQRCodeModal } from "@walletconnect/legacy-types";
export type MobileAppDetails = {
    name: string;
    android?: string | undefined;
    ios?: string | undefined;
};
export declare function shouldDeepLink(details: MobileAppDetails): boolean;
export declare class QRCodeModal implements IQRCodeModal {
    private readonly id;
    private readonly details;
    private reject;
    constructor(details: MobileAppDetails);
    open(uri: string): Promise<never>;
    close(): void;
    private generateAndroidIntent;
    private generateIosIntent;
}
//# sourceMappingURL=QRCodeModal.d.ts.map