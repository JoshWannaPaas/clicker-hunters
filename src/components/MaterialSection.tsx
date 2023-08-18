import { Item, inventoryAtom, itemString } from "@/atoms/inventory";
import { useRecoilState } from "recoil";
import React, { useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const MaterialSection = () => {
  const [inventory, setInventory] = useRecoilState(inventoryAtom);
  
  const items = Object.entries(inventory);
  // Step 1 - Filter items to remove things where value is 0
  const heldItems = items.filter(([item, quantity]) => quantity !== 0);
  // Step 2 - Map items to Typography with the correct contents
  const heldItemsDisplay = heldItems.map(([item, quantity]) => (
        <Typography key={item}>
          {itemString[Number(item) as Item] }: {quantity}
        </Typography>
      ));


  // const inventoryDisplay = [];
  // for (let item of items) {
  //   inventoryDisplay.push(
  //     <Typography key={item[0]}>
  //       {item}: {item}
  //     </Typography>
  //   )
  // }

  

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
          {heldItems.map(([item, quantity]) => (
          <Typography key={item}>
            {itemString[Number(item) as Item] }: {quantity}
          </Typography>
        ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MaterialSection;


