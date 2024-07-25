import { MsgBeginRedelegate, MsgBeginRedelegateResponse, MsgCancelUnbondingDelegation, MsgCancelUnbondingDelegationResponse, MsgCreateValidator, MsgCreateValidatorResponse, MsgDelegate, MsgDelegateResponse, MsgEditValidator, MsgEditValidatorResponse, MsgUndelegate, MsgUndelegateResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx_pb.js";
/**
 * CreateValidator defines a method for creating a new validator.
 *
 * @generated from rpc cosmos.staking.v1beta1.Msg.CreateValidator
 */
export declare const MsgCreateValidatorService: {
    readonly typeName: "cosmos.staking.v1beta1.Msg";
    readonly method: "CreateValidator";
    readonly Request: typeof MsgCreateValidator;
    readonly Response: typeof MsgCreateValidatorResponse;
};
/**
 * EditValidator defines a method for editing an existing validator.
 *
 * @generated from rpc cosmos.staking.v1beta1.Msg.EditValidator
 */
export declare const MsgEditValidatorService: {
    readonly typeName: "cosmos.staking.v1beta1.Msg";
    readonly method: "EditValidator";
    readonly Request: typeof MsgEditValidator;
    readonly Response: typeof MsgEditValidatorResponse;
};
/**
 * Delegate defines a method for performing a delegation of coins
 * from a delegator to a validator.
 *
 * @generated from rpc cosmos.staking.v1beta1.Msg.Delegate
 */
export declare const MsgDelegateService: {
    readonly typeName: "cosmos.staking.v1beta1.Msg";
    readonly method: "Delegate";
    readonly Request: typeof MsgDelegate;
    readonly Response: typeof MsgDelegateResponse;
};
/**
 * BeginRedelegate defines a method for performing a redelegation
 * of coins from a delegator and source validator to a destination validator.
 *
 * @generated from rpc cosmos.staking.v1beta1.Msg.BeginRedelegate
 */
export declare const MsgBeginRedelegateService: {
    readonly typeName: "cosmos.staking.v1beta1.Msg";
    readonly method: "BeginRedelegate";
    readonly Request: typeof MsgBeginRedelegate;
    readonly Response: typeof MsgBeginRedelegateResponse;
};
/**
 * Undelegate defines a method for performing an undelegation from a
 * delegate and a validator.
 *
 * @generated from rpc cosmos.staking.v1beta1.Msg.Undelegate
 */
export declare const MsgUndelegateService: {
    readonly typeName: "cosmos.staking.v1beta1.Msg";
    readonly method: "Undelegate";
    readonly Request: typeof MsgUndelegate;
    readonly Response: typeof MsgUndelegateResponse;
};
/**
 * CancelUnbondingDelegation defines a method for performing canceling the unbonding delegation
 * and delegate back to previous validator.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from rpc cosmos.staking.v1beta1.Msg.CancelUnbondingDelegation
 */
export declare const MsgCancelUnbondingDelegationService: {
    readonly typeName: "cosmos.staking.v1beta1.Msg";
    readonly method: "CancelUnbondingDelegation";
    readonly Request: typeof MsgCancelUnbondingDelegation;
    readonly Response: typeof MsgCancelUnbondingDelegationResponse;
};
/**
 * UpdateParams defines an operation for updating the x/staking module
 * parameters.
 * Since: cosmos-sdk 0.47
 *
 * @generated from rpc cosmos.staking.v1beta1.Msg.UpdateParams
 */
export declare const MsgUpdateParamsService: {
    readonly typeName: "cosmos.staking.v1beta1.Msg";
    readonly method: "UpdateParams";
    readonly Request: typeof MsgUpdateParams;
    readonly Response: typeof MsgUpdateParamsResponse;
};
//# sourceMappingURL=tx_cosmes.d.ts.map