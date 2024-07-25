import { MsgUpdateParams, MsgUpdateParamsResponse } from "./tx_pb.js";
/**
 * UpdateParams defines a governance operation for updating the x/consensus_param module parameters.
 * The authority is defined in the keeper.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from rpc cosmos.consensus.v1.Msg.UpdateParams
 */
export declare const MsgUpdateParamsService: {
    readonly typeName: "cosmos.consensus.v1.Msg";
    readonly method: "UpdateParams";
    readonly Request: typeof MsgUpdateParams;
    readonly Response: typeof MsgUpdateParamsResponse;
};
//# sourceMappingURL=tx_cosmes.d.ts.map