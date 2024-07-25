import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Order } from "../../../../core/channel/v1/channel_pb.js";
import { InterchainAccountPacketData } from "../../v1/packet_pb.js";
/**
 * MsgRegisterInterchainAccount defines the payload for Msg/RegisterAccount
 *
 * @generated from message ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount
 */
export declare class MsgRegisterInterchainAccount extends Message<MsgRegisterInterchainAccount> {
    /**
     * @generated from field: string owner = 1;
     */
    owner: string;
    /**
     * @generated from field: string connection_id = 2;
     */
    connectionId: string;
    /**
     * @generated from field: string version = 3;
     */
    version: string;
    /**
     * @generated from field: ibc.core.channel.v1.Order ordering = 4;
     */
    ordering: Order;
    constructor(data?: PartialMessage<MsgRegisterInterchainAccount>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccount";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRegisterInterchainAccount;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRegisterInterchainAccount;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRegisterInterchainAccount;
    static equals(a: MsgRegisterInterchainAccount | PlainMessage<MsgRegisterInterchainAccount> | undefined, b: MsgRegisterInterchainAccount | PlainMessage<MsgRegisterInterchainAccount> | undefined): boolean;
}
/**
 * MsgRegisterInterchainAccountResponse defines the response for Msg/RegisterAccount
 *
 * @generated from message ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccountResponse
 */
export declare class MsgRegisterInterchainAccountResponse extends Message<MsgRegisterInterchainAccountResponse> {
    /**
     * @generated from field: string channel_id = 1;
     */
    channelId: string;
    /**
     * @generated from field: string port_id = 2;
     */
    portId: string;
    constructor(data?: PartialMessage<MsgRegisterInterchainAccountResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.interchain_accounts.controller.v1.MsgRegisterInterchainAccountResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRegisterInterchainAccountResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRegisterInterchainAccountResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRegisterInterchainAccountResponse;
    static equals(a: MsgRegisterInterchainAccountResponse | PlainMessage<MsgRegisterInterchainAccountResponse> | undefined, b: MsgRegisterInterchainAccountResponse | PlainMessage<MsgRegisterInterchainAccountResponse> | undefined): boolean;
}
/**
 * MsgSendTx defines the payload for Msg/SendTx
 *
 * @generated from message ibc.applications.interchain_accounts.controller.v1.MsgSendTx
 */
export declare class MsgSendTx extends Message<MsgSendTx> {
    /**
     * @generated from field: string owner = 1;
     */
    owner: string;
    /**
     * @generated from field: string connection_id = 2;
     */
    connectionId: string;
    /**
     * @generated from field: ibc.applications.interchain_accounts.v1.InterchainAccountPacketData packet_data = 3;
     */
    packetData?: InterchainAccountPacketData;
    /**
     * Relative timeout timestamp provided will be added to the current block time during transaction execution.
     * The timeout timestamp must be non-zero.
     *
     * @generated from field: uint64 relative_timeout = 4;
     */
    relativeTimeout: bigint;
    constructor(data?: PartialMessage<MsgSendTx>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.interchain_accounts.controller.v1.MsgSendTx";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSendTx;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSendTx;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSendTx;
    static equals(a: MsgSendTx | PlainMessage<MsgSendTx> | undefined, b: MsgSendTx | PlainMessage<MsgSendTx> | undefined): boolean;
}
/**
 * MsgSendTxResponse defines the response for MsgSendTx
 *
 * @generated from message ibc.applications.interchain_accounts.controller.v1.MsgSendTxResponse
 */
export declare class MsgSendTxResponse extends Message<MsgSendTxResponse> {
    /**
     * @generated from field: uint64 sequence = 1;
     */
    sequence: bigint;
    constructor(data?: PartialMessage<MsgSendTxResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.interchain_accounts.controller.v1.MsgSendTxResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSendTxResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSendTxResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSendTxResponse;
    static equals(a: MsgSendTxResponse | PlainMessage<MsgSendTxResponse> | undefined, b: MsgSendTxResponse | PlainMessage<MsgSendTxResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map