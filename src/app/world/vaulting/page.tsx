"use client"

import React from "react";
export default function Home() {

    // Click Button to run the Vault
    const [vaultMessage, setVaultMessage] = React.useState("Run a vault!");

    const vaultTime = 10;
    const timeInterval = 100;
    let currentVaultTime:number;
    let runningVault = false;

    // When button is pressed, wait vaultTime in timeInterval intervals for Vault to finish
    // Running a Vault is a countdown to generating loot
    const runVault = () => {
        if(!runningVault){
            currentVaultTime = vaultTime;

            let vaultRun = setInterval(function(){
                currentVaultTime--;
                setVaultMessage("Vault Ends In: " + currentVaultTime);

                if(currentVaultTime <= 0){
                    clearInterval(vaultRun);
                    generateVaultLoot();
                    setVaultMessage("Vault is Finished! Run another vault!");
                }
            }, timeInterval);
        }
    }


    // List of Loot gained from the vault
    const lootList = [
        "Vault Diamonds", "Larimar", "Carbon", "Knowledge Essence"
    ]

    // Stores the actual values for your Total Vault Loot
    const [lootValues, setLootValues] = React.useState([0, 0, 0, 0]);

    // Display of the Current/Total Vault Loot gotten
    const [vaultLoot, setVaultLoot] = React.useState("No Vault has been run yet");
    const [totalVaultLoot, setTotalVaultLoot] = React.useState("Nothing");

    const generateVaultLoot = () => {
        // Loot gained this Vault Run
        const currentLootValues = [
            0, 0, 0, 0
        ]

        // Generate the amount of loot from the current run, and add it to the total lootValues
        for(let i = 0 ; i < lootValues.length; i++){
            currentLootValues[i] = Math.floor(Math.random() * 100);
            lootValues[i] += currentLootValues[i];
        }

        // Create the String text for the current Vault Run
        let loot = "";
        for(let i = 0; i < lootList.length; i++){
            loot += lootList[i] + ": " + currentLootValues[i];
            if(i != lootList.length-1)
                loot += ", ";
        }
        setVaultLoot(loot);

        // Create the String text for the Total Vault Loot
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