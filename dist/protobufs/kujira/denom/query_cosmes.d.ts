import { QueryDenomAuthorityMetadataRequest, QueryDenomAuthorityMetadataResponse, QueryDenomsFromCreatorRequest, QueryDenomsFromCreatorResponse, QueryNoFeeAccountsRequest, QueryNoFeeAccountsResponse, QueryParamsRequest, QueryParamsResponse } from "./query_pb.js";
/**
 * Params returns the total set of minting parameters.
 *
 * @generated from rpc kujira.denom.Query.Params
 */
export declare const QueryParamsService: {
    readonly typeName: "kujira.denom.Query";
    readonly method: "Params";
    readonly Request: typeof QueryParamsRequest;
    readonly Response: typeof QueryParamsResponse;
};
/**
 * @generated from rpc kujira.denom.Query.DenomAuthorityMetadata
 */
export declare const QueryDenomAuthorityMetadataService: {
    readonly typeName: "kujira.denom.Query";
    readonly method: "DenomAuthorityMetadata";
    readonly Request: typeof QueryDenomAuthorityMetadataRequest;
    readonly Response: typeof QueryDenomAuthorityMetadataResponse;
};
/**
 * @generated from rpc kujira.denom.Query.DenomsFromCreator
 */
export declare const QueryDenomsFromCreatorService: {
    readonly typeName: "kujira.denom.Query";
    readonly method: "DenomsFromCreator";
    readonly Request: typeof QueryDenomsFromCreatorRequest;
    readonly Response: typeof QueryDenomsFromCreatorResponse;
};
/**
 * NoFeeAccounts returns accounts whitelisted to create denom without fee
 *
 * @generated from rpc kujira.denom.Query.NoFeeAccounts
 */
export declare const QueryNoFeeAccountsService: {
    readonly typeName: "kujira.denom.Query";
    readonly method: "NoFeeAccounts";
    readonly Request: typeof QueryNoFeeAccountsRequest;
    readonly Response: typeof QueryNoFeeAccountsResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map