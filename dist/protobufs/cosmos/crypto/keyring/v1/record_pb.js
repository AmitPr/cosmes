// Since: cosmos-sdk 0.46
import { Any, Message, proto3 } from "@bufbuild/protobuf";
import { BIP44Params } from "../../hd/v1/hd_pb.js";
/**
 * Record is used for representing a key in the keyring.
 *
 * @generated from message cosmos.crypto.keyring.v1.Record
 */
export class Record extends Message {
    constructor(data) {
        super();
        /**
         * name represents a name of Record
         *
         * @generated from field: string name = 1;
         */
        this.name = "";
        /**
         * Record contains one of the following items
         *
         * @generated from oneof cosmos.crypto.keyring.v1.Record.item
         */
        this.item = { case: undefined };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Record().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Record().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Record().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Record, a, b);
    }
}
Record.runtime = proto3;
Record.typeName = "cosmos.crypto.keyring.v1.Record";
Record.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pub_key", kind: "message", T: Any },
    { no: 3, name: "local", kind: "message", T: Record_Local, oneof: "item" },
    { no: 4, name: "ledger", kind: "message", T: Record_Ledger, oneof: "item" },
    { no: 5, name: "multi", kind: "message", T: Record_Multi, oneof: "item" },
    { no: 6, name: "offline", kind: "message", T: Record_Offline, oneof: "item" },
]);
/**
 * Item is a keyring item stored in a keyring backend.
 * Local item
 *
 * @generated from message cosmos.crypto.keyring.v1.Record.Local
 */
export class Record_Local extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Record_Local().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Record_Local().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Record_Local().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Record_Local, a, b);
    }
}
Record_Local.runtime = proto3;
Record_Local.typeName = "cosmos.crypto.keyring.v1.Record.Local";
Record_Local.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "priv_key", kind: "message", T: Any },
]);
/**
 * Ledger item
 *
 * @generated from message cosmos.crypto.keyring.v1.Record.Ledger
 */
export class Record_Ledger extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Record_Ledger().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Record_Ledger().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Record_Ledger().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Record_Ledger, a, b);
    }
}
Record_Ledger.runtime = proto3;
Record_Ledger.typeName = "cosmos.crypto.keyring.v1.Record.Ledger";
Record_Ledger.fields = proto3.util.newFieldList(() => [
    { no: 1, name: "path", kind: "message", T: BIP44Params },
]);
/**
 * Multi item
 *
 * @generated from message cosmos.crypto.keyring.v1.Record.Multi
 */
export class Record_Multi extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Record_Multi().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Record_Multi().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Record_Multi().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Record_Multi, a, b);
    }
}
Record_Multi.runtime = proto3;
Record_Multi.typeName = "cosmos.crypto.keyring.v1.Record.Multi";
Record_Multi.fields = proto3.util.newFieldList(() => []);
/**
 * Offline item
 *
 * @generated from message cosmos.crypto.keyring.v1.Record.Offline
 */
export class Record_Offline extends Message {
    constructor(data) {
        super();
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options) {
        return new Record_Offline().fromBinary(bytes, options);
    }
    static fromJson(jsonValue, options) {
        return new Record_Offline().fromJson(jsonValue, options);
    }
    static fromJsonString(jsonString, options) {
        return new Record_Offline().fromJsonString(jsonString, options);
    }
    static equals(a, b) {
        return proto3.util.equals(Record_Offline, a, b);
    }
}
Record_Offline.runtime = proto3;
Record_Offline.typeName = "cosmos.crypto.keyring.v1.Record.Offline";
Record_Offline.fields = proto3.util.newFieldList(() => []);
//# sourceMappingURL=record_pb.js.map