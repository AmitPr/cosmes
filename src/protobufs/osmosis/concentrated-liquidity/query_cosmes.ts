// @generated by protoc-gen-cosmes v0.0.1 with parameter "target=ts"
// @generated from file osmosis/concentrated-liquidity/query.proto (package osmosis.concentratedliquidity.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { CFMMPoolIdLinkFromConcentratedPoolIdRequest, CFMMPoolIdLinkFromConcentratedPoolIdResponse, ClaimableIncentivesRequest, ClaimableIncentivesResponse, ClaimableSpreadRewardsRequest, ClaimableSpreadRewardsResponse, IncentiveRecordsRequest, IncentiveRecordsResponse, LiquidityNetInDirectionRequest, LiquidityNetInDirectionResponse, LiquidityPerTickRangeRequest, LiquidityPerTickRangeResponse, ParamsRequest, ParamsResponse, PoolAccumulatorRewardsRequest, PoolAccumulatorRewardsResponse, PoolsRequest, PoolsResponse, PositionByIdRequest, PositionByIdResponse, TickAccumulatorTrackersRequest, TickAccumulatorTrackersResponse, UserPositionsRequest, UserPositionsResponse } from "./query_pb.js";

const TYPE_NAME = "osmosis.concentratedliquidity.v1beta1.Query";

/**
 * Pools returns all concentrated liquidity pools
 *
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Query.Pools
 */
export const QueryPoolsService = {
  typeName: TYPE_NAME,
  method: "Pools",
  Request: PoolsRequest,
  Response: PoolsResponse,
} as const;

/**
 * Params returns concentrated liquidity module params.
 *
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Query.Params
 */
export const QueryParamsService = {
  typeName: TYPE_NAME,
  method: "Params",
  Request: ParamsRequest,
  Response: ParamsResponse,
} as const;

/**
 * UserPositions returns all concentrated postitions of some address.
 *
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Query.UserPositions
 */
export const QueryUserPositionsService = {
  typeName: TYPE_NAME,
  method: "UserPositions",
  Request: UserPositionsRequest,
  Response: UserPositionsResponse,
} as const;

/**
 * LiquidityPerTickRange returns the amount of liquidity per every tick range
 * existing within the given pool
 *
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Query.LiquidityPerTickRange
 */
export const QueryLiquidityPerTickRangeService = {
  typeName: TYPE_NAME,
  method: "LiquidityPerTickRange",
  Request: LiquidityPerTickRangeRequest,
  Response: LiquidityPerTickRangeResponse,
} as const;

/**
 * LiquidityNetInDirection returns liquidity net in the direction given.
 * Uses the bound if specified, if not uses either min tick / max tick
 * depending on the direction.
 *
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Query.LiquidityNetInDirection
 */
export const QueryLiquidityNetInDirectionService = {
  typeName: TYPE_NAME,
  method: "LiquidityNetInDirection",
  Request: LiquidityNetInDirectionRequest,
  Response: LiquidityNetInDirectionResponse,
} as const;

/**
 * ClaimableSpreadRewards returns the amount of spread rewards that can be
 * claimed by a position with the given id.
 *
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Query.ClaimableSpreadRewards
 */
export const QueryClaimableSpreadRewardsService = {
  typeName: TYPE_NAME,
  method: "ClaimableSpreadRewards",
  Request: ClaimableSpreadRewardsRequest,
  Response: ClaimableSpreadRewardsResponse,
} as const;

/**
 * ClaimableIncentives returns the amount of incentives that can be claimed
 * and how many would be forfeited by a position with the given id.
 *
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Query.ClaimableIncentives
 */
export const QueryClaimableIncentivesService = {
  typeName: TYPE_NAME,
  method: "ClaimableIncentives",
  Request: ClaimableIncentivesRequest,
  Response: ClaimableIncentivesResponse,
} as const;

/**
 * PositionById returns a position with the given id.
 *
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Query.PositionById
 */
export const QueryPositionByIdService = {
  typeName: TYPE_NAME,
  method: "PositionById",
  Request: PositionByIdRequest,
  Response: PositionByIdResponse,
} as const;

/**
 * PoolAccumulatorRewards returns the pool-global accumulator rewards.
 * Contains spread factor rewards and uptime rewards.
 *
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Query.PoolAccumulatorRewards
 */
export const QueryPoolAccumulatorRewardsService = {
  typeName: TYPE_NAME,
  method: "PoolAccumulatorRewards",
  Request: PoolAccumulatorRewardsRequest,
  Response: PoolAccumulatorRewardsResponse,
} as const;

/**
 * IncentiveRecords returns the incentive records for a given poolId
 *
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Query.IncentiveRecords
 */
export const QueryIncentiveRecordsService = {
  typeName: TYPE_NAME,
  method: "IncentiveRecords",
  Request: IncentiveRecordsRequest,
  Response: IncentiveRecordsResponse,
} as const;

/**
 * TickAccumulatorTrackers returns the tick accumulator trackers.
 * Contains spread factor and uptime accumulator trackers.
 *
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Query.TickAccumulatorTrackers
 */
export const QueryTickAccumulatorTrackersService = {
  typeName: TYPE_NAME,
  method: "TickAccumulatorTrackers",
  Request: TickAccumulatorTrackersRequest,
  Response: TickAccumulatorTrackersResponse,
} as const;

/**
 * CFMMPoolIdLinkFromConcentratedPoolId returns the pool id of the CFMM
 * pool that is linked with the given concentrated pool.
 *
 * @generated from rpc osmosis.concentratedliquidity.v1beta1.Query.CFMMPoolIdLinkFromConcentratedPoolId
 */
export const QueryCFMMPoolIdLinkFromConcentratedPoolIdService = {
  typeName: TYPE_NAME,
  method: "CFMMPoolIdLinkFromConcentratedPoolId",
  Request: CFMMPoolIdLinkFromConcentratedPoolIdRequest,
  Response: CFMMPoolIdLinkFromConcentratedPoolIdResponse,
} as const;
