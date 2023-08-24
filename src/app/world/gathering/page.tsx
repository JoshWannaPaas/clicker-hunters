"use client";

import React from "react";
import { AtomEffect, atom, useRecoilState } from "recoil";
import MaterialSection from "@/components/MaterialSection";
import {
  chromIronSelector,
  chippedVaultRockSelector,
  vaultStoneSelector,
} from "@/atoms/inventory";

export default function Home() {
  const vaultChipChance = 0.2;
  const vaultStoneForChromaticIron = 20;
  
  const [vaultStone, setVaultStone] = useRecoilState(vaultStoneSelector);
  const [vaultChip, setVaultChip] = useRecoilState(chippedVaultRockSelector);
  const [chromaticIron, setChromaticIron] = useRecoilState(chromIronSelector);
  
  // Make these global at some point
  const [canMineChromaticIron, setCanMineChromaticIron] = React.useState(false)
  const [chromaticIronReq, setChromaticIronReq] = React.useState(
    "Get " +
      vaultStoneForChromaticIron +
      " Vault Stone to unlock Chromatic Iron",
  );


  //****  Button Events  ****/


  // <20%> Chance to get a Chipped Vault Rock from mining Vault Stone
  const mineVaultStone = () => {
    if (Math.random() <= vaultChipChance)
      setVaultChip(vaultChip + 1);
    else
      setVaultStone(vaultStone + 1);
  };

  // You need <20> Vault Stone before you can start mining Chromatic Iron
  const mineChromaticIron = () => {
    if (vaultStone >= vaultStoneForChromaticIron && !canMineChromaticIron) {
      setChromaticIronReq("Mine Chromatic Iron");
      setCanMineChromaticIron(true);
    }
    if (canMineChromaticIron) 
      setChromaticIron(chromaticIron + 1);
  };

  // Reset Inventory for Debugging Purposes
  const resetInventory = () => {
    setVaultChip(0);
    setVaultStone(0);
    setChromaticIron(0);
    setChromaticIronReq(
      "Get " +
        vaultStoneForChromaticIron +
        " Vault Stone to unlock Chromatic Iron",
    );
  };

  return (
    <main>
      <p>We came to dig, dig, dig, dig...</p>

      {/* <p>Vault Stone: {vaultStone}</p>
      <p>Chipped Vault Rock: {vaultChip}</p>
      <p>Chromatic Iron: {chromaticIron}</p> */}

      <button onClick={mineVaultStone}>Mine Vault Stone</button>
      <br />
      <br />
      <button onClick={mineChromaticIron}>{chromaticIronReq}</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <button onClick={resetInventory}>
        !!! Click here to reset your inventory !!!
      </button>
    </main>
  );
}
