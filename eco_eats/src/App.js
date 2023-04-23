import React, { useEffect } from "react";
import './App.css';
import WebcamCapture from './Webcam';
import OutputDisplay from './OutputDisplay';
import { Typography, Box } from '@mui/material';
import {v4 as uuidv4} from 'uuid';


function App() {
  const [isCaptureMode, setIsCaptureMode] = React.useState(true);
  const [currentUUID, setCurrentUUID] = React.useState(uuidv4());
//   useEffect(()=>{
//     const x=;
//   setCurrentUUID(x);
//   console.log(x)
// },[]);
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
        currentUUID={currentUUID}
      />
      <OutputDisplay isCaptureMode={isCaptureMode} currentUUID={currentUUID}/>

    </div>
  );
}

// export const SERVER_URL = 'https://ecoeats.xyz';
export const SERVER_URL = 'http://127.0.0.1:5000';

export default App;
