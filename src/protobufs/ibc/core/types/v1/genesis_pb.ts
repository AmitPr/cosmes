// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file ibc/core/types/v1/genesis.proto (package ibc.core.types.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { GenesisState as GenesisState$1 } from "../../client/v1/genesis_pb.js";
import { GenesisState as GenesisState$2 } from "../../connection/v1/genesis_pb.js";
import { GenesisState as GenesisState$3 } from "../../channel/v1/genesis_pb.js";

/**
 * GenesisState defines the ibc module's genesis state.
 *
 * @generated from message ibc.core.types.v1.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * ICS002 - Clients genesis state
   *
   * @generated from field: ibc.core.client.v1.GenesisState client_genesis = 1;
   */
  clientGenesis?: GenesisState$1;

  /**
   * ICS003 - Connections genesis state
   *
   * @generated from field: ibc.core.connection.v1.GenesisState connection_genesis = 2;
   */
  connectionGenesis?: GenesisState$2;

  /**
   * ICS004 - Channel genesis state
   *
   * @generated from field: ibc.core.channel.v1.GenesisState channel_genesis = 3;
   */
  channelGenesis?: GenesisState$3;

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "ibc.core.types.v1.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "client_genesis", kind: "message", T: GenesisState$1 },
    { no: 2, name: "connection_genesis", kind: "message", T: GenesisState$2 },
    { no: 3, name: "channel_genesis", kind: "message", T: GenesisState$3 },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState {
    return new GenesisState().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJsonString(jsonString, options);
  }

  static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean {
    return proto3.util.equals(GenesisState, a, b);
  }
}

