import React from "react";
import { Typography, Box } from '@mui/material';


const OutputDisplay = () => {
  

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


  const summary = "The following are some ingredients: Rice, Sugar";
  return (
    <Box>
      <Box>
        <Typography variant="body2">
          {readIngredients}
        </Typography>
      </Box>

      <Box>
        <Typography variant="body2" color="#1e3fae" sx={{ fontWeight: 'bold' }}>
          {summary}
        </Typography>
      </Box>
    </Box>
  );

};

export default OutputDisplay;