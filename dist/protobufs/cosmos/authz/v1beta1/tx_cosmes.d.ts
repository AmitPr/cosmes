import { MsgExec, MsgExecResponse, MsgGrant, MsgGrantResponse, MsgRevoke, MsgRevokeResponse } from "./tx_pb.js";
/**
 * Grant grants the provided authorization to the grantee on the granter's
 * account with the provided expiration time. If there is already a grant
 * for the given (granter, grantee, Authorization) triple, then the grant
 * will be overwritten.
 *
 * @generated from rpc cosmos.authz.v1beta1.Msg.Grant
 */
export declare const MsgGrantService: {
    readonly typeName: "cosmos.authz.v1beta1.Msg";
    readonly method: "Grant";
    readonly Request: typeof MsgGrant;
    readonly Response: typeof MsgGrantResponse;
};
/**
 * Exec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 *
 * @generated from rpc cosmos.authz.v1beta1.Msg.Exec
 */
export declare const MsgExecService: {
    readonly typeName: "cosmos.authz.v1beta1.Msg";
    readonly method: "Exec";
    readonly Request: typeof MsgExec;
    readonly Response: typeof MsgExecResponse;
};
/**
 * Revoke revokes any authorization corresponding to the provided method name on the
 * granter's account that has been granted to the grantee.
 *
 * @generated from rpc cosmos.authz.v1beta1.Msg.Revoke
 */
export declare const MsgRevokeService: {
    readonly typeName: "cosmos.authz.v1beta1.Msg";
    readonly method: "Revoke";
    readonly Request: typeof MsgRevoke;
    readonly Response: typeof MsgRevokeResponse;
};
//# sourceMappingURL=tx_cosmes.d.ts.map