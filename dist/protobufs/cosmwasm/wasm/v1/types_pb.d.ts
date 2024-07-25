import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";
/**
 * AccessType permission types
 *
 * @generated from enum cosmwasm.wasm.v1.AccessType
 */
export declare enum AccessType {
    /**
     * AccessTypeUnspecified placeholder for empty value
     *
     * @generated from enum value: ACCESS_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * AccessTypeNobody forbidden
     *
     * @generated from enum value: ACCESS_TYPE_NOBODY = 1;
     */
    NOBODY = 1,
    /**
     * AccessTypeEverybody unrestricted
     *
     * @generated from enum value: ACCESS_TYPE_EVERYBODY = 3;
     */
    EVERYBODY = 3,
    /**
     * AccessTypeAnyOfAddresses allow any of the addresses
     *
     * @generated from enum value: ACCESS_TYPE_ANY_OF_ADDRESSES = 4;
     */
    ANY_OF_ADDRESSES = 4
}
/**
 * ContractCodeHistoryOperationType actions that caused a code change
 *
 * @generated from enum cosmwasm.wasm.v1.ContractCodeHistoryOperationType
 */
export declare enum ContractCodeHistoryOperationType {
    /**
     * ContractCodeHistoryOperationTypeUnspecified placeholder for empty value
     *
     * @generated from enum value: CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * ContractCodeHistoryOperationTypeInit on chain contract instantiation
     *
     * @generated from enum value: CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT = 1;
     */
    INIT = 1,
    /**
     * ContractCodeHistoryOperationTypeMigrate code migration
     *
     * @generated from enum value: CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE = 2;
     */
    MIGRATE = 2,
    /**
     * ContractCodeHistoryOperationTypeGenesis based on genesis data
     *
     * @generated from enum value: CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS = 3;
     */
    GENESIS = 3
}
/**
 * AccessTypeParam
 *
 * @generated from message cosmwasm.wasm.v1.AccessTypeParam
 */
export declare class AccessTypeParam extends Message<AccessTypeParam> {
    /**
     * @generated from field: cosmwasm.wasm.v1.AccessType value = 1;
     */
    value: AccessType;
    constructor(data?: PartialMessage<AccessTypeParam>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.AccessTypeParam";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccessTypeParam;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccessTypeParam;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccessTypeParam;
    static equals(a: AccessTypeParam | PlainMessage<AccessTypeParam> | undefined, b: AccessTypeParam | PlainMessage<AccessTypeParam> | undefined): boolean;
}
/**
 * AccessConfig access control type.
 *
 * @generated from message cosmwasm.wasm.v1.AccessConfig
 */
export declare class AccessConfig extends Message<AccessConfig> {
    /**
     * @generated from field: cosmwasm.wasm.v1.AccessType permission = 1;
     */
    permission: AccessType;
    /**
     * @generated from field: repeated string addresses = 3;
     */
    addresses: string[];
    constructor(data?: PartialMessage<AccessConfig>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.AccessConfig";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccessConfig;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccessConfig;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccessConfig;
    static equals(a: AccessConfig | PlainMessage<AccessConfig> | undefined, b: AccessConfig | PlainMessage<AccessConfig> | undefined): boolean;
}
/**
 * Params defines the set of wasm parameters.
 *
 * @generated from message cosmwasm.wasm.v1.Params
 */
export declare class Params extends Message<Params> {
    /**
     * @generated from field: cosmwasm.wasm.v1.AccessConfig code_upload_access = 1;
     */
    codeUploadAccess?: AccessConfig;
    /**
     * @generated from field: cosmwasm.wasm.v1.AccessType instantiate_default_permission = 2;
     */
    instantiateDefaultPermission: AccessType;
    constructor(data?: PartialMessage<Params>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.Params";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params;
    static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean;
}
/**
 * CodeInfo is data for the uploaded contract WASM code
 *
 * @generated from message cosmwasm.wasm.v1.CodeInfo
 */
export declare class CodeInfo extends Message<CodeInfo> {
    /**
     * CodeHash is the unique identifier created by wasmvm
     *
     * @generated from field: bytes code_hash = 1;
     */
    codeHash: Uint8Array;
    /**
     * Creator address who initially stored the code
     *
     * @generated from field: string creator = 2;
     */
    creator: string;
    /**
     * InstantiateConfig access control to apply on contract creation, optional
     *
     * @generated from field: cosmwasm.wasm.v1.AccessConfig instantiate_config = 5;
     */
    instantiateConfig?: AccessConfig;
    constructor(data?: PartialMessage<CodeInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.CodeInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CodeInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CodeInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CodeInfo;
    static equals(a: CodeInfo | PlainMessage<CodeInfo> | undefined, b: CodeInfo | PlainMessage<CodeInfo> | undefined): boolean;
}
/**
 * ContractInfo stores a WASM contract instance
 *
 * @generated from message cosmwasm.wasm.v1.ContractInfo
 */
export declare class ContractInfo extends Message<ContractInfo> {
    /**
     * CodeID is the reference to the stored Wasm code
     *
     * @generated from field: uint64 code_id = 1;
     */
    codeId: bigint;
    /**
     * Creator address who initially instantiated the contract
     *
     * @generated from field: string creator = 2;
     */
    creator: string;
    /**
     * Admin is an optional address that can execute migrations
     *
     * @generated from field: string admin = 3;
     */
    admin: string;
    /**
     * Label is optional metadata to be stored with a contract instance.
     *
     * @generated from field: string label = 4;
     */
    label: string;
    /**
     * Created Tx position when the contract was instantiated.
     *
     * @generated from field: cosmwasm.wasm.v1.AbsoluteTxPosition created = 5;
     */
    created?: AbsoluteTxPosition;
    /**
     * @generated from field: string ibc_port_id = 6;
     */
    ibcPortId: string;
    /**
     * Extension is an extension point to store custom metadata within the
     * persistence model.
     *
     * @generated from field: google.protobuf.Any extension = 7;
     */
    extension?: Any;
    constructor(data?: PartialMessage<ContractInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.ContractInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ContractInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ContractInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ContractInfo;
    static equals(a: ContractInfo | PlainMessage<ContractInfo> | undefined, b: ContractInfo | PlainMessage<ContractInfo> | undefined): boolean;
}
/**
 * ContractCodeHistoryEntry metadata to a contract.
 *
 * @generated from message cosmwasm.wasm.v1.ContractCodeHistoryEntry
 */
export declare class ContractCodeHistoryEntry extends Message<ContractCodeHistoryEntry> {
    /**
     * @generated from field: cosmwasm.wasm.v1.ContractCodeHistoryOperationType operation = 1;
     */
    operation: ContractCodeHistoryOperationType;
    /**
     * CodeID is the reference to the stored WASM code
     *
     * @generated from field: uint64 code_id = 2;
     */
    codeId: bigint;
    /**
     * Updated Tx position when the operation was executed.
     *
     * @generated from field: cosmwasm.wasm.v1.AbsoluteTxPosition updated = 3;
     */
    updated?: AbsoluteTxPosition;
    /**
     * @generated from field: bytes msg = 4;
     */
    msg: Uint8Array;
    constructor(data?: PartialMessage<ContractCodeHistoryEntry>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.ContractCodeHistoryEntry";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ContractCodeHistoryEntry;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ContractCodeHistoryEntry;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ContractCodeHistoryEntry;
    static equals(a: ContractCodeHistoryEntry | PlainMessage<ContractCodeHistoryEntry> | undefined, b: ContractCodeHistoryEntry | PlainMessage<ContractCodeHistoryEntry> | undefined): boolean;
}
/**
 * AbsoluteTxPosition is a unique transaction position that allows for global
 * ordering of transactions.
 *
 * @generated from message cosmwasm.wasm.v1.AbsoluteTxPosition
 */
export declare class AbsoluteTxPosition extends Message<AbsoluteTxPosition> {
    /**
     * BlockHeight is the block the contract was created at
     *
     * @generated from field: uint64 block_height = 1;
     */
    blockHeight: bigint;
    /**
     * TxIndex is a monotonic counter within the block (actual transaction index,
     * or gas consumed)
     *
     * @generated from field: uint64 tx_index = 2;
     */
    txIndex: bigint;
    constructor(data?: PartialMessage<AbsoluteTxPosition>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.AbsoluteTxPosition";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AbsoluteTxPosition;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AbsoluteTxPosition;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AbsoluteTxPosition;
    static equals(a: AbsoluteTxPosition | PlainMessage<AbsoluteTxPosition> | undefined, b: AbsoluteTxPosition | PlainMessage<AbsoluteTxPosition> | undefined): boolean;
}
/**
 * Model is a struct that holds a KV pair
 *
 * @generated from message cosmwasm.wasm.v1.Model
 */
export declare class Model extends Message<Model> {
    /**
     * hex-encode key to read it better (this is often ascii)
     *
     * @generated from field: bytes key = 1;
     */
    key: Uint8Array;
    /**
     * base64-encode raw value
     *
     * @generated from field: bytes value = 2;
     */
    value: Uint8Array;
    constructor(data?: PartialMessage<Model>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.Model";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Model;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Model;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Model;
    static equals(a: Model | PlainMessage<Model> | undefined, b: Model | PlainMessage<Model> | undefined): boolean;
}
//# sourceMappingURL=types_pb.d.ts.map