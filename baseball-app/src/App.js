import React from 'react';

import Display from './components/display/Display.js';
import Dashboard from './components/dashboard/Dashboard.js';

import { Box, makeStyles } from '@material-ui/core';

class App extends React.Component {

  // here is the state that will keep track of all the different variables for the person at bat
  state = {
    balls: 0,
    strikes: 0,
    fouls: 0,
    outs: 0,
    hit: false,
    homeScore: 0,
    inning: 0,
    guestScore: 0
  }

  // componentDidMount() {

  // }

  // componentDidUpdate(prevProps, prevState) {

  // }


  // Button handler functions
  addStrike = () => {
    this.setState({
      strikes: ++this.state.strikes
    })
  }

  render() {
    return (
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Display displayInfo={this.state} />
        <Dashboard addStrike={this.addStrike} />
      </Box>
    );
  }
}

export default App;
