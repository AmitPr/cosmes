import { GetAuthnDescriptorRequest, GetAuthnDescriptorResponse, GetChainDescriptorRequest, GetChainDescriptorResponse, GetCodecDescriptorRequest, GetCodecDescriptorResponse, GetConfigurationDescriptorRequest, GetConfigurationDescriptorResponse, GetQueryServicesDescriptorRequest, GetQueryServicesDescriptorResponse, GetTxDescriptorRequest, GetTxDescriptorResponse } from "./reflection_pb.js";
/**
 * GetAuthnDescriptor returns information on how to authenticate transactions in the application
 * NOTE: this RPC is still experimental and might be subject to breaking changes or removal in
 * future releases of the cosmos-sdk.
 *
 * @generated from rpc cosmos.base.reflection.v2alpha1.ReflectionService.GetAuthnDescriptor
 */
export declare const ReflectionServiceGetAuthnDescriptorService: {
    readonly typeName: "cosmos.base.reflection.v2alpha1.ReflectionService";
    readonly method: "GetAuthnDescriptor";
    readonly Request: typeof GetAuthnDescriptorRequest;
    readonly Response: typeof GetAuthnDescriptorResponse;
};
/**
 * GetChainDescriptor returns the description of the chain
 *
 * @generated from rpc cosmos.base.reflection.v2alpha1.ReflectionService.GetChainDescriptor
 */
export declare const ReflectionServiceGetChainDescriptorService: {
    readonly typeName: "cosmos.base.reflection.v2alpha1.ReflectionService";
    readonly method: "GetChainDescriptor";
    readonly Request: typeof GetChainDescriptorRequest;
    readonly Response: typeof GetChainDescriptorResponse;
};
/**
 * GetCodecDescriptor returns the descriptor of the codec of the application
 *
 * @generated from rpc cosmos.base.reflection.v2alpha1.ReflectionService.GetCodecDescriptor
 */
export declare const ReflectionServiceGetCodecDescriptorService: {
    readonly typeName: "cosmos.base.reflection.v2alpha1.ReflectionService";
    readonly method: "GetCodecDescriptor";
    readonly Request: typeof GetCodecDescriptorRequest;
    readonly Response: typeof GetCodecDescriptorResponse;
};
/**
 * GetConfigurationDescriptor returns the descriptor for the sdk.Config of the application
 *
 * @generated from rpc cosmos.base.reflection.v2alpha1.ReflectionService.GetConfigurationDescriptor
 */
export declare const ReflectionServiceGetConfigurationDescriptorService: {
    readonly typeName: "cosmos.base.reflection.v2alpha1.ReflectionService";
    readonly method: "GetConfigurationDescriptor";
    readonly Request: typeof GetConfigurationDescriptorRequest;
    readonly Response: typeof GetConfigurationDescriptorResponse;
};
/**
 * GetQueryServicesDescriptor returns the available gRPC queryable services of the application
 *
 * @generated from rpc cosmos.base.reflection.v2alpha1.ReflectionService.GetQueryServicesDescriptor
 */
export declare const ReflectionServiceGetQueryServicesDescriptorService: {
    readonly typeName: "cosmos.base.reflection.v2alpha1.ReflectionService";
    readonly method: "GetQueryServicesDescriptor";
    readonly Request: typeof GetQueryServicesDescriptorRequest;
    readonly Response: typeof GetQueryServicesDescriptorResponse;
};
/**
 * GetTxDescriptor returns information on the used transaction object and available msgs that can be used
 *
 * @generated from rpc cosmos.base.reflection.v2alpha1.ReflectionService.GetTxDescriptor
 */
export declare const ReflectionServiceGetTxDescriptorService: {
    readonly typeName: "cosmos.base.reflection.v2alpha1.ReflectionService";
    readonly method: "GetTxDescriptor";
    readonly Request: typeof GetTxDescriptorRequest;
    readonly Response: typeof GetTxDescriptorResponse;
};
//# sourceMappingURL=reflection_cosmes.d.ts.map