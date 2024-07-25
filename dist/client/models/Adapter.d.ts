import { Message } from "@bufbuild/protobuf";
/**
 * An adapter to translate between protobuf and amino encodings.
 */
export type Adapter = {
    toProto: () => Message;
    toAmino: () => {
        type: string;
        value: Record<string, unknown>;
    };
};
//# sourceMappingURL=Adapter.d.ts.map