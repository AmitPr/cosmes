import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * MsgIBCSend
 *
 * @generated from message cosmwasm.wasm.v1.MsgIBCSend
 */
export declare class MsgIBCSend extends Message<MsgIBCSend> {
    /**
     * the channel by which the packet will be sent
     *
     * @generated from field: string channel = 2;
     */
    channel: string;
    /**
     * Timeout height relative to the current block height.
     * The timeout is disabled when set to 0.
     *
     * @generated from field: uint64 timeout_height = 4;
     */
    timeoutHeight: bigint;
    /**
     * Timeout timestamp (in nanoseconds) relative to the current block timestamp.
     * The timeout is disabled when set to 0.
     *
     * @generated from field: uint64 timeout_timestamp = 5;
     */
    timeoutTimestamp: bigint;
    /**
     * Data is the payload to transfer. We must not make assumption what format or
     * content is in here.
     *
     * @generated from field: bytes data = 6;
     */
    data: Uint8Array;
    constructor(data?: PartialMessage<MsgIBCSend>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MsgIBCSend";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgIBCSend;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgIBCSend;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgIBCSend;
    static equals(a: MsgIBCSend | PlainMessage<MsgIBCSend> | undefined, b: MsgIBCSend | PlainMessage<MsgIBCSend> | undefined): boolean;
}
/**
 * MsgIBCSendResponse
 *
 * @generated from message cosmwasm.wasm.v1.MsgIBCSendResponse
 */
export declare class MsgIBCSendResponse extends Message<MsgIBCSendResponse> {
    /**
     * Sequence number of the IBC packet sent
     *
     * @generated from field: uint64 sequence = 1;
     */
    sequence: bigint;
    constructor(data?: PartialMessage<MsgIBCSendResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MsgIBCSendResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgIBCSendResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgIBCSendResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgIBCSendResponse;
    static equals(a: MsgIBCSendResponse | PlainMessage<MsgIBCSendResponse> | undefined, b: MsgIBCSendResponse | PlainMessage<MsgIBCSendResponse> | undefined): boolean;
}
/**
 * MsgIBCCloseChannel port and channel need to be owned by the contract
 *
 * @generated from message cosmwasm.wasm.v1.MsgIBCCloseChannel
 */
export declare class MsgIBCCloseChannel extends Message<MsgIBCCloseChannel> {
    /**
     * @generated from field: string channel = 2;
     */
    channel: string;
    constructor(data?: PartialMessage<MsgIBCCloseChannel>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MsgIBCCloseChannel";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgIBCCloseChannel;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgIBCCloseChannel;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgIBCCloseChannel;
    static equals(a: MsgIBCCloseChannel | PlainMessage<MsgIBCCloseChannel> | undefined, b: MsgIBCCloseChannel | PlainMessage<MsgIBCCloseChannel> | undefined): boolean;
}
//# sourceMappingURL=ibc_pb.d.ts.map