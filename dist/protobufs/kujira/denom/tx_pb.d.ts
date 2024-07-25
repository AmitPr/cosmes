import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../cosmos/base/v1beta1/coin_pb.js";
/**
 * @generated from message kujira.denom.MsgAddNoFeeAccounts
 */
export declare class MsgAddNoFeeAccounts extends Message<MsgAddNoFeeAccounts> {
    /**
     * @generated from field: string authority = 1;
     */
    authority: string;
    /**
     * @generated from field: repeated string accounts = 2;
     */
    accounts: string[];
    constructor(data?: PartialMessage<MsgAddNoFeeAccounts>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.denom.MsgAddNoFeeAccounts";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAddNoFeeAccounts;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAddNoFeeAccounts;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAddNoFeeAccounts;
    static equals(a: MsgAddNoFeeAccounts | PlainMessage<MsgAddNoFeeAccounts> | undefined, b: MsgAddNoFeeAccounts | PlainMessage<MsgAddNoFeeAccounts> | undefined): boolean;
}
/**
 * @generated from message kujira.denom.MsgAddNoFeeAccountsResponse
 */
export declare class MsgAddNoFeeAccountsResponse extends Message<MsgAddNoFeeAccountsResponse> {
    constructor(data?: PartialMessage<MsgAddNoFeeAccountsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.denom.MsgAddNoFeeAccountsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgAddNoFeeAccountsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgAddNoFeeAccountsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgAddNoFeeAccountsResponse;
    static equals(a: MsgAddNoFeeAccountsResponse | PlainMessage<MsgAddNoFeeAccountsResponse> | undefined, b: MsgAddNoFeeAccountsResponse | PlainMessage<MsgAddNoFeeAccountsResponse> | undefined): boolean;
}
/**
 * @generated from message kujira.denom.MsgRemoveNoFeeAccounts
 */
export declare class MsgRemoveNoFeeAccounts extends Message<MsgRemoveNoFeeAccounts> {
    /**
     * @generated from field: string authority = 1;
     */
    authority: string;
    /**
     * @generated from field: repeated string accounts = 2;
     */
    accounts: string[];
    constructor(data?: PartialMessage<MsgRemoveNoFeeAccounts>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.denom.MsgRemoveNoFeeAccounts";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRemoveNoFeeAccounts;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRemoveNoFeeAccounts;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRemoveNoFeeAccounts;
    static equals(a: MsgRemoveNoFeeAccounts | PlainMessage<MsgRemoveNoFeeAccounts> | undefined, b: MsgRemoveNoFeeAccounts | PlainMessage<MsgRemoveNoFeeAccounts> | undefined): boolean;
}
/**
 * @generated from message kujira.denom.MsgRemoveNoFeeAccountsResponse
 */
export declare class MsgRemoveNoFeeAccountsResponse extends Message<MsgRemoveNoFeeAccountsResponse> {
    constructor(data?: PartialMessage<MsgRemoveNoFeeAccountsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.denom.MsgRemoveNoFeeAccountsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgRemoveNoFeeAccountsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgRemoveNoFeeAccountsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgRemoveNoFeeAccountsResponse;
    static equals(a: MsgRemoveNoFeeAccountsResponse | PlainMessage<MsgRemoveNoFeeAccountsResponse> | undefined, b: MsgRemoveNoFeeAccountsResponse | PlainMessage<MsgRemoveNoFeeAccountsResponse> | undefined): boolean;
}
/**
 * MsgCreateDenom is the sdk.Msg type for allowing an account to create
 * a new denom.  It requires a sender address and a unique nonce
 * (to allow accounts to create multiple denoms)
 *
 * @generated from message kujira.denom.MsgCreateDenom
 */
export declare class MsgCreateDenom extends Message<MsgCreateDenom> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: string nonce = 2;
     */
    nonce: string;
    constructor(data?: PartialMessage<MsgCreateDenom>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.denom.MsgCreateDenom";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateDenom;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateDenom;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateDenom;
    static equals(a: MsgCreateDenom | PlainMessage<MsgCreateDenom> | undefined, b: MsgCreateDenom | PlainMessage<MsgCreateDenom> | undefined): boolean;
}
/**
 * MsgCreateDenomResponse is the return value of MsgCreateDenom
 * It returns the full string of the newly created denom
 *
 * @generated from message kujira.denom.MsgCreateDenomResponse
 */
export declare class MsgCreateDenomResponse extends Message<MsgCreateDenomResponse> {
    /**
     * @generated from field: string new_token_denom = 1;
     */
    newTokenDenom: string;
    constructor(data?: PartialMessage<MsgCreateDenomResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.denom.MsgCreateDenomResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgCreateDenomResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgCreateDenomResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgCreateDenomResponse;
    static equals(a: MsgCreateDenomResponse | PlainMessage<MsgCreateDenomResponse> | undefined, b: MsgCreateDenomResponse | PlainMessage<MsgCreateDenomResponse> | undefined): boolean;
}
/**
 * MsgMint is the sdk.Msg type for allowing an admin account to mint
 * more of a token.
 *
 * @generated from message kujira.denom.MsgMint
 */
export declare class MsgMint extends Message<MsgMint> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin amount = 2;
     */
    amount?: Coin;
    /**
     * @generated from field: string recipient = 3;
     */
    recipient: string;
    constructor(data?: PartialMessage<MsgMint>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.denom.MsgMint";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgMint;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgMint;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgMint;
    static equals(a: MsgMint | PlainMessage<MsgMint> | undefined, b: MsgMint | PlainMessage<MsgMint> | undefined): boolean;
}
/**
 * @generated from message kujira.denom.MsgMintResponse
 */
export declare class MsgMintResponse extends Message<MsgMintResponse> {
    constructor(data?: PartialMessage<MsgMintResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.denom.MsgMintResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgMintResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgMintResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgMintResponse;
    static equals(a: MsgMintResponse | PlainMessage<MsgMintResponse> | undefined, b: MsgMintResponse | PlainMessage<MsgMintResponse> | undefined): boolean;
}
/**
 * MsgBurn is the sdk.Msg type for allowing an admin account to burn
 * a token.  For now, we only support burning from the sender account.
 *
 * @generated from message kujira.denom.MsgBurn
 */
export declare class MsgBurn extends Message<MsgBurn> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: cosmos.base.v1beta1.Coin amount = 2;
     */
    amount?: Coin;
    constructor(data?: PartialMessage<MsgBurn>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.denom.MsgBurn";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgBurn;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgBurn;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgBurn;
    static equals(a: MsgBurn | PlainMessage<MsgBurn> | undefined, b: MsgBurn | PlainMessage<MsgBurn> | undefined): boolean;
}
/**
 * @generated from message kujira.denom.MsgBurnResponse
 */
export declare class MsgBurnResponse extends Message<MsgBurnResponse> {
    constructor(data?: PartialMessage<MsgBurnResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.denom.MsgBurnResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgBurnResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgBurnResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgBurnResponse;
    static equals(a: MsgBurnResponse | PlainMessage<MsgBurnResponse> | undefined, b: MsgBurnResponse | PlainMessage<MsgBurnResponse> | undefined): boolean;
}
/**
 * MsgChangeAdmin is the sdk.Msg type for allowing an admin account to reassign
 * adminship of a denom to a new account
 *
 * @generated from message kujira.denom.MsgChangeAdmin
 */
export declare class MsgChangeAdmin extends Message<MsgChangeAdmin> {
    /**
     * @generated from field: string sender = 1;
     */
    sender: string;
    /**
     * @generated from field: string denom = 2;
     */
    denom: string;
    /**
     * @generated from field: string newAdmin = 3;
     */
    newAdmin: string;
    constructor(data?: PartialMessage<MsgChangeAdmin>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.denom.MsgChangeAdmin";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChangeAdmin;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChangeAdmin;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChangeAdmin;
    static equals(a: MsgChangeAdmin | PlainMessage<MsgChangeAdmin> | undefined, b: MsgChangeAdmin | PlainMessage<MsgChangeAdmin> | undefined): boolean;
}
/**
 * @generated from message kujira.denom.MsgChangeAdminResponse
 */
export declare class MsgChangeAdminResponse extends Message<MsgChangeAdminResponse> {
    constructor(data?: PartialMessage<MsgChangeAdminResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.denom.MsgChangeAdminResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgChangeAdminResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgChangeAdminResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgChangeAdminResponse;
    static equals(a: MsgChangeAdminResponse | PlainMessage<MsgChangeAdminResponse> | undefined, b: MsgChangeAdminResponse | PlainMessage<MsgChangeAdminResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map