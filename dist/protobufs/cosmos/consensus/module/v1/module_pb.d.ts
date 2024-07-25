import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * Module is the config object of the consensus module.
 *
 * @generated from message cosmos.consensus.module.v1.Module
 */
export declare class Module extends Message<Module> {
    /**
     * authority defines the custom module authority. If not set, defaults to the governance module.
     *
     * @generated from field: string authority = 1;
     */
    authority: string;
    constructor(data?: PartialMessage<Module>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "cosmos.consensus.module.v1.Module";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Module;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Module;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Module;
    static equals(a: Module | PlainMessage<Module> | undefined, b: Module | PlainMessage<Module> | undefined): boolean;
}
//# sourceMappingURL=module_pb.d.ts.map