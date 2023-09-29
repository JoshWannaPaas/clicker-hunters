# technically done
make a market, where you can sell items from the vault for vault currency, in a random given range
bag space for vaulting. simulate rarity and quantity of chests by having items generate on a percentage with a certain quantity


# higher prio
make vaults run even when youre not on the page
  - Date.now() gives you milliseconds since Feb 1, 19XX
  - startTime = Date.now() which is an integer (ms) technically not needed to save in ls
  - finishTime = startTime + timeInterval, which you do save in ls
  - when you load, if (Date.now() >= finishTime)
make "unlock states" where once an item is unlocked, it will stay shown in the inventory even when quantity is 0
  - You can make count of an item (number | undefined) and hide the name if undefined. 
make these states for things like the ability to mine chromatic iron as well
make a reset inventory button restore back to DEFAULT_INVENTORY
  
Data table for inventory
nav bar using App 



# later on
bounty system, maybe using Stepper?