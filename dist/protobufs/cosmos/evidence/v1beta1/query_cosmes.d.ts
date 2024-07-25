import { QueryAllEvidenceRequest, QueryAllEvidenceResponse, QueryEvidenceRequest, QueryEvidenceResponse } from "./query_pb.js";
/**
 * Evidence queries evidence based on evidence hash.
 *
 * @generated from rpc cosmos.evidence.v1beta1.Query.Evidence
 */
export declare const QueryEvidenceService: {
    readonly typeName: "cosmos.evidence.v1beta1.Query";
    readonly method: "Evidence";
    readonly Request: typeof QueryEvidenceRequest;
    readonly Response: typeof QueryEvidenceResponse;
};
/**
 * AllEvidence queries all evidence.
 *
 * @generated from rpc cosmos.evidence.v1beta1.Query.AllEvidence
 */
export declare const QueryAllEvidenceService: {
    readonly typeName: "cosmos.evidence.v1beta1.Query";
    readonly method: "AllEvidence";
    readonly Request: typeof QueryAllEvidenceRequest;
    readonly Response: typeof QueryAllEvidenceResponse;
};
//# sourceMappingURL=query_cosmes.d.ts.map