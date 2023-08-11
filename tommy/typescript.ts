/** STRINGLY TYPED DICTIONARIES */
const inventory: Record<string, number> = {
  Iron: 0,
  Gold: 1,
  Diamond: 3,
};
inventory["iron"] = 1;

/** "VARIABLY"-TYPED DICTIONARIES */

const IRON = "iron";
const GOLD = "gold";
const DIAMOND = "diamond";

const inventory2: Record<string, number> = {
  [IRON]: 0,
  [GOLD]: 1,
  [DIAMOND]: 3,
};
inventory2[IRON] = 1;

/** ENUM-Keyed DICTIONARIES */

export enum Item {
  IRON,
  GOLD,
  DIAMOND,
}
const inventory3: Record<Item, number> = {
  [Item.IRON]: 0,
  [Item.GOLD]: 1,
  [Item.DIAMOND]: 3,
};
inventory3[Item.GOLD] = 1;
