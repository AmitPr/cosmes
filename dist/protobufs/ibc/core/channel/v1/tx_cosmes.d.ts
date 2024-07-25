import { MsgAcknowledgement, MsgAcknowledgementResponse, MsgChannelCloseConfirm, MsgChannelCloseConfirmResponse, MsgChannelCloseInit, MsgChannelCloseInitResponse, MsgChannelOpenAck, MsgChannelOpenAckResponse, MsgChannelOpenConfirm, MsgChannelOpenConfirmResponse, MsgChannelOpenInit, MsgChannelOpenInitResponse, MsgChannelOpenTry, MsgChannelOpenTryResponse, MsgRecvPacket, MsgRecvPacketResponse, MsgTimeout, MsgTimeoutOnClose, MsgTimeoutOnCloseResponse, MsgTimeoutResponse } from "./tx_pb.js";
/**
 * ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit.
 *
 * @generated from rpc ibc.core.channel.v1.Msg.ChannelOpenInit
 */
export declare const MsgChannelOpenInitService: {
    readonly typeName: "ibc.core.channel.v1.Msg";
    readonly method: "ChannelOpenInit";
    readonly Request: typeof MsgChannelOpenInit;
    readonly Response: typeof MsgChannelOpenInitResponse;
};
/**
 * ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry.
 *
 * @generated from rpc ibc.core.channel.v1.Msg.ChannelOpenTry
 */
export declare const MsgChannelOpenTryService: {
    readonly typeName: "ibc.core.channel.v1.Msg";
    readonly method: "ChannelOpenTry";
    readonly Request: typeof MsgChannelOpenTry;
    readonly Response: typeof MsgChannelOpenTryResponse;
};
/**
 * ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck.
 *
 * @generated from rpc ibc.core.channel.v1.Msg.ChannelOpenAck
 */
export declare const MsgChannelOpenAckService: {
    readonly typeName: "ibc.core.channel.v1.Msg";
    readonly method: "ChannelOpenAck";
    readonly Request: typeof MsgChannelOpenAck;
    readonly Response: typeof MsgChannelOpenAckResponse;
};
/**
 * ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm.
 *
 * @generated from rpc ibc.core.channel.v1.Msg.ChannelOpenConfirm
 */
export declare const MsgChannelOpenConfirmService: {
    readonly typeName: "ibc.core.channel.v1.Msg";
    readonly method: "ChannelOpenConfirm";
    readonly Request: typeof MsgChannelOpenConfirm;
    readonly Response: typeof MsgChannelOpenConfirmResponse;
};
/**
 * ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit.
 *
 * @generated from rpc ibc.core.channel.v1.Msg.ChannelCloseInit
 */
export declare const MsgChannelCloseInitService: {
    readonly typeName: "ibc.core.channel.v1.Msg";
    readonly method: "ChannelCloseInit";
    readonly Request: typeof MsgChannelCloseInit;
    readonly Response: typeof MsgChannelCloseInitResponse;
};
/**
 * ChannelCloseConfirm defines a rpc handler method for
 * MsgChannelCloseConfirm.
 *
 * @generated from rpc ibc.core.channel.v1.Msg.ChannelCloseConfirm
 */
export declare const MsgChannelCloseConfirmService: {
    readonly typeName: "ibc.core.channel.v1.Msg";
    readonly method: "ChannelCloseConfirm";
    readonly Request: typeof MsgChannelCloseConfirm;
    readonly Response: typeof MsgChannelCloseConfirmResponse;
};
/**
 * RecvPacket defines a rpc handler method for MsgRecvPacket.
 *
 * @generated from rpc ibc.core.channel.v1.Msg.RecvPacket
 */
export declare const MsgRecvPacketService: {
    readonly typeName: "ibc.core.channel.v1.Msg";
    readonly method: "RecvPacket";
    readonly Request: typeof MsgRecvPacket;
    readonly Response: typeof MsgRecvPacketResponse;
};
/**
 * Timeout defines a rpc handler method for MsgTimeout.
 *
 * @generated from rpc ibc.core.channel.v1.Msg.Timeout
 */
export declare const MsgTimeoutService: {
    readonly typeName: "ibc.core.channel.v1.Msg";
    readonly method: "Timeout";
    readonly Request: typeof MsgTimeout;
    readonly Response: typeof MsgTimeoutResponse;
};
/**
 * TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose.
 *
 * @generated from rpc ibc.core.channel.v1.Msg.TimeoutOnClose
 */
export declare const MsgTimeoutOnCloseService: {
    readonly typeName: "ibc.core.channel.v1.Msg";
    readonly method: "TimeoutOnClose";
    readonly Request: typeof MsgTimeoutOnClose;
    readonly Response: typeof MsgTimeoutOnCloseResponse;
};
/**
 * Acknowledgement defines a rpc handler method for MsgAcknowledgement.
 *
 * @generated from rpc ibc.core.channel.v1.Msg.Acknowledgement
 */
export declare const MsgAcknowledgementService: {
    readonly typeName: "ibc.core.channel.v1.Msg";
    readonly method: "Acknowledgement";
    readonly Request: typeof MsgAcknowledgement;
    readonly Response: typeof MsgAcknowledgementResponse;
};
//# sourceMappingURL=tx_cosmes.d.ts.map