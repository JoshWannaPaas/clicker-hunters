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
import { useRecoilState, useSetRecoilState } from "recoil";
import { Typography } from "@mui/material";
import _ from "lodash";

const NUM_CHESTS_PER_VAULT = 10;

/** The possible contents of ONE chest */
type ChestLoot = {
  [Item.CARBON]: number;
  [Item.KNOWLEDGE_SHARD]: number;
  [Item.LARIMAR]: number;
  [Item.VAULT_DIAMOND]: number;
};

/**
 * Generates the loot for a single chest inside of a vault.
 */
function generateChest(): ChestLoot {
  const currentChest: ChestLoot = {
    [Item.CARBON]: 0,
    [Item.KNOWLEDGE_SHARD]: 0,
    [Item.LARIMAR]: 0,
    [Item.VAULT_DIAMOND]: 0,
  };

  const carbonChance = 0.8;
  const knowledgeChance = 0.5;
  const larimarChance = 0.5;
  const vaultDiamondChance = 0.25;

  const maxCarbon = 20;
  const maxKnowledge = 10;
  const maxLarimar = 15;
  const maxVaultDiamonds = 5;

  if (Math.random() < carbonChance)
    currentChest[Item.CARBON] = _.random(0, maxCarbon);
  if (Math.random() < knowledgeChance)
    currentChest[Item.KNOWLEDGE_SHARD] = _.random(0, maxKnowledge);
  if (Math.random() < larimarChance)
    currentChest[Item.LARIMAR] = _.random(0, maxLarimar);
  if (Math.random() < vaultDiamondChance)
    currentChest[Item.VAULT_DIAMOND] = _.random(0, maxVaultDiamonds);

  return currentChest;
}

function generateVaultLoot(numChests: number): ChestLoot[] {
  const totalChests: ChestLoot[] = [];
  for (let i = 0; i < numChests; i++) totalChests[i] = generateChest();
  return totalChests;
}

// Displays All Chest Loot Totaled Up
function totalLoot(chestsLoot: ChestLoot[]): ChestLoot {
  const totalChestLoot: ChestLoot = {
    [Item.CARBON]: 0,
    [Item.KNOWLEDGE_SHARD]: 0,
    [Item.LARIMAR]: 0,
    [Item.VAULT_DIAMOND]: 0,
  };

  chestsLoot.forEach((chestLoot: ChestLoot) => {
    totalChestLoot[Item.CARBON] += chestLoot[Item.CARBON];
    totalChestLoot[Item.KNOWLEDGE_SHARD] += chestLoot[Item.KNOWLEDGE_SHARD];
    totalChestLoot[Item.LARIMAR] += chestLoot[Item.LARIMAR];
    totalChestLoot[Item.VAULT_DIAMOND] += chestLoot[Item.VAULT_DIAMOND];
  });

  return totalChestLoot;
}

export default function Home() {
  const [vaultMessage, setVaultMessage] = useState(
    `Use a Vault Rock to Run a vault!`,
  );

  const vaultTime = 60;
  const timeInterval = 1000;   // How many ms each "Vault Time" takes
  const numRocksForVault = 1;
  let currentVaultTime: number;
  const [runningVault, setRunningVault] = useState(false);
  const [vaultRocks, setVaultRocks] = useRecoilState(vaultRockSelector);

  const [currentVaultLoot, setVaultLoot] = useState<ChestLoot[]>([]);

  const setVaultDiamonds = useSetRecoilState(vaultDiamondSelector);
  const [larimar, setLarimar] = useRecoilState(larimarSelector);
  const [carbon, setCarbon] = useRecoilState(carbonSelector);
  const [knowledgeShards, setKnowledgeShards] = useRecoilState(
    knowledgeShardSelector,
  );

  // When button is pressed, wait vaultTime in timeInterval intervals for Vault to finish
  // Running a Vault is a countdown to generating loot
  const runVault = () => {
    if (runningVault) return;
    if (vaultRocks < numRocksForVault) return;

    setRunningVault(true);
    setVaultRocks(vaultRocks - numRocksForVault);
    currentVaultTime = vaultTime;

    const vaultRun = setInterval(() => {
      currentVaultTime--;
      setVaultMessage("Vault Ends In: " + currentVaultTime);

      if (currentVaultTime <= 0) {
        clearInterval(vaultRun);
        setVaultMessage("Vault is Finished! Run another vault!");
        setRunningVault(false);

        const newVaultLoot = generateVaultLoot(NUM_CHESTS_PER_VAULT);
        setVaultLoot(newVaultLoot);

        // Add vault loot to inventory
        newVaultLoot.forEach((currentChest: ChestLoot) => {
          setCarbon(
            (previousValue) => previousValue + currentChest[Item.CARBON],
          );
          setKnowledgeShards(
            (previousValue) =>
              previousValue + currentChest[Item.KNOWLEDGE_SHARD],
          );
          setLarimar(
            (previousValue) => previousValue + currentChest[Item.LARIMAR],
          );
          setVaultDiamonds(
            (previousValue) => previousValue + currentChest[Item.VAULT_DIAMOND],
          );
        });
      }
    }, timeInterval);
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
      {currentVaultLoot.map((chestLoot: ChestLoot, index: number) => (
        <Typography key={index}>
          **Chest {index + 1}** Carbon: {chestLoot[Item.CARBON]}, Knowledge:{" "}
          {chestLoot[Item.KNOWLEDGE_SHARD]}, Larimar: {chestLoot[Item.LARIMAR]},
          VDias: {chestLoot[Item.VAULT_DIAMOND]}
        </Typography>
      ))}
      {/*stuff*/}
    </main>
  );
}
