import React, { useEffect } from "react";
import { Typography, Box } from '@mui/material';
import axios from 'axios';
import { SERVER_URL } from "./App";
import vegan from "./vegan.png"
import vegetarian from "./vegetarian.png"
import peanut from "./peanut.png"
import treenut from "./treenut.png"
import egg from "./egg.png"
import dairy from "./dairy.png"
import gluten from "./gluten.png"

const OutputDisplay = ({isCaptureMode}) => {
  const [output, setOutput] = React.useState('');




  useEffect(() => {

    const interval = setInterval(() => {
      fetch(`https://${SERVER_URL}:5000/text`)
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


      <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <img src= {vegan} style={{ width: '50px', height: '50px', marginRight: '10px', marginBottom: '10px' }} />
        <img src= {vegetarian} style={{ width: '50px', height: '50px', marginRight: '10px', marginBottom: '10px'}} />
        <img src= {peanut} style={{ width: '50px', height: '50px', marginRight: '10px', marginBottom: '10px'}} />
        <img src = {gluten} style={{ width: '50px', height: '50px', marginRight: '10px', marginBottom: '10px'}} />
        <img src = {treenut} style={{ width: '50px', height: '50px', marginRight: '10px', marginBottom: '10px'}} />
        <img src = {dairy} style={{ width: '50px', height: '50px', marginRight: '10px', marginBottom: '10px'}} />
        <img src = {egg} style={{ width: '50px', height: '50px', marginRight: '10px', marginBottom: '10px'}} />
      </Box>
    </Box>
  );

};

export default OutputDisplay;