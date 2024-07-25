// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file cosmos/base/store/v1beta1/commit_info.proto (package cosmos.base.store.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";
/**
 * CommitInfo defines commit information used by the multi-store when committing
 * a version/height.
 *
 * @generated from message cosmos.base.store.v1beta1.CommitInfo
 */
export class CommitInfo extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: int64 version = 1;
         */
        this.version = protoInt64.zero;
        /**
         * @generated from field: repeated cosmos.base.store.v1beta1.StoreInfo store_infos = 2;
         */
        this.storeInfos = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new CommitInfo().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new CommitInfo().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new CommitInfo().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(CommitInfo, a, b);
    }
}
CommitInfo.runtime = proto3;
CommitInfo.typeName = "cosmos.base.store.v1beta1.CommitInfo";
CommitInfo.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "version", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "store_infos", kind: "message", T: StoreInfo, repeated: true },
    { no: 3, name: "timestamp", kind: "message", T: Timestamp },
]);
/**
 * StoreInfo defines store-specific commit information. It contains a reference
 * between a store name and the commit ID.
 *
 * @generated from message cosmos.base.store.v1beta1.StoreInfo
 */
export class StoreInfo extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: string name = 1;
         */
        this.name = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new StoreInfo().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new StoreInfo().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new StoreInfo().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(StoreInfo, a, b);
    }
}
StoreInfo.runtime = proto3;
StoreInfo.typeName = "cosmos.base.store.v1beta1.StoreInfo";
StoreInfo.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "commit_id", kind: "message", T: CommitID },
]);
/**
 * CommitID defines the commitment information when a specific store is
 * committed.
 *
 * @generated from message cosmos.base.store.v1beta1.CommitID
 */
export class CommitID extends Message {
    constructor(data) {
        super();
        /**
         * @generated from field: int64 version = 1;
         */
        this.version = protoInt64.zero;
        /**
         * @generated from field: bytes hash = 2;
         */
        this.hash = new Uint8Array(0);
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new CommitID().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new CommitID().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new CommitID().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(CommitID, a, b);
    }
}
CommitID.runtime = proto3;
CommitID.typeName = "cosmos.base.store.v1beta1.CommitID";
CommitID.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "version", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
]);
//# sourceMappingURL=commit_info_pb.js.map