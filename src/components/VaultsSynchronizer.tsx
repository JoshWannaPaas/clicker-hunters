"use client";

import { DEFAULT_VAULT_END_TIMES, vaultsStartedAtom, vaultsInitialized, VaultEndTime } from "@/atoms/vaults";
import { useEffect } from "react";
import { useRecoilState } from "recoil";


/** The key that the Vaults are saved under in localStorage */
const VAULTS_LOCAL_STORAGE_KEY = "vaults";

/**
 * A jank way to synchronize the inventory with localstorage.
 */
const VaultsSynchronizer: React.FC = () => {
  const [vaults, setVaults] = useRecoilState(vaultsStartedAtom);
  const [initialized, setInitialized] = useRecoilState(vaultsInitialized);

  // `useEffect` documentation: https://react.dev/reference/react/useEffect
  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Whenever `inventory` changed
    if (initialized) {
      localStorage.setItem(VAULTS_LOCAL_STORAGE_KEY, JSON.stringify(vaults));
    } 
    // Only runs one time when the website first loads up
    else {
      const defaultVaults = JSON.stringify(DEFAULT_VAULT_END_TIMES);
      // We load from the localStorage. If this is the user's first time, localStorage is `undefined` so we need a default
      const storedVaultsString = localStorage.getItem(VAULTS_LOCAL_STORAGE_KEY) ?? defaultVaults;
      const storedVaults : Record<number, VaultEndTime> = JSON.parse(storedVaultsString);
      setVaults(storedVaults);
      setInitialized(true);
    }
  }, [vaults, initialized, setVaults, setInitialized]);

  return null;
}
export default VaultsSynchronizer;