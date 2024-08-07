import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../../cosmos/base/v1beta1/coin_pb.js";
import { Height } from "../../../core/client/v1/client_pb.js";
/**
 * MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between
 * ICS20 enabled chains. See ICS Spec here:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 *
 * @generated from message ibc.applications.transfer.v1.MsgTransfer
 */
export declare class MsgTransfer extends Message<MsgTransfer> {
    /**
     * the port on which the packet will be sent
     *
     * @generated from field: string source_port = 1;
     */
    sourcePort: string;
    /**
     * the channel by which the packet will be sent
     *
     * @generated from field: string source_channel = 2;
     */
    sourceChannel: string;
    /**
     * the tokens to be transferred
     *
     * @generated from field: cosmos.base.v1beta1.Coin token = 3;
     */
    token?: Coin;
    /**
     * the sender address
     *
     * @generated from field: string sender = 4;
     */
    sender: string;
    /**
     * the recipient address on the destination chain
     *
     * @generated from field: string receiver = 5;
     */
    receiver: string;
    /**
     * Timeout height relative to the current block height.
     * The timeout is disabled when set to 0.
     *
     * @generated from field: ibc.core.client.v1.Height timeout_height = 6;
     */
    timeoutHeight?: Height;
    /**
     * Timeout timestamp in absolute nanoseconds since unix epoch.
     * The timeout is disabled when set to 0.
     *
     * @generated from field: uint64 timeout_timestamp = 7;
     */
    timeoutTimestamp: bigint;
    /**
     * optional memo
     *
     * @generated from field: string memo = 8;
     */
    memo: string;
    constructor(data?: PartialMessage<MsgTransfer>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.transfer.v1.MsgTransfer";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgTransfer;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgTransfer;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgTransfer;
    static equals(a: MsgTransfer | PlainMessage<MsgTransfer> | undefined, b: MsgTransfer | PlainMessage<MsgTransfer> | undefined): boolean;
}
/**
 * MsgTransferResponse defines the Msg/Transfer response type.
 *
 * @generated from message ibc.applications.transfer.v1.MsgTransferResponse
 */
export declare class MsgTransferResponse extends Message<MsgTransferResponse> {
    /**
     * sequence number of the transfer packet sent
     *
     * @generated from field: uint64 sequence = 1;
     */
    sequence: bigint;
    constructor(data?: PartialMessage<MsgTransferResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.transfer.v1.MsgTransferResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgTransferResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgTransferResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgTransferResponse;
    static equals(a: MsgTransferResponse | PlainMessage<MsgTransferResponse> | undefined, b: MsgTransferResponse | PlainMessage<MsgTransferResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map