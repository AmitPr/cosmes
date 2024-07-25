import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { AccessConfig, Params } from "./types_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * MsgStoreCode submit Wasm code to the system
 *
 * @generated from message cosmwasm.wasm.v1.MsgStoreCode
 */
export declare class MsgStoreCode extends Message<MsgStoreCode> {
    /**
     * Sender is the actor that signed the messages
     *
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * WASMByteCode can be raw or gzip compressed
     *
     * @generated from field: bytes wasm_byte_code = 2;
     */
    wasmByteCode: Uint8Array;
    /**
     * InstantiatePermission access control to apply on contract creation,
     * optional
     *
     * @generated from field: cosmwasm.wasm.v1.AccessConfig instantiate_permission = 5;
     */
    instantiatePermission?: AccessConfig;
    constructor(data?: PartialMessage<MsgStoreCode>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MsgStoreCode";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgStoreCode;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgStoreCode;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgStoreCode;
    static equals(a: MsgStoreCode | PlainMessage<MsgStoreCode> | undefined, b: MsgStoreCode | PlainMessage<MsgStoreCode> | undefined): boolean;
}
/**
 * MsgStoreCodeResponse returns store result data.
 *
 * @generated from message cosmwasm.wasm.v1.MsgStoreCodeResponse
 */
export declare class MsgStoreCodeResponse extends Message<MsgStoreCodeResponse> {
    /**
     * CodeID is the reference to the stored WASM code
     *
     * @generated from field: uint64 code_id = 1;
     */
    codeId: bigint;
    /**
     * Checksum is the sha256 hash of the stored code
     *
     * @generated from field: bytes checksum = 2;
     */
    checksum: Uint8Array;
    constructor(data?: PartialMessage<MsgStoreCodeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MsgStoreCodeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgStoreCodeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgStoreCodeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgStoreCodeResponse;
    static equals(a: MsgStoreCodeResponse | PlainMessage<MsgStoreCodeResponse> | undefined, b: MsgStoreCodeResponse | PlainMessage<MsgStoreCodeResponse> | undefined): boolean;
}
/**
 * MsgInstantiateContract create a new smart contract instance for the given
 * code id.
 *
 * @generated from message cosmwasm.wasm.v1.MsgInstantiateContract
 */
export declare class MsgInstantiateContract extends Message<MsgInstantiateContract> {
    /**
     * Sender is the that actor that signed the messages
     *
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * Admin is an optional address that can execute migrations
     *
     * @generated from field: string admin = 2;
     */
    admin: string;
    /**
     * CodeID is the reference to the stored WASM code
     *
     * @generated from field: uint64 code_id = 3;
     */
    codeId: bigint;
    /**
     * Label is optional metadata to be stored with a contract instance.
     *
     * @generated from field: string label = 4;
     */
    label: string;
    /**
     * Msg json encoded message to be passed to the contract on instantiation
     *
     * @generated from field: bytes msg = 5;
     */
    msg: Uint8Array;
    /**
     * Funds coins that are transferred to the contract on instantiation
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin funds = 6;
     */
    funds: Coin[];
    constructor(data?: PartialMessage<MsgInstantiateContract>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MsgInstantiateContract";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgInstantiateContract;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgInstantiateContract;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgInstantiateContract;
    static equals(a: MsgInstantiateContract | PlainMessage<MsgInstantiateContract> | undefined, b: MsgInstantiateContract | PlainMessage<MsgInstantiateContract> | undefined): boolean;
}
/**
 * MsgInstantiateContractResponse return instantiation result data
 *
 * @generated from message cosmwasm.wasm.v1.MsgInstantiateContractResponse
 */
export declare class MsgInstantiateContractResponse extends Message<MsgInstantiateContractResponse> {
    /**
     * Address is the bech32 address of the new contract instance.
     *
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * Data contains bytes to returned from the contract
     *
     * @generated from field: bytes data = 2;
     */
    data: Uint8Array;
    constructor(data?: PartialMessage<MsgInstantiateContractResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MsgInstantiateContractResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgInstantiateContractResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgInstantiateContractResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgInstantiateContractResponse;
    static equals(a: MsgInstantiateContractResponse | PlainMessage<MsgInstantiateContractResponse> | undefined, b: MsgInstantiateContractResponse | PlainMessage<MsgInstantiateContractResponse> | undefined): boolean;
}
/**
 * MsgInstantiateContract2 create a new smart contract instance for the given
 * code id with a predicable address.
 *
 * @generated from message cosmwasm.wasm.v1.MsgInstantiateContract2
 */
export declare class MsgInstantiateContract2 extends Message<MsgInstantiateContract2> {
    /**
     * Sender is the that actor that signed the messages
     *
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * Admin is an optional address that can execute migrations
     *
     * @generated from field: string admin = 2;
     */
    admin: string;
    /**
     * CodeID is the reference to the stored WASM code
     *
     * @generated from field: uint64 code_id = 3;
     */
    codeId: bigint;
    /**
     * Label is optional metadata to be stored with a contract instance.
     *
     * @generated from field: string label = 4;
     */
    label: string;
    /**
     * Msg json encoded message to be passed to the contract on instantiation
     *
     * @generated from field: bytes msg = 5;
     */
    msg: Uint8Array;
    /**
     * Funds coins that are transferred to the contract on instantiation
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin funds = 6;
     */
    funds: Coin[];
    /**
     * Salt is an arbitrary value provided by the sender. Size can be 1 to 64.
     *
     * @generated from field: bytes salt = 7;
     */
    salt: Uint8Array;
    /**
     * FixMsg include the msg value into the hash for the predictable address.
     * Default is false
     *
     * @generated from field: bool fix_msg = 8;
     */
    fixMsg: boolean;
    constructor(data?: PartialMessage<MsgInstantiateContract2>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MsgInstantiateContract2";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgInstantiateContract2;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgInstantiateContract2;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgInstantiateContract2;
    static equals(a: MsgInstantiateContract2 | PlainMessage<MsgInstantiateContract2> | undefined, b: MsgInstantiateContract2 | PlainMessage<MsgInstantiateContract2> | undefined): boolean;
}
/**
 * MsgInstantiateContract2Response return instantiation result data
 *
 * @generated from message cosmwasm.wasm.v1.MsgInstantiateContract2Response
 */
export declare class MsgInstantiateContract2Response extends Message<MsgInstantiateContract2Response> {
    /**
     * Address is the bech32 address of the new contract instance.
     *
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * Data contains bytes to returned from the contract
     *
     * @generated from field: bytes data = 2;
     */
    data: Uint8Array;
    constructor(data?: PartialMessage<MsgInstantiateContract2Response>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MsgInstantiateContract2Response";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgInstantiateContract2Response;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgInstantiateContract2Response;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgInstantiateContract2Response;
    static equals(a: MsgInstantiateContract2Response | PlainMessage<MsgInstantiateContract2Response> | undefined, b: MsgInstantiateContract2Response | PlainMessage<MsgInstantiateContract2Response> | undefined): boolean;
}
/**
 * MsgExecuteContract submits the given message data to a smart contract
 *
 * @generated from message cosmwasm.wasm.v1.MsgExecuteContract
 */
export declare class MsgExecuteContract extends Message<MsgExecuteContract> {
    /**
     * Sender is the that actor that signed the messages
     *
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * Contract is the address of the smart contract
     *
     * @generated from field: string contract = 2;
     */
    contract: string;
    /**
     * Msg json encoded message to be passed to the contract
     *
     * @generated from field: bytes msg = 3;
     */
    msg: Uint8Array;
    /**
     * Funds coins that are transferred to the contract on execution
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin funds = 5;
     */
    funds: Coin[];
    constructor(data?: PartialMessage<MsgExecuteContract>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MsgExecuteContract";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgExecuteContract;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgExecuteContract;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgExecuteContract;
    static equals(a: MsgExecuteContract | PlainMessage<MsgExecuteContract> | undefined, b: MsgExecuteContract | PlainMessage<MsgExecuteContract> | undefined): boolean;
}
/**
 * MsgExecuteContractResponse returns execution result data.
 *
 * @generated from message cosmwasm.wasm.v1.MsgExecuteContractResponse
 */
export declare class MsgExecuteContractResponse extends Message<MsgExecuteContractResponse> {
    /**
     * Data contains bytes to returned from the contract
     *
     * @generated from field: bytes data = 1;
     */
    data: Uint8Array;
    constructor(data?: PartialMessage<MsgExecuteContractResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MsgExecuteContractResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgExecuteContractResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgExecuteContractResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgExecuteContractResponse;
    static equals(a: MsgExecuteContractResponse | PlainMessage<MsgExecuteContractResponse> | undefined, b: MsgExecuteContractResponse | PlainMessage<MsgExecuteContractResponse> | undefined): boolean;
}
/**
 * MsgMigrateContract runs a code upgrade/ downgrade for a smart contract
 *
 * @generated from message cosmwasm.wasm.v1.MsgMigrateContract
 */
export declare class MsgMigrateContract extends Message<MsgMigrateContract> {
    /**
     * Sender is the that actor that signed the messages
     *
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * Contract is the address of the smart contract
     *
     * @generated from field: string contract = 2;
     */
    contract: string;
    /**
     * CodeID references the new WASM code
     *
     * @generated from field: uint64 code_id = 3;
     */
    codeId: bigint;
    /**
     * Msg json encoded message to be passed to the contract on migration
     *
     * @generated from field: bytes msg = 4;
     */
    msg: Uint8Array;
    constructor(data?: PartialMessage<MsgMigrateContract>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MsgMigrateContract";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgMigrateContract;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgMigrateContract;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgMigrateContract;
    static equals(a: MsgMigrateContract | PlainMessage<MsgMigrateContract> | undefined, b: MsgMigrateContract | PlainMessage<MsgMigrateContract> | undefined): boolean;
}
/**
 * MsgMigrateContractResponse returns contract migration result data.
 *
 * @generated from message cosmwasm.wasm.v1.MsgMigrateContractResponse
 */
export declare class MsgMigrateContractResponse extends Message<MsgMigrateContractResponse> {
    /**
     * Data contains same raw bytes returned as data from the wasm contract.
     * (May be empty)
     *
     * @generated from field: bytes data = 1;
     */
    data: Uint8Array;
    constructor(data?: PartialMessage<MsgMigrateContractResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MsgMigrateContractResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgMigrateContractResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgMigrateContractResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgMigrateContractResponse;
    static equals(a: MsgMigrateContractResponse | PlainMessage<MsgMigrateContractResponse> | undefined, b: MsgMigrateContractResponse | PlainMessage<MsgMigrateContractResponse> | undefined): boolean;
}
/**
 * MsgUpdateAdmin sets a new admin for a smart contract
 *
 * @generated from message cosmwasm.wasm.v1.MsgUpdateAdmin
 */
export declare class MsgUpdateAdmin extends Message<MsgUpdateAdmin> {
    /**
     * Sender is the that actor that signed the messages
     *
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * NewAdmin address to be set
     *
     * @generated from field: string new_admin = 2;
     */
    newAdmin: string;
    /**
     * Contract is the address of the smart contract
     *
     * @generated from field: string contract = 3;
     */
    contract: string;
    constructor(data?: PartialMessage<MsgUpdateAdmin>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MsgUpdateAdmin";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateAdmin;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateAdmin;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateAdmin;
    static equals(a: MsgUpdateAdmin | PlainMessage<MsgUpdateAdmin> | undefined, b: MsgUpdateAdmin | PlainMessage<MsgUpdateAdmin> | undefined): boolean;
}
/**
 * MsgUpdateAdminResponse returns empty data
 *
 * @generated from message cosmwasm.wasm.v1.MsgUpdateAdminResponse
 */
export declare class MsgUpdateAdminResponse extends Message<MsgUpdateAdminResponse> {
    constructor(data?: PartialMessage<MsgUpdateAdminResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MsgUpdateAdminResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateAdminResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateAdminResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateAdminResponse;
    static equals(a: MsgUpdateAdminResponse | PlainMessage<MsgUpdateAdminResponse> | undefined, b: MsgUpdateAdminResponse | PlainMessage<MsgUpdateAdminResponse> | undefined): boolean;
}
/**
 * MsgClearAdmin removes any admin stored for a smart contract
 *
 * @generated from message cosmwasm.wasm.v1.MsgClearAdmin
 */
export declare class MsgClearAdmin extends Message<MsgClearAdmin> {
    /**
     * Sender is the actor that signed the messages
     *
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * Contract is the address of the smart contract
     *
     * @generated from field: string contract = 3;
     */
    contract: string;
    constructor(data?: PartialMessage<MsgClearAdmin>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MsgClearAdmin";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgClearAdmin;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgClearAdmin;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgClearAdmin;
    static equals(a: MsgClearAdmin | PlainMessage<MsgClearAdmin> | undefined, b: MsgClearAdmin | PlainMessage<MsgClearAdmin> | undefined): boolean;
}
/**
 * MsgClearAdminResponse returns empty data
 *
 * @generated from message cosmwasm.wasm.v1.MsgClearAdminResponse
 */
export declare class MsgClearAdminResponse extends Message<MsgClearAdminResponse> {
    constructor(data?: PartialMessage<MsgClearAdminResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MsgClearAdminResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgClearAdminResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgClearAdminResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgClearAdminResponse;
    static equals(a: MsgClearAdminResponse | PlainMessage<MsgClearAdminResponse> | undefined, b: MsgClearAdminResponse | PlainMessage<MsgClearAdminResponse> | undefined): boolean;
}
/**
 * MsgUpdateInstantiateConfig updates instantiate config for a smart contract
 *
 * @generated from message cosmwasm.wasm.v1.MsgUpdateInstantiateConfig
 */
export declare class MsgUpdateInstantiateConfig extends Message<MsgUpdateInstantiateConfig> {
    /**
     * Sender is the that actor that signed the messages
     *
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * CodeID references the stored WASM code
     *
     * @generated from field: uint64 code_id = 2;
     */
    codeId: bigint;
    /**
     * NewInstantiatePermission is the new access control
     *
     * @generated from field: cosmwasm.wasm.v1.AccessConfig new_instantiate_permission = 3;
     */
    newInstantiatePermission?: AccessConfig;
    constructor(data?: PartialMessage<MsgUpdateInstantiateConfig>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MsgUpdateInstantiateConfig";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateInstantiateConfig;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateInstantiateConfig;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateInstantiateConfig;
    static equals(a: MsgUpdateInstantiateConfig | PlainMessage<MsgUpdateInstantiateConfig> | undefined, b: MsgUpdateInstantiateConfig | PlainMessage<MsgUpdateInstantiateConfig> | undefined): boolean;
}
/**
 * MsgUpdateInstantiateConfigResponse returns empty data
 *
 * @generated from message cosmwasm.wasm.v1.MsgUpdateInstantiateConfigResponse
 */
export declare class MsgUpdateInstantiateConfigResponse extends Message<MsgUpdateInstantiateConfigResponse> {
    constructor(data?: PartialMessage<MsgUpdateInstantiateConfigResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MsgUpdateInstantiateConfigResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateInstantiateConfigResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateInstantiateConfigResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateInstantiateConfigResponse;
    static equals(a: MsgUpdateInstantiateConfigResponse | PlainMessage<MsgUpdateInstantiateConfigResponse> | undefined, b: MsgUpdateInstantiateConfigResponse | PlainMessage<MsgUpdateInstantiateConfigResponse> | undefined): boolean;
}
/**
 * MsgUpdateParams is the MsgUpdateParams request type.
 *
 * Since: 0.40
 *
 * @generated from message cosmwasm.wasm.v1.MsgUpdateParams
 */
export declare class MsgUpdateParams extends Message<MsgUpdateParams> {
    /**
     * Authority is the address of the governance account.
     *
     * @generated from field: string authority = 1;
     */
    authority: string;
    /**
     * params defines the x/wasm parameters to update.
     *
     * NOTE: All parameters must be supplied.
     *
     * @generated from field: cosmwasm.wasm.v1.Params params = 2;
     */
    params?: Params;
    constructor(data?: PartialMessage<MsgUpdateParams>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MsgUpdateParams";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParams;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParams;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParams;
    static equals(a: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined, b: MsgUpdateParams | PlainMessage<MsgUpdateParams> | undefined): boolean;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: 0.40
 *
 * @generated from message cosmwasm.wasm.v1.MsgUpdateParamsResponse
 */
export declare class MsgUpdateParamsResponse extends Message<MsgUpdateParamsResponse> {
    constructor(data?: PartialMessage<MsgUpdateParamsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MsgUpdateParamsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateParamsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateParamsResponse;
    static equals(a: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined, b: MsgUpdateParamsResponse | PlainMessage<MsgUpdateParamsResponse> | undefined): boolean;
}
/**
 * MsgSudoContract is the MsgSudoContract request type.
 *
 * Since: 0.40
 *
 * @generated from message cosmwasm.wasm.v1.MsgSudoContract
 */
export declare class MsgSudoContract extends Message<MsgSudoContract> {
    /**
     * Authority is the address of the governance account.
     *
     * @generated from field: string authority = 1;
     */
    authority: string;
    /**
     * Contract is the address of the smart contract
     *
     * @generated from field: string contract = 2;
     */
    contract: string;
    /**
     * Msg json encoded message to be passed to the contract as sudo
     *
     * @generated from field: bytes msg = 3;
     */
    msg: Uint8Array;
    constructor(data?: PartialMessage<MsgSudoContract>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MsgSudoContract";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSudoContract;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSudoContract;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSudoContract;
    static equals(a: MsgSudoContract | PlainMessage<MsgSudoContract> | undefined, b: MsgSudoContract | PlainMessage<MsgSudoContract> | undefined): boolean;
}
/**
 * MsgSudoContractResponse defines the response structure for executing a
 * MsgSudoContract message.
 *
 * Since: 0.40
 *
 * @generated from message cosmwasm.wasm.v1.MsgSudoContractResponse
 */
export declare class MsgSudoContractResponse extends Message<MsgSudoContractResponse> {
    /**
     * Data contains bytes to returned from the contract
     *
     * @generated from field: bytes data = 1;
     */
    data: Uint8Array;
    constructor(data?: PartialMessage<MsgSudoContractResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MsgSudoContractResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSudoContractResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSudoContractResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSudoContractResponse;
    static equals(a: MsgSudoContractResponse | PlainMessage<MsgSudoContractResponse> | undefined, b: MsgSudoContractResponse | PlainMessage<MsgSudoContractResponse> | undefined): boolean;
}
/**
 * MsgPinCodes is the MsgPinCodes request type.
 *
 * Since: 0.40
 *
 * @generated from message cosmwasm.wasm.v1.MsgPinCodes
 */
export declare class MsgPinCodes extends Message<MsgPinCodes> {
    /**
     * Authority is the address of the governance account.
     *
     * @generated from field: string authority = 1;
     */
    authority: string;
    /**
     * CodeIDs references the new WASM codes
     *
     * @generated from field: repeated uint64 code_ids = 2;
     */
    codeIds: bigint[];
    constructor(data?: PartialMessage<MsgPinCodes>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MsgPinCodes";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgPinCodes;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgPinCodes;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgPinCodes;
    static equals(a: MsgPinCodes | PlainMessage<MsgPinCodes> | undefined, b: MsgPinCodes | PlainMessage<MsgPinCodes> | undefined): boolean;
}
/**
 * MsgPinCodesResponse defines the response structure for executing a
 * MsgPinCodes message.
 *
 * Since: 0.40
 *
 * @generated from message cosmwasm.wasm.v1.MsgPinCodesResponse
 */
export declare class MsgPinCodesResponse extends Message<MsgPinCodesResponse> {
    constructor(data?: PartialMessage<MsgPinCodesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MsgPinCodesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgPinCodesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgPinCodesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgPinCodesResponse;
    static equals(a: MsgPinCodesResponse | PlainMessage<MsgPinCodesResponse> | undefined, b: MsgPinCodesResponse | PlainMessage<MsgPinCodesResponse> | undefined): boolean;
}
/**
 * MsgUnpinCodes is the MsgUnpinCodes request type.
 *
 * Since: 0.40
 *
 * @generated from message cosmwasm.wasm.v1.MsgUnpinCodes
 */
export declare class MsgUnpinCodes extends Message<MsgUnpinCodes> {
    /**
     * Authority is the address of the governance account.
     *
     * @generated from field: string authority = 1;
     */
    authority: string;
    /**
     * CodeIDs references the WASM codes
     *
     * @generated from field: repeated uint64 code_ids = 2;
     */
    codeIds: bigint[];
    constructor(data?: PartialMessage<MsgUnpinCodes>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MsgUnpinCodes";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUnpinCodes;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUnpinCodes;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUnpinCodes;
    static equals(a: MsgUnpinCodes | PlainMessage<MsgUnpinCodes> | undefined, b: MsgUnpinCodes | PlainMessage<MsgUnpinCodes> | undefined): boolean;
}
/**
 * MsgUnpinCodesResponse defines the response structure for executing a
 * MsgUnpinCodes message.
 *
 * Since: 0.40
 *
 * @generated from message cosmwasm.wasm.v1.MsgUnpinCodesResponse
 */
export declare class MsgUnpinCodesResponse extends Message<MsgUnpinCodesResponse> {
    constructor(data?: PartialMessage<MsgUnpinCodesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MsgUnpinCodesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUnpinCodesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUnpinCodesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUnpinCodesResponse;
    static equals(a: MsgUnpinCodesResponse | PlainMessage<MsgUnpinCodesResponse> | undefined, b: MsgUnpinCodesResponse | PlainMessage<MsgUnpinCodesResponse> | undefined): boolean;
}
/**
 * MsgStoreAndInstantiateContract is the MsgStoreAndInstantiateContract
 * request type.
 *
 * Since: 0.40
 *
 * @generated from message cosmwasm.wasm.v1.MsgStoreAndInstantiateContract
 */
export declare class MsgStoreAndInstantiateContract extends Message<MsgStoreAndInstantiateContract> {
    /**
     * Authority is the address of the governance account.
     *
     * @generated from field: string authority = 1;
     */
    authority: string;
    /**
     * WASMByteCode can be raw or gzip compressed
     *
     * @generated from field: bytes wasm_byte_code = 3;
     */
    wasmByteCode: Uint8Array;
    /**
     * InstantiatePermission to apply on contract creation, optional
     *
     * @generated from field: cosmwasm.wasm.v1.AccessConfig instantiate_permission = 4;
     */
    instantiatePermission?: AccessConfig;
    /**
     * UnpinCode code on upload, optional. As default the uploaded contract is
     * pinned to cache.
     *
     * @generated from field: bool unpin_code = 5;
     */
    unpinCode: boolean;
    /**
     * Admin is an optional address that can execute migrations
     *
     * @generated from field: string admin = 6;
     */
    admin: string;
    /**
     * Label is optional metadata to be stored with a constract instance.
     *
     * @generated from field: string label = 7;
     */
    label: string;
    /**
     * Msg json encoded message to be passed to the contract on instantiation
     *
     * @generated from field: bytes msg = 8;
     */
    msg: Uint8Array;
    /**
     * Funds coins that are transferred from the authority account to the contract
     * on instantiation
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin funds = 9;
     */
    funds: Coin[];
    /**
     * Source is the URL where the code is hosted
     *
     * @generated from field: string source = 10;
     */
    source: string;
    /**
     * Builder is the docker image used to build the code deterministically, used
     * for smart contract verification
     *
     * @generated from field: string builder = 11;
     */
    builder: string;
    /**
     * CodeHash is the SHA256 sum of the code outputted by builder, used for smart
     * contract verification
     *
     * @generated from field: bytes code_hash = 12;
     */
    codeHash: Uint8Array;
    constructor(data?: PartialMessage<MsgStoreAndInstantiateContract>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MsgStoreAndInstantiateContract";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgStoreAndInstantiateContract;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgStoreAndInstantiateContract;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgStoreAndInstantiateContract;
    static equals(a: MsgStoreAndInstantiateContract | PlainMessage<MsgStoreAndInstantiateContract> | undefined, b: MsgStoreAndInstantiateContract | PlainMessage<MsgStoreAndInstantiateContract> | undefined): boolean;
}
/**
 * MsgStoreAndInstantiateContractResponse defines the response structure
 * for executing a MsgStoreAndInstantiateContract message.
 *
 * Since: 0.40
 *
 * @generated from message cosmwasm.wasm.v1.MsgStoreAndInstantiateContractResponse
 */
export declare class MsgStoreAndInstantiateContractResponse extends Message<MsgStoreAndInstantiateContractResponse> {
    /**
     * Address is the bech32 address of the new contract instance.
     *
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * Data contains bytes to returned from the contract
     *
     * @generated from field: bytes data = 2;
     */
    data: Uint8Array;
    constructor(data?: PartialMessage<MsgStoreAndInstantiateContractResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MsgStoreAndInstantiateContractResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgStoreAndInstantiateContractResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgStoreAndInstantiateContractResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgStoreAndInstantiateContractResponse;
    static equals(a: MsgStoreAndInstantiateContractResponse | PlainMessage<MsgStoreAndInstantiateContractResponse> | undefined, b: MsgStoreAndInstantiateContractResponse | PlainMessage<MsgStoreAndInstantiateContractResponse> | undefined): boolean;
}
/**
 * MsgAddCodeUploadParamsAddresses is the
 * MsgAddCodeUploadParamsAddresses request type.
 *
 * @generated from message cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses
 */
export declare class MsgAddCodeUploadParamsAddresses extends Message<MsgAddCodeUploadParamsAddresses> {
    /**
     * Authority is the address of the governance account.
     *
     * @generated from field: string authority = 1;
     */
    authority: string;
    /**
     * @generated from field: repeated string addresses = 2;
     */
    addresses: string[];
    constructor(data?: PartialMessage<MsgAddCodeUploadParamsAddresses>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddresses";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAddCodeUploadParamsAddresses;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAddCodeUploadParamsAddresses;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAddCodeUploadParamsAddresses;
    static equals(a: MsgAddCodeUploadParamsAddresses | PlainMessage<MsgAddCodeUploadParamsAddresses> | undefined, b: MsgAddCodeUploadParamsAddresses | PlainMessage<MsgAddCodeUploadParamsAddresses> | undefined): boolean;
}
/**
 * MsgAddCodeUploadParamsAddressesResponse defines the response
 * structure for executing a MsgAddCodeUploadParamsAddresses message.
 *
 * @generated from message cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddressesResponse
 */
export declare class MsgAddCodeUploadParamsAddressesResponse extends Message<MsgAddCodeUploadParamsAddressesResponse> {
    constructor(data?: PartialMessage<MsgAddCodeUploadParamsAddressesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MsgAddCodeUploadParamsAddressesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAddCodeUploadParamsAddressesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAddCodeUploadParamsAddressesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAddCodeUploadParamsAddressesResponse;
    static equals(a: MsgAddCodeUploadParamsAddressesResponse | PlainMessage<MsgAddCodeUploadParamsAddressesResponse> | undefined, b: MsgAddCodeUploadParamsAddressesResponse | PlainMessage<MsgAddCodeUploadParamsAddressesResponse> | undefined): boolean;
}
/**
 * MsgRemoveCodeUploadParamsAddresses is the
 * MsgRemoveCodeUploadParamsAddresses request type.
 *
 * @generated from message cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses
 */
export declare class MsgRemoveCodeUploadParamsAddresses extends Message<MsgRemoveCodeUploadParamsAddresses> {
    /**
     * Authority is the address of the governance account.
     *
     * @generated from field: string authority = 1;
     */
    authority: string;
    /**
     * @generated from field: repeated string addresses = 2;
     */
    addresses: string[];
    constructor(data?: PartialMessage<MsgRemoveCodeUploadParamsAddresses>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddresses";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRemoveCodeUploadParamsAddresses;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRemoveCodeUploadParamsAddresses;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRemoveCodeUploadParamsAddresses;
    static equals(a: MsgRemoveCodeUploadParamsAddresses | PlainMessage<MsgRemoveCodeUploadParamsAddresses> | undefined, b: MsgRemoveCodeUploadParamsAddresses | PlainMessage<MsgRemoveCodeUploadParamsAddresses> | undefined): boolean;
}
/**
 * MsgRemoveCodeUploadParamsAddressesResponse defines the response
 * structure for executing a MsgRemoveCodeUploadParamsAddresses message.
 *
 * @generated from message cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddressesResponse
 */
export declare class MsgRemoveCodeUploadParamsAddressesResponse extends Message<MsgRemoveCodeUploadParamsAddressesResponse> {
    constructor(data?: PartialMessage<MsgRemoveCodeUploadParamsAddressesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MsgRemoveCodeUploadParamsAddressesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRemoveCodeUploadParamsAddressesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRemoveCodeUploadParamsAddressesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRemoveCodeUploadParamsAddressesResponse;
    static equals(a: MsgRemoveCodeUploadParamsAddressesResponse | PlainMessage<MsgRemoveCodeUploadParamsAddressesResponse> | undefined, b: MsgRemoveCodeUploadParamsAddressesResponse | PlainMessage<MsgRemoveCodeUploadParamsAddressesResponse> | undefined): boolean;
}
/**
 * MsgStoreAndMigrateContract is the MsgStoreAndMigrateContract
 * request type.
 *
 * Since: 0.42
 *
 * @generated from message cosmwasm.wasm.v1.MsgStoreAndMigrateContract
 */
export declare class MsgStoreAndMigrateContract extends Message<MsgStoreAndMigrateContract> {
    /**
     * Authority is the address of the governance account.
     *
     * @generated from field: string authority = 1;
     */
    authority: string;
    /**
     * WASMByteCode can be raw or gzip compressed
     *
     * @generated from field: bytes wasm_byte_code = 2;
     */
    wasmByteCode: Uint8Array;
    /**
     * InstantiatePermission to apply on contract creation, optional
     *
     * @generated from field: cosmwasm.wasm.v1.AccessConfig instantiate_permission = 3;
     */
    instantiatePermission?: AccessConfig;
    /**
     * Contract is the address of the smart contract
     *
     * @generated from field: string contract = 4;
     */
    contract: string;
    /**
     * Msg json encoded message to be passed to the contract on migration
     *
     * @generated from field: bytes msg = 5;
     */
    msg: Uint8Array;
    constructor(data?: PartialMessage<MsgStoreAndMigrateContract>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MsgStoreAndMigrateContract";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgStoreAndMigrateContract;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgStoreAndMigrateContract;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgStoreAndMigrateContract;
    static equals(a: MsgStoreAndMigrateContract | PlainMessage<MsgStoreAndMigrateContract> | undefined, b: MsgStoreAndMigrateContract | PlainMessage<MsgStoreAndMigrateContract> | undefined): boolean;
}
/**
 * MsgStoreAndMigrateContractResponse defines the response structure
 * for executing a MsgStoreAndMigrateContract message.
 *
 * Since: 0.42
 *
 * @generated from message cosmwasm.wasm.v1.MsgStoreAndMigrateContractResponse
 */
export declare class MsgStoreAndMigrateContractResponse extends Message<MsgStoreAndMigrateContractResponse> {
    /**
     * CodeID is the reference to the stored WASM code
     *
     * @generated from field: uint64 code_id = 1;
     */
    codeId: bigint;
    /**
     * Checksum is the sha256 hash of the stored code
     *
     * @generated from field: bytes checksum = 2;
     */
    checksum: Uint8Array;
    /**
     * Data contains bytes to returned from the contract
     *
     * @generated from field: bytes data = 3;
     */
    data: Uint8Array;
    constructor(data?: PartialMessage<MsgStoreAndMigrateContractResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MsgStoreAndMigrateContractResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgStoreAndMigrateContractResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgStoreAndMigrateContractResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgStoreAndMigrateContractResponse;
    static equals(a: MsgStoreAndMigrateContractResponse | PlainMessage<MsgStoreAndMigrateContractResponse> | undefined, b: MsgStoreAndMigrateContractResponse | PlainMessage<MsgStoreAndMigrateContractResponse> | undefined): boolean;
}
/**
 * MsgUpdateContractLabel sets a new label for a smart contract
 *
 * @generated from message cosmwasm.wasm.v1.MsgUpdateContractLabel
 */
export declare class MsgUpdateContractLabel extends Message<MsgUpdateContractLabel> {
    /**
     * Sender is the that actor that signed the messages
     *
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * NewLabel string to be set
     *
     * @generated from field: string new_label = 2;
     */
    newLabel: string;
    /**
     * Contract is the address of the smart contract
     *
     * @generated from field: string contract = 3;
     */
    contract: string;
    constructor(data?: PartialMessage<MsgUpdateContractLabel>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MsgUpdateContractLabel";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateContractLabel;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateContractLabel;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateContractLabel;
    static equals(a: MsgUpdateContractLabel | PlainMessage<MsgUpdateContractLabel> | undefined, b: MsgUpdateContractLabel | PlainMessage<MsgUpdateContractLabel> | undefined): boolean;
}
/**
 * MsgUpdateContractLabelResponse returns empty data
 *
 * @generated from message cosmwasm.wasm.v1.MsgUpdateContractLabelResponse
 */
export declare class MsgUpdateContractLabelResponse extends Message<MsgUpdateContractLabelResponse> {
    constructor(data?: PartialMessage<MsgUpdateContractLabelResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MsgUpdateContractLabelResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgUpdateContractLabelResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgUpdateContractLabelResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgUpdateContractLabelResponse;
    static equals(a: MsgUpdateContractLabelResponse | PlainMessage<MsgUpdateContractLabelResponse> | undefined, b: MsgUpdateContractLabelResponse | PlainMessage<MsgUpdateContractLabelResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map