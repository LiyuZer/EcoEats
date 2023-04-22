import React from "react";
import Webcam from "react-webcam";
import { Button, Box } from '@mui/material';
import axios from 'axios';


const videoConstraints = {
  // The height and width here are not the dimensions of the video on the user's screen
  width: 1280,
  height: 720,
  facingMode: "environment"
};

const WebcamCapture = ({ isCaptureMode, setIsCaptureMode }) => {

  const [imgSrc, setImgSrc] = React.useState(null);

  const sendImage = async (imgSrc) => {
    console.log("I am here");
    try {
      const response = await axios.post('http://127.0.0.1:5000/image', { data: imgSrc });
    } catch (error) {
      console.error(error);
    }
  }; 

  return (
  <>
    <Box width="100%" display="flex" flexDirection="column" alignItems="center">
    {isCaptureMode && 
      
        <Box width="85vw">
          <Webcam
            audio={false}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          >
            {({ getScreenshot }) => (
              <Box m={1}>
                <Button
                  variant="contained"
                  onClick={() => {
                    const newImgSrc = getScreenshot();
                    console.log(newImgSrc);
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