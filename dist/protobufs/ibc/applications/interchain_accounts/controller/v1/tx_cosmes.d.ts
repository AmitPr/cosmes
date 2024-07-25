import { MsgRegisterInterchainAccount, MsgRegisterInterchainAccountResponse, MsgSendTx, MsgSendTxResponse } from "./tx_pb.js";
/**
 * RegisterInterchainAccount defines a rpc handler for MsgRegisterInterchainAccount.
 *
 * @generated from rpc ibc.applications.interchain_accounts.controller.v1.Msg.RegisterInterchainAccount
 */
export declare const MsgRegisterInterchainAccountService: {
    readonly typeName: "ibc.applications.interchain_accounts.controller.v1.Msg";
    readonly method: "RegisterInterchainAccount";
    readonly Request: typeof MsgRegisterInterchainAccount;
    readonly Response: typeof MsgRegisterInterchainAccountResponse;
};
/**
 * SendTx defines a rpc handler for MsgSendTx.
 *
 * @generated from rpc ibc.applications.interchain_accounts.controller.v1.Msg.SendTx
 */
export declare const MsgSendTxService: {
    readonly typeName: "ibc.applications.interchain_accounts.controller.v1.Msg";
    readonly method: "SendTx";
    readonly Request: typeof MsgSendTx;
    readonly Response: typeof MsgSendTxResponse;
};
//# sourceMappingURL=tx_cosmes.d.ts.map