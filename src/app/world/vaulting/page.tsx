"use client"

import React from "react";
export default function Home() {

    const [vaultMessage, setVaultMessage] = React.useState("Run a vault!");

    const vaultTime = 10;
    const timeInterval = 50;
    let currentVaultTime:number;
    let runningVault = false;
    const runVault = () => {
        if(!runningVault){
            currentVaultTime = vaultTime;

            let vaultRun = setInterval(function(){
                currentVaultTime--;
                setVaultMessage("Vault Ends In: " + currentVaultTime);

                if(currentVaultTime <= 0){
                    clearInterval(vaultRun);
                    generateVaultLoot();
                }
            }, timeInterval);
        }
    }


    const lootList = [
        "Vault Diamonds", "Larimar", "Carbon", "Knowledge Essence"
    ]
    const lootValues = [
        0, 0, 0, 0
    ]

    const [vaultLoot, setVaultLoot] = React.useState("");
    const [totalVaultLoot, setTotalVaultLoot] = React.useState("Nothing");

    const generateVaultLoot = () => {
        const currentLootValues = [
            0, 0, 0, 0
        ]

        for(let i = 0 ; i < lootValues.length; i++){
            console.log("Loot Value before: " + lootValues[i]);
            currentLootValues[i] = Math.floor(Math.random() * 100);
            lootValues[i] += currentLootValues[i];
            console.log("Loot Value after: " + lootValues[i]);     //???? im just going to sleep
        }

        let loot = "";
        for(let i = 0; i < lootList.length; i++)
            loot += lootList[i] + ": " + currentLootValues[i] + ", ";
        setVaultLoot(loot);

        let totalLoot = "";
        for(let i = 0; i < lootList.length; i++)
            totalLoot += lootList[i] + ": " + lootValues[i] + ", ";
        setTotalVaultLoot(totalLoot);
    }



    return (
      <main>
        <p>We came to vault, vault, vault, vault...</p>
        <button onClick={runVault}>{vaultMessage}</button>
        <p>Last Vault Run Loot: {vaultLoot}</p>
        <p>Total Vault Loot: {totalVaultLoot}</p>
      </main>
    )
  }