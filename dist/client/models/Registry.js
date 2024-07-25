import { MsgExecuteContract } from "./MsgExecuteContract";
import { MsgInstantiateContract } from "./MsgInstantiateContract";
import { MsgMigrateContract } from "./MsgMigrateContract";
import { MsgSend } from "./MsgSend";
import { MsgStoreCode } from "./MsgStoreCode";
// TODO: Add more adapters here
export const CosmWasmMsgAdapters = {
    "cosmwasm.wasm.v1.MsgStoreCode": MsgStoreCode,
    "cosmwasm.wasm.v1.MsgInstantiateContract": MsgInstantiateContract,
    "cosmwasm.wasm.v1.MsgExecuteContract": MsgExecuteContract,
    "cosmwasm.wasm.v1.MsgMigrateContract": MsgMigrateContract,
};
export const CosmosBankMsgAdapters = {
    "cosmos.bank.v1beta1.MsgSend": MsgSend,
};
//# sourceMappingURL=Registry.js.map