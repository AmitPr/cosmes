import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Commit, Data, Header } from "./types_pb.js";
import { EvidenceList } from "./evidence_pb.js";
/**
 * @generated from message tendermint.types.Block
 */
export declare class Block extends Message<Block> {
    /**
     * @generated from field: tendermint.types.Header header = 1;
     */
    header?: Header;
    /**
     * @generated from field: tendermint.types.Data data = 2;
     */
    data?: Data;
    /**
     * @generated from field: tendermint.types.EvidenceList evidence = 3;
     */
    evidence?: EvidenceList;
    /**
     * @generated from field: tendermint.types.Commit last_commit = 4;
     */
    lastCommit?: Commit;
    constructor(data?: PartialMessage<Block>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "tendermint.types.Block";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Block;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Block;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Block;
    static equals(a: Block | PlainMessage<Block> | undefined, b: Block | PlainMessage<Block> | undefined): boolean;
}
//# sourceMappingURL=block_pb.d.ts.map