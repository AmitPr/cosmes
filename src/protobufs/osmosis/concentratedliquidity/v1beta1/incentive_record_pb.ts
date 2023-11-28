// @generated by protoc-gen-es v1.2.0 with parameter "target=ts"
// @generated from file osmosis/concentratedliquidity/v1beta1/incentive_record.proto (package osmosis.concentratedliquidity.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Duration, Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin_pb.js";

/**
 * IncentiveRecord is the high-level struct we use to deal with an independent
 * incentive being distributed on a pool. Note that PoolId, Denom, and MinUptime
 * are included in the key so we avoid storing them in state, hence the
 * distinction between IncentiveRecord and IncentiveRecordBody.
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.IncentiveRecord
 */
export class IncentiveRecord extends Message<IncentiveRecord> {
  /**
   * incentive_id is the id uniquely identifying this incentive record.
   *
   * @generated from field: uint64 incentive_id = 1;
   */
  incentiveId = protoInt64.zero;

  /**
   * @generated from field: uint64 pool_id = 2;
   */
  poolId = protoInt64.zero;

  /**
   * incentive record body holds necessary
   *
   * @generated from field: osmosis.concentratedliquidity.v1beta1.IncentiveRecordBody incentive_record_body = 4;
   */
  incentiveRecordBody?: IncentiveRecordBody;

  /**
   * min_uptime is the minimum uptime required for liquidity to qualify for this
   * incentive. It should be always be one of the supported uptimes in
   * types.SupportedUptimes
   *
   * @generated from field: google.protobuf.Duration min_uptime = 5;
   */
  minUptime?: Duration;

  constructor(data?: PartialMessage<IncentiveRecord>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.concentratedliquidity.v1beta1.IncentiveRecord";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "incentive_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "pool_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "incentive_record_body", kind: "message", T: IncentiveRecordBody },
    { no: 5, name: "min_uptime", kind: "message", T: Duration },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IncentiveRecord {
    return new IncentiveRecord().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IncentiveRecord {
    return new IncentiveRecord().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IncentiveRecord {
    return new IncentiveRecord().fromJsonString(jsonString, options);
  }

  static equals(a: IncentiveRecord | PlainMessage<IncentiveRecord> | undefined, b: IncentiveRecord | PlainMessage<IncentiveRecord> | undefined): boolean {
    return proto3.util.equals(IncentiveRecord, a, b);
  }
}

/**
 * IncentiveRecordBody represents the body stored in state for each individual
 * record.
 *
 * @generated from message osmosis.concentratedliquidity.v1beta1.IncentiveRecordBody
 */
export class IncentiveRecordBody extends Message<IncentiveRecordBody> {
  /**
   * remaining_coin is the total amount of incentives to be distributed
   *
   * @generated from field: cosmos.base.v1beta1.DecCoin remaining_coin = 1;
   */
  remainingCoin?: DecCoin;

  /**
   * emission_rate is the incentive emission rate per second
   *
   * @generated from field: string emission_rate = 2;
   */
  emissionRate = "";

  /**
   * start_time is the time when the incentive starts distributing
   *
   * @generated from field: google.protobuf.Timestamp start_time = 3;
   */
  startTime?: Timestamp;

  constructor(data?: PartialMessage<IncentiveRecordBody>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "osmosis.concentratedliquidity.v1beta1.IncentiveRecordBody";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "remaining_coin", kind: "message", T: DecCoin },
    { no: 2, name: "emission_rate", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "start_time", kind: "message", T: Timestamp },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IncentiveRecordBody {
    return new IncentiveRecordBody().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IncentiveRecordBody {
    return new IncentiveRecordBody().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IncentiveRecordBody {
    return new IncentiveRecordBody().fromJsonString(jsonString, options);
  }

  static equals(a: IncentiveRecordBody | PlainMessage<IncentiveRecordBody> | undefined, b: IncentiveRecordBody | PlainMessage<IncentiveRecordBody> | undefined): boolean {
    return proto3.util.equals(IncentiveRecordBody, a, b);
  }
}
