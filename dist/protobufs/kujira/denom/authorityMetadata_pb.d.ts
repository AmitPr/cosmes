import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * DenomAuthorityMetadata specifies metadata for addresses that have specific
 * capabilities over a token factory denom. Right now there is only one Admin
 * permission, but is planned to be extended to the future.
 *
 * @generated from message kujira.denom.DenomAuthorityMetadata
 */
export declare class DenomAuthorityMetadata extends Message<DenomAuthorityMetadata> {
    /**
     * Can be empty for no admin, or a valid kujira address
     *
     * @generated from field: string Admin = 1;
     */
    Admin: string;
    constructor(data?: PartialMessage<DenomAuthorityMetadata>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "kujira.denom.DenomAuthorityMetadata";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DenomAuthorityMetadata;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DenomAuthorityMetadata;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DenomAuthorityMetadata;
    static equals(a: DenomAuthorityMetadata | PlainMessage<DenomAuthorityMetadata> | undefined, b: DenomAuthorityMetadata | PlainMessage<DenomAuthorityMetadata> | undefined): boolean;
}
//# sourceMappingURL=authorityMetadata_pb.d.ts.map