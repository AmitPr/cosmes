import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { IdentifiedPacketFees } from "./fee_pb.js";
import { PacketId } from "../../../core/channel/v1/channel_pb.js";
/**
 * GenesisState defines the ICS29 fee middleware genesis state
 *
 * @generated from message ibc.applications.fee.v1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * list of identified packet fees
     *
     * @generated from field: repeated ibc.applications.fee.v1.IdentifiedPacketFees identified_fees = 1;
     */
    identifiedFees: IdentifiedPacketFees[];
    /**
     * list of fee enabled channels
     *
     * @generated from field: repeated ibc.applications.fee.v1.FeeEnabledChannel fee_enabled_channels = 2;
     */
    feeEnabledChannels: FeeEnabledChannel[];
    /**
     * list of registered payees
     *
     * @generated from field: repeated ibc.applications.fee.v1.RegisteredPayee registered_payees = 3;
     */
    registeredPayees: RegisteredPayee[];
    /**
     * list of registered counterparty payees
     *
     * @generated from field: repeated ibc.applications.fee.v1.RegisteredCounterpartyPayee registered_counterparty_payees = 4;
     */
    registeredCounterpartyPayees: RegisteredCounterpartyPayee[];
    /**
     * list of forward relayer addresses
     *
     * @generated from field: repeated ibc.applications.fee.v1.ForwardRelayerAddress forward_relayers = 5;
     */
    forwardRelayers: ForwardRelayerAddress[];
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
/**
 * FeeEnabledChannel contains the PortID & ChannelID for a fee enabled channel
 *
 * @generated from message ibc.applications.fee.v1.FeeEnabledChannel
 */
export declare class FeeEnabledChannel extends Message<FeeEnabledChannel> {
    /**
     * unique port identifier
     *
     * @generated from field: string port_id = 1;
     */
    portId: string;
    /**
     * unique channel identifier
     *
     * @generated from field: string channel_id = 2;
     */
    channelId: string;
    constructor(data?: PartialMessage<FeeEnabledChannel>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.FeeEnabledChannel";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FeeEnabledChannel;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FeeEnabledChannel;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FeeEnabledChannel;
    static equals(a: FeeEnabledChannel | PlainMessage<FeeEnabledChannel> | undefined, b: FeeEnabledChannel | PlainMessage<FeeEnabledChannel> | undefined): boolean;
}
/**
 * RegisteredPayee contains the relayer address and payee address for a specific channel
 *
 * @generated from message ibc.applications.fee.v1.RegisteredPayee
 */
export declare class RegisteredPayee extends Message<RegisteredPayee> {
    /**
     * unique channel identifier
     *
     * @generated from field: string channel_id = 1;
     */
    channelId: string;
    /**
     * the relayer address
     *
     * @generated from field: string relayer = 2;
     */
    relayer: string;
    /**
     * the payee address
     *
     * @generated from field: string payee = 3;
     */
    payee: string;
    constructor(data?: PartialMessage<RegisteredPayee>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.RegisteredPayee";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisteredPayee;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisteredPayee;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisteredPayee;
    static equals(a: RegisteredPayee | PlainMessage<RegisteredPayee> | undefined, b: RegisteredPayee | PlainMessage<RegisteredPayee> | undefined): boolean;
}
/**
 * RegisteredCounterpartyPayee contains the relayer address and counterparty payee address for a specific channel (used
 * for recv fee distribution)
 *
 * @generated from message ibc.applications.fee.v1.RegisteredCounterpartyPayee
 */
export declare class RegisteredCounterpartyPayee extends Message<RegisteredCounterpartyPayee> {
    /**
     * unique channel identifier
     *
     * @generated from field: string channel_id = 1;
     */
    channelId: string;
    /**
     * the relayer address
     *
     * @generated from field: string relayer = 2;
     */
    relayer: string;
    /**
     * the counterparty payee address
     *
     * @generated from field: string counterparty_payee = 3;
     */
    counterpartyPayee: string;
    constructor(data?: PartialMessage<RegisteredCounterpartyPayee>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.RegisteredCounterpartyPayee";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisteredCounterpartyPayee;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisteredCounterpartyPayee;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisteredCounterpartyPayee;
    static equals(a: RegisteredCounterpartyPayee | PlainMessage<RegisteredCounterpartyPayee> | undefined, b: RegisteredCounterpartyPayee | PlainMessage<RegisteredCounterpartyPayee> | undefined): boolean;
}
/**
 * ForwardRelayerAddress contains the forward relayer address and PacketId used for async acknowledgements
 *
 * @generated from message ibc.applications.fee.v1.ForwardRelayerAddress
 */
export declare class ForwardRelayerAddress extends Message<ForwardRelayerAddress> {
    /**
     * the forward relayer address
     *
     * @generated from field: string address = 1;
     */
    address: string;
    /**
     * unique packet identifer comprised of the channel ID, port ID and sequence
     *
     * @generated from field: ibc.core.channel.v1.PacketId packet_id = 2;
     */
    packetId?: PacketId;
    constructor(data?: PartialMessage<ForwardRelayerAddress>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.applications.fee.v1.ForwardRelayerAddress";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ForwardRelayerAddress;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ForwardRelayerAddress;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ForwardRelayerAddress;
    static equals(a: ForwardRelayerAddress | PlainMessage<ForwardRelayerAddress> | undefined, b: ForwardRelayerAddress | PlainMessage<ForwardRelayerAddress> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map