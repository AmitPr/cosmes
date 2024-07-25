import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { BaseAccount } from "../../../../cosmos/auth/v1beta1/auth_pb.js";
/**
 * An InterchainAccount is defined as a BaseAccount & the address of the account owner on the controller chain
 *
 * @generated from message ibc.applications.interchain_accounts.v1.InterchainAccount
 */
export declare class InterchainAccount extends Message<InterchainAccount> {
    /**
     * @generated from field: cosmos.auth.v1beta1.BaseAccount base_account = 1;
     */
    baseAccount?: BaseAccount;
    /**
     * @generated from field: string account_owner = 2;
     */
    accountOwner: string;
    constructor(data?: PartialMessage<InterchainAccount>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.interchain_accounts.v1.InterchainAccount";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InterchainAccount;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InterchainAccount;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InterchainAccount;
    static equals(a: InterchainAccount | PlainMessage<InterchainAccount> | undefined, b: InterchainAccount | PlainMessage<InterchainAccount> | undefined): boolean;
}
//# sourceMappingURL=account_pb.d.ts.map