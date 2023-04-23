import React from "react";
import Webcam from "react-webcam";
import { Button, Box } from '@mui/material';
import axios from 'axios';
import { SERVER_URL } from "./App";
import {v4 as uuidv4} from 'uuid';


process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const videoConstraints = {
  // The height and width here are not the dimensions of the video on the user's screen
  width: 1280,
  height: 720,
  facingMode: "environment"
};

const WebcamCapture = ({ isCaptureMode, setIsCaptureMode, setCurrentUUID }) => {

  const [imgSrc, setImgSrc] = React.useState(null);

  const sendImage = async (imgSrc) => {
    console.log("I am here");
    try {
      const myuuid = uuidv4();
      setCurrentUUID(myuuid);



      console.log("UUID IS " + myuuid);
      const response = await axios.post(`https://${SERVER_URL}/image`, { data: imgSrc, uniqueID: myuuid });
    } catch (error) {
      console.error(error);
    }
  }; 

  return (
  <>
    <Box maxWidth="100%" display="flex" flexDirection="column" alignItems="center">
    {isCaptureMode && 
      
        <Box>
          <Webcam
            audio={false}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            width="280"
          >
            {({ getScreenshot }) => (
              <Box m={1}>
                <Button
                  variant="contained"
                  onClick={() => {
                    const newImgSrc = getScreenshot();
                    if (newImgSrc !== null) {
                      setImgSrc(newImgSrc);
                      setIsCaptureMode(!isCaptureMode);
                      sendImage(newImgSrc);
                    }
                  }
                }
                >
                  Capture photo
                </Button>
              </Box>
            )}
          </Webcam>
        </Box>
      
    }
    {!isCaptureMode && (
      <>
        <img
          src={imgSrc}
          alt="your capture here"
          width={280}
        />
        <Box m={1}>
          <Button
            variant="contained"
            onClick={() => {
              setIsCaptureMode(!isCaptureMode);
            }}
          >
            Retake
          </Button>
        </Box>
      </>
      )
    }

    </Box>
  </>);

};

export default WebcamCapture;