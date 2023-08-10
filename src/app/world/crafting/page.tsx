"use client"

import { inventoryAtom } from "@/atoms/inventory";
import React from "react";
import { useRecoilState } from "recoil";

export default function Home() {

  /* Prototype Implementation
  // Names of Materials you have
  const materialList = [
    "Vault Stone", "Chipped Vault Rock", "Chromatic Iron"
  ]
  
  // Amounts of the materials you have
  const [materialValues, setMaterialValues] = React.useState([50, 50, 50]);


  // Materials Object/Dictionary
  const materials: Record<string, number> = {
    "Vault Stone": 50, 
    "Chipped Vault Rock": 50,
    "Chromatic Iron": 50
  }

  // String form of Name: Value
  const getMaterials =  () => {
    let msg = "";
    for(let i = 0; i < materialList.length; i++){
      msg += materialList[i] + ": " + materialValues[i];
      if(i != materialList.length-1)
        msg += ", ";
    }

    return msg;
  }


  // Craft Vault Rock
  const [vaultRock, setVaultRock] = React.useState(0);
  const vaultChipForRock = 4;
  const chromIronForRock = 1;

  const craftVaultRock = () => {
    if(materials["Chipped Vault Rock"] >= vaultChipForRock && materials["Chromatic Iron"] >= chromIronForRock){
      materials["Chipped Vault Rock"] -= vaultChipForRock;
      materials["Chromatic Iron"] -= chromIronForRock;
      setVaultRock(vaultRock + 1);
    }
  }
  */

  const [inventory, setInventory] = useRecoilState(inventoryAtom);

  const [vaultChips, setVaultChips] = React.useState(inventory["Chipped Vault Rock"] || 0);
  const [chromIron, setChromIron] = React.useState(inventory["Chromatic Iron"] || 0);
  const [vaultRocks, setVaultRocks] = React.useState(inventory["Vault Rock"] || 0);
  const vaultChipsForRock = 4;       // Number of Chipped Vault Rock used for a Vault Rock
  const chromIronForRock = 1;       // Number of Chromatic Iron used for a Vault Rock
  const numVaultRocksOutput = 1;    // Number of Vault Rocks crafted using the material amounts above

  const craftVaultRock = () => {
    if(inventory["Chipped Vault Rock"] >= vaultChipsForRock && inventory["Chromatic Iron"] >= chromIronForRock){
      // console.log("Before: " + inventory["Chipped Vault Rock"]);
      // let curChips = inventory["Chipped Vault Rock"] - vaultChipForRock;
      // setInventory({...inventory, "Chipped Vault Rock": curChips});
      // setInventory({...inventory, "Chromatic Iron": inventory["Chromatic Iron"] - chromIronForRock});
      // console.log("After: " + inventory["Chipped Vault Rock"]);
      
      // setVaultRock(vaultRock + numVaultRocksOutput);
      // if(!("Vault Rock" in inventory))
      //   setInventory({...inventory, "Vault Rock": numVaultRocksOutput});
      // else
      //   setInventory({...inventory, "Vault Rock": inventory["Vault Rock"] + numVaultRocksOutput});
      
      

      // Theres a bug here lmao
      // Doesnt subtract materials first time clicked, and resets back to 0 everytime you leave and come back and try to craft more
      setVaultChips(vaultChips - vaultChipsForRock);
      setChromIron(chromIron - chromIronForRock);
      setVaultRocks(vaultRocks + numVaultRocksOutput);
      setInventory({...inventory, "Chipped Vault Rock": vaultChips, "Chromatic Iron": chromIron, "Vault Rocks": vaultRocks + numVaultRocksOutput});
    }
  }

    return (
      <main>
        <p>We came to craft, craft, craft, craft...</p>
        <h3>Use {vaultChipsForRock} Chipped Vault Rocks and {chromIronForRock} Chromatic Iron to craft a Vault Rock</h3>
        <button onClick={craftVaultRock}>Craft a Vault Rock</button>
      </main>
    )
  }