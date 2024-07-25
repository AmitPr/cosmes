import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { AccessConfig } from "./types_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * StoreCodeAuthorization defines authorization for wasm code upload.
 * Since: wasmd 0.42
 *
 * @generated from message cosmwasm.wasm.v1.StoreCodeAuthorization
 */
export declare class StoreCodeAuthorization extends Message<StoreCodeAuthorization> {
    /**
     * Grants for code upload
     *
     * @generated from field: repeated cosmwasm.wasm.v1.CodeGrant grants = 1;
     */
    grants: CodeGrant[];
    constructor(data?: PartialMessage<StoreCodeAuthorization>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.StoreCodeAuthorization";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StoreCodeAuthorization;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StoreCodeAuthorization;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StoreCodeAuthorization;
    static equals(a: StoreCodeAuthorization | PlainMessage<StoreCodeAuthorization> | undefined, b: StoreCodeAuthorization | PlainMessage<StoreCodeAuthorization> | undefined): boolean;
}
/**
 * ContractExecutionAuthorization defines authorization for wasm execute.
 * Since: wasmd 0.30
 *
 * @generated from message cosmwasm.wasm.v1.ContractExecutionAuthorization
 */
export declare class ContractExecutionAuthorization extends Message<ContractExecutionAuthorization> {
    /**
     * Grants for contract executions
     *
     * @generated from field: repeated cosmwasm.wasm.v1.ContractGrant grants = 1;
     */
    grants: ContractGrant[];
    constructor(data?: PartialMessage<ContractExecutionAuthorization>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.ContractExecutionAuthorization";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ContractExecutionAuthorization;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ContractExecutionAuthorization;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ContractExecutionAuthorization;
    static equals(a: ContractExecutionAuthorization | PlainMessage<ContractExecutionAuthorization> | undefined, b: ContractExecutionAuthorization | PlainMessage<ContractExecutionAuthorization> | undefined): boolean;
}
/**
 * ContractMigrationAuthorization defines authorization for wasm contract
 * migration. Since: wasmd 0.30
 *
 * @generated from message cosmwasm.wasm.v1.ContractMigrationAuthorization
 */
export declare class ContractMigrationAuthorization extends Message<ContractMigrationAuthorization> {
    /**
     * Grants for contract migrations
     *
     * @generated from field: repeated cosmwasm.wasm.v1.ContractGrant grants = 1;
     */
    grants: ContractGrant[];
    constructor(data?: PartialMessage<ContractMigrationAuthorization>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.ContractMigrationAuthorization";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ContractMigrationAuthorization;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ContractMigrationAuthorization;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ContractMigrationAuthorization;
    static equals(a: ContractMigrationAuthorization | PlainMessage<ContractMigrationAuthorization> | undefined, b: ContractMigrationAuthorization | PlainMessage<ContractMigrationAuthorization> | undefined): boolean;
}
/**
 * CodeGrant a granted permission for a single code
 *
 * @generated from message cosmwasm.wasm.v1.CodeGrant
 */
export declare class CodeGrant extends Message<CodeGrant> {
    /**
     * CodeHash is the unique identifier created by wasmvm
     * Wildcard "*" is used to specify any kind of grant.
     *
     * @generated from field: bytes code_hash = 1;
     */
    codeHash: Uint8Array;
    /**
     * InstantiatePermission is the superset access control to apply
     * on contract creation.
     * Optional
     *
     * @generated from field: cosmwasm.wasm.v1.AccessConfig instantiate_permission = 2;
     */
    instantiatePermission?: AccessConfig;
    constructor(data?: PartialMessage<CodeGrant>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.CodeGrant";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CodeGrant;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CodeGrant;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CodeGrant;
    static equals(a: CodeGrant | PlainMessage<CodeGrant> | undefined, b: CodeGrant | PlainMessage<CodeGrant> | undefined): boolean;
}
/**
 * ContractGrant a granted permission for a single contract
 * Since: wasmd 0.30
 *
 * @generated from message cosmwasm.wasm.v1.ContractGrant
 */
export declare class ContractGrant extends Message<ContractGrant> {
    /**
     * Contract is the bech32 address of the smart contract
     *
     * @generated from field: string contract = 1;
     */
    contract: string;
    /**
     * Limit defines execution limits that are enforced and updated when the grant
     * is applied. When the limit lapsed the grant is removed.
     *
     * @generated from field: google.protobuf.Any limit = 2;
     */
    limit?: Any;
    /**
     * Filter define more fine-grained control on the message payload passed
     * to the contract in the operation. When no filter applies on execution, the
     * operation is prohibited.
     *
     * @generated from field: google.protobuf.Any filter = 3;
     */
    filter?: Any;
    constructor(data?: PartialMessage<ContractGrant>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.ContractGrant";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ContractGrant;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ContractGrant;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ContractGrant;
    static equals(a: ContractGrant | PlainMessage<ContractGrant> | undefined, b: ContractGrant | PlainMessage<ContractGrant> | undefined): boolean;
}
/**
 * MaxCallsLimit limited number of calls to the contract. No funds transferable.
 * Since: wasmd 0.30
 *
 * @generated from message cosmwasm.wasm.v1.MaxCallsLimit
 */
export declare class MaxCallsLimit extends Message<MaxCallsLimit> {
    /**
     * Remaining number that is decremented on each execution
     *
     * @generated from field: uint64 remaining = 1;
     */
    remaining: bigint;
    constructor(data?: PartialMessage<MaxCallsLimit>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MaxCallsLimit";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MaxCallsLimit;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MaxCallsLimit;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MaxCallsLimit;
    static equals(a: MaxCallsLimit | PlainMessage<MaxCallsLimit> | undefined, b: MaxCallsLimit | PlainMessage<MaxCallsLimit> | undefined): boolean;
}
/**
 * MaxFundsLimit defines the maximal amounts that can be sent to the contract.
 * Since: wasmd 0.30
 *
 * @generated from message cosmwasm.wasm.v1.MaxFundsLimit
 */
export declare class MaxFundsLimit extends Message<MaxFundsLimit> {
    /**
     * Amounts is the maximal amount of tokens transferable to the contract.
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin amounts = 1;
     */
    amounts: Coin[];
    constructor(data?: PartialMessage<MaxFundsLimit>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MaxFundsLimit";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MaxFundsLimit;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MaxFundsLimit;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MaxFundsLimit;
    static equals(a: MaxFundsLimit | PlainMessage<MaxFundsLimit> | undefined, b: MaxFundsLimit | PlainMessage<MaxFundsLimit> | undefined): boolean;
}
/**
 * CombinedLimit defines the maximal amounts that can be sent to a contract and
 * the maximal number of calls executable. Both need to remain >0 to be valid.
 * Since: wasmd 0.30
 *
 * @generated from message cosmwasm.wasm.v1.CombinedLimit
 */
export declare class CombinedLimit extends Message<CombinedLimit> {
    /**
     * Remaining number that is decremented on each execution
     *
     * @generated from field: uint64 calls_remaining = 1;
     */
    callsRemaining: bigint;
    /**
     * Amounts is the maximal amount of tokens transferable to the contract.
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin amounts = 2;
     */
    amounts: Coin[];
    constructor(data?: PartialMessage<CombinedLimit>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.CombinedLimit";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CombinedLimit;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CombinedLimit;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CombinedLimit;
    static equals(a: CombinedLimit | PlainMessage<CombinedLimit> | undefined, b: CombinedLimit | PlainMessage<CombinedLimit> | undefined): boolean;
}
/**
 * AllowAllMessagesFilter is a wildcard to allow any type of contract payload
 * message.
 * Since: wasmd 0.30
 *
 * @generated from message cosmwasm.wasm.v1.AllowAllMessagesFilter
 */
export declare class AllowAllMessagesFilter extends Message<AllowAllMessagesFilter> {
    constructor(data?: PartialMessage<AllowAllMessagesFilter>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.AllowAllMessagesFilter";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AllowAllMessagesFilter;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AllowAllMessagesFilter;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AllowAllMessagesFilter;
    static equals(a: AllowAllMessagesFilter | PlainMessage<AllowAllMessagesFilter> | undefined, b: AllowAllMessagesFilter | PlainMessage<AllowAllMessagesFilter> | undefined): boolean;
}
/**
 * AcceptedMessageKeysFilter accept only the specific contract message keys in
 * the json object to be executed.
 * Since: wasmd 0.30
 *
 * @generated from message cosmwasm.wasm.v1.AcceptedMessageKeysFilter
 */
export declare class AcceptedMessageKeysFilter extends Message<AcceptedMessageKeysFilter> {
    /**
     * Messages is the list of unique keys
     *
     * @generated from field: repeated string keys = 1;
     */
    keys: string[];
    constructor(data?: PartialMessage<AcceptedMessageKeysFilter>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.AcceptedMessageKeysFilter";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AcceptedMessageKeysFilter;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AcceptedMessageKeysFilter;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AcceptedMessageKeysFilter;
    static equals(a: AcceptedMessageKeysFilter | PlainMessage<AcceptedMessageKeysFilter> | undefined, b: AcceptedMessageKeysFilter | PlainMessage<AcceptedMessageKeysFilter> | undefined): boolean;
}
/**
 * AcceptedMessagesFilter accept only the specific raw contract messages to be
 * executed.
 * Since: wasmd 0.30
 *
 * @generated from message cosmwasm.wasm.v1.AcceptedMessagesFilter
 */
export declare class AcceptedMessagesFilter extends Message<AcceptedMessagesFilter> {
    /**
     * Messages is the list of raw contract messages
     *
     * @generated from field: repeated bytes messages = 1;
     */
    messages: Uint8Array[];
    constructor(data?: PartialMessage<AcceptedMessagesFilter>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.AcceptedMessagesFilter";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AcceptedMessagesFilter;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AcceptedMessagesFilter;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AcceptedMessagesFilter;
    static equals(a: AcceptedMessagesFilter | PlainMessage<AcceptedMessagesFilter> | undefined, b: AcceptedMessagesFilter | PlainMessage<AcceptedMessagesFilter> | undefined): boolean;
}
//# sourceMappingURL=authz_pb.d.ts.map