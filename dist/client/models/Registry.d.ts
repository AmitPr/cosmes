import { MsgExecuteContract } from "./MsgExecuteContract";
import { MsgInstantiateContract } from "./MsgInstantiateContract";
import { MsgMigrateContract } from "./MsgMigrateContract";
import { MsgSend } from "./MsgSend";
import { MsgStoreCode } from "./MsgStoreCode";
export declare const CosmWasmMsgAdapters: {
    "cosmwasm.wasm.v1.MsgStoreCode": typeof MsgStoreCode;
    "cosmwasm.wasm.v1.MsgInstantiateContract": typeof MsgInstantiateContract;
    "cosmwasm.wasm.v1.MsgExecuteContract": typeof MsgExecuteContract;
    "cosmwasm.wasm.v1.MsgMigrateContract": typeof MsgMigrateContract;
};
export declare const CosmosBankMsgAdapters: {
    "cosmos.bank.v1beta1.MsgSend": typeof MsgSend;
};
//# sourceMappingURL=Registry.d.ts.map