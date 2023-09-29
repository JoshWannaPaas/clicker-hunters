"use client";

import {
  chromIronSelector,
  inventoryAtom,
  chippedVaultRockSelector,
  vaultRockSelector,
} from "@/atoms/inventory";
import LifecycleExample from "@/components/LifecycleExample";
import { IconButton, Snackbar } from "@mui/material";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import CloseIcon from '@mui/icons-material/Close';

const vaultChipsForRock = 4; // Number of Chipped Vault Rock used for a Vault Rock
const chromIronForRock = 1; // Number of Chromatic Iron used for a Vault Rock
const numVaultRocksOutput = 1; // Number of Vault Rocks crafted using the material amounts above

export default function Home() {

  const vaultRocks = useRecoilValue(vaultRockSelector);
  const craftVaultRock = useCraftVaultRock();
  
  const [visibleSnackbar, setVisibleSnackbar] = useState(false);
  const oldVaultRocks = useRef(vaultRocks)
  useEffect(() => {
    // On Mount, oldVaultRocks === vaultRocks
    // On Update, oldVaultRocks !== vaultRocks
    console.log("Old Vault Rocks:", oldVaultRocks.current);
    console.log("Now Vault Rocks:", vaultRocks);
    console.log("Did we go up?", oldVaultRocks.current < vaultRocks)
    // On Mount + Any Changes to `vaultRocks`
    if(vaultRocks > 0 && oldVaultRocks.current < vaultRocks) {
      console.log("Showing Snackbar");
      setVisibleSnackbar(true);
    }
    oldVaultRocks.current = vaultRocks;
  }, [vaultRocks]);

  return (
    <main>
      <Snackbar
        open={visibleSnackbar}
        autoHideDuration={6000}
        onClose={() => setVisibleSnackbar(false)}
        message="Head to Vaulting to run a vault!"
        action={<IconButton onClick={() => setVisibleSnackbar(false)}><CloseIcon fontSize='small'/></IconButton>}
      />

      <p>We came to craft, craft, craft, craft...</p>
      <h3>
        Use {vaultChipsForRock} Chipped Vault Rocks and {chromIronForRock}{" "}
        Chromatic Iron to craft a Vault Rock
      </h3>
      <button onClick={craftVaultRock}>Craft a Vault Rock</button>
    </main>
  );
}

export const useCraftVaultRock = () => {
  const [vaultChips, setVaultChips] = useRecoilState(chippedVaultRockSelector);
  const [chromIron, setChromIron] = useRecoilState(chromIronSelector);
  const [vaultRocks, setVaultRocks] = useRecoilState(vaultRockSelector);

  // If you have enough materials, use up the materials and craft a rock
  const craftVaultRock = useCallback(() => {
    if (vaultChips >= vaultChipsForRock && chromIron >= chromIronForRock) {
      setVaultChips(vaultChips - vaultChipsForRock);
      setChromIron(chromIron - chromIronForRock);
      setVaultRocks(vaultRocks + numVaultRocksOutput);
    }
  }, [vaultChips, chromIron, setVaultChips, setChromIron, setVaultRocks, vaultRocks]);

  return craftVaultRock;
}


function main () {
  // `a` does not exist
  let a = 2;
  // `a` does exist
  function addTwo (b) {
    // `a` does exist
    return a + b;
  }
  // `a` does exist
  return addTwo;
}
// `a` does not exist

const adder = main();

const x = adder(5); // equals 7

