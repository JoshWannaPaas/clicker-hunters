import { DEFAULT_INVENTORY, Item, inventoryAtom, inventoryInitialized } from "@/atoms/inventory";
import { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";

/** The key that the inventory is saved under in localStorage */
const INVENTORY_LOCAL_STORAGE_KEY = "inventory";

/**
 * A jank way to synchronize the inventory with localstorage.
 */
const InventorySynchronizer: React.FC = () => {
  const [inventory, setInventory] = useRecoilState(inventoryAtom);
  const [initialized, setInitialized] = useRecoilState(inventoryInitialized);

  // `useEffect` documentation: https://react.dev/reference/react/useEffect
  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Whenever `inventory` changed
    if (initialized) {
      localStorage.setItem(INVENTORY_LOCAL_STORAGE_KEY, JSON.stringify(inventory));
    } 
    // Only runs one time when the website first loads up
    else {
      const defaultInventory = JSON.stringify(DEFAULT_INVENTORY);
      // We load from the localStorage. If this is the user's first time, localStorage is `undefined` so we need a default
      const storedInvString = localStorage.getItem(INVENTORY_LOCAL_STORAGE_KEY) ?? defaultInventory;
      const storedInv : Record<Item, number> = JSON.parse(storedInvString);
      setInventory(storedInv);
      setInitialized(true);
    }
  }, [inventory, initialized, setInventory, setInitialized]);

  return null;
}
export default InventorySynchronizer;