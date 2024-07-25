import { GetRequest, GetResponse, ListRequest, ListResponse } from "./query_pb.js";
/**
 * Get queries an ORM table against an unique index.
 *
 * @generated from rpc cosmos.orm.query.v1alpha1.Query.Get
 */
export declare const QueryGetService: {
    readonly typeName: "cosmos.orm.query.v1alpha1.Query";
    readonly method: "Get";
    readonly Request: typeof GetRequest;
    readonly Response: typeof GetResponse;
};
/**
 * List queries an ORM table against an index.
 *
 * @generated from rpc cosmos.orm.query.v1alpha1.Query.List
 */
export declare const QueryListService: {
    readonly typeName: "cosmos.orm.query.v1alpha1.Query";
    readonly method: "List";
    readonly Request: typeof ListRequest;
    readonly Response: typeof ListResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map