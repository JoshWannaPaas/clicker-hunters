"use client";

import { Item, carbonSelector, inventoryAtom, knowledgeShardSelector, larimarSelector, vaultDiamondSelector, vaultGoldSelector, vaultRockSelector } from "@/atoms/inventory";
import { usernameAtom } from "@/atoms/username";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

export default function Home() {
  const vdToSell = 1;
  const [vaultDiamondPrice, setVaultDiamondPrice] = React.useState(2);

  const [vaultDiamonds, setVaultDiamonds] = useRecoilState(vaultDiamondSelector);
  const [vaultGold, setVaultGold] = useRecoilState(vaultGoldSelector);

  // Sell Item for Gold, and Randomize all Shop Prices after purchasing
  const sellVaultDiamonds = () => {
    setVaultDiamonds(vaultDiamonds - vdToSell);
    setVaultGold(vaultGold + vaultDiamondPrice);
    randomizePrice();
  }

  // Randomizes the prices of every item
  const randomizePrice = () => {
    setVaultDiamondPrice((Math.ceil(Math.random() * 10) % 3) + 1);
  }

  return (
    <main>
      <p>We came to sell, sell, sell, sell...</p>
      <button disabled={vaultDiamonds < vdToSell} onClick={sellVaultDiamonds}>
        Sell {vdToSell} Vault Diamonds for {vaultDiamondPrice} Gold!
      </button>
      <br /><br />
      <p>We came to buy, buy, buy, buy...</p>
    </main>
  );
}
