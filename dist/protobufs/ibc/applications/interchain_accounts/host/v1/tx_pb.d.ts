import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { QueryRequest } from "./host_pb.js";
/**
 * MsgModuleQuerySafe defines the payload for Msg/ModuleQuerySafe
 *
 * @generated from message ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe
 */
export declare class MsgModuleQuerySafe extends Message<MsgModuleQuerySafe> {
    /**
     * signer address
     *
     * @generated from field: string signer = 1;
     */
    signer: string;
    /**
     * requests defines the module safe queries to execute.
     *
     * @generated from field: repeated ibc.applications.interchain_accounts.host.v1.QueryRequest requests = 2;
     */
    requests: QueryRequest[];
    constructor(data?: PartialMessage<MsgModuleQuerySafe>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafe";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgModuleQuerySafe;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgModuleQuerySafe;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgModuleQuerySafe;
    static equals(a: MsgModuleQuerySafe | PlainMessage<MsgModuleQuerySafe> | undefined, b: MsgModuleQuerySafe | PlainMessage<MsgModuleQuerySafe> | undefined): boolean;
}
/**
 * MsgModuleQuerySafeResponse defines the response for Msg/ModuleQuerySafe
 *
 * @generated from message ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafeResponse
 */
export declare class MsgModuleQuerySafeResponse extends Message<MsgModuleQuerySafeResponse> {
    /**
     * height at which the responses were queried
     *
     * @generated from field: uint64 height = 1;
     */
    height: bigint;
    /**
     * protobuf encoded responses for each query
     *
     * @generated from field: repeated bytes responses = 2;
     */
    responses: Uint8Array[];
    constructor(data?: PartialMessage<MsgModuleQuerySafeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.interchain_accounts.host.v1.MsgModuleQuerySafeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgModuleQuerySafeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgModuleQuerySafeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgModuleQuerySafeResponse;
    static equals(a: MsgModuleQuerySafeResponse | PlainMessage<MsgModuleQuerySafeResponse> | undefined, b: MsgModuleQuerySafeResponse | PlainMessage<MsgModuleQuerySafeResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map