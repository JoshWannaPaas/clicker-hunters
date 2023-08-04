"use client"

import React from "react";
export default function Home() {

    const [vaultMessage, setVaultMessage] = React.useState("Run a vault!");

    const vaultTime = 10;
    const timeInterval = 100;
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
    const [lootValues, setLootValues] = React.useState([0, 0, 0, 0]);

    const [vaultLoot, setVaultLoot] = React.useState("No Vault has been run yet");
    const [totalVaultLoot, setTotalVaultLoot] = React.useState("Nothing");

    const generateVaultLoot = () => {
        const currentLootValues = [
            0, 0, 0, 0
        ]

        for(let i = 0 ; i < lootValues.length; i++){
            currentLootValues[i] = Math.floor(Math.random() * 100);
            lootValues[i] += currentLootValues[i];
        }

        let loot = "";
        for(let i = 0; i < lootList.length; i++){
            loot += lootList[i] + ": " + currentLootValues[i];
            if(i != lootList.length-1)
                loot += ", ";
        }
        setVaultLoot(loot);

        let totalLoot = "";
        for(let i = 0; i < lootList.length; i++){
            totalLoot += lootList[i] + ": " + lootValues[i];
            if(i != lootList.length-1)
                totalLoot += ", ";
        }
        setTotalVaultLoot(totalLoot);
    }



    return (
      <main>
        <p>We came to vault, vault, vault, vault...</p>
        <button onClick={runVault}>{vaultMessage}</button>
        <h3>Last Vault Run Loot</h3>
        <p>{vaultLoot}</p>
        <h3>Total Vault Loot</h3>
        <p>{totalVaultLoot}</p>
      </main>
    )
  }