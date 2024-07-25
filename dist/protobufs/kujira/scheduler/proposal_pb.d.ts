import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../cosmos/base/v1beta1/coin_pb.js";
/**
 * @generated from message kujira.scheduler.CreateHookProposal
 */
export declare class CreateHookProposal extends Message<CreateHookProposal> {
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
     * The account that will execute the msg on the schedule
     *
     * @generated from field: string executor = 3;
     */
    executor: string;
    /**
     * The contract that the msg is called on
     *
     * @generated from field: string contract = 4;
     */
    contract: string;
    /**
     * @generated from field: bytes msg = 5;
     */
    msg: Uint8Array;
    /**
     * @generated from field: int64 frequency = 6;
     */
    frequency: bigint;
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin funds = 7;
     */
    funds: Coin[];
    constructor(data?: PartialMessage<CreateHookProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.scheduler.CreateHookProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateHookProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateHookProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateHookProposal;
    static equals(a: CreateHookProposal | PlainMessage<CreateHookProposal> | undefined, b: CreateHookProposal | PlainMessage<CreateHookProposal> | undefined): boolean;
}
/**
 * @generated from message kujira.scheduler.UpdateHookProposal
 */
export declare class UpdateHookProposal extends Message<UpdateHookProposal> {
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
     * @generated from field: uint64 id = 3;
     */
    id: bigint;
    /**
     * @generated from field: string executor = 4;
     */
    executor: string;
    /**
     * @generated from field: string contract = 5;
     */
    contract: string;
    /**
     * @generated from field: bytes msg = 6;
     */
    msg: Uint8Array;
    /**
     * @generated from field: int64 frequency = 7;
     */
    frequency: bigint;
    /**
     * @generated from field: repeated cosmos.base.v1beta1.Coin funds = 8;
     */
    funds: Coin[];
    constructor(data?: PartialMessage<UpdateHookProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.scheduler.UpdateHookProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateHookProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateHookProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateHookProposal;
    static equals(a: UpdateHookProposal | PlainMessage<UpdateHookProposal> | undefined, b: UpdateHookProposal | PlainMessage<UpdateHookProposal> | undefined): boolean;
}
/**
 * @generated from message kujira.scheduler.DeleteHookProposal
 */
export declare class DeleteHookProposal extends Message<DeleteHookProposal> {
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
     * @generated from field: uint64 id = 3;
     */
    id: bigint;
    constructor(data?: PartialMessage<DeleteHookProposal>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.scheduler.DeleteHookProposal";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteHookProposal;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteHookProposal;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteHookProposal;
    static equals(a: DeleteHookProposal | PlainMessage<DeleteHookProposal> | undefined, b: DeleteHookProposal | PlainMessage<DeleteHookProposal> | undefined): boolean;
}
//# sourceMappingURL=proposal_pb.d.ts.map