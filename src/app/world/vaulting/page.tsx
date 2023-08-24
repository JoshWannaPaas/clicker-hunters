"use client";

import { Item, carbonSelector, inventoryAtom, knowledgeShardSelector, larimarSelector, vaultDiamondSelector, vaultRockSelector } from "@/atoms/inventory";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { Typography } from "@mui/material";

export default function Home() {
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

  const [vaultDiamonds, setVaultDiamonds] = useRecoilState(vaultDiamondSelector);
  const [larimar, setLarimar] = useRecoilState(larimarSelector);
  const [carbon, setCarbon] = useRecoilState(carbonSelector);
  const [knowledgeShards, setKnowledgeShards] = useRecoilState(knowledgeShardSelector);
  const [lastVaultMsg, setLastVaultMsg] = React.useState([<Typography></Typography>]);

  enum Loot {
    CARBON, KNOWLEDGE_SHARD, LARIMAR, VAULT_DIAMOND
  }

  let msgBuffer = [<Typography></Typography>];

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
    let totalCarbon = 0, totalKnowledge = 0, totalLarimar = 0, totalVaultDiamonds = 0;
    

    for(let i = 0; i < numChests; i++){
      carbonObtained        = (Math.floor(Math.random() * 20));
      knowledgeObtained     = (Math.floor(Math.random() * 10));
      larimarObtained       = (Math.floor(Math.random() * 15));
      vaultDiamondsObtained = (Math.floor(Math.random() *  5));

      if(Math.random() < carbonChance){
        totalCarbon += carbonObtained;
        testLoot[Loot.CARBON][i] = carbonObtained;
      } else {carbonObtained = 0}

      if(Math.random() < knowledgeChance){
        totalKnowledge += knowledgeObtained;
        testLoot[Loot.KNOWLEDGE_SHARD][i] = knowledgeObtained;
      } else {knowledgeObtained = 0}

      if(Math.random() < larimarChance){
        totalLarimar += larimarObtained;
        testLoot[Loot.LARIMAR][i] = larimarObtained;
      } else {larimarObtained = 0}

      if(Math.random() < vaultDiamondChance){
        totalVaultDiamonds += vaultDiamondsObtained;
        testLoot[Loot.VAULT_DIAMOND][i] = vaultDiamondsObtained;
      } else {vaultDiamondsObtained = 0}


      console.log("**Chest " + (i+1) + "** Carbon: " + carbonObtained + ", Knowledge: " + knowledgeObtained + 
                  ", Larimar: " + larimarObtained + ", VDias: " + vaultDiamondsObtained);

      // lastVaultMsg += "**Chest " + (i+1) + "** Carbon: " + carbonObtained + " Knowledge: " + knowledgeObtained + 
      // " Larimar: " + larimarObtained + " VDias: " + vaultDiamondsObtained + "\n";

      msgBuffer.push(<Typography>**Chest {i+1}** Carbon: {carbonObtained}, Knowledge: {knowledgeObtained}, Larimar: {larimarObtained}, VDias: {vaultDiamondsObtained}</Typography>)
    }
    
    setCarbon(carbon + totalCarbon);
    setKnowledgeShards(knowledgeShards + totalKnowledge);
    setLarimar(larimar + totalLarimar);
    setVaultDiamonds(vaultDiamonds + totalVaultDiamonds);
    
    msgBuffer.push(<Typography>**Total** Carbon: {totalCarbon}, Knowledge: {totalKnowledge}, Larimar: {totalLarimar}, VDias: {totalVaultDiamonds}</Typography>)
    setLastVaultMsg(msgBuffer);
    // console.log(testLoot);
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
