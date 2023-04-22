import './App.css';
import WebcamCapture from './Webcam';
import OutputDisplay from './OutputDisplay';
import { Typography, Box } from '@mui/material';


function App() {
  return (
    <div className="App">
      <Box m={1}>
        <Typography variant="h3">
          Eco Eats
        </Typography>
      </Box>
      <WebcamCapture />
      <OutputDisplay />

    </div>
  );
}

export default App;
