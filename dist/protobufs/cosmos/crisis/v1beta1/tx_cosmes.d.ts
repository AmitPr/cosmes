import { MsgUpdateParams, MsgUpdateParamsResponse, MsgVerifyInvariant, MsgVerifyInvariantResponse } from "./tx_pb.js";
/**
 * VerifyInvariant defines a method to verify a particular invariant.
 *
 * @generated from rpc cosmos.crisis.v1beta1.Msg.VerifyInvariant
 */
export declare const MsgVerifyInvariantService: {
    readonly typeName: "cosmos.crisis.v1beta1.Msg";
    readonly method: "VerifyInvariant";
    readonly Request: typeof MsgVerifyInvariant;
    readonly Response: typeof MsgVerifyInvariantResponse;
};
/**
 * UpdateParams defines a governance operation for updating the x/crisis module
 * parameters. The authority is defined in the keeper.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from rpc cosmos.crisis.v1beta1.Msg.UpdateParams
 */
export declare const MsgUpdateParamsService: {
    readonly typeName: "cosmos.crisis.v1beta1.Msg";
    readonly method: "UpdateParams";
    readonly Request: typeof MsgUpdateParams;
    readonly Response: typeof MsgUpdateParamsResponse;
};
//# sourceMappingURL=tx_cosmes.d.ts.map