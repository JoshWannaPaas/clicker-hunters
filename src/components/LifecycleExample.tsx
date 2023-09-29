import { Box, Button, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react"

const LifecycleExample: React.FC = () => {
  const [scoreVisible, setScoreVisible] = useState(true);
  const [score, setScore] = useState(0);
  console.log("LifecycleExample got called");

  // On Change Listener
  useEffect(() => {
    console.log("Score changed to: ", score);
  }, [score])

  return (
    <Paper sx={{p:2, m: 3}}>
      <Button onClick={() => setScoreVisible(!scoreVisible)} variant='contained'>Toggle Visibility</Button>
      <Button onClick={() => setScore(old => old + 1)} variant='contained'> Increase Score </Button>
      {scoreVisible && (
        <ScoreVisualizer score={score}/>
      )}
    </Paper>
  )
}
export default LifecycleExample;


const ScoreVisualizer : React.FC<{score: number}> = ({score}) => {

  useEffect(() => {
    // Part 1 - Runs just after this component is created
    console.log("On Mount!");

    // Part 2 - Runs just before this component is deleted
    return () => {
      console.log("On Unmount")
    }
  }, []);

  // Part 3 - Runs on every render
  console.log("ScoreVisualizer got re-rendered");

  return (
    <Box>
      <Typography>{score}</Typography>
    </Box>
  )
}