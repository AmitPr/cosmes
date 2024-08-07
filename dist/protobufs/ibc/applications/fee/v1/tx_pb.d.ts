import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Fee, PacketFee } from "./fee_pb.js";
import { PacketId } from "../../../core/channel/v1/channel_pb.js";
/**
 * MsgRegisterPayee defines the request type for the RegisterPayee rpc
 *
 * @generated from message ibc.applications.fee.v1.MsgRegisterPayee
 */
export declare class MsgRegisterPayee extends Message<MsgRegisterPayee> {
    /**
     * unique port identifier
     *
     * @generated from field: string port_id = 1;
     */
    portId: string;
    /**
     * unique channel identifier
     *
     * @generated from field: string channel_id = 2;
     */
    channelId: string;
    /**
     * the relayer address
     *
     * @generated from field: string relayer = 3;
     */
    relayer: string;
    /**
     * the payee address
     *
     * @generated from field: string payee = 4;
     */
    payee: string;
    constructor(data?: PartialMessage<MsgRegisterPayee>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.MsgRegisterPayee";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRegisterPayee;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRegisterPayee;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRegisterPayee;
    static equals(a: MsgRegisterPayee | PlainMessage<MsgRegisterPayee> | undefined, b: MsgRegisterPayee | PlainMessage<MsgRegisterPayee> | undefined): boolean;
}
/**
 * MsgRegisterPayeeResponse defines the response type for the RegisterPayee rpc
 *
 * @generated from message ibc.applications.fee.v1.MsgRegisterPayeeResponse
 */
export declare class MsgRegisterPayeeResponse extends Message<MsgRegisterPayeeResponse> {
    constructor(data?: PartialMessage<MsgRegisterPayeeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.MsgRegisterPayeeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRegisterPayeeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRegisterPayeeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRegisterPayeeResponse;
    static equals(a: MsgRegisterPayeeResponse | PlainMessage<MsgRegisterPayeeResponse> | undefined, b: MsgRegisterPayeeResponse | PlainMessage<MsgRegisterPayeeResponse> | undefined): boolean;
}
/**
 * MsgRegisterCounterpartyPayee defines the request type for the RegisterCounterpartyPayee rpc
 *
 * @generated from message ibc.applications.fee.v1.MsgRegisterCounterpartyPayee
 */
export declare class MsgRegisterCounterpartyPayee extends Message<MsgRegisterCounterpartyPayee> {
    /**
     * unique port identifier
     *
     * @generated from field: string port_id = 1;
     */
    portId: string;
    /**
     * unique channel identifier
     *
     * @generated from field: string channel_id = 2;
     */
    channelId: string;
    /**
     * the relayer address
     *
     * @generated from field: string relayer = 3;
     */
    relayer: string;
    /**
     * the counterparty payee address
     *
     * @generated from field: string counterparty_payee = 4;
     */
    counterpartyPayee: string;
    constructor(data?: PartialMessage<MsgRegisterCounterpartyPayee>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.MsgRegisterCounterpartyPayee";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRegisterCounterpartyPayee;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRegisterCounterpartyPayee;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRegisterCounterpartyPayee;
    static equals(a: MsgRegisterCounterpartyPayee | PlainMessage<MsgRegisterCounterpartyPayee> | undefined, b: MsgRegisterCounterpartyPayee | PlainMessage<MsgRegisterCounterpartyPayee> | undefined): boolean;
}
/**
 * MsgRegisterCounterpartyPayeeResponse defines the response type for the RegisterCounterpartyPayee rpc
 *
 * @generated from message ibc.applications.fee.v1.MsgRegisterCounterpartyPayeeResponse
 */
export declare class MsgRegisterCounterpartyPayeeResponse extends Message<MsgRegisterCounterpartyPayeeResponse> {
    constructor(data?: PartialMessage<MsgRegisterCounterpartyPayeeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.MsgRegisterCounterpartyPayeeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRegisterCounterpartyPayeeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRegisterCounterpartyPayeeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRegisterCounterpartyPayeeResponse;
    static equals(a: MsgRegisterCounterpartyPayeeResponse | PlainMessage<MsgRegisterCounterpartyPayeeResponse> | undefined, b: MsgRegisterCounterpartyPayeeResponse | PlainMessage<MsgRegisterCounterpartyPayeeResponse> | undefined): boolean;
}
/**
 * MsgPayPacketFee defines the request type for the PayPacketFee rpc
 * This Msg can be used to pay for a packet at the next sequence send & should be combined with the Msg that will be
 * paid for
 *
 * @generated from message ibc.applications.fee.v1.MsgPayPacketFee
 */
export declare class MsgPayPacketFee extends Message<MsgPayPacketFee> {
    /**
     * fee encapsulates the recv, ack and timeout fees associated with an IBC packet
     *
     * @generated from field: ibc.applications.fee.v1.Fee fee = 1;
     */
    fee?: Fee;
    /**
     * the source port unique identifier
     *
     * @generated from field: string source_port_id = 2;
     */
    sourcePortId: string;
    /**
     * the source channel unique identifer
     *
     * @generated from field: string source_channel_id = 3;
     */
    sourceChannelId: string;
    /**
     * account address to refund fee if necessary
     *
     * @generated from field: string signer = 4;
     */
    signer: string;
    /**
     * optional list of relayers permitted to the receive packet fees
     *
     * @generated from field: repeated string relayers = 5;
     */
    relayers: string[];
    constructor(data?: PartialMessage<MsgPayPacketFee>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.MsgPayPacketFee";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgPayPacketFee;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgPayPacketFee;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgPayPacketFee;
    static equals(a: MsgPayPacketFee | PlainMessage<MsgPayPacketFee> | undefined, b: MsgPayPacketFee | PlainMessage<MsgPayPacketFee> | undefined): boolean;
}
/**
 * MsgPayPacketFeeResponse defines the response type for the PayPacketFee rpc
 *
 * @generated from message ibc.applications.fee.v1.MsgPayPacketFeeResponse
 */
export declare class MsgPayPacketFeeResponse extends Message<MsgPayPacketFeeResponse> {
    constructor(data?: PartialMessage<MsgPayPacketFeeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.MsgPayPacketFeeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgPayPacketFeeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgPayPacketFeeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgPayPacketFeeResponse;
    static equals(a: MsgPayPacketFeeResponse | PlainMessage<MsgPayPacketFeeResponse> | undefined, b: MsgPayPacketFeeResponse | PlainMessage<MsgPayPacketFeeResponse> | undefined): boolean;
}
/**
 * MsgPayPacketFeeAsync defines the request type for the PayPacketFeeAsync rpc
 * This Msg can be used to pay for a packet at a specified sequence (instead of the next sequence send)
 *
 * @generated from message ibc.applications.fee.v1.MsgPayPacketFeeAsync
 */
export declare class MsgPayPacketFeeAsync extends Message<MsgPayPacketFeeAsync> {
    /**
     * unique packet identifier comprised of the channel ID, port ID and sequence
     *
     * @generated from field: ibc.core.channel.v1.PacketId packet_id = 1;
     */
    packetId?: PacketId;
    /**
     * the packet fee associated with a particular IBC packet
     *
     * @generated from field: ibc.applications.fee.v1.PacketFee packet_fee = 2;
     */
    packetFee?: PacketFee;
    constructor(data?: PartialMessage<MsgPayPacketFeeAsync>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.MsgPayPacketFeeAsync";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgPayPacketFeeAsync;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgPayPacketFeeAsync;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgPayPacketFeeAsync;
    static equals(a: MsgPayPacketFeeAsync | PlainMessage<MsgPayPacketFeeAsync> | undefined, b: MsgPayPacketFeeAsync | PlainMessage<MsgPayPacketFeeAsync> | undefined): boolean;
}
/**
 * MsgPayPacketFeeAsyncResponse defines the response type for the PayPacketFeeAsync rpc
 *
 * @generated from message ibc.applications.fee.v1.MsgPayPacketFeeAsyncResponse
 */
export declare class MsgPayPacketFeeAsyncResponse extends Message<MsgPayPacketFeeAsyncResponse> {
    constructor(data?: PartialMessage<MsgPayPacketFeeAsyncResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.MsgPayPacketFeeAsyncResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgPayPacketFeeAsyncResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgPayPacketFeeAsyncResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgPayPacketFeeAsyncResponse;
    static equals(a: MsgPayPacketFeeAsyncResponse | PlainMessage<MsgPayPacketFeeAsyncResponse> | undefined, b: MsgPayPacketFeeAsyncResponse | PlainMessage<MsgPayPacketFeeAsyncResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map