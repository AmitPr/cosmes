import { RequestApplySnapshotChunk, RequestBeginBlock, RequestCheckTx, RequestCommit, RequestDeliverTx, RequestEcho, RequestEndBlock, RequestFlush, RequestInfo, RequestInitChain, RequestListSnapshots, RequestLoadSnapshotChunk, RequestOfferSnapshot, RequestPrepareProposal, RequestProcessProposal, RequestQuery } from "./types_pb.js";
export declare const ABCIApplicationRegistry: {
    "tendermint.abci.ABCIApplicationEcho": typeof RequestEcho;
    "tendermint.abci.ABCIApplicationFlush": typeof RequestFlush;
    "tendermint.abci.ABCIApplicationInfo": typeof RequestInfo;
    "tendermint.abci.ABCIApplicationDeliverTx": typeof RequestDeliverTx;
    "tendermint.abci.ABCIApplicationCheckTx": typeof RequestCheckTx;
    "tendermint.abci.ABCIApplicationQuery": typeof RequestQuery;
    "tendermint.abci.ABCIApplicationCommit": typeof RequestCommit;
    "tendermint.abci.ABCIApplicationInitChain": typeof RequestInitChain;
    "tendermint.abci.ABCIApplicationBeginBlock": typeof RequestBeginBlock;
    "tendermint.abci.ABCIApplicationEndBlock": typeof RequestEndBlock;
    "tendermint.abci.ABCIApplicationListSnapshots": typeof RequestListSnapshots;
    "tendermint.abci.ABCIApplicationOfferSnapshot": typeof RequestOfferSnapshot;
    "tendermint.abci.ABCIApplicationLoadSnapshotChunk": typeof RequestLoadSnapshotChunk;
    "tendermint.abci.ABCIApplicationApplySnapshotChunk": typeof RequestApplySnapshotChunk;
    "tendermint.abci.ABCIApplicationPrepareProposal": typeof RequestPrepareProposal;
    "tendermint.abci.ABCIApplicationProcessProposal": typeof RequestProcessProposal;
};
//# sourceMappingURL=types_registry.d.ts.map