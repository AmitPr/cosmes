import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message kujira.cwica.CallbackData
 */
export declare class CallbackData extends Message<CallbackData> {
    /**
     * @generated from field: string port_id = 1;
     */
    portId: string;
    /**
     * @generated from field: string channel_id = 2;
     */
    channelId: string;
    /**
     * @generated from field: uint64 sequence = 3;
     */
    sequence: bigint;
    /**
     * @generated from field: string contract = 4;
     */
    contract: string;
    /**
     * @generated from field: string connection_id = 5;
     */
    connectionId: string;
    /**
     * @generated from field: string account_id = 6;
     */
    accountId: string;
    /**
     * @generated from field: bytes callback = 7;
     */
    callback: Uint8Array;
    constructor(data?: PartialMessage<CallbackData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.cwica.CallbackData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CallbackData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CallbackData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CallbackData;
    static equals(a: CallbackData | PlainMessage<CallbackData> | undefined, b: CallbackData | PlainMessage<CallbackData> | undefined): boolean;
}
//# sourceMappingURL=callback_pb.d.ts.map