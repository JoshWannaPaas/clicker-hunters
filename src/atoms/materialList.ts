import { AtomEffect, atom } from "recoil";

export const materialListAtom = atom<Record<string, number>>({
  key: "materialListAtom",
  default: {
    "Vault Stone": 0, 
    "Chipped Vault Rock": 0,
    "Chromatic Iron": 0
  }
})
  
