import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Height } from "../../../core/client/v1/client_pb.js";
/**
 * ClientState defines the 09-localhost client state
 *
 * @generated from message ibc.lightclients.localhost.v2.ClientState
 */
export declare class ClientState extends Message<ClientState> {
    /**
     * the latest block height
     *
     * @generated from field: ibc.core.client.v1.Height latest_height = 1;
     */
    latestHeight?: Height;
    constructor(data?: PartialMessage<ClientState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "ibc.lightclients.localhost.v2.ClientState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientState;
    static equals(a: ClientState | PlainMessage<ClientState> | undefined, b: ClientState | PlainMessage<ClientState> | undefined): boolean;
}
//# sourceMappingURL=localhost_pb.d.ts.map