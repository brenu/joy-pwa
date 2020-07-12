import React from 'react';
import Control from './components/Control'
import Screen from './components/Screen'
import './App.css';

import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="App">
        <div>
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <Control />
            </Grid>

            <Grid item xs={6}>
                <Screen />
            </Grid>
            
            <Grid item xs={3}>
                <Control />
            </Grid>
        </Grid>
        </div>
    </div>
  );
}

export default App;
