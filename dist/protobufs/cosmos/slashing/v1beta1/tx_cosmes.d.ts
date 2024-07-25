import { MsgUnjail, MsgUnjailResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx_pb.js";
/**
 * Unjail defines a method for unjailing a jailed validator, thus returning
 * them into the bonded validator set, so they can begin receiving provisions
 * and rewards again.
 *
 * @generated from rpc cosmos.slashing.v1beta1.Msg.Unjail
 */
export declare const MsgUnjailService: {
    readonly typeName: "cosmos.slashing.v1beta1.Msg";
    readonly method: "Unjail";
    readonly Request: typeof MsgUnjail;
    readonly Response: typeof MsgUnjailResponse;
};
/**
 * UpdateParams defines a governance operation for updating the x/slashing module
 * parameters. The authority defaults to the x/gov module account.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from rpc cosmos.slashing.v1beta1.Msg.UpdateParams
 */
export declare const MsgUpdateParamsService: {
    readonly typeName: "cosmos.slashing.v1beta1.Msg";
    readonly method: "UpdateParams";
    readonly Request: typeof MsgUpdateParams;
    readonly Response: typeof MsgUpdateParamsResponse;
};
//# sourceMappingURL=tx_cosmes.d.ts.map