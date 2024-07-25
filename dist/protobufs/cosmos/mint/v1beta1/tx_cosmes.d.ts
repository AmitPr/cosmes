import { MsgUpdateParams, MsgUpdateParamsResponse } from "./tx_pb.js";
/**
 * UpdateParams defines a governance operation for updating the x/mint module
 * parameters. The authority is defaults to the x/gov module account.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from rpc cosmos.mint.v1beta1.Msg.UpdateParams
 */
export declare const MsgUpdateParamsService: {
    readonly typeName: "cosmos.mint.v1beta1.Msg";
    readonly method: "UpdateParams";
    readonly Request: typeof MsgUpdateParams;
    readonly Response: typeof MsgUpdateParamsResponse;
};
//# sourceMappingURL=tx_cosmes.d.ts.map