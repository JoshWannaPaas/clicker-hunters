import { inventoryAtom } from "@/atoms/inventory";
import { useRecoilState } from "recoil";
import React, { useEffect } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

  const MaterialSection = () => {
    const [inventory, setInventory] = useRecoilState(inventoryAtom);

    let inv = [];
    for(let i in inventory){
      inv.push(<Typography>{i}: {inventory[i]}</Typography>);
    }

    return (
        <div>
          <Accordion className="Inventory">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography id="invHeader-text">Inventory</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {inv}
            </AccordionDetails>
          </Accordion>
        </div>
    )
  }

  export default MaterialSection;