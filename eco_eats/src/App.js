import React from "react";
import './App.css';
import WebcamCapture from './Webcam';
import OutputDisplay from './OutputDisplay';
import { Typography, Box } from '@mui/material';
import myImage from './logo.png';

function App() {
  const [isCaptureMode, setIsCaptureMode] = React.useState(true);
  const [currentUUID, setCurrentUUID] = React.useState("");

  return (
    <div className="App">
      <div
  style={{
    position: 'fixed',
    top: 0,
    right: 0,
    width: '100px',
    height: '100px',
    backgroundImage: `url(${myImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    zIndex: 9999, // to ensure it is displayed above other elements
  }}
/>

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
