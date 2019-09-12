import React from 'react';
import Top from './Top.js';
import Bottom from './Bottom.js';

import { Box } from '@material-ui/core';


const Display = ( { displayInfo } ) => {

    return (
        <Box display='flex' flexDirection='column'>
            <Top homeScore={displayInfo.homeScore} inning={displayInfo.inning} guestScore={displayInfo.guestScore} />
            <Bottom balls={displayInfo.balls} strikes={displayInfo.strikes} fouls={displayInfo.fouls} outs={displayInfo.outs} />
        </Box>
    )
};

export default Display;