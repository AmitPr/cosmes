import { ListAllInterfacesRequest, ListAllInterfacesResponse, ListImplementationsRequest, ListImplementationsResponse } from "./reflection_pb.js";
/**
 * ListAllInterfaces lists all the interfaces registered in the interface
 * registry.
 *
 * @generated from rpc cosmos.base.reflection.v1beta1.ReflectionService.ListAllInterfaces
 */
export declare const ReflectionServiceListAllInterfacesService: {
    readonly typeName: "cosmos.base.reflection.v1beta1.ReflectionService";
    readonly method: "ListAllInterfaces";
    readonly Request: typeof ListAllInterfacesRequest;
    readonly Response: typeof ListAllInterfacesResponse;
};
/**
 * ListImplementations list all the concrete types that implement a given
 * interface.
 *
 * @generated from rpc cosmos.base.reflection.v1beta1.ReflectionService.ListImplementations
 */
export declare const ReflectionServiceListImplementationsService: {
    readonly typeName: "cosmos.base.reflection.v1beta1.ReflectionService";
    readonly method: "ListImplementations";
    readonly Request: typeof ListImplementationsRequest;
    readonly Response: typeof ListImplementationsResponse;
};
//# sourceMappingURL=reflection_cosmes.d.ts.map