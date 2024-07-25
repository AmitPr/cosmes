import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Params } from "./params_pb.js";
import { DenomAuthorityMetadata } from "./authorityMetadata_pb.js";
/**
 * GenesisState defines the denom module's genesis state.
 *
 * @generated from message kujira.denom.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * params defines the paramaters of the module.
     *
     * @generated from field: kujira.denom.Params params = 1;
     */
    params?: Params;
    /**
     * @generated from field: repeated kujira.denom.GenesisDenom factory_denoms = 2;
     */
    factoryDenoms: GenesisDenom[];
    /**
     * whitelisted accounts that do not require paying creation fees
     *
     * @generated from field: repeated string no_fee_accounts = 3;
     */
    noFeeAccounts: string[];
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.denom.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
/**
 * @generated from message kujira.denom.GenesisDenom
 */
export declare class GenesisDenom extends Message<GenesisDenom> {
    /**
     * @generated from field: string denom = 1;
     */
    denom: string;
    /**
     * @generated from field: kujira.denom.DenomAuthorityMetadata authority_metadata = 2;
     */
    authorityMetadata?: DenomAuthorityMetadata;
    constructor(data?: PartialMessage<GenesisDenom>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.denom.GenesisDenom";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisDenom;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisDenom;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisDenom;
    static equals(a: GenesisDenom | PlainMessage<GenesisDenom> | undefined, b: GenesisDenom | PlainMessage<GenesisDenom> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map