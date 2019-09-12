import React from 'react';

import Display from './components/display/Display.js';

import { Box } from '@material-ui/core';

class App extends React.Component {

  // here is the state that will keep track of all the different variables for the person at bat
  state = {
    balls: 0,
    strikes: 0,
    fouls: 0,
    hit: false
  }

  render() {
    return (
      <div className="App">
        <Display />
      </div>
    );
  }
}

export default App;
