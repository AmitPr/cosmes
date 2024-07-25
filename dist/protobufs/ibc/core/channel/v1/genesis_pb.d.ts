import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { IdentifiedChannel, PacketState } from "./channel_pb.js";
/**
 * GenesisState defines the ibc channel submodule's genesis state.
 *
 * @generated from message ibc.core.channel.v1.GenesisState
 */
export declare class GenesisState extends Message<GenesisState> {
    /**
     * @generated from field: repeated ibc.core.channel.v1.IdentifiedChannel channels = 1;
     */
    channels: IdentifiedChannel[];
    /**
     * @generated from field: repeated ibc.core.channel.v1.PacketState acknowledgements = 2;
     */
    acknowledgements: PacketState[];
    /**
     * @generated from field: repeated ibc.core.channel.v1.PacketState commitments = 3;
     */
    commitments: PacketState[];
    /**
     * @generated from field: repeated ibc.core.channel.v1.PacketState receipts = 4;
     */
    receipts: PacketState[];
    /**
     * @generated from field: repeated ibc.core.channel.v1.PacketSequence send_sequences = 5;
     */
    sendSequences: PacketSequence[];
    /**
     * @generated from field: repeated ibc.core.channel.v1.PacketSequence recv_sequences = 6;
     */
    recvSequences: PacketSequence[];
    /**
     * @generated from field: repeated ibc.core.channel.v1.PacketSequence ack_sequences = 7;
     */
    ackSequences: PacketSequence[];
    /**
     * the sequence for the next generated channel identifier
     *
     * @generated from field: uint64 next_channel_sequence = 8;
     */
    nextChannelSequence: bigint;
    constructor(data?: PartialMessage<GenesisState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.GenesisState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState;
    static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean;
}
/**
 * PacketSequence defines the genesis type necessary to retrieve and store
 * next send and receive sequences.
 *
 * @generated from message ibc.core.channel.v1.PacketSequence
 */
export declare class PacketSequence extends Message<PacketSequence> {
    /**
     * @generated from field: string port_id = 1;
     */
    portId: string;
    /**
     * @generated from field: string channel_id = 2;
     */
    channelId: string;
    /**
     * @generated from field: uint64 sequence = 3;
     */
    sequence: bigint;
    constructor(data?: PartialMessage<PacketSequence>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.core.channel.v1.PacketSequence";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PacketSequence;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PacketSequence;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PacketSequence;
    static equals(a: PacketSequence | PlainMessage<PacketSequence> | undefined, b: PacketSequence | PlainMessage<PacketSequence> | undefined): boolean;
}
//# sourceMappingURL=genesis_pb.d.ts.map