import React, { useEffect } from "react";
import { Typography, Box } from '@mui/material';
import axios from 'axios';


const OutputDisplay = ({isCaptureMode}) => {
  const [output, setOutput] = React.useState('');




  useEffect(()=>{
    axios.get('http://127.0.0.1:5000/text')
    .then(response => {
      setOutput(response.data);
      console.log("I am here")
    });
  }, []);


      if (isCaptureMode) {
        return (
          <Box>
            <Box>
              <Typography variant="body2">
                Press "Capture Photo" to take the picture of an ingredients list,
                and information about the ingredients will appear here automatically.
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