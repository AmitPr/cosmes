import { MsgMultiSend, MsgMultiSendResponse, MsgSend, MsgSendResponse, MsgSetSendEnabled, MsgSetSendEnabledResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx_pb.js";
/**
 * Send defines a method for sending coins from one account to another account.
 *
 * @generated from rpc cosmos.bank.v1beta1.Msg.Send
 */
export declare const MsgSendService: {
    readonly typeName: "cosmos.bank.v1beta1.Msg";
    readonly method: "Send";
    readonly Request: typeof MsgSend;
    readonly Response: typeof MsgSendResponse;
};
/**
 * MultiSend defines a method for sending coins from some accounts to other accounts.
 *
 * @generated from rpc cosmos.bank.v1beta1.Msg.MultiSend
 */
export declare const MsgMultiSendService: {
    readonly typeName: "cosmos.bank.v1beta1.Msg";
    readonly method: "MultiSend";
    readonly Request: typeof MsgMultiSend;
    readonly Response: typeof MsgMultiSendResponse;
};
/**
 * UpdateParams defines a governance operation for updating the x/bank module parameters.
 * The authority is defined in the keeper.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from rpc cosmos.bank.v1beta1.Msg.UpdateParams
 */
export declare const MsgUpdateParamsService: {
    readonly typeName: "cosmos.bank.v1beta1.Msg";
    readonly method: "UpdateParams";
    readonly Request: typeof MsgUpdateParams;
    readonly Response: typeof MsgUpdateParamsResponse;
};
/**
 * SetSendEnabled is a governance operation for setting the SendEnabled flag
 * on any number of Denoms. Only the entries to add or update should be
 * included. Entries that already exist in the store, but that aren't
 * included in this message, will be left unchanged.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from rpc cosmos.bank.v1beta1.Msg.SetSendEnabled
 */
export declare const MsgSetSendEnabledService: {
    readonly typeName: "cosmos.bank.v1beta1.Msg";
    readonly method: "SetSendEnabled";
    readonly Request: typeof MsgSetSendEnabled;
    readonly Response: typeof MsgSetSendEnabledResponse;
};
//# sourceMappingURL=tx_cosmes.d.ts.map