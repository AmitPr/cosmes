import { QueryAllContractStateRequest, QueryAllContractStateResponse, QueryCodeRequest, QueryCodeResponse, QueryCodesRequest, QueryCodesResponse, QueryContractHistoryRequest, QueryContractHistoryResponse, QueryContractInfoRequest, QueryContractInfoResponse, QueryContractsByCodeRequest, QueryContractsByCodeResponse, QueryContractsByCreatorRequest, QueryContractsByCreatorResponse, QueryParamsRequest, QueryParamsResponse, QueryPinnedCodesRequest, QueryPinnedCodesResponse, QueryRawContractStateRequest, QueryRawContractStateResponse, QuerySmartContractStateRequest, QuerySmartContractStateResponse } from "./query_pb.js";
/**
 * ContractInfo gets the contract meta data
 *
 * @generated from rpc cosmwasm.wasm.v1.Query.ContractInfo
 */
export declare const QueryContractInfoService: {
    readonly typeName: "cosmwasm.wasm.v1.Query";
    readonly method: "ContractInfo";
    readonly Request: typeof QueryContractInfoRequest;
    readonly Response: typeof QueryContractInfoResponse;
};
/**
 * ContractHistory gets the contract code history
 *
 * @generated from rpc cosmwasm.wasm.v1.Query.ContractHistory
 */
export declare const QueryContractHistoryService: {
    readonly typeName: "cosmwasm.wasm.v1.Query";
    readonly method: "ContractHistory";
    readonly Request: typeof QueryContractHistoryRequest;
    readonly Response: typeof QueryContractHistoryResponse;
};
/**
 * ContractsByCode lists all smart contracts for a code id
 *
 * @generated from rpc cosmwasm.wasm.v1.Query.ContractsByCode
 */
export declare const QueryContractsByCodeService: {
    readonly typeName: "cosmwasm.wasm.v1.Query";
    readonly method: "ContractsByCode";
    readonly Request: typeof QueryContractsByCodeRequest;
    readonly Response: typeof QueryContractsByCodeResponse;
};
/**
 * AllContractState gets all raw store data for a single contract
 *
 * @generated from rpc cosmwasm.wasm.v1.Query.AllContractState
 */
export declare const QueryAllContractStateService: {
    readonly typeName: "cosmwasm.wasm.v1.Query";
    readonly method: "AllContractState";
    readonly Request: typeof QueryAllContractStateRequest;
    readonly Response: typeof QueryAllContractStateResponse;
};
/**
 * RawContractState gets single key from the raw store data of a contract
 *
 * @generated from rpc cosmwasm.wasm.v1.Query.RawContractState
 */
export declare const QueryRawContractStateService: {
    readonly typeName: "cosmwasm.wasm.v1.Query";
    readonly method: "RawContractState";
    readonly Request: typeof QueryRawContractStateRequest;
    readonly Response: typeof QueryRawContractStateResponse;
};
/**
 * SmartContractState get smart query result from the contract
 *
 * @generated from rpc cosmwasm.wasm.v1.Query.SmartContractState
 */
export declare const QuerySmartContractStateService: {
    readonly typeName: "cosmwasm.wasm.v1.Query";
    readonly method: "SmartContractState";
    readonly Request: typeof QuerySmartContractStateRequest;
    readonly Response: typeof QuerySmartContractStateResponse;
};
/**
 * Code gets the binary code and metadata for a singe wasm code
 *
 * @generated from rpc cosmwasm.wasm.v1.Query.Code
 */
export declare const QueryCodeService: {
    readonly typeName: "cosmwasm.wasm.v1.Query";
    readonly method: "Code";
    readonly Request: typeof QueryCodeRequest;
    readonly Response: typeof QueryCodeResponse;
};
/**
 * Codes gets the metadata for all stored wasm codes
 *
 * @generated from rpc cosmwasm.wasm.v1.Query.Codes
 */
export declare const QueryCodesService: {
    readonly typeName: "cosmwasm.wasm.v1.Query";
    readonly method: "Codes";
    readonly Request: typeof QueryCodesRequest;
    readonly Response: typeof QueryCodesResponse;
};
/**
 * PinnedCodes gets the pinned code ids
 *
 * @generated from rpc cosmwasm.wasm.v1.Query.PinnedCodes
 */
export declare const QueryPinnedCodesService: {
    readonly typeName: "cosmwasm.wasm.v1.Query";
    readonly method: "PinnedCodes";
    readonly Request: typeof QueryPinnedCodesRequest;
    readonly Response: typeof QueryPinnedCodesResponse;
};
/**
 * Params gets the module params
 *
 * @generated from rpc cosmwasm.wasm.v1.Query.Params
 */
export declare const QueryParamsService: {
    readonly typeName: "cosmwasm.wasm.v1.Query";
    readonly method: "Params";
    readonly Request: typeof QueryParamsRequest;
    readonly Response: typeof QueryParamsResponse;
};
/**
 * ContractsByCreator gets the contracts by creator
 *
 * @generated from rpc cosmwasm.wasm.v1.Query.ContractsByCreator
 */
export declare const QueryContractsByCreatorService: {
    readonly typeName: "cosmwasm.wasm.v1.Query";
    readonly method: "ContractsByCreator";
    readonly Request: typeof QueryContractsByCreatorRequest;
    readonly Response: typeof QueryContractsByCreatorResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map