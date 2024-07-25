import { MsgCreateClient, MsgCreateClientResponse, MsgSubmitMisbehaviour, MsgSubmitMisbehaviourResponse, MsgUpdateClient, MsgUpdateClientResponse, MsgUpgradeClient, MsgUpgradeClientResponse } from "./tx_pb.js";
/**
 * CreateClient defines a rpc handler method for MsgCreateClient.
 *
 * @generated from rpc ibc.core.client.v1.Msg.CreateClient
 */
export declare const MsgCreateClientService: {
    readonly typeName: "ibc.core.client.v1.Msg";
    readonly method: "CreateClient";
    readonly Request: typeof MsgCreateClient;
    readonly Response: typeof MsgCreateClientResponse;
};
/**
 * UpdateClient defines a rpc handler method for MsgUpdateClient.
 *
 * @generated from rpc ibc.core.client.v1.Msg.UpdateClient
 */
export declare const MsgUpdateClientService: {
    readonly typeName: "ibc.core.client.v1.Msg";
    readonly method: "UpdateClient";
    readonly Request: typeof MsgUpdateClient;
    readonly Response: typeof MsgUpdateClientResponse;
};
/**
 * UpgradeClient defines a rpc handler method for MsgUpgradeClient.
 *
 * @generated from rpc ibc.core.client.v1.Msg.UpgradeClient
 */
export declare const MsgUpgradeClientService: {
    readonly typeName: "ibc.core.client.v1.Msg";
    readonly method: "UpgradeClient";
    readonly Request: typeof MsgUpgradeClient;
    readonly Response: typeof MsgUpgradeClientResponse;
};
/**
 * SubmitMisbehaviour defines a rpc handler method for MsgSubmitMisbehaviour.
 *
 * @generated from rpc ibc.core.client.v1.Msg.SubmitMisbehaviour
 */
export declare const MsgSubmitMisbehaviourService: {
    readonly typeName: "ibc.core.client.v1.Msg";
    readonly method: "SubmitMisbehaviour";
    readonly Request: typeof MsgSubmitMisbehaviour;
    readonly Response: typeof MsgSubmitMisbehaviourResponse;
};
//# sourceMappingURL=tx_cosmes.d.ts.map