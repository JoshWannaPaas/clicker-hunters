"use client";

import {
  Item,
  carbonSelector,
  inventoryAtom,
  knowledgeShardSelector,
  larimarSelector,
  vaultDiamondSelector,
  vaultRockSelector,
} from "@/atoms/inventory";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { Typography } from "@mui/material";

export default function Home() {
  const [vaultMessage, setVaultMessage] = useState(
    `Use a Vault Rock to Run a vault!`,
  );

  const vaultTime = 10;
  const timeInterval = 100;
  const numRocksForVault = 1;
  let currentVaultTime: number;
  const [runningVault, setRunningVault] = useState(false);
  const [vaultRocks, setVaultRocks] = useRecoilState(vaultRockSelector);

  // When button is pressed, wait vaultTime in timeInterval intervals for Vault to finish
  // Running a Vault is a countdown to generating loot
  const runVault = () => {
    if (runningVault) return;
    if (vaultRocks < numRocksForVault) return;

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
  };

  const [vaultDiamonds, setVaultDiamonds] =
    useRecoilState(vaultDiamondSelector);
  const [larimar, setLarimar] = useRecoilState(larimarSelector);
  const [carbon, setCarbon] = useRecoilState(carbonSelector);
  const [knowledgeShards, setKnowledgeShards] = useRecoilState(
    knowledgeShardSelector,
  );
  const [lastVaultMsg, setLastVaultMsg] = useState([
    <Typography key={"dummy"}></Typography>,
  ]);

  let msgBuffer = [<Typography key={"dummy"}></Typography>];

  const generateVaultLoot = () => {
    const numChests = 10;
    const carbonChance = 0.8,
      knowledgeChance = 0.5,
      larimarChance = 0.5,
      vaultDiamondChance = 0.25;

    let totalCarbon = 0,
      totalKnowledge = 0,
      totalLarimar = 0,
      totalVaultDiamonds = 0;

    for (let i = 0; i < numChests; i++) {
      // Initially, all loot in this chest is empty
      let carbonObtained = 0;
      let knowledgeObtained = 0;
      let larimarObtained = 0;
      let vaultDiamondsObtained = 0;
      
      // If you are lucky, they get populated
      if (Math.random() < carbonChance)
        carbonObtained = Math.floor(Math.random() * 20);
      if (Math.random() < knowledgeChance)
        knowledgeObtained = Math.floor(Math.random() * 10);
      if (Math.random() < larimarChance)
        larimarObtained = Math.floor(Math.random() * 15);
      if (Math.random() < vaultDiamondChance)
        vaultDiamondsObtained = Math.floor(Math.random() * 5);
      
      // Increment total resources by obtained
      totalCarbon += carbonObtained;
      totalKnowledge += knowledgeObtained;
      totalLarimar += larimarObtained;
      totalVaultDiamonds += vaultDiamondsObtained;

      // Push to Last Vault Run Loot message
      msgBuffer.push(
        <Typography key={"dummy"}>
          **Chest {i + 1}** Carbon: {carbonObtained}, Knowledge:{" "}
          {knowledgeObtained}, Larimar: {larimarObtained}, VDias:{" "}
          {vaultDiamondsObtained}
        </Typography>,
      );
    }

    setCarbon(carbon + totalCarbon);
    setKnowledgeShards(knowledgeShards + totalKnowledge);
    setLarimar(larimar + totalLarimar);
    setVaultDiamonds(vaultDiamonds + totalVaultDiamonds);

    msgBuffer.push(
      <Typography key={"dummy"}>
        **Total** Carbon: {totalCarbon}, Knowledge: {totalKnowledge}, Larimar:{" "}
        {totalLarimar}, VDias: {totalVaultDiamonds}
      </Typography>,
    );
    setLastVaultMsg(msgBuffer);
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
