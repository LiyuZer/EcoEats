import React, { useEffect } from "react";
import './App.css';
import WebcamCapture from './Webcam';
import OutputDisplay from './OutputDisplay';
import { Typography, Box } from '@mui/material';
import myImage from './logo.png';
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
      <Box display="flex" flexDirection="row" m={1} mb={-1} width="100%" justifyContent="center">
        <Typography variant="h3" style={{ fontFamily: 'Yatra One' }}>
          Eco Eats
        </Typography>
        <div
          style={{
            width: '50px',
            height: '50px',
            backgroundImage: `url(${myImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            zIndex: 9999, // to ensure it is displayed above other elements
          }}
        />
      </Box>
      <Typography variant="subtitle2" style={{ fontFamily: 'Yatra One' }}>
          Let's taco 'bout sustainable eating!
      </Typography>
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
