import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * IncentivizedAcknowledgement is the acknowledgement format to be used by applications wrapped in the fee middleware
 *
 * @generated from message ibc.applications.fee.v1.IncentivizedAcknowledgement
 */
export declare class IncentivizedAcknowledgement extends Message<IncentivizedAcknowledgement> {
    /**
     * the underlying app acknowledgement bytes
     *
     * @generated from field: bytes app_acknowledgement = 1;
     */
    appAcknowledgement: Uint8Array;
    /**
     * the relayer address which submits the recv packet message
     *
     * @generated from field: string forward_relayer_address = 2;
     */
    forwardRelayerAddress: string;
    /**
     * success flag of the base application callback
     *
     * @generated from field: bool underlying_app_success = 3;
     */
    underlyingAppSuccess: boolean;
    constructor(data?: PartialMessage<IncentivizedAcknowledgement>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.IncentivizedAcknowledgement";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IncentivizedAcknowledgement;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IncentivizedAcknowledgement;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IncentivizedAcknowledgement;
    static equals(a: IncentivizedAcknowledgement | PlainMessage<IncentivizedAcknowledgement> | undefined, b: IncentivizedAcknowledgement | PlainMessage<IncentivizedAcknowledgement> | undefined): boolean;
}
//# sourceMappingURL=ack_pb.d.ts.map