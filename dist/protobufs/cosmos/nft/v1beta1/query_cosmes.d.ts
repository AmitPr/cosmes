import { QueryBalanceRequest, QueryBalanceResponse, QueryClassesRequest, QueryClassesResponse, QueryClassRequest, QueryClassResponse, QueryNFTRequest, QueryNFTResponse, QueryNFTsRequest, QueryNFTsResponse, QueryOwnerRequest, QueryOwnerResponse, QuerySupplyRequest, QuerySupplyResponse } from "./query_pb.js";
/**
 * Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721
 *
 * @generated from rpc cosmos.nft.v1beta1.Query.Balance
 */
export declare const QueryBalanceService: {
    readonly typeName: "cosmos.nft.v1beta1.Query";
    readonly method: "Balance";
    readonly Request: typeof QueryBalanceRequest;
    readonly Response: typeof QueryBalanceResponse;
};
/**
 * Owner queries the owner of the NFT based on its class and id, same as ownerOf in ERC721
 *
 * @generated from rpc cosmos.nft.v1beta1.Query.Owner
 */
export declare const QueryOwnerService: {
    readonly typeName: "cosmos.nft.v1beta1.Query";
    readonly method: "Owner";
    readonly Request: typeof QueryOwnerRequest;
    readonly Response: typeof QueryOwnerResponse;
};
/**
 * Supply queries the number of NFTs from the given class, same as totalSupply of ERC721.
 *
 * @generated from rpc cosmos.nft.v1beta1.Query.Supply
 */
export declare const QuerySupplyService: {
    readonly typeName: "cosmos.nft.v1beta1.Query";
    readonly method: "Supply";
    readonly Request: typeof QuerySupplyRequest;
    readonly Response: typeof QuerySupplyResponse;
};
/**
 * NFTs queries all NFTs of a given class or owner,choose at least one of the two, similar to tokenByIndex in
 * ERC721Enumerable
 *
 * @generated from rpc cosmos.nft.v1beta1.Query.NFTs
 */
export declare const QueryNFTsService: {
    readonly typeName: "cosmos.nft.v1beta1.Query";
    readonly method: "NFTs";
    readonly Request: typeof QueryNFTsRequest;
    readonly Response: typeof QueryNFTsResponse;
};
/**
 * NFT queries an NFT based on its class and id.
 *
 * @generated from rpc cosmos.nft.v1beta1.Query.NFT
 */
export declare const QueryNFTService: {
    readonly typeName: "cosmos.nft.v1beta1.Query";
    readonly method: "NFT";
    readonly Request: typeof QueryNFTRequest;
    readonly Response: typeof QueryNFTResponse;
};
/**
 * Class queries an NFT class based on its id
 *
 * @generated from rpc cosmos.nft.v1beta1.Query.Class
 */
export declare const QueryClassService: {
    readonly typeName: "cosmos.nft.v1beta1.Query";
    readonly method: "Class";
    readonly Request: typeof QueryClassRequest;
    readonly Response: typeof QueryClassResponse;
};
/**
 * Classes queries all NFT classes
 *
 * @generated from rpc cosmos.nft.v1beta1.Query.Classes
 */
export declare const QueryClassesService: {
    readonly typeName: "cosmos.nft.v1beta1.Query";
    readonly method: "Classes";
    readonly Request: typeof QueryClassesRequest;
    readonly Response: typeof QueryClassesResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map