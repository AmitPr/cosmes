import { MsgGrantAllowance, MsgGrantAllowanceResponse, MsgRevokeAllowance, MsgRevokeAllowanceResponse } from "./tx_pb.js";
/**
 * GrantAllowance grants fee allowance to the grantee on the granter's
 * account with the provided expiration time.
 *
 * @generated from rpc cosmos.feegrant.v1beta1.Msg.GrantAllowance
 */
export declare const MsgGrantAllowanceService: {
    readonly typeName: "cosmos.feegrant.v1beta1.Msg";
    readonly method: "GrantAllowance";
    readonly Request: typeof MsgGrantAllowance;
    readonly Response: typeof MsgGrantAllowanceResponse;
};
/**
 * RevokeAllowance revokes any fee allowance of granter's account that
 * has been granted to the grantee.
 *
 * @generated from rpc cosmos.feegrant.v1beta1.Msg.RevokeAllowance
 */
export declare const MsgRevokeAllowanceService: {
    readonly typeName: "cosmos.feegrant.v1beta1.Msg";
    readonly method: "RevokeAllowance";
    readonly Request: typeof MsgRevokeAllowance;
    readonly Response: typeof MsgRevokeAllowanceResponse;
};
//# sourceMappingURL=tx_cosmes.d.ts.map