import React, { useEffect } from "react";
import { Typography, Box, CircularProgress } from '@mui/material';
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
import cloud from './cloud.png';

const HIGH_CARBON_ITEMS = [
"soybean oil",
"pork",
"palm oil",
"crustaceans",
"shrimp",
"crab",
"clam",
"coffee",
"chocolate",
"dark chocolate",
"beef",
"bovine meat",
"cheese",
"lamb",
"mutton",
"roast beef",
"chicken",
]

const OutputDisplay = ({isCaptureMode, currentUUID}) => {
  const [output, setOutput] = React.useState('');
  const [list, setList] = React.useState('00000000000000');
  const [isOutputLoading, setIsOutputLoading] = React.useState(false);
  const [isIconsLoading, setIsIconsLoading] = React.useState(false);

  function returnIcon(i){
    console.log(list)
    if(list.at(i)==='0'){
      return false
    }
    else{
      return true
    }
  }


  React.useEffect(() => {
    const myInterval = setInterval(() => {
      fetch(`${SERVER_URL}/text?param1=${currentUUID}`)
        .then(response => response.text())
        .then(data => {if (data !== output && data !== "UUID not found" && data !== "") {
          setOutput(data);
          setIsOutputLoading(false);
        }})
        .catch(error => console.log(error));

      fetch(`${SERVER_URL}/icons?param1=${currentUUID}`)
        .then(response => response.text())
        .then(data => {
          if (data !== list) {
            setList(data);
            setIsIconsLoading(false);
          }
        })
        .catch(error => console.log(error));
    },2000);
  }, [])


  React.useEffect(() => {
    if (!isCaptureMode) {
      setIsIconsLoading(true);
      setIsOutputLoading(true);
      setList("000000000000000000"); // string that will not collide with other strings provided by server but still behave well if interpreted by our client
    }
  }, [isCaptureMode])


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

  const isVegan = returnIcon(0);
  const isVegetarian = returnIcon(1);
  const hasEgg = returnIcon(6);

  let numClouds = 0;

  if (isVegan || isVegetarian) {
    numClouds = 1;
  }
  else if (hasEgg) {
    numClouds = 2;
  }
  else {
    numClouds = 2;
  }

  if (isIconsLoading) {
    numClouds = 0;
  }

  // if there's an ingredient in HIGH_CARBON_ITEMS then numClouds = 3;
  output.split(",")
    .map(s => s.trim())
    .map(s => s.toLowerCase())
    .forEach(
      s => {
        if (HIGH_CARBON_ITEMS.includes(s)) {
          numClouds = 3;
        }
      }
    )


  return (
    <Box>
      
      {isOutputLoading ? 
      <Box>
        <CircularProgress />
      </Box>
      :
      <Box>
        <Typography variant="body2" color="#1e3fae" sx={{ fontWeight: 'bold' }}>
          {output}
        </Typography>
      </Box>
      }


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
        {returnIcon(3)?
        <div>
        <Tooltip title="Treenut">
         <img src= {treenut} style={{ width: '50px', height: '50px', marginRight: '10px', marginBottom: '10px' }} />
        </Tooltip>
        </div>:
        <div></div>
        }
        {returnIcon(4) ?
        <div>
        <Tooltip title="Dairy">
         <img src= {dairy} style={{ width: '50px', height: '50px', marginRight: '10px', marginBottom: '10px' }} />
        </Tooltip>
        </div>:
        <div></div>
        } 
        {returnIcon(5) ?
        <div>
        <Tooltip title="Gluten">
         <img src= {gluten} style={{ width: '50px', height: '50px', marginRight: '10px', marginBottom: '10px' }} />
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
      <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {
        [...Array(numClouds).keys()].map(() => <img src={cloud} style={{ width: '50px', height: '50px', marginRight: '0px', marginBottom: '10px' }} />)
      }
      </Box>
    </Box>
    
  );

};

export default OutputDisplay;