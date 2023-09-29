import { AtomEffect, DefaultValue, atom, selector } from "recoil";

// export const INACTIVE_VAULT = new Date(0);

export type VaultEndTime = number | undefined;

/** The Next.js server will assume this state at first before the client loads the true values from local storage */
export const DEFAULT_VAULT_END_TIMES : Record<number, VaultEndTime>= {
  0: undefined,
  1: undefined
}

export const vaultsInitialized = atom({
  key: "vaultsInitialized",
  default: false
})

// const endTime = Date.now() + vaultDuration;

// Number is which Vault (Portal) is being run, so 0 is the first vault portal, etc
// Date is the finish time of the vault
export const vaultsStartedAtom = atom<Record<number, VaultEndTime>>({
  key: "vaultsStartedAtom",
  default: DEFAULT_VAULT_END_TIMES
})


