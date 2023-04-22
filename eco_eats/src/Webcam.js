import React from "react";
import Webcam from "react-webcam";


const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "environment"
};

const WebcamCapture = () => {
  const [imgSrc, setImgSrc] = React.useState(null);

  return (
  <>
    <Webcam
      audio={false}
      height={720}
      screenshotFormat="image/jpeg"
      width={1280}
      videoConstraints={videoConstraints}
    >
      {({ getScreenshot }) => (
        <button
          onClick={() => {
            setImgSrc(getScreenshot());
          }}
        >
          Capture photo
        </button>
      )}
    </Webcam>
    {imgSrc && (
      <img
        src={imgSrc}
      />
    )}
  </>);

};

export default WebcamCapture;