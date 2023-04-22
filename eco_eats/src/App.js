import React from "react";
import './App.css';
import WebcamCapture from './Webcam';
import OutputDisplay from './OutputDisplay';
import { Typography, Box } from '@mui/material';


function App() {
  const [isCaptureMode, setIsCaptureMode] = React.useState(true);

  return (
    <div className="App">
      <Box m={1}>
        <Typography variant="h3">
          Eco Eats
        </Typography>
      </Box>
      <WebcamCapture 
        isCaptureMode={isCaptureMode}
        setIsCaptureMode={setIsCaptureMode}
      />
      <OutputDisplay isCaptureMode={isCaptureMode}/>

    </div>
  );
}

export default App;
