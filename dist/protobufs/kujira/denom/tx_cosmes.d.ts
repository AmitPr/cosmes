import { MsgAddNoFeeAccounts, MsgAddNoFeeAccountsResponse, MsgBurn, MsgBurnResponse, MsgChangeAdmin, MsgChangeAdminResponse, MsgCreateDenom, MsgCreateDenomResponse, MsgMint, MsgMintResponse, MsgRemoveNoFeeAccounts, MsgRemoveNoFeeAccountsResponse } from "./tx_pb.js";
/**
 * @generated from rpc kujira.denom.Msg.AddNoFeeAccounts
 */
export declare const MsgAddNoFeeAccountsService: {
    readonly typeName: "kujira.denom.Msg";
    readonly method: "AddNoFeeAccounts";
    readonly Request: typeof MsgAddNoFeeAccounts;
    readonly Response: typeof MsgAddNoFeeAccountsResponse;
};
/**
 * @generated from rpc kujira.denom.Msg.RemoveNoFeeAccounts
 */
export declare const MsgRemoveNoFeeAccountsService: {
    readonly typeName: "kujira.denom.Msg";
    readonly method: "RemoveNoFeeAccounts";
    readonly Request: typeof MsgRemoveNoFeeAccounts;
    readonly Response: typeof MsgRemoveNoFeeAccountsResponse;
};
/**
 * @generated from rpc kujira.denom.Msg.CreateDenom
 */
export declare const MsgCreateDenomService: {
    readonly typeName: "kujira.denom.Msg";
    readonly method: "CreateDenom";
    readonly Request: typeof MsgCreateDenom;
    readonly Response: typeof MsgCreateDenomResponse;
};
/**
 * @generated from rpc kujira.denom.Msg.Mint
 */
export declare const MsgMintService: {
    readonly typeName: "kujira.denom.Msg";
    readonly method: "Mint";
    readonly Request: typeof MsgMint;
    readonly Response: typeof MsgMintResponse;
};
/**
 * @generated from rpc kujira.denom.Msg.Burn
 */
export declare const MsgBurnService: {
    readonly typeName: "kujira.denom.Msg";
    readonly method: "Burn";
    readonly Request: typeof MsgBurn;
    readonly Response: typeof MsgBurnResponse;
};
/**
 * ForceTransfer is deactivated for now because we need to think through edge
 * cases rpc ForceTransfer(MsgForceTransfer) returns
 * (MsgForceTransferResponse);
 *
 * @generated from rpc kujira.denom.Msg.ChangeAdmin
 */
export declare const MsgChangeAdminService: {
    readonly typeName: "kujira.denom.Msg";
    readonly method: "ChangeAdmin";
    readonly Request: typeof MsgChangeAdmin;
    readonly Response: typeof MsgChangeAdminResponse;
};
//# sourceMappingURL=tx_cosmes.d.ts.map