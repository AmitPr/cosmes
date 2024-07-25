import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * QueryInterchainAccountRequest is the request type for the Query/InterchainAccountAddress RPC
 *
 * @generated from message kujira.cwica.QueryInterchainAccountRequest
 */
export declare class QueryInterchainAccountRequest extends Message<QueryInterchainAccountRequest> {
    /**
     * @generated from field: string owner = 1;
     */
    owner: string;
    /**
     * @generated from field: string connection_id = 2;
     */
    connectionId: string;
    /**
     * @generated from field: string account_id = 3;
     */
    accountId: string;
    constructor(data?: PartialMessage<QueryInterchainAccountRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.cwica.QueryInterchainAccountRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryInterchainAccountRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryInterchainAccountRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryInterchainAccountRequest;
    static equals(a: QueryInterchainAccountRequest | PlainMessage<QueryInterchainAccountRequest> | undefined, b: QueryInterchainAccountRequest | PlainMessage<QueryInterchainAccountRequest> | undefined): boolean;
}
/**
 * QueryInterchainAccountResponse the response type for the Query/InterchainAccountAddress RPC
 *
 * @generated from message kujira.cwica.QueryInterchainAccountResponse
 */
export declare class QueryInterchainAccountResponse extends Message<QueryInterchainAccountResponse> {
    /**
     * @generated from field: string interchain_account_address = 1;
     */
    interchainAccountAddress: string;
    constructor(data?: PartialMessage<QueryInterchainAccountResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.cwica.QueryInterchainAccountResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryInterchainAccountResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryInterchainAccountResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryInterchainAccountResponse;
    static equals(a: QueryInterchainAccountResponse | PlainMessage<QueryInterchainAccountResponse> | undefined, b: QueryInterchainAccountResponse | PlainMessage<QueryInterchainAccountResponse> | undefined): boolean;
}
//# sourceMappingURL=query_pb.d.ts.map