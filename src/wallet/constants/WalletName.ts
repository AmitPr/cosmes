/**
 * The unique identifier of the wallet.
 */
export const WalletName = {
  SONAR: "sonar",
  STATION: "station",
  KEPLR: "keplr",
  LEAP: "leap",
  XDEFI: "xdefi",
  COMPASS: "compass",
  COSMOSTATION: "cosmostation",
  METAMASK_INJECTIVE: "metamask-injective",
  NINJI: "ninji",
  OWALLET: "owallet",
} as const;
export type WalletName = (typeof WalletName)[keyof typeof WalletName];
