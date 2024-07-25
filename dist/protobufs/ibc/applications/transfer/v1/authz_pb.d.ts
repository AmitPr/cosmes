import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * Allocation defines the spend limit for a particular port and channel
 *
 * @generated from message ibc.applications.transfer.v1.Allocation
 */
export declare class Allocation extends Message<Allocation> {
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
     * spend limitation on the channel
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin spend_limit = 3;
     */
    spendLimit: Coin[];
    /**
     * allow list of receivers, an empty allow list permits any receiver address
     *
     * @generated from field: repeated string allow_list = 4;
     */
    allowList: string[];
    /**
     * allow list of memo strings, an empty list prohibits all memo strings;
     * a list only with "*" permits any memo string
     *
     * @generated from field: repeated string allowed_packet_data = 5;
     */
    allowedPacketData: string[];
    constructor(data?: PartialMessage<Allocation>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.transfer.v1.Allocation";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Allocation;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Allocation;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Allocation;
    static equals(a: Allocation | PlainMessage<Allocation> | undefined, b: Allocation | PlainMessage<Allocation> | undefined): boolean;
}
/**
 * TransferAuthorization allows the grantee to spend up to spend_limit coins from
 * the granter's account for ibc transfer on a specific channel
 *
 * @generated from message ibc.applications.transfer.v1.TransferAuthorization
 */
export declare class TransferAuthorization extends Message<TransferAuthorization> {
    /**
     * port and channel amounts
     *
     * @generated from field: repeated ibc.applications.transfer.v1.Allocation allocations = 1;
     */
    allocations: Allocation[];
    constructor(data?: PartialMessage<TransferAuthorization>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.transfer.v1.TransferAuthorization";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransferAuthorization;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransferAuthorization;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransferAuthorization;
    static equals(a: TransferAuthorization | PlainMessage<TransferAuthorization> | undefined, b: TransferAuthorization | PlainMessage<TransferAuthorization> | undefined): boolean;
}
//# sourceMappingURL=authz_pb.d.ts.map