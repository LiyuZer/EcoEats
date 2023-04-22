import React, { useEffect } from "react";
import { Typography, Box } from '@mui/material';
import axios from 'axios';
import { SERVER_URL } from "./App";

const OutputDisplay = ({isCaptureMode}) => {
  const [output, setOutput] = React.useState('');




  useEffect(() => {

    const interval = setInterval(() => {
      fetch(`http://${SERVER_URL}:5000/text`)
      .then(response => response.text())
      .then(data => {setOutput(data)})
      .catch(error => console.log(error));},2000)
    },[]);




      if (isCaptureMode) {
        return (
          <Box>
            <Box>
              <Typography variant="body2">
                {output}
              </Typography>
            </Box>
          </Box>
        );
      }

  return (
    <Box>
      <Box>
        <Typography variant="body2">
          {output}
        </Typography>
      </Box>

      <Box>
        <Typography variant="body2" color="#1e3fae" sx={{ fontWeight: 'bold' }}>
          {output}
        </Typography>
      </Box>
    </Box>
  );

};

export default OutputDisplay;