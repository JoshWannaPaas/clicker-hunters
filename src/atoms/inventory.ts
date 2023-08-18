import { AtomEffect, DefaultValue, atom, selector } from "recoil";

export enum Item {
  VAULT_STONE,
  CHIPPED_VAULT_ROCKS,
  CHROMATIC_IRON,
  VAULT_ROCK,
}

export const itemString: Record<Item, string> = {
  [Item.VAULT_STONE]: "Vault Stone",
  [Item.CHIPPED_VAULT_ROCKS]: "Chipped Vault Rock",
  [Item.CHROMATIC_IRON]: "Chromatic Iron",
  [Item.VAULT_ROCK]: "Vault Rock",
};

export const DEFAULT_INVENTORY = {
  [Item.VAULT_STONE]: 0,
  [Item.CHIPPED_VAULT_ROCKS]: 0,
  [Item.CHROMATIC_IRON]: 0,
  [Item.VAULT_ROCK]: 0,
}

export const inventoryInitialized = atom({
  key: "inventoryInitialized",
  default: false
});

/**
 * The source of truth
 */
export const inventoryAtom = atom<Record<Item, number>>({
  key: "inventoryAtom",
  default: DEFAULT_INVENTORY,
});

/**
 * Derived from truth
 */
export const vaultStoneSelector = selector<number>({
  key: "vaultStoneSelector",
  // Generate Derived State
  get: ({ get }) => {
    const inventory = get(inventoryAtom);
    return inventory[Item.VAULT_STONE] ?? 0;
  },
  // Update Derived State
  set: ({ get, set }, newValue) => {
    const inventory = get(inventoryAtom);
    const newVaultStone = newValue instanceof DefaultValue ? 0 : newValue;
    set(inventoryAtom, { ...inventory, [Item.VAULT_STONE]: newVaultStone });
  },
});

export const chromIronSelector = selector<number>({
  key: "chromIronSelector",
  // Generate Derived State
  get: ({ get }) => {
    const inventory = get(inventoryAtom);
    return inventory[Item.CHROMATIC_IRON] ?? 0;
  },
  // Update Derived State
  set: ({ get, set }, newValue) => {
    const inventory = get(inventoryAtom);
    const newChromIron = newValue instanceof DefaultValue ? 0 : newValue;
    set(inventoryAtom, { ...inventory, [Item.CHROMATIC_IRON]: newChromIron });
  },
});

export const vaultChipSelector = selector<number>({
  key: "vaultChipSelector",
  // Generate Derived State
  get: ({ get }) => {
    const inventory = get(inventoryAtom);
    return inventory[Item.CHIPPED_VAULT_ROCKS] ?? 0;
  },
  // Update Derived State
  set: ({ get, set }, newValue) => {
    const inventory = get(inventoryAtom);
    const newVaultChip = newValue instanceof DefaultValue ? 0 : newValue;
    set(inventoryAtom, {
      ...inventory,
      [Item.CHIPPED_VAULT_ROCKS]: newVaultChip,
    });
  },
});

export const vaultRockSelector = selector<number>({
  key: "vaultRockSelector",
  // Generate Derived State
  get: ({ get }) => {
    const inventory = get(inventoryAtom);
    return inventory[Item.VAULT_ROCK] ?? 0;
  },
  // Update Derived State
  set: ({ get, set }, newValue) => {
    const inventory = get(inventoryAtom);
    const newVaultRock = newValue instanceof DefaultValue ? 0 : newValue;
    set(inventoryAtom, { ...inventory, [Item.VAULT_ROCK]: newVaultRock });
  },
});

