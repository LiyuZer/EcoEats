import React from "react";
import Webcam from "react-webcam";
import { Button, Box } from '@mui/material';


const VIDEO_WIDTH = 280;

const videoConstraints = {
  // The height and width here are not the dimensions of the video on the user's screen
  width: 1280,
  height: 720,
  facingMode: "environment"
};

const WebcamCapture = () => {
  const [isCaptureMode, setIsCaptureMode] = React.useState(true);

  const [imgSrc, setImgSrc] = React.useState(null);

  return (
  <>
    {isCaptureMode && 
      <Webcam
        audio={false}
        screenshotFormat="image/jpeg"
        width={VIDEO_WIDTH}
        videoConstraints={videoConstraints}
      >
        {({ getScreenshot }) => (
          <Box m={1}>
            <Button
              variant="contained"
              onClick={() => {
                setImgSrc(getScreenshot());
                setIsCaptureMode(!isCaptureMode);
              }}
            >
              Capture photo
            </Button>
          </Box>
        )}
      </Webcam>
    }
    {!isCaptureMode && (
      <>
        <img
          src={imgSrc}
          width={VIDEO_WIDTH}
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
  </>);

};

export default WebcamCapture;