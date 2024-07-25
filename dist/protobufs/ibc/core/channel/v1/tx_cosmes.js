// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file ibc/core/channel/v1/tx.proto (package ibc.core.channel.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { MsgAcknowledgement, MsgAcknowledgementResponse, MsgChannelCloseConfirm, MsgChannelCloseConfirmResponse, MsgChannelCloseInit, MsgChannelCloseInitResponse, MsgChannelOpenAck, MsgChannelOpenAckResponse, MsgChannelOpenConfirm, MsgChannelOpenConfirmResponse, MsgChannelOpenInit, MsgChannelOpenInitResponse, MsgChannelOpenTry, MsgChannelOpenTryResponse, MsgRecvPacket, MsgRecvPacketResponse, MsgTimeout, MsgTimeoutOnClose, MsgTimeoutOnCloseResponse, MsgTimeoutResponse } from "./tx_pb.js";
const TYPE_NAME = "ibc.core.channel.v1.Msg";
/**
 * ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit.
 *
 * @generated from rpc ibc.core.channel.v1.Msg.ChannelOpenInit
 */
export const MsgChannelOpenInitService = {
    typeName: TYPE_NAME,
    method: "ChannelOpenInit",
    Request: MsgChannelOpenInit,
    Response: MsgChannelOpenInitResponse,
};
/**
 * ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry.
 *
 * @generated from rpc ibc.core.channel.v1.Msg.ChannelOpenTry
 */
export const MsgChannelOpenTryService = {
    typeName: TYPE_NAME,
    method: "ChannelOpenTry",
    Request: MsgChannelOpenTry,
    Response: MsgChannelOpenTryResponse,
};
/**
 * ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck.
 *
 * @generated from rpc ibc.core.channel.v1.Msg.ChannelOpenAck
 */
export const MsgChannelOpenAckService = {
    typeName: TYPE_NAME,
    method: "ChannelOpenAck",
    Request: MsgChannelOpenAck,
    Response: MsgChannelOpenAckResponse,
};
/**
 * ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm.
 *
 * @generated from rpc ibc.core.channel.v1.Msg.ChannelOpenConfirm
 */
export const MsgChannelOpenConfirmService = {
    typeName: TYPE_NAME,
    method: "ChannelOpenConfirm",
    Request: MsgChannelOpenConfirm,
    Response: MsgChannelOpenConfirmResponse,
};
/**
 * ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit.
 *
 * @generated from rpc ibc.core.channel.v1.Msg.ChannelCloseInit
 */
export const MsgChannelCloseInitService = {
    typeName: TYPE_NAME,
    method: "ChannelCloseInit",
    Request: MsgChannelCloseInit,
    Response: MsgChannelCloseInitResponse,
};
/**
 * ChannelCloseConfirm defines a rpc handler method for
 * MsgChannelCloseConfirm.
 *
 * @generated from rpc ibc.core.channel.v1.Msg.ChannelCloseConfirm
 */
export const MsgChannelCloseConfirmService = {
    typeName: TYPE_NAME,
    method: "ChannelCloseConfirm",
    Request: MsgChannelCloseConfirm,
    Response: MsgChannelCloseConfirmResponse,
};
/**
 * RecvPacket defines a rpc handler method for MsgRecvPacket.
 *
 * @generated from rpc ibc.core.channel.v1.Msg.RecvPacket
 */
export const MsgRecvPacketService = {
    typeName: TYPE_NAME,
    method: "RecvPacket",
    Request: MsgRecvPacket,
    Response: MsgRecvPacketResponse,
};
/**
 * Timeout defines a rpc handler method for MsgTimeout.
 *
 * @generated from rpc ibc.core.channel.v1.Msg.Timeout
 */
export const MsgTimeoutService = {
    typeName: TYPE_NAME,
    method: "Timeout",
    Request: MsgTimeout,
    Response: MsgTimeoutResponse,
};
/**
 * TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose.
 *
 * @generated from rpc ibc.core.channel.v1.Msg.TimeoutOnClose
 */
export const MsgTimeoutOnCloseService = {
    typeName: TYPE_NAME,
    method: "TimeoutOnClose",
    Request: MsgTimeoutOnClose,
    Response: MsgTimeoutOnCloseResponse,
};
/**
 * Acknowledgement defines a rpc handler method for MsgAcknowledgement.
 *
 * @generated from rpc ibc.core.channel.v1.Msg.Acknowledgement
 */
export const MsgAcknowledgementService = {
    typeName: TYPE_NAME,
    method: "Acknowledgement",
    Request: MsgAcknowledgement,
    Response: MsgAcknowledgementResponse,
};
//# sourceMappingURL=tx_cosmes.js.map