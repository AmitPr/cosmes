import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../cosmos/base/v1beta1/coin_pb.js";
/**
 * MsgWithdrawAllDelegatorRewards represents delegation withdrawal to a delegator
 * from all staked validators.
 *
 * @generated from message batch.MsgWithdrawAllDelegatorRewards
 */
export declare class MsgWithdrawAllDelegatorRewards extends Message<MsgWithdrawAllDelegatorRewards> {
    /**
     * @generated from field: string delegator_address = 1;
     */
    delegatorAddress: string;
    constructor(data?: PartialMessage<MsgWithdrawAllDelegatorRewards>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "batch.MsgWithdrawAllDelegatorRewards";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawAllDelegatorRewards;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawAllDelegatorRewards;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawAllDelegatorRewards;
    static equals(a: MsgWithdrawAllDelegatorRewards | PlainMessage<MsgWithdrawAllDelegatorRewards> | undefined, b: MsgWithdrawAllDelegatorRewards | PlainMessage<MsgWithdrawAllDelegatorRewards> | undefined): boolean;
}
/**
 * MsgWithdrawAllDelegatorRewardsResponse defines the Msg/WithdrawAllDelegatorRewards response type.
 *
 * @generated from message batch.MsgWithdrawAllDelegatorRewardsResponse
 */
export declare class MsgWithdrawAllDelegatorRewardsResponse extends Message<MsgWithdrawAllDelegatorRewardsResponse> {
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin amount = 1;
     */
    amount: Coin[];
    constructor(data?: PartialMessage<MsgWithdrawAllDelegatorRewardsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "batch.MsgWithdrawAllDelegatorRewardsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgWithdrawAllDelegatorRewardsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgWithdrawAllDelegatorRewardsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgWithdrawAllDelegatorRewardsResponse;
    static equals(a: MsgWithdrawAllDelegatorRewardsResponse | PlainMessage<MsgWithdrawAllDelegatorRewardsResponse> | undefined, b: MsgWithdrawAllDelegatorRewardsResponse | PlainMessage<MsgWithdrawAllDelegatorRewardsResponse> | undefined): boolean;
}
/**
 * @generated from message batch.MsgBatchResetDelegation
 */
export declare class MsgBatchResetDelegation extends Message<MsgBatchResetDelegation> {
    /**
     * @generated from field: string delegator_address = 1;
     */
    delegatorAddress: string;
    /**
     * @generated from field: repeated string validators = 2;
     */
    validators: string[];
    /**
     * @generated from field: repeated string amounts = 3;
     */
    amounts: string[];
    constructor(data?: PartialMessage<MsgBatchResetDelegation>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "batch.MsgBatchResetDelegation";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgBatchResetDelegation;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgBatchResetDelegation;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgBatchResetDelegation;
    static equals(a: MsgBatchResetDelegation | PlainMessage<MsgBatchResetDelegation> | undefined, b: MsgBatchResetDelegation | PlainMessage<MsgBatchResetDelegation> | undefined): boolean;
}
/**
 * @generated from message batch.MsgBatchResetDelegationResponse
 */
export declare class MsgBatchResetDelegationResponse extends Message<MsgBatchResetDelegationResponse> {
    constructor(data?: PartialMessage<MsgBatchResetDelegationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "batch.MsgBatchResetDelegationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgBatchResetDelegationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgBatchResetDelegationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgBatchResetDelegationResponse;
    static equals(a: MsgBatchResetDelegationResponse | PlainMessage<MsgBatchResetDelegationResponse> | undefined, b: MsgBatchResetDelegationResponse | PlainMessage<MsgBatchResetDelegationResponse> | undefined): boolean;
}
//# sourceMappingURL=tx_pb.d.ts.map