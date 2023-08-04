"use client"

import React from "react";
import { AtomEffect, atom } from "recoil";
import MaterialSection from '@/components/MaterialSection'
import { materialListAtom } from "@/atoms/materialList";



export default function Home() {
    const vaultChipChance = 0.2;
    const vaultStoneForChromaticIron = 20;

    const [vaultStone, setVaultStone] = React.useState(0);
    const [vaultChip, setVaultChip] = React.useState(0);
    
    const [chromaticIron, setChromaticIron] = React.useState(0);
    const [chromaticIronReq, setChromaticIronReq] = React.useState("Get " + vaultStoneForChromaticIron + " Vault Stone to unlock Chromatic Iron");


    //****  Button Events  ****/


    // 20% Chance to get a Chipped Vault Rock from mining Vault Stone
    const mineVaultStone = () => {
        if(Math.random() <= vaultChipChance){

          /*
          // To update the value of b
          const oldDictionary = {a: 1, b: 2}
          const newDictionary = {...oldDictionary, b: 3}
          
          const [list, setList] = ....
          setList({...list, b: 3})
          // newDictionary is {a: 1, b: 3}
          */

          setVaultChip(vaultChip+1);
          
          
          
        }
        else
            setVaultStone(vaultStone+1);
    }

    // You need 20 Vault Stone before you can start mining Chromatic Iron
    let canMineChromaticIron = false;
    const mineChromaticIron = () => {
        if(vaultStone >= vaultStoneForChromaticIron && !canMineChromaticIron){
            setChromaticIronReq("Mine Chromatic Iron");
            canMineChromaticIron = true;
        }
        if(canMineChromaticIron)
            setChromaticIron(chromaticIron+1);
    }

    return (
      <main>
        <p>We came to dig, dig, dig, dig...</p>
        
        <p>Vault Stone: {vaultStone}</p>
        <p>Chipped Vault Rock: {vaultChip}</p>
        <p>Chromatic Iron: {chromaticIron}</p>

        <button onClick={mineVaultStone}>Mine Vault Stone</button>
        <button onClick={mineChromaticIron}>{chromaticIronReq}</button>

      </main>
    )
  }