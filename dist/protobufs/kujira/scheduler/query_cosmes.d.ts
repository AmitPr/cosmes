import { QueryAllHookRequest, QueryAllHookResponse, QueryGetHookRequest, QueryGetHookResponse, QueryParamsRequest, QueryParamsResponse } from "./query_pb.js";
/**
 * Parameters queries the parameters of the module.
 *
 * @generated from rpc kujira.scheduler.Query.Params
 */
export declare const QueryParamsService: {
    readonly typeName: "kujira.scheduler.Query";
    readonly method: "Params";
    readonly Request: typeof QueryParamsRequest;
    readonly Response: typeof QueryParamsResponse;
};
/**
 * Queries a Hook by id.
 *
 * @generated from rpc kujira.scheduler.Query.Hook
 */
export declare const QueryHookService: {
    readonly typeName: "kujira.scheduler.Query";
    readonly method: "Hook";
    readonly Request: typeof QueryGetHookRequest;
    readonly Response: typeof QueryGetHookResponse;
};
/**
 * Queries a list of Hook items.
 *
 * @generated from rpc kujira.scheduler.Query.HookAll
 */
export declare const QueryHookAllService: {
    readonly typeName: "kujira.scheduler.Query";
    readonly method: "HookAll";
    readonly Request: typeof QueryAllHookRequest;
    readonly Response: typeof QueryAllHookResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map