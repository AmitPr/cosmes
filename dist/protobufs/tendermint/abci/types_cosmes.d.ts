import { RequestApplySnapshotChunk, RequestBeginBlock, RequestCheckTx, RequestCommit, RequestDeliverTx, RequestEcho, RequestEndBlock, RequestFlush, RequestInfo, RequestInitChain, RequestListSnapshots, RequestLoadSnapshotChunk, RequestOfferSnapshot, RequestPrepareProposal, RequestProcessProposal, RequestQuery, ResponseApplySnapshotChunk, ResponseBeginBlock, ResponseCheckTx, ResponseCommit, ResponseDeliverTx, ResponseEcho, ResponseEndBlock, ResponseFlush, ResponseInfo, ResponseInitChain, ResponseListSnapshots, ResponseLoadSnapshotChunk, ResponseOfferSnapshot, ResponsePrepareProposal, ResponseProcessProposal, ResponseQuery } from "./types_pb.js";
/**
 * @generated from rpc tendermint.abci.ABCIApplication.Echo
 */
export declare const ABCIApplicationEchoService: {
    readonly typeName: "tendermint.abci.ABCIApplication";
    readonly method: "Echo";
    readonly Request: typeof RequestEcho;
    readonly Response: typeof ResponseEcho;
};
/**
 * @generated from rpc tendermint.abci.ABCIApplication.Flush
 */
export declare const ABCIApplicationFlushService: {
    readonly typeName: "tendermint.abci.ABCIApplication";
    readonly method: "Flush";
    readonly Request: typeof RequestFlush;
    readonly Response: typeof ResponseFlush;
};
/**
 * @generated from rpc tendermint.abci.ABCIApplication.Info
 */
export declare const ABCIApplicationInfoService: {
    readonly typeName: "tendermint.abci.ABCIApplication";
    readonly method: "Info";
    readonly Request: typeof RequestInfo;
    readonly Response: typeof ResponseInfo;
};
/**
 * @generated from rpc tendermint.abci.ABCIApplication.DeliverTx
 */
export declare const ABCIApplicationDeliverTxService: {
    readonly typeName: "tendermint.abci.ABCIApplication";
    readonly method: "DeliverTx";
    readonly Request: typeof RequestDeliverTx;
    readonly Response: typeof ResponseDeliverTx;
};
/**
 * @generated from rpc tendermint.abci.ABCIApplication.CheckTx
 */
export declare const ABCIApplicationCheckTxService: {
    readonly typeName: "tendermint.abci.ABCIApplication";
    readonly method: "CheckTx";
    readonly Request: typeof RequestCheckTx;
    readonly Response: typeof ResponseCheckTx;
};
/**
 * @generated from rpc tendermint.abci.ABCIApplication.Query
 */
export declare const ABCIApplicationQueryService: {
    readonly typeName: "tendermint.abci.ABCIApplication";
    readonly method: "Query";
    readonly Request: typeof RequestQuery;
    readonly Response: typeof ResponseQuery;
};
/**
 * @generated from rpc tendermint.abci.ABCIApplication.Commit
 */
export declare const ABCIApplicationCommitService: {
    readonly typeName: "tendermint.abci.ABCIApplication";
    readonly method: "Commit";
    readonly Request: typeof RequestCommit;
    readonly Response: typeof ResponseCommit;
};
/**
 * @generated from rpc tendermint.abci.ABCIApplication.InitChain
 */
export declare const ABCIApplicationInitChainService: {
    readonly typeName: "tendermint.abci.ABCIApplication";
    readonly method: "InitChain";
    readonly Request: typeof RequestInitChain;
    readonly Response: typeof ResponseInitChain;
};
/**
 * @generated from rpc tendermint.abci.ABCIApplication.BeginBlock
 */
export declare const ABCIApplicationBeginBlockService: {
    readonly typeName: "tendermint.abci.ABCIApplication";
    readonly method: "BeginBlock";
    readonly Request: typeof RequestBeginBlock;
    readonly Response: typeof ResponseBeginBlock;
};
/**
 * @generated from rpc tendermint.abci.ABCIApplication.EndBlock
 */
export declare const ABCIApplicationEndBlockService: {
    readonly typeName: "tendermint.abci.ABCIApplication";
    readonly method: "EndBlock";
    readonly Request: typeof RequestEndBlock;
    readonly Response: typeof ResponseEndBlock;
};
/**
 * @generated from rpc tendermint.abci.ABCIApplication.ListSnapshots
 */
export declare const ABCIApplicationListSnapshotsService: {
    readonly typeName: "tendermint.abci.ABCIApplication";
    readonly method: "ListSnapshots";
    readonly Request: typeof RequestListSnapshots;
    readonly Response: typeof ResponseListSnapshots;
};
/**
 * @generated from rpc tendermint.abci.ABCIApplication.OfferSnapshot
 */
export declare const ABCIApplicationOfferSnapshotService: {
    readonly typeName: "tendermint.abci.ABCIApplication";
    readonly method: "OfferSnapshot";
    readonly Request: typeof RequestOfferSnapshot;
    readonly Response: typeof ResponseOfferSnapshot;
};
/**
 * @generated from rpc tendermint.abci.ABCIApplication.LoadSnapshotChunk
 */
export declare const ABCIApplicationLoadSnapshotChunkService: {
    readonly typeName: "tendermint.abci.ABCIApplication";
    readonly method: "LoadSnapshotChunk";
    readonly Request: typeof RequestLoadSnapshotChunk;
    readonly Response: typeof ResponseLoadSnapshotChunk;
};
/**
 * @generated from rpc tendermint.abci.ABCIApplication.ApplySnapshotChunk
 */
export declare const ABCIApplicationApplySnapshotChunkService: {
    readonly typeName: "tendermint.abci.ABCIApplication";
    readonly method: "ApplySnapshotChunk";
    readonly Request: typeof RequestApplySnapshotChunk;
    readonly Response: typeof ResponseApplySnapshotChunk;
};
/**
 * @generated from rpc tendermint.abci.ABCIApplication.PrepareProposal
 */
export declare const ABCIApplicationPrepareProposalService: {
    readonly typeName: "tendermint.abci.ABCIApplication";
    readonly method: "PrepareProposal";
    readonly Request: typeof RequestPrepareProposal;
    readonly Response: typeof ResponsePrepareProposal;
};
/**
 * @generated from rpc tendermint.abci.ABCIApplication.ProcessProposal
 */
export declare const ABCIApplicationProcessProposalService: {
    readonly typeName: "tendermint.abci.ABCIApplication";
    readonly method: "ProcessProposal";
    readonly Request: typeof RequestProcessProposal;
    readonly Response: typeof ResponseProcessProposal;
};
//# sourceMappingURL=types_cosmes.d.ts.map