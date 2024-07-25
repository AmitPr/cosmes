import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { CodeInfo, ContractCodeHistoryEntry, ContractInfo, Model, Params } from "./types_pb.js";
/**
 * GenesisState - genesis state of x/wasm
 *
 * @generated from message cosmwasm.wasm.v1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * @generated from field: cosmwasm.wasm.v1.Params params = 1;
     */
    params?: Params;
    /**
     * @generated from field: repeated cosmwasm.wasm.v1.Code codes = 2;
     */
    codes: Code[];
    /**
     * @generated from field: repeated cosmwasm.wasm.v1.Contract contracts = 3;
     */
    contracts: Contract[];
    /**
     * @generated from field: repeated cosmwasm.wasm.v1.Sequence sequences = 4;
     */
    sequences: Sequence[];
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
/**
 * Code struct encompasses CodeInfo and CodeBytes
 *
 * @generated from message cosmwasm.wasm.v1.Code
 */
export declare class Code extends Message<Code> {
    /**
     * @generated from field: uint64 code_id = 1;
     */
    codeId: bigint;
    /**
     * @generated from field: cosmwasm.wasm.v1.CodeInfo code_info = 2;
     */
    codeInfo?: CodeInfo;
    /**
     * @generated from field: bytes code_bytes = 3;
     */
    codeBytes: Uint8Array;
    /**
     * Pinned to wasmvm cache
     *
     * @generated from field: bool pinned = 4;
     */
    pinned: boolean;
    constructor(data?: PartialMessage<Code>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.Code";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Code;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Code;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Code;
    static equals(a: Code | PlainMessage<Code> | undefined, b: Code | PlainMessage<Code> | undefined): boolean;
}
/**
 * Contract struct encompasses ContractAddress, ContractInfo, and ContractState
 *
 * @generated from message cosmwasm.wasm.v1.Contract
 */
export declare class Contract extends Message<Contract> {
    /**
     * @generated from field: string contract_address = 1;
     */
    contractAddress: string;
    /**
     * @generated from field: cosmwasm.wasm.v1.ContractInfo contract_info = 2;
     */
    contractInfo?: ContractInfo;
    /**
     * @generated from field: repeated cosmwasm.wasm.v1.Model contract_state = 3;
     */
    contractState: Model[];
    /**
     * @generated from field: repeated cosmwasm.wasm.v1.ContractCodeHistoryEntry contract_code_history = 4;
     */
    contractCodeHistory: ContractCodeHistoryEntry[];
    constructor(data?: PartialMessage<Contract>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.Contract";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Contract;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Contract;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Contract;
    static equals(a: Contract | PlainMessage<Contract> | undefined, b: Contract | PlainMessage<Contract> | undefined): boolean;
}
/**
 * Sequence key and value of an id generation counter
 *
 * @generated from message cosmwasm.wasm.v1.Sequence
 */
export declare class Sequence extends Message<Sequence> {
    /**
     * @generated from field: bytes id_key = 1;
     */
    idKey: Uint8Array;
    /**
     * @generated from field: uint64 value = 2;
     */
    value: bigint;
    constructor(data?: PartialMessage<Sequence>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmwasm.wasm.v1.Sequence";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Sequence;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Sequence;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Sequence;
    static equals(a: Sequence | PlainMessage<Sequence> | undefined, b: Sequence | PlainMessage<Sequence> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map