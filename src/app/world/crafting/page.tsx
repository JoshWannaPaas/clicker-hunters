"use client"

import React from "react";

export default function Home() {

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


    return (
      <main>
        <p>We came to craft, craft, craft, craft...</p><br />
        <h2>Materials</h2>
        <p>{getMaterials()}</p>
        <h2>Crafting</h2>
        <h3>Use {vaultChipForRock} Chipped Vault Rocks and {chromIronForRock} Chromatic Iron to craft a Vault Rock</h3>
        <button onClick={craftVaultRock}>Craft a Vault Rock</button>
        <p>Vault Rock: {vaultRock}</p>
      </main>
    )
  }