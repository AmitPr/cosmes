import { MsgAddCodeUploadParamsAddresses, MsgAddCodeUploadParamsAddressesResponse, MsgClearAdmin, MsgClearAdminResponse, MsgExecuteContract, MsgExecuteContractResponse, MsgInstantiateContract, MsgInstantiateContract2, MsgInstantiateContract2Response, MsgInstantiateContractResponse, MsgMigrateContract, MsgMigrateContractResponse, MsgPinCodes, MsgPinCodesResponse, MsgRemoveCodeUploadParamsAddresses, MsgRemoveCodeUploadParamsAddressesResponse, MsgStoreAndInstantiateContract, MsgStoreAndInstantiateContractResponse, MsgStoreAndMigrateContract, MsgStoreAndMigrateContractResponse, MsgStoreCode, MsgStoreCodeResponse, MsgSudoContract, MsgSudoContractResponse, MsgUnpinCodes, MsgUnpinCodesResponse, MsgUpdateAdmin, MsgUpdateAdminResponse, MsgUpdateContractLabel, MsgUpdateContractLabelResponse, MsgUpdateInstantiateConfig, MsgUpdateInstantiateConfigResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx_pb.js";
/**
 * StoreCode to submit Wasm code to the system
 *
 * @generated from rpc cosmwasm.wasm.v1.Msg.StoreCode
 */
export declare const MsgStoreCodeService: {
    readonly typeName: "cosmwasm.wasm.v1.Msg";
    readonly method: "StoreCode";
    readonly Request: typeof MsgStoreCode;
    readonly Response: typeof MsgStoreCodeResponse;
};
/**
 *  InstantiateContract creates a new smart contract instance for the given
 *  code id.
 *
 * @generated from rpc cosmwasm.wasm.v1.Msg.InstantiateContract
 */
export declare const MsgInstantiateContractService: {
    readonly typeName: "cosmwasm.wasm.v1.Msg";
    readonly method: "InstantiateContract";
    readonly Request: typeof MsgInstantiateContract;
    readonly Response: typeof MsgInstantiateContractResponse;
};
/**
 *  InstantiateContract2 creates a new smart contract instance for the given
 *  code id with a predictable address
 *
 * @generated from rpc cosmwasm.wasm.v1.Msg.InstantiateContract2
 */
export declare const MsgInstantiateContract2Service: {
    readonly typeName: "cosmwasm.wasm.v1.Msg";
    readonly method: "InstantiateContract2";
    readonly Request: typeof MsgInstantiateContract2;
    readonly Response: typeof MsgInstantiateContract2Response;
};
/**
 * Execute submits the given message data to a smart contract
 *
 * @generated from rpc cosmwasm.wasm.v1.Msg.ExecuteContract
 */
export declare const MsgExecuteContractService: {
    readonly typeName: "cosmwasm.wasm.v1.Msg";
    readonly method: "ExecuteContract";
    readonly Request: typeof MsgExecuteContract;
    readonly Response: typeof MsgExecuteContractResponse;
};
/**
 * Migrate runs a code upgrade/ downgrade for a smart contract
 *
 * @generated from rpc cosmwasm.wasm.v1.Msg.MigrateContract
 */
export declare const MsgMigrateContractService: {
    readonly typeName: "cosmwasm.wasm.v1.Msg";
    readonly method: "MigrateContract";
    readonly Request: typeof MsgMigrateContract;
    readonly Response: typeof MsgMigrateContractResponse;
};
/**
 * UpdateAdmin sets a new admin for a smart contract
 *
 * @generated from rpc cosmwasm.wasm.v1.Msg.UpdateAdmin
 */
export declare const MsgUpdateAdminService: {
    readonly typeName: "cosmwasm.wasm.v1.Msg";
    readonly method: "UpdateAdmin";
    readonly Request: typeof MsgUpdateAdmin;
    readonly Response: typeof MsgUpdateAdminResponse;
};
/**
 * ClearAdmin removes any admin stored for a smart contract
 *
 * @generated from rpc cosmwasm.wasm.v1.Msg.ClearAdmin
 */
export declare const MsgClearAdminService: {
    readonly typeName: "cosmwasm.wasm.v1.Msg";
    readonly method: "ClearAdmin";
    readonly Request: typeof MsgClearAdmin;
    readonly Response: typeof MsgClearAdminResponse;
};
/**
 * UpdateInstantiateConfig updates instantiate config for a smart contract
 *
 * @generated from rpc cosmwasm.wasm.v1.Msg.UpdateInstantiateConfig
 */
export declare const MsgUpdateInstantiateConfigService: {
    readonly typeName: "cosmwasm.wasm.v1.Msg";
    readonly method: "UpdateInstantiateConfig";
    readonly Request: typeof MsgUpdateInstantiateConfig;
    readonly Response: typeof MsgUpdateInstantiateConfigResponse;
};
/**
 * UpdateParams defines a governance operation for updating the x/wasm
 * module parameters. The authority is defined in the keeper.
 *
 * Since: 0.40
 *
 * @generated from rpc cosmwasm.wasm.v1.Msg.UpdateParams
 */
export declare const MsgUpdateParamsService: {
    readonly typeName: "cosmwasm.wasm.v1.Msg";
    readonly method: "UpdateParams";
    readonly Request: typeof MsgUpdateParams;
    readonly Response: typeof MsgUpdateParamsResponse;
};
/**
 * SudoContract defines a governance operation for calling sudo
 * on a contract. The authority is defined in the keeper.
 *
 * Since: 0.40
 *
 * @generated from rpc cosmwasm.wasm.v1.Msg.SudoContract
 */
export declare const MsgSudoContractService: {
    readonly typeName: "cosmwasm.wasm.v1.Msg";
    readonly method: "SudoContract";
    readonly Request: typeof MsgSudoContract;
    readonly Response: typeof MsgSudoContractResponse;
};
/**
 * PinCodes defines a governance operation for pinning a set of
 * code ids in the wasmvm cache. The authority is defined in the keeper.
 *
 * Since: 0.40
 *
 * @generated from rpc cosmwasm.wasm.v1.Msg.PinCodes
 */
export declare const MsgPinCodesService: {
    readonly typeName: "cosmwasm.wasm.v1.Msg";
    readonly method: "PinCodes";
    readonly Request: typeof MsgPinCodes;
    readonly Response: typeof MsgPinCodesResponse;
};
/**
 * UnpinCodes defines a governance operation for unpinning a set of
 * code ids in the wasmvm cache. The authority is defined in the keeper.
 *
 * Since: 0.40
 *
 * @generated from rpc cosmwasm.wasm.v1.Msg.UnpinCodes
 */
export declare const MsgUnpinCodesService: {
    readonly typeName: "cosmwasm.wasm.v1.Msg";
    readonly method: "UnpinCodes";
    readonly Request: typeof MsgUnpinCodes;
    readonly Response: typeof MsgUnpinCodesResponse;
};
/**
 * StoreAndInstantiateContract defines a governance operation for storing
 * and instantiating the contract. The authority is defined in the keeper.
 *
 * Since: 0.40
 *
 * @generated from rpc cosmwasm.wasm.v1.Msg.StoreAndInstantiateContract
 */
export declare const MsgStoreAndInstantiateContractService: {
    readonly typeName: "cosmwasm.wasm.v1.Msg";
    readonly method: "StoreAndInstantiateContract";
    readonly Request: typeof MsgStoreAndInstantiateContract;
    readonly Response: typeof MsgStoreAndInstantiateContractResponse;
};
/**
 * RemoveCodeUploadParamsAddresses defines a governance operation for
 * removing addresses from code upload params.
 * The authority is defined in the keeper.
 *
 * @generated from rpc cosmwasm.wasm.v1.Msg.RemoveCodeUploadParamsAddresses
 */
export declare const MsgRemoveCodeUploadParamsAddressesService: {
    readonly typeName: "cosmwasm.wasm.v1.Msg";
    readonly method: "RemoveCodeUploadParamsAddresses";
    readonly Request: typeof MsgRemoveCodeUploadParamsAddresses;
    readonly Response: typeof MsgRemoveCodeUploadParamsAddressesResponse;
};
/**
 * AddCodeUploadParamsAddresses defines a governance operation for
 * adding addresses to code upload params.
 * The authority is defined in the keeper.
 *
 * @generated from rpc cosmwasm.wasm.v1.Msg.AddCodeUploadParamsAddresses
 */
export declare const MsgAddCodeUploadParamsAddressesService: {
    readonly typeName: "cosmwasm.wasm.v1.Msg";
    readonly method: "AddCodeUploadParamsAddresses";
    readonly Request: typeof MsgAddCodeUploadParamsAddresses;
    readonly Response: typeof MsgAddCodeUploadParamsAddressesResponse;
};
/**
 * StoreAndMigrateContract defines a governance operation for storing
 * and migrating the contract. The authority is defined in the keeper.
 *
 * Since: 0.42
 *
 * @generated from rpc cosmwasm.wasm.v1.Msg.StoreAndMigrateContract
 */
export declare const MsgStoreAndMigrateContractService: {
    readonly typeName: "cosmwasm.wasm.v1.Msg";
    readonly method: "StoreAndMigrateContract";
    readonly Request: typeof MsgStoreAndMigrateContract;
    readonly Response: typeof MsgStoreAndMigrateContractResponse;
};
/**
 * UpdateContractLabel sets a new label for a smart contract
 *
 * Since: 0.43
 *
 * @generated from rpc cosmwasm.wasm.v1.Msg.UpdateContractLabel
 */
export declare const MsgUpdateContractLabelService: {
    readonly typeName: "cosmwasm.wasm.v1.Msg";
    readonly method: "UpdateContractLabel";
    readonly Request: typeof MsgUpdateContractLabel;
    readonly Response: typeof MsgUpdateContractLabelResponse;
};
//# sourceMappingURL=tx_cosmes.d.ts.map