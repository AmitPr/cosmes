// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file cosmos/genutil/v1beta1/genesis.proto (package cosmos.genutil.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * GenesisState defines the raw genesis transaction in JSON.
 *
 * @generated from message cosmos.genutil.v1beta1.GenesisState
 */
export class GenesisState extends Message {
    constructor(data) {
        super();
        /**
         * gen_txs defines the genesis transactions.
         *
         * @generated from field: repeated bytes gen_txs = 1;
         */
        this.genTxs = [];
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
GenesisState.typeName = "cosmos.genutil.v1beta1.GenesisState";
GenesisState.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "gen_txs", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
]);
//# sourceMappingURL=genesis_pb.js.map