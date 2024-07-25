import { MsgCancelUpgrade, MsgCancelUpgradeResponse, MsgSoftwareUpgrade, MsgSoftwareUpgradeResponse } from "./tx_pb.js";
/**
 * SoftwareUpgrade is a governance operation for initiating a software upgrade.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from rpc cosmos.upgrade.v1beta1.Msg.SoftwareUpgrade
 */
export declare const MsgSoftwareUpgradeService: {
    readonly typeName: "cosmos.upgrade.v1beta1.Msg";
    readonly method: "SoftwareUpgrade";
    readonly Request: typeof MsgSoftwareUpgrade;
    readonly Response: typeof MsgSoftwareUpgradeResponse;
};
/**
 * CancelUpgrade is a governance operation for cancelling a previously
 * approved software upgrade.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from rpc cosmos.upgrade.v1beta1.Msg.CancelUpgrade
 */
export declare const MsgCancelUpgradeService: {
    readonly typeName: "cosmos.upgrade.v1beta1.Msg";
    readonly method: "CancelUpgrade";
    readonly Request: typeof MsgCancelUpgrade;
    readonly Response: typeof MsgCancelUpgradeResponse;
};
//# sourceMappingURL=tx_cosmes.d.ts.map