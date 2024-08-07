import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Height } from "../../../core/client/v1/client_pb.js";
import { ProofSpec } from "../../../../cosmos/ics23/v1/proofs_pb.js";
import { MerkleRoot } from "../../../core/commitment/v1/commitment_pb.js";
import { SignedHeader } from "../../../../tendermint/types/types_pb.js";
import { ValidatorSet } from "../../../../tendermint/types/validator_pb.js";
/**
 * ClientState from Tendermint tracks the current validator set, latest height,
 * and a possible frozen height.
 *
 * @generated from message ibc.lightclients.tendermint.v1.ClientState
 */
export declare class ClientState extends Message<ClientState> {
    /**
     * @generated from field: string chain_id = 1;
     */
    chainId: string;
    /**
     * @generated from field: ibc.lightclients.tendermint.v1.Fraction trust_level = 2;
     */
    trustLevel?: Fraction;
    /**
     * duration of the period since the LastestTimestamp during which the
     * submitted headers are valid for upgrade
     *
     * @generated from field: google.protobuf.Duration trusting_period = 3;
     */
    trustingPeriod?: Duration;
    /**
     * duration of the staking unbonding period
     *
     * @generated from field: google.protobuf.Duration unbonding_period = 4;
     */
    unbondingPeriod?: Duration;
    /**
     * defines how much new (untrusted) header's Time can drift into the future.
     *
     * @generated from field: google.protobuf.Duration max_clock_drift = 5;
     */
    maxClockDrift?: Duration;
    /**
     * Block height when the client was frozen due to a misbehaviour
     *
     * @generated from field: ibc.core.client.v1.Height frozen_height = 6;
     */
    frozenHeight?: Height;
    /**
     * Latest height the client was updated to
     *
     * @generated from field: ibc.core.client.v1.Height latest_height = 7;
     */
    latestHeight?: Height;
    /**
     * Proof specifications used in verifying counterparty state
     *
     * @generated from field: repeated cosmos.ics23.v1.ProofSpec proof_specs = 8;
     */
    proofSpecs: ProofSpec[];
    /**
     * Path at which next upgraded client will be committed.
     * Each element corresponds to the key for a single CommitmentProof in the
     * chained proof. NOTE: ClientState must stored under
     * `{upgradePath}/{upgradeHeight}/clientState` ConsensusState must be stored
     * under `{upgradepath}/{upgradeHeight}/consensusState` For SDK chains using
     * the default upgrade module, upgrade_path should be []string{"upgrade",
     * "upgradedIBCState"}`
     *
     * @generated from field: repeated string upgrade_path = 9;
     */
    upgradePath: string[];
    /**
     * allow_update_after_expiry is deprecated
     *
     * @generated from field: bool allow_update_after_expiry = 10 [deprecated = true];
     * @deprecated
     */
    allowUpdateAfterExpiry: boolean;
    /**
     * allow_update_after_misbehaviour is deprecated
     *
     * @generated from field: bool allow_update_after_misbehaviour = 11 [deprecated = true];
     * @deprecated
     */
    allowUpdateAfterMisbehaviour: boolean;
    constructor(data?: PartialMessage<ClientState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.tendermint.v1.ClientState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientState;
    static equals(a: ClientState | PlainMessage<ClientState> | undefined, b: ClientState | PlainMessage<ClientState> | undefined): boolean;
}
/**
 * ConsensusState defines the consensus state from Tendermint.
 *
 * @generated from message ibc.lightclients.tendermint.v1.ConsensusState
 */
export declare class ConsensusState extends Message<ConsensusState> {
    /**
     * timestamp that corresponds to the block height in which the ConsensusState
     * was stored.
     *
     * @generated from field: google.protobuf.Timestamp timestamp = 1;
     */
    timestamp?: Timestamp;
    /**
     * commitment root (i.e app hash)
     *
     * @generated from field: ibc.core.commitment.v1.MerkleRoot root = 2;
     */
    root?: MerkleRoot;
    /**
     * @generated from field: bytes next_validators_hash = 3;
     */
    nextValidatorsHash: Uint8Array;
    constructor(data?: PartialMessage<ConsensusState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.tendermint.v1.ConsensusState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConsensusState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConsensusState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConsensusState;
    static equals(a: ConsensusState | PlainMessage<ConsensusState> | undefined, b: ConsensusState | PlainMessage<ConsensusState> | undefined): boolean;
}
/**
 * Misbehaviour is a wrapper over two conflicting Headers
 * that implements Misbehaviour interface expected by ICS-02
 *
 * @generated from message ibc.lightclients.tendermint.v1.Misbehaviour
 */
export declare class Misbehaviour extends Message<Misbehaviour> {
    /**
     * ClientID is deprecated
     *
     * @generated from field: string client_id = 1 [deprecated = true];
     * @deprecated
     */
    clientId: string;
    /**
     * @generated from field: ibc.lightclients.tendermint.v1.Header header_1 = 2;
     */
    header1?: Header;
    /**
     * @generated from field: ibc.lightclients.tendermint.v1.Header header_2 = 3;
     */
    header2?: Header;
    constructor(data?: PartialMessage<Misbehaviour>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.tendermint.v1.Misbehaviour";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Misbehaviour;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Misbehaviour;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Misbehaviour;
    static equals(a: Misbehaviour | PlainMessage<Misbehaviour> | undefined, b: Misbehaviour | PlainMessage<Misbehaviour> | undefined): boolean;
}
/**
 * Header defines the Tendermint client consensus Header.
 * It encapsulates all the information necessary to update from a trusted
 * Tendermint ConsensusState. The inclusion of TrustedHeight and
 * TrustedValidators allows this update to process correctly, so long as the
 * ConsensusState for the TrustedHeight exists, this removes race conditions
 * among relayers The SignedHeader and ValidatorSet are the new untrusted update
 * fields for the client. The TrustedHeight is the height of a stored
 * ConsensusState on the client that will be used to verify the new untrusted
 * header. The Trusted ConsensusState must be within the unbonding period of
 * current time in order to correctly verify, and the TrustedValidators must
 * hash to TrustedConsensusState.NextValidatorsHash since that is the last
 * trusted validator set at the TrustedHeight.
 *
 * @generated from message ibc.lightclients.tendermint.v1.Header
 */
export declare class Header extends Message<Header> {
    /**
     * @generated from field: tendermint.types.SignedHeader signed_header = 1;
     */
    signedHeader?: SignedHeader;
    /**
     * @generated from field: tendermint.types.ValidatorSet validator_set = 2;
     */
    validatorSet?: ValidatorSet;
    /**
     * @generated from field: ibc.core.client.v1.Height trusted_height = 3;
     */
    trustedHeight?: Height;
    /**
     * @generated from field: tendermint.types.ValidatorSet trusted_validators = 4;
     */
    trustedValidators?: ValidatorSet;
    constructor(data?: PartialMessage<Header>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.tendermint.v1.Header";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Header;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Header;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Header;
    static equals(a: Header | PlainMessage<Header> | undefined, b: Header | PlainMessage<Header> | undefined): boolean;
}
/**
 * Fraction defines the protobuf message type for tmmath.Fraction that only
 * supports positive values.
 *
 * @generated from message ibc.lightclients.tendermint.v1.Fraction
 */
export declare class Fraction extends Message<Fraction> {
    /**
     * @generated from field: uint64 numerator = 1;
     */
    numerator: bigint;
    /**
     * @generated from field: uint64 denominator = 2;
     */
    denominator: bigint;
    constructor(data?: PartialMessage<Fraction>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.tendermint.v1.Fraction";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Fraction;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Fraction;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Fraction;
    static equals(a: Fraction | PlainMessage<Fraction> | undefined, b: Fraction | PlainMessage<Fraction> | undefined): boolean;
}
//# sourceMappingURL=tendermint_pb.d.ts.map