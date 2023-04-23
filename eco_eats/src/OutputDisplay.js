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
import Tooltip from '@mui/material/Tooltip';
import myImage from './logo.png';

const OutputDisplay = ({isCaptureMode, currentUUID}) => {
  const [output, setOutput] = React.useState('');
  const [list, setList] = React.useState('0000000');
  function returnIcon(i){
    console.log(list)
    if(list.at(i)==='0'){
      return false
    }
    else{
      return true
    }
  }


  useEffect(() => {
    const interval = setInterval(() => {
    fetch(`${SERVER_URL}/text?param1=${currentUUID}`)
      .then(response => response.text())
      .then(data => {setOutput(data)})
      .catch(error => console.log(error));

      fetch(`${SERVER_URL}/icons?param1=${currentUUID}`)
      .then(response => response.text())
      .then(data => {setList(data)})
      .catch(error => console.log(error));
    },2000);  
  },[]);

  if (isCaptureMode) {
    return (
      <Box>
        <Box>
          <Typography variant="body2">
            Press the "capture photo" button to see ingredient information!
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
        {returnIcon(0) ?
        <div>
        <Tooltip title="Vegan">
         <img src= {vegan} style={{ width: '50px', height: '50px', marginRight: '10px', marginBottom: '10px' }} />
        </Tooltip>
        </div>:
        <div></div>
        }  
        {returnIcon(1)?
        <div>
        <Tooltip title="Vegeterian">
         <img src= {vegetarian} style={{ width: '50px', height: '50px', marginRight: '10px', marginBottom: '10px' }} />
        </Tooltip>
        </div>:
        <div></div>
        } 
        {returnIcon(2) ?
        <div>
        <Tooltip title="Peanut">
         <img src= {peanut} style={{ width: '50px', height: '50px', marginRight: '10px', marginBottom: '10px' }} />
        </Tooltip>
        </div>:
        <div></div>
        } 
        {returnIcon(3) ?
        <div>
        <Tooltip title="Gluten">
         <img src= {gluten} style={{ width: '50px', height: '50px', marginRight: '10px', marginBottom: '10px' }} />
        </Tooltip>
        </div>:
        <div></div>
        } 
        {returnIcon(4)?
        <div>
        <Tooltip title="Treenut">
         <img src= {treenut} style={{ width: '50px', height: '50px', marginRight: '10px', marginBottom: '10px' }} />
        </Tooltip>
        </div>:
        <div></div>
        } 
      {returnIcon(5) ?
        <div>
        <Tooltip title="Dairy">
         <img src= {dairy} style={{ width: '50px', height: '50px', marginRight: '10px', marginBottom: '10px' }} />
        </Tooltip>
        </div>:
        <div></div>
        } 
        {returnIcon(6) ?
        <div>
        <Tooltip title="Egg">
         <img src= {egg} style={{ width: '50px', height: '50px', marginRight: '10px', marginBottom: '10px' }} />
        </Tooltip>
        </div>:
        <div></div>
        } 
      </Box>
    </Box>
  );

};

export default OutputDisplay;