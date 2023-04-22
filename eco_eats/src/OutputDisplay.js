import React from "react";
import { Typography, Box } from '@mui/material';
import axios from 'axios';


const OutputDisplay = () => {
  const [output, setOutput] = React.useState('');

  const readIngredients = `RICE, WHOLE GRAIN WHEAT, SUGAR/GLUCOSE-
  FRUCTOSE, SOY PROTEIN, WHOLE GRAIN OATS, SOY
  PROTEIN CONCENTRATE, VEGETABLE OIL, BROWN SUGAR
  SYRUP, RICE FLOUR, SALT, VEGETABLE Oil SHORTENING
  HONEY, BARLEY MALT SYRUP, MOLASSES, COLOUR,
  CINNAMON, ARTIFICIAL FLAVOUR, SOY LECITHIN, BHT,
  CITRIC ACID,
  VITAMINS AND MINERALS: SODIUM L-ASCORBATE,
  ALPHA TOCOPHEROL, NIACINAMIDE, ASCORBIC ACID,
  ZINC OXIDE, BIOTIN, ¢-CALCIUM PANTOTHENATE, IRON
  PPER OXIDE, PYRIDOXINE HYDROCHLORIDE, VITAMIN
  ALMITATE, THIAMINE HYDROCHLORIDE, RIBOFLAVIN,
  ACID, POTASSIUM IODIDE, CHOLECALCIFEROI..`;

  const getText = async (imgSrc) => {
    console.log("I am here");
    try {
      const response = await axios.get('http://127.0.0.1:5000/text');
      setOutput(response)
    } catch (error) {
      console.error(error);
    }
  }; 

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