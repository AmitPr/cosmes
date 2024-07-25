// Since: cosmos-sdk 0.46
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Deposit, DepositParams, Params, Proposal, TallyParams, Vote, VotingParams } from "./gov_pb.js";
/**
 * GenesisState defines the gov module's genesis state.
 *
 * @generated from message cosmos.gov.v1.GenesisState
 */
export class GenesisState extends Message {
    constructor(data) {
        super();
        /**
         * starting_proposal_id is the ID of the starting proposal.
         *
         * @generated from field: uint64 starting_proposal_id = 1;
         */
        this.startingProposalId = protoInt64.zero;
        /**
         * deposits defines all the deposits present at genesis.
         *
         * @generated from field: repeated cosmos.gov.v1.Deposit deposits = 2;
         */
        this.deposits = [];
        /**
         * votes defines all the votes present at genesis.
         *
         * @generated from field: repeated cosmos.gov.v1.Vote votes = 3;
         */
        this.votes = [];
        /**
         * proposals defines all the proposals present at genesis.
         *
         * @generated from field: repeated cosmos.gov.v1.Proposal proposals = 4;
         */
        this.proposals = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new GenesisState().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new GenesisState().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new GenesisState().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(GenesisState, a, b);
    }
}
GenesisState.runtime = proto3;
GenesisState.typeName = "cosmos.gov.v1.GenesisState";
GenesisState.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "starting_proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "deposits", kind: "message", T: Deposit, repeated: true },
    { no: 3, name: "votes", kind: "message", T: Vote, repeated: true },
    { no: 4, name: "proposals", kind: "message", T: Proposal, repeated: true },
    { no: 5, name: "deposit_params", kind: "message", T: DepositParams },
    { no: 6, name: "voting_params", kind: "message", T: VotingParams },
    { no: 7, name: "tally_params", kind: "message", T: TallyParams },
    { no: 8, name: "params", kind: "message", T: Params },
]);
//# sourceMappingURL=genesis_pb.js.map