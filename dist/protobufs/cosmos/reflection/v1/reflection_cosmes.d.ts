import { FileDescriptorsRequest, FileDescriptorsResponse } from "./reflection_pb.js";
/**
 * FileDescriptors queries all the file descriptors in the app in order
 * to enable easier generation of dynamic clients.
 *
 * @generated from rpc cosmos.reflection.v1.ReflectionService.FileDescriptors
 */
export declare const ReflectionServiceFileDescriptorsService: {
    readonly typeName: "cosmos.reflection.v1.ReflectionService";
    readonly method: "FileDescriptors";
    readonly Request: typeof FileDescriptorsRequest;
    readonly Response: typeof FileDescriptorsResponse;
};
//# sourceMappingURL=reflection_cosmes.d.ts.map