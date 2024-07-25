import { MsgConnectionOpenAck, MsgConnectionOpenAckResponse, MsgConnectionOpenConfirm, MsgConnectionOpenConfirmResponse, MsgConnectionOpenInit, MsgConnectionOpenInitResponse, MsgConnectionOpenTry, MsgConnectionOpenTryResponse } from "./tx_pb.js";
/**
 * ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit.
 *
 * @generated from rpc ibc.core.connection.v1.Msg.ConnectionOpenInit
 */
export declare const MsgConnectionOpenInitService: {
    readonly typeName: "ibc.core.connection.v1.Msg";
    readonly method: "ConnectionOpenInit";
    readonly Request: typeof MsgConnectionOpenInit;
    readonly Response: typeof MsgConnectionOpenInitResponse;
};
/**
 * ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry.
 *
 * @generated from rpc ibc.core.connection.v1.Msg.ConnectionOpenTry
 */
export declare const MsgConnectionOpenTryService: {
    readonly typeName: "ibc.core.connection.v1.Msg";
    readonly method: "ConnectionOpenTry";
    readonly Request: typeof MsgConnectionOpenTry;
    readonly Response: typeof MsgConnectionOpenTryResponse;
};
/**
 * ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck.
 *
 * @generated from rpc ibc.core.connection.v1.Msg.ConnectionOpenAck
 */
export declare const MsgConnectionOpenAckService: {
    readonly typeName: "ibc.core.connection.v1.Msg";
    readonly method: "ConnectionOpenAck";
    readonly Request: typeof MsgConnectionOpenAck;
    readonly Response: typeof MsgConnectionOpenAckResponse;
};
/**
 * ConnectionOpenConfirm defines a rpc handler method for
 * MsgConnectionOpenConfirm.
 *
 * @generated from rpc ibc.core.connection.v1.Msg.ConnectionOpenConfirm
 */
export declare const MsgConnectionOpenConfirmService: {
    readonly typeName: "ibc.core.connection.v1.Msg";
    readonly method: "ConnectionOpenConfirm";
    readonly Request: typeof MsgConnectionOpenConfirm;
    readonly Response: typeof MsgConnectionOpenConfirmResponse;
};
//# sourceMappingURL=tx_cosmes.d.ts.map