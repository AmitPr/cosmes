import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
/**
 * Type defines a classification of message issued from a controller chain to its associated interchain accounts
 * host
 *
 * @generated from enum ibc.applications.interchain_accounts.v1.Type
 */
export declare enum Type {
    /**
     * Default zero value enumeration
     *
     * @generated from enum value: TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Execute a transaction on an interchain accounts host chain
     *
     * @generated from enum value: TYPE_EXECUTE_TX = 1;
     */
    EXECUTE_TX = 1
}
/**
 * InterchainAccountPacketData is comprised of a raw transaction, type of transaction and optional memo field.
 *
 * @generated from message ibc.applications.interchain_accounts.v1.InterchainAccountPacketData
 */
export declare class InterchainAccountPacketData extends Message<InterchainAccountPacketData> {
    /**
     * @generated from field: ibc.applications.interchain_accounts.v1.Type type = 1;
     */
    type: Type;
    /**
     * @generated from field: bytes data = 2;
     */
    data: Uint8Array;
    /**
     * @generated from field: string memo = 3;
     */
    memo: string;
    constructor(data?: PartialMessage<InterchainAccountPacketData>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.interchain_accounts.v1.InterchainAccountPacketData";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InterchainAccountPacketData;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InterchainAccountPacketData;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InterchainAccountPacketData;
    static equals(a: InterchainAccountPacketData | PlainMessage<InterchainAccountPacketData> | undefined, b: InterchainAccountPacketData | PlainMessage<InterchainAccountPacketData> | undefined): boolean;
}
/**
 * CosmosTx contains a list of sdk.Msg's. It should be used when sending transactions to an SDK host chain.
 *
 * @generated from message ibc.applications.interchain_accounts.v1.CosmosTx
 */
export declare class CosmosTx extends Message<CosmosTx> {
    /**
     * @generated from field: repeated google.protobuf.Any messages = 1;
     */
    messages: Any[];
    constructor(data?: PartialMessage<CosmosTx>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.interchain_accounts.v1.CosmosTx";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CosmosTx;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CosmosTx;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CosmosTx;
    static equals(a: CosmosTx | PlainMessage<CosmosTx> | undefined, b: CosmosTx | PlainMessage<CosmosTx> | undefined): boolean;
}
//# sourceMappingURL=packet_pb.d.ts.map