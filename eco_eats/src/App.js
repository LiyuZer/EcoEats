import React from "react";
import './App.css';
import WebcamCapture from './Webcam';
import OutputDisplay from './OutputDisplay';
import { Typography, Box } from '@mui/material';


function App() {
  const [isCaptureMode, setIsCaptureMode] = React.useState(true);
  const [currentUUID, setCurrentUUID] = React.useState("");

  return (
    <div className="App">
      <Box m={1}>
        <Typography variant="h3" style={{ fontFamily: 'Yatra One' }}>
          Eco Eats
        </Typography>
      </Box>
      <WebcamCapture 
        isCaptureMode={isCaptureMode}
        setIsCaptureMode={setIsCaptureMode}
        setCurrentUUID={setCurrentUUID}
      />
      <OutputDisplay isCaptureMode={isCaptureMode} currentUUID={currentUUID}/>

    </div>
  );
}

export const SERVER_URL = 'ecoeats.xyz';
// export const SERVER_URL = '127.0.0.1:5000';

export default App;
