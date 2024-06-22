export type RpcPubkey =
    | {
        readonly type: string;
        /** base64 encoded */
        readonly value: string;
    }
    | {
        // See: https://github.com/cosmos/cosmjs/issues/1142
        readonly Sum: {
            readonly type: string;
            readonly value: {
                /** base64 encoded */
                [algorithm: string]: string;
            };
        };
    };

// this is in status
export interface RpcValidatorInfo {
    /** hex encoded */
    readonly address: string;
    readonly pub_key: RpcPubkey;
    readonly voting_power: string;
    readonly proposer_priority?: string;
}

export interface RpcNodeInfo {
    /** hex encoded */
    readonly id: string;
    /** IP and port */
    readonly listen_addr: string;
    readonly network: string;
    readonly version: string;
    readonly channels: string; // ???
    readonly moniker: string;
    readonly protocol_version: {
        readonly p2p: string;
        readonly block: string;
        readonly app: string;
    };
    /**
     * Additional information. E.g.
     * {
     *   "tx_index": "on",
     *   "rpc_address":"tcp://0.0.0.0:26657"
     * }
     */
    readonly other: Record<string, unknown>;
}

export interface RpcSyncInfo {
    /** hex encoded */
    readonly earliest_app_hash: string;
    /** hex encoded */
    readonly earliest_block_hash: string;
    readonly earliest_block_height: string;
    readonly earliest_block_time: string;
    /** hex encoded */
    readonly latest_block_hash: string;
    /** hex encoded */
    readonly latest_app_hash: string;
    readonly latest_block_height: string;
    readonly latest_block_time: string;
    readonly catching_up: boolean;
}

export interface RpcStatusResponse {
    readonly node_info: RpcNodeInfo;
    readonly sync_info: RpcSyncInfo;
    readonly validator_info: RpcValidatorInfo;
}