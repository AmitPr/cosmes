import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { AccessConfig } from "./types_pb.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin_pb.js";
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit StoreCodeProposal. To submit WASM code to the system,
 * a simple MsgStoreCode can be invoked from the x/gov module via
 * a v1 governance proposal.
 *
 * @generated from message cosmwasm.wasm.v1.StoreCodeProposal
 * @deprecated
 */
export declare class StoreCodeProposal extends Message<StoreCodeProposal> {
    /**
     * Title is a short summary
     *
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * Description is a human readable text
     *
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * RunAs is the address that is passed to the contract's environment as sender
     *
     * @generated from field: string run_as = 3;
     */
    runAs: string;
    /**
     * WASMByteCode can be raw or gzip compressed
     *
     * @generated from field: bytes wasm_byte_code = 4;
     */
    wasmByteCode: Uint8Array;
    /**
     * InstantiatePermission to apply on contract creation, optional
     *
     * @generated from field: cosmwasm.wasm.v1.AccessConfig instantiate_permission = 7;
     */
    instantiatePermission?: AccessConfig;
    /**
     * UnpinCode code on upload, optional
     *
     * @generated from field: bool unpin_code = 8;
     */
    unpinCode: boolean;
    /**
     * Source is the URL where the code is hosted
     *
     * @generated from field: string source = 9;
     */
    source: string;
    /**
     * Builder is the docker image used to build the code deterministically, used
     * for smart contract verification
     *
     * @generated from field: string builder = 10;
     */
    builder: string;
    /**
     * CodeHash is the SHA256 sum of the code outputted by builder, used for smart
     * contract verification
     *
     * @generated from field: bytes code_hash = 11;
     */
    codeHash: Uint8Array;
    constructor(data?: PartialMessage<StoreCodeProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.StoreCodeProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StoreCodeProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StoreCodeProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StoreCodeProposal;
    static equals(a: StoreCodeProposal | PlainMessage<StoreCodeProposal> | undefined, b: StoreCodeProposal | PlainMessage<StoreCodeProposal> | undefined): boolean;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit InstantiateContractProposal. To instantiate a contract,
 * a simple MsgInstantiateContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 *
 * @generated from message cosmwasm.wasm.v1.InstantiateContractProposal
 * @deprecated
 */
export declare class InstantiateContractProposal extends Message<InstantiateContractProposal> {
    /**
     * Title is a short summary
     *
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * Description is a human readable text
     *
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * RunAs is the address that is passed to the contract's environment as sender
     *
     * @generated from field: string run_as = 3;
     */
    runAs: string;
    /**
     * Admin is an optional address that can execute migrations
     *
     * @generated from field: string admin = 4;
     */
    admin: string;
    /**
     * CodeID is the reference to the stored WASM code
     *
     * @generated from field: uint64 code_id = 5;
     */
    codeId: bigint;
    /**
     * Label is optional metadata to be stored with a constract instance.
     *
     * @generated from field: string label = 6;
     */
    label: string;
    /**
     * Msg json encoded message to be passed to the contract on instantiation
     *
     * @generated from field: bytes msg = 7;
     */
    msg: Uint8Array;
    /**
     * Funds coins that are transferred to the contract on instantiation
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin funds = 8;
     */
    funds: Coin[];
    constructor(data?: PartialMessage<InstantiateContractProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.InstantiateContractProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InstantiateContractProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InstantiateContractProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InstantiateContractProposal;
    static equals(a: InstantiateContractProposal | PlainMessage<InstantiateContractProposal> | undefined, b: InstantiateContractProposal | PlainMessage<InstantiateContractProposal> | undefined): boolean;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit InstantiateContract2Proposal. To instantiate contract 2,
 * a simple MsgInstantiateContract2 can be invoked from the x/gov module via
 * a v1 governance proposal.
 *
 * @generated from message cosmwasm.wasm.v1.InstantiateContract2Proposal
 * @deprecated
 */
export declare class InstantiateContract2Proposal extends Message<InstantiateContract2Proposal> {
    /**
     * Title is a short summary
     *
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * Description is a human readable text
     *
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * RunAs is the address that is passed to the contract's enviroment as sender
     *
     * @generated from field: string run_as = 3;
     */
    runAs: string;
    /**
     * Admin is an optional address that can execute migrations
     *
     * @generated from field: string admin = 4;
     */
    admin: string;
    /**
     * CodeID is the reference to the stored WASM code
     *
     * @generated from field: uint64 code_id = 5;
     */
    codeId: bigint;
    /**
     * Label is optional metadata to be stored with a constract instance.
     *
     * @generated from field: string label = 6;
     */
    label: string;
    /**
     * Msg json encode message to be passed to the contract on instantiation
     *
     * @generated from field: bytes msg = 7;
     */
    msg: Uint8Array;
    /**
     * Funds coins that are transferred to the contract on instantiation
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin funds = 8;
     */
    funds: Coin[];
    /**
     * Salt is an arbitrary value provided by the sender. Size can be 1 to 64.
     *
     * @generated from field: bytes salt = 9;
     */
    salt: Uint8Array;
    /**
     * FixMsg include the msg value into the hash for the predictable address.
     * Default is false
     *
     * @generated from field: bool fix_msg = 10;
     */
    fixMsg: boolean;
    constructor(data?: PartialMessage<InstantiateContract2Proposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.InstantiateContract2Proposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InstantiateContract2Proposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InstantiateContract2Proposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InstantiateContract2Proposal;
    static equals(a: InstantiateContract2Proposal | PlainMessage<InstantiateContract2Proposal> | undefined, b: InstantiateContract2Proposal | PlainMessage<InstantiateContract2Proposal> | undefined): boolean;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit MigrateContractProposal. To migrate a contract,
 * a simple MsgMigrateContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 *
 * @generated from message cosmwasm.wasm.v1.MigrateContractProposal
 * @deprecated
 */
export declare class MigrateContractProposal extends Message<MigrateContractProposal> {
    /**
     * Title is a short summary
     *
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * Description is a human readable text
     *
     * Note: skipping 3 as this was previously used for unneeded run_as
     *
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * Contract is the address of the smart contract
     *
     * @generated from field: string contract = 4;
     */
    contract: string;
    /**
     * CodeID references the new WASM code
     *
     * @generated from field: uint64 code_id = 5;
     */
    codeId: bigint;
    /**
     * Msg json encoded message to be passed to the contract on migration
     *
     * @generated from field: bytes msg = 6;
     */
    msg: Uint8Array;
    constructor(data?: PartialMessage<MigrateContractProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.MigrateContractProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MigrateContractProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MigrateContractProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MigrateContractProposal;
    static equals(a: MigrateContractProposal | PlainMessage<MigrateContractProposal> | undefined, b: MigrateContractProposal | PlainMessage<MigrateContractProposal> | undefined): boolean;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit SudoContractProposal. To call sudo on a contract,
 * a simple MsgSudoContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 *
 * @generated from message cosmwasm.wasm.v1.SudoContractProposal
 * @deprecated
 */
export declare class SudoContractProposal extends Message<SudoContractProposal> {
    /**
     * Title is a short summary
     *
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * Description is a human readable text
     *
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * Contract is the address of the smart contract
     *
     * @generated from field: string contract = 3;
     */
    contract: string;
    /**
     * Msg json encoded message to be passed to the contract as sudo
     *
     * @generated from field: bytes msg = 4;
     */
    msg: Uint8Array;
    constructor(data?: PartialMessage<SudoContractProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.SudoContractProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SudoContractProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SudoContractProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SudoContractProposal;
    static equals(a: SudoContractProposal | PlainMessage<SudoContractProposal> | undefined, b: SudoContractProposal | PlainMessage<SudoContractProposal> | undefined): boolean;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit ExecuteContractProposal. To call execute on a contract,
 * a simple MsgExecuteContract can be invoked from the x/gov module via
 * a v1 governance proposal.
 *
 * @generated from message cosmwasm.wasm.v1.ExecuteContractProposal
 * @deprecated
 */
export declare class ExecuteContractProposal extends Message<ExecuteContractProposal> {
    /**
     * Title is a short summary
     *
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * Description is a human readable text
     *
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * RunAs is the address that is passed to the contract's environment as sender
     *
     * @generated from field: string run_as = 3;
     */
    runAs: string;
    /**
     * Contract is the address of the smart contract
     *
     * @generated from field: string contract = 4;
     */
    contract: string;
    /**
     * Msg json encoded message to be passed to the contract as execute
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
    constructor(data?: PartialMessage<ExecuteContractProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.ExecuteContractProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ExecuteContractProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ExecuteContractProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ExecuteContractProposal;
    static equals(a: ExecuteContractProposal | PlainMessage<ExecuteContractProposal> | undefined, b: ExecuteContractProposal | PlainMessage<ExecuteContractProposal> | undefined): boolean;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit UpdateAdminProposal. To set an admin for a contract,
 * a simple MsgUpdateAdmin can be invoked from the x/gov module via
 * a v1 governance proposal.
 *
 * @generated from message cosmwasm.wasm.v1.UpdateAdminProposal
 * @deprecated
 */
export declare class UpdateAdminProposal extends Message<UpdateAdminProposal> {
    /**
     * Title is a short summary
     *
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * Description is a human readable text
     *
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * NewAdmin address to be set
     *
     * @generated from field: string new_admin = 3;
     */
    newAdmin: string;
    /**
     * Contract is the address of the smart contract
     *
     * @generated from field: string contract = 4;
     */
    contract: string;
    constructor(data?: PartialMessage<UpdateAdminProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.UpdateAdminProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateAdminProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateAdminProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateAdminProposal;
    static equals(a: UpdateAdminProposal | PlainMessage<UpdateAdminProposal> | undefined, b: UpdateAdminProposal | PlainMessage<UpdateAdminProposal> | undefined): boolean;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit ClearAdminProposal. To clear the admin of a contract,
 * a simple MsgClearAdmin can be invoked from the x/gov module via
 * a v1 governance proposal.
 *
 * @generated from message cosmwasm.wasm.v1.ClearAdminProposal
 * @deprecated
 */
export declare class ClearAdminProposal extends Message<ClearAdminProposal> {
    /**
     * Title is a short summary
     *
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * Description is a human readable text
     *
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * Contract is the address of the smart contract
     *
     * @generated from field: string contract = 3;
     */
    contract: string;
    constructor(data?: PartialMessage<ClearAdminProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.ClearAdminProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClearAdminProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClearAdminProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClearAdminProposal;
    static equals(a: ClearAdminProposal | PlainMessage<ClearAdminProposal> | undefined, b: ClearAdminProposal | PlainMessage<ClearAdminProposal> | undefined): boolean;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit PinCodesProposal. To pin a set of code ids in the wasmvm
 * cache, a simple MsgPinCodes can be invoked from the x/gov module via
 * a v1 governance proposal.
 *
 * @generated from message cosmwasm.wasm.v1.PinCodesProposal
 * @deprecated
 */
export declare class PinCodesProposal extends Message<PinCodesProposal> {
    /**
     * Title is a short summary
     *
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * Description is a human readable text
     *
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * CodeIDs references the new WASM codes
     *
     * @generated from field: repeated uint64 code_ids = 3;
     */
    codeIds: bigint[];
    constructor(data?: PartialMessage<PinCodesProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.PinCodesProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PinCodesProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PinCodesProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PinCodesProposal;
    static equals(a: PinCodesProposal | PlainMessage<PinCodesProposal> | undefined, b: PinCodesProposal | PlainMessage<PinCodesProposal> | undefined): boolean;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit UnpinCodesProposal. To unpin a set of code ids in the wasmvm
 * cache, a simple MsgUnpinCodes can be invoked from the x/gov module via
 * a v1 governance proposal.
 *
 * @generated from message cosmwasm.wasm.v1.UnpinCodesProposal
 * @deprecated
 */
export declare class UnpinCodesProposal extends Message<UnpinCodesProposal> {
    /**
     * Title is a short summary
     *
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * Description is a human readable text
     *
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * CodeIDs references the WASM codes
     *
     * @generated from field: repeated uint64 code_ids = 3;
     */
    codeIds: bigint[];
    constructor(data?: PartialMessage<UnpinCodesProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.UnpinCodesProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UnpinCodesProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UnpinCodesProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UnpinCodesProposal;
    static equals(a: UnpinCodesProposal | PlainMessage<UnpinCodesProposal> | undefined, b: UnpinCodesProposal | PlainMessage<UnpinCodesProposal> | undefined): boolean;
}
/**
 * AccessConfigUpdate contains the code id and the access config to be
 * applied.
 *
 * @generated from message cosmwasm.wasm.v1.AccessConfigUpdate
 */
export declare class AccessConfigUpdate extends Message<AccessConfigUpdate> {
    /**
     * CodeID is the reference to the stored WASM code to be updated
     *
     * @generated from field: uint64 code_id = 1;
     */
    codeId: bigint;
    /**
     * InstantiatePermission to apply to the set of code ids
     *
     * @generated from field: cosmwasm.wasm.v1.AccessConfig instantiate_permission = 2;
     */
    instantiatePermission?: AccessConfig;
    constructor(data?: PartialMessage<AccessConfigUpdate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.AccessConfigUpdate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccessConfigUpdate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccessConfigUpdate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccessConfigUpdate;
    static equals(a: AccessConfigUpdate | PlainMessage<AccessConfigUpdate> | undefined, b: AccessConfigUpdate | PlainMessage<AccessConfigUpdate> | undefined): boolean;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit UpdateInstantiateConfigProposal. To update instantiate config
 * to a set of code ids, a simple MsgUpdateInstantiateConfig can be invoked from
 * the x/gov module via a v1 governance proposal.
 *
 * @generated from message cosmwasm.wasm.v1.UpdateInstantiateConfigProposal
 * @deprecated
 */
export declare class UpdateInstantiateConfigProposal extends Message<UpdateInstantiateConfigProposal> {
    /**
     * Title is a short summary
     *
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * Description is a human readable text
     *
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * AccessConfigUpdate contains the list of code ids and the access config
     * to be applied.
     *
     * @generated from field: repeated cosmwasm.wasm.v1.AccessConfigUpdate access_config_updates = 3;
     */
    accessConfigUpdates: AccessConfigUpdate[];
    constructor(data?: PartialMessage<UpdateInstantiateConfigProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.UpdateInstantiateConfigProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateInstantiateConfigProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateInstantiateConfigProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateInstantiateConfigProposal;
    static equals(a: UpdateInstantiateConfigProposal | PlainMessage<UpdateInstantiateConfigProposal> | undefined, b: UpdateInstantiateConfigProposal | PlainMessage<UpdateInstantiateConfigProposal> | undefined): boolean;
}
/**
 * Deprecated: Do not use. Since wasmd v0.40, there is no longer a need for
 * an explicit StoreAndInstantiateContractProposal. To store and instantiate
 * the contract, a simple MsgStoreAndInstantiateContract can be invoked from
 * the x/gov module via a v1 governance proposal.
 *
 * @generated from message cosmwasm.wasm.v1.StoreAndInstantiateContractProposal
 * @deprecated
 */
export declare class StoreAndInstantiateContractProposal extends Message<StoreAndInstantiateContractProposal> {
    /**
     * Title is a short summary
     *
     * @generated from field: string title = 1;
     */
    title: string;
    /**
     * Description is a human readable text
     *
     * @generated from field: string description = 2;
     */
    description: string;
    /**
     * RunAs is the address that is passed to the contract's environment as sender
     *
     * @generated from field: string run_as = 3;
     */
    runAs: string;
    /**
     * WASMByteCode can be raw or gzip compressed
     *
     * @generated from field: bytes wasm_byte_code = 4;
     */
    wasmByteCode: Uint8Array;
    /**
     * InstantiatePermission to apply on contract creation, optional
     *
     * @generated from field: cosmwasm.wasm.v1.AccessConfig instantiate_permission = 5;
     */
    instantiatePermission?: AccessConfig;
    /**
     * UnpinCode code on upload, optional
     *
     * @generated from field: bool unpin_code = 6;
     */
    unpinCode: boolean;
    /**
     * Admin is an optional address that can execute migrations
     *
     * @generated from field: string admin = 7;
     */
    admin: string;
    /**
     * Label is optional metadata to be stored with a constract instance.
     *
     * @generated from field: string label = 8;
     */
    label: string;
    /**
     * Msg json encoded message to be passed to the contract on instantiation
     *
     * @generated from field: bytes msg = 9;
     */
    msg: Uint8Array;
    /**
     * Funds coins that are transferred to the contract on instantiation
     *
     * @generated from field: repeated cosmos.base.v1beta1.Coin funds = 10;
     */
    funds: Coin[];
    /**
     * Source is the URL where the code is hosted
     *
     * @generated from field: string source = 11;
     */
    source: string;
    /**
     * Builder is the docker image used to build the code deterministically, used
     * for smart contract verification
     *
     * @generated from field: string builder = 12;
     */
    builder: string;
    /**
     * CodeHash is the SHA256 sum of the code outputted by builder, used for smart
     * contract verification
     *
     * @generated from field: bytes code_hash = 13;
     */
    codeHash: Uint8Array;
    constructor(data?: PartialMessage<StoreAndInstantiateContractProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.StoreAndInstantiateContractProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StoreAndInstantiateContractProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StoreAndInstantiateContractProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StoreAndInstantiateContractProposal;
    static equals(a: StoreAndInstantiateContractProposal | PlainMessage<StoreAndInstantiateContractProposal> | undefined, b: StoreAndInstantiateContractProposal | PlainMessage<StoreAndInstantiateContractProposal> | undefined): boolean;
}
//# sourceMappingURL=proposal_legacy_pb.d.ts.map