"use client";

import { Item, carbonSelector, inventoryAtom, knowledgeShardSelector, larimarSelector, vaultDiamondSelector, vaultRockSelector } from "@/atoms/inventory";
import { usernameAtom } from "@/atoms/username";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

export default function Home() {
  const [inventory, setInventory] = useRecoilState(inventoryAtom);

  // const [username, setUsername] = useRecoilState(usernameAtom);
  const [vaultMessage, setVaultMessage] = React.useState(
    `Use a Vault Rock to Run a vault!`,
  );


  const vaultTime = 10;
  const timeInterval = 100;
  const numRocksForVault = 1;
  let currentVaultTime: number;
  const [runningVault, setRunningVault] = React.useState(false);
  const [vaultRocks, setVaultRocks] = useRecoilState(vaultRockSelector);

  // When button is pressed, wait vaultTime in timeInterval intervals for Vault to finish
  // Running a Vault is a countdown to generating loot
  const runVault = () => {
    if (!runningVault && vaultRocks >= numRocksForVault) {
      setRunningVault(true);
      setVaultRocks(vaultRocks - numRocksForVault);
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

    // Stores the actual values for your Total Vault Loot
    const [lootValues, setLootValues] = React.useState([0, 0, 0, 0]);

    // Display of the Current/Total Vault Loot gotten
    const [lastVaultLoot, setLastVaultLoot] = React.useState("No Vault has been run yet");
    const [totalVaultLoot, setTotalVaultLoot] = React.useState("Nothing");

  const [vaultDiamonds, setVaultDiamonds] = useRecoilState(vaultDiamondSelector);
  const [larimar, setLarimar] = useRecoilState(larimarSelector);
  const [carbon, setCarbon] = useRecoilState(carbonSelector);
  const [knowledgeShards, setKnowledgeShards] = useRecoilState(knowledgeShardSelector);
  const [lastVaultMsg, setLastVaultMsg] = React.useState(
    "No Vault Has Been Run Yet",
  );

  enum Loot {
    CARBON, KNOWLEDGE_SHARD, LARIMAR, VAULT_DIAMOND
  }

  const generateVaultLoot = () => {
    const numChests = 10;
    const carbonChance = 0.8, knowledgeChance = 0.5, larimarChance = 0.5, vaultDiamondChance = 0.25;

    // Simulates chest loot. Space for numChests chests, and a value between 0-Max is generated for each item based on weights
    // let vaultLoot: [Item][number] = [Item.CARBON, Item.KNOWLEDGE_SHARD, Item.LARIMAR, Item.VAULT_DIAMOND][numChests];
    // let vaultLoot = [ Item.CARBON[], Item.KNOWLEDGE_SHARD[], Item.LARIMAR[], Item.VAULT_DIAMOND[] ];
    // let vaultLoot: [number][number] = [][numChests];
    let testLoot = [
      [0,0,0,0,0,0,0,0,0,0],  // CARBON
      [0,0,0,0,0,0,0,0,0,0],  // KNOWLEDGE_SHARD
      [0,0,0,0,0,0,0,0,0,0],  // LARIMAR
      [0,0,0,0,0,0,0,0,0,0]   // VAULT_DIAMOND
    ]

    let carbonObtained = 0, knowledgeObtained = 0, larimarObtained = 0, vaultDiamondsObtained = 0;

    for(let i = 0; i < numChests; i++){
      carbonObtained        = (Math.floor(Math.random() * 20));
      knowledgeObtained     = (Math.floor(Math.random() * 10));
      larimarObtained       = (Math.floor(Math.random() * 15));
      vaultDiamondsObtained = (Math.floor(Math.random() *  5));

      if(Math.random() < carbonChance){
        setCarbon(carbon + carbonObtained);
        testLoot[Loot.CARBON][i] = carbonObtained;
      } else {carbonObtained = 0}

      if(Math.random() < knowledgeChance){
        setKnowledgeShards(knowledgeShards + knowledgeObtained);
        testLoot[Loot.KNOWLEDGE_SHARD][i] = knowledgeObtained;
      } else {knowledgeObtained = 0}

      if(Math.random() < larimarChance){
        setLarimar(larimar + larimarObtained);
        testLoot[Loot.LARIMAR][i] = larimarObtained;
      } else {larimarObtained = 0}

      if(Math.random() < vaultDiamondChance){
        setVaultDiamonds(vaultDiamonds + vaultDiamondsObtained);
        testLoot[Loot.VAULT_DIAMOND][i] = vaultDiamondsObtained;
      } else {vaultDiamondsObtained = 0}


      console.log("**Chest " + (i+1) + "** Carbon: " + carbonObtained + " Knowledge: " + knowledgeObtained + 
                  " Larimar: " + larimarObtained + " VDias: " + vaultDiamondsObtained);
    }

    console.log(testLoot);
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
      {/* {lastVaultMsg} */}
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
