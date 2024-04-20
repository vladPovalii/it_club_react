import { Box, Typography } from '@mui/material';
import { orange } from '@mui/material/colors';

import { Tasks, Counter } from "./components";

import './App.css';

function App() {
  return (
    <div className="App">
        <Box pt={8} gap={4} display="flex">
            <Box display="flex" flexDirection="column">
                <Typography variant="h2">TODO List App</Typography>
                <Typography variant="h6" sx={{ background: orange[100], maxWidth: 95 }}>Do it now.</Typography>
            </Box>
            <Counter />
        </Box>
        <Tasks />
    </div>
  );
}

export default App;
