"use client";

import {
  chromIronSelector,
  inventoryAtom,
  vaultChipSelector,
  vaultRockSelector,
} from "@/atoms/inventory";
import React from "react";
import { useRecoilState } from "recoil";

export default function Home() {
  const [vaultChips, setVaultChips] = useRecoilState(vaultChipSelector);
  const [chromIron, setChromIron] = useRecoilState(chromIronSelector);
  const [vaultRocks, setVaultRocks] = useRecoilState(vaultRockSelector);

  const vaultChipsForRock = 4; // Number of Chipped Vault Rock used for a Vault Rock
  const chromIronForRock = 1; // Number of Chromatic Iron used for a Vault Rock
  const numVaultRocksOutput = 1; // Number of Vault Rocks crafted using the material amounts above

  // If you have enough materials, use up the materials and craft a rock
  const craftVaultRock = () => {
    if (vaultChips >= vaultChipsForRock && chromIron >= chromIronForRock) {
      setVaultChips(vaultChips - vaultChipsForRock);
      setChromIron(chromIron - chromIronForRock);
      setVaultRocks(vaultRocks + numVaultRocksOutput);
    }
  };

  return (
    <main>
      <p>We came to craft, craft, craft, craft...</p>
      <h3>
        Use {vaultChipsForRock} Chipped Vault Rocks and {chromIronForRock}{" "}
        Chromatic Iron to craft a Vault Rock
      </h3>
      <button onClick={craftVaultRock}>Craft a Vault Rock</button>
    </main>
  );
}
