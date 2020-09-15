import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grommet, Grid, Box } from 'grommet';
import NavBar from '../components/NavBar';
import { SoundsCreate, SoundsList } from '../pages/';

const grommetTheme = {
  global: {
    colors: {
      brand: '#7D4CDB',
    },
    font: {
      family: 'Montserrat',
      size: '14px',
      height: '20px',
    },
  },
};

function App() {
  return (
    <Grommet theme={grommetTheme}>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/sounds/list" exact component={SoundsList} />
          <Route path="/sounds/create" exact component={SoundsCreate} />
          <Grid
            columns={{ count: 3, size: 'auto' }}
            gap="medium"
            margin="medium"
          >
            <Box
              background="brand"
              animation="slideLeft"
              elevation="medium"
              height="medium"
            >
              Item 1
            </Box>
            <Box background="brand" animation="slideLeft" elevation="medium">
              Item 2
            </Box>
            <Box background="brand" animation="slideLeft" elevation="medium">
              Item 3
            </Box>
          </Grid>
        </Switch>
      </Router>
    </Grommet>
  );
}

export default App;
