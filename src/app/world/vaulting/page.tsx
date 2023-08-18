"use client";
/*************

import { inventoryAtom } from "@/atoms/inventory";
import { usernameAtom } from "@/atoms/username";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

// List of Loot gained from the vault
const lootList = [
  "Vault Diamonds",
  "Larimar",
  "Carbon",
  "Knowledge Shards",
] as const;

export default function Home() {
  const [inventory, setInventory] = useRecoilState(inventoryAtom);

  // const [username, setUsername] = useRecoilState(usernameAtom);

  // Click Button to run the Vault
  // const [vaultMessage, setVaultMessage] = React.useState(`Have ${username} run a vault!`);
  const [vaultMessage, setVaultMessage] = React.useState(
    `Use a Vault Rock to Run a vault!`,
  );

  // useEffect(() => {
  //     setVaultMessage(`Have ${username} run a vault!`);
  // }, [setVaultMessage, username]);

  const vaultTime = 10;
  const timeInterval = 100;
  const numRocksForVault = 1;
  let currentVaultTime: number;
  const [runningVault, setRunningVault] = React.useState(false);
  const [vaultRocks, setVaultRocks] = React.useState(
    inventory["Vault Rocks"] || 0,
  );

  // When button is pressed, wait vaultTime in timeInterval intervals for Vault to finish
  // Running a Vault is a countdown to generating loot
  const runVault = () => {
    if (!runningVault && vaultRocks >= numRocksForVault) {
      setRunningVault(true);
      setVaultRocks(vaultRocks - numRocksForVault);
      setInventory({
        ...inventory,
        "Vault Rocks": vaultRocks - numRocksForVault,
      });
      currentVaultTime = vaultTime;

      let vaultRun = setInterval(() => {
        currentVaultTime--;
        setVaultMessage("Vault Ends In: " + currentVaultTime);

        if (currentVaultTime <= 0) {
          clearInterval(vaultRun);
          generateVaultLoot();
          setVaultMessage("Vault is Finished! Run another vault!");
          setRunningVault(false);
        }
      }, timeInterval);
    }
  };

  /*
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
*/
/************

  const [vaultDiamonds, setVaultDiamonds] = React.useState(
    inventory["Vault Diamonds"] ?? 0,
  );
  const [larimar, setLarimar] = React.useState(inventory["Larimar"] ?? 0);
  const [carbon, setCarbon] = React.useState(inventory["Carbon"] ?? 0);
  const [knowledgeShards, setKnowledgeShards] = React.useState(
    inventory["Knowledge Shards"] ?? 0,
  );
  const [lastVaultMsg, setLastVaultMsg] = React.useState(
    "No Vault Has Been Run Yet",
  );

  const generateVaultLoot = () => {
    let vaultLoot = [0, 0, 0, 0];
    for (let i = 0; i < vaultLoot.length; i++)
      vaultLoot[i] = Math.floor(Math.random() * 100);

    setVaultDiamonds(vaultDiamonds + vaultLoot[0]);
    setLarimar(larimar + vaultLoot[1]);
    setCarbon(carbon + vaultLoot[2]);
    setKnowledgeShards(knowledgeShards + vaultLoot[3]);

    setInventory({
      ...inventory,
      "Vault Diamonds": vaultDiamonds + vaultLoot[0],
      Larimar: larimar + vaultLoot[1],
      Carbon: carbon + vaultLoot[2],
      "Knowledge Shards": knowledgeShards + vaultLoot[3],
    });

    // Display Bug here
    for (let i = 0; i < vaultLoot.length; i++) {
      if (i == vaultLoot.length - 1)
        setLastVaultMsg(lastVaultMsg + lootList[i] + ": " + vaultLoot[i]);
      setLastVaultMsg(lastVaultMsg + lootList[i] + ": " + vaultLoot[i] + ", ");
    }
  };

  return (
    <main>
      <p>We came to vault, vault, vault, vault...</p>
      <button
        disabled={runningVault || vaultRocks < numRocksForVault}
        onClick={runVault}
      >
        {vaultMessage}
      </button>
      <h3>Last Vault Run Loot</h3>
      {lastVaultMsg}
    </main>
  );
}

// const Website = () => {
//     const [username, setUsername] = React.useState("Tommy");
//     return (
//         <Navbar name={username}/>
//     )
// }

// const Navbar: React.FC<{name: string}> = ({name}) => {
//     return (
//         <div>
//             <img />
//             <WelcomeMessage name={name}/>
//             <ProfileSection name={name}/>
//         </div>
//     )
// }
// RecoilRoot
// const ProfileSection: React.FC<{name: string}> = ({name}) => {
//     return <div>Hello {name}</div>
// }

// const WelcomeMessage: React.FC<{name: string}> = ({name}) => {
//     return <div>Welcome {name}</div>
// }


**********/