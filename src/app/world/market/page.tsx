"use client";

import { Item, carbonSelector, inventoryAtom, knowledgeShardSelector, larimarSelector, vaultDiamondSelector, vaultRockSelector } from "@/atoms/inventory";
import { usernameAtom } from "@/atoms/username";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

export default function Home() {
  return (
    <main>
      <p>We came to sell, sell, sell, sell...</p>
    </main>
  );
}
