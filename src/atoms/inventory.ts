import { AtomEffect, DefaultValue, atom, selector } from "recoil";

export enum Item {
  CARBON,
  CHIPPED_VAULT_ROCK,
  CHROMATIC_IRON,
  KNOWLEDGE_SHARD,
  LARIMAR,
  VAULT_DIAMOND,
  VAULT_GOLD,
  VAULT_ROCK,
  VAULT_STONE,
}

export const itemString: Record<Item, string> = {
  [Item.CARBON]: "Carbon",
  [Item.CHIPPED_VAULT_ROCK]: "Chipped Vault Rocks",
  [Item.CHROMATIC_IRON]: "Chromatic Iron",
  [Item.KNOWLEDGE_SHARD]: "Knowledge Shards",
  [Item.LARIMAR]: "Larimar",
  [Item.VAULT_DIAMOND]: "Vault Diamonds",
  [Item.VAULT_GOLD]: "Vault Gold",
  [Item.VAULT_ROCK]: "Vault Rocks",
  [Item.VAULT_STONE]: "Vault Stone",
};

export const DEFAULT_INVENTORY = {
  [Item.CARBON]: 0,
  [Item.CHIPPED_VAULT_ROCK]: 0,
  [Item.CHROMATIC_IRON]: 0,
  [Item.KNOWLEDGE_SHARD]: 0,
  [Item.LARIMAR]: 0,
  [Item.VAULT_DIAMOND]: 0,
  [Item.VAULT_GOLD]: 0,
  [Item.VAULT_ROCK]: 0,
  [Item.VAULT_STONE]: 0,
}

export const inventoryInitialized = atom({
  key: "inventoryInitialized",
  default: false
});

/**
 * 
 */
export const inventoryAtom = atom<Record<Item, number>>({
  key: "inventoryAtom",
  default: DEFAULT_INVENTORY,
});

/**
 * Derived from truth
 */
export const carbonSelector = selector<number>({
  key: "carbonSelector",
  // Generate Derived State
  get: ({ get }) => {
    const inventory = get(inventoryAtom);
    return inventory[Item.CARBON] ?? 0;
  },
  // Update Derived State
  set: ({ get, set }, newValue) => {
    const inventory = get(inventoryAtom);
    const newCarbon = newValue instanceof DefaultValue ? 0 : newValue;
    set(inventoryAtom, { ...inventory, [Item.CARBON]: newCarbon });
  },
});

export const chippedVaultRockSelector = selector<number>({
  key: "vaultChipSelector",
  // Generate Derived State
  get: ({ get }) => {
    const inventory = get(inventoryAtom);
    return inventory[Item.CHIPPED_VAULT_ROCK] ?? 0;
  },
  // Update Derived State
  set: ({ get, set }, newValue) => {
    const inventory = get(inventoryAtom);
    const newVaultChip = newValue instanceof DefaultValue ? 0 : newValue;
    set(inventoryAtom, {
      ...inventory,
      [Item.CHIPPED_VAULT_ROCK]: newVaultChip,
    });
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
    const newItem = newValue instanceof DefaultValue ? 0 : newValue;
    set(inventoryAtom, { ...inventory, [Item.CHROMATIC_IRON]: newItem });
  },
});

export const knowledgeShardSelector = selector<number>({
  key: "knowledgeShardSelector",
  // Generate Derived State
  get: ({ get }) => {
    const inventory = get(inventoryAtom);
    return inventory[Item.KNOWLEDGE_SHARD] ?? 0;
  },
  // Update Derived State
  set: ({ get, set }, newValue) => {
    const inventory = get(inventoryAtom);
    const newItem = newValue instanceof DefaultValue ? 0 : newValue;
    set(inventoryAtom, { ...inventory, [Item.KNOWLEDGE_SHARD]: newItem });
  },
});

export const larimarSelector = selector<number>({
  key: "larimarSelector",
  // Generate Derived State
  get: ({ get }) => {
    const inventory = get(inventoryAtom);
    return inventory[Item.LARIMAR] ?? 0;
  },
  // Update Derived State
  set: ({ get, set }, newValue) => {
    const inventory = get(inventoryAtom);
    const newItem = newValue instanceof DefaultValue ? 0 : newValue;
    set(inventoryAtom, { ...inventory, [Item.LARIMAR]: newItem });
  },
});

export const vaultDiamondSelector = selector<number>({
  key: "vaultDiamondSelector",
  // Generate Derived State
  get: ({ get }) => {
    const inventory = get(inventoryAtom);
    return inventory[Item.VAULT_DIAMOND] ?? 0;
  },
  // Update Derived State
  set: ({ get, set }, newValue) => {
    const inventory = get(inventoryAtom);
    const newItem = newValue instanceof DefaultValue ? 0 : newValue;
    set(inventoryAtom, { ...inventory, [Item.VAULT_DIAMOND]: newItem });
  },
});

export const vaultGoldSelector = selector<number>({
  key: "vaultGoldSelector",
  // Generate Derived State
  get: ({ get }) => {
    const inventory = get(inventoryAtom);
    return inventory[Item.VAULT_GOLD] ?? 0;
  },
  // Update Derived State
  set: ({ get, set }, newValue) => {
    const inventory = get(inventoryAtom);
    const newItem = newValue instanceof DefaultValue ? 0 : newValue;
    set(inventoryAtom, { ...inventory, [Item.VAULT_GOLD]: newItem });
  },
});

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

