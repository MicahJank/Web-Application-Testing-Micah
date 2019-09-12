import React from 'react';

import { Box } from '@material-ui/core';

const Top = ( { homeScore, inning, guestScore } ) => {

    return (
        <Box display='flex' flexDirection='row'>
            <Box display='flex' flexDirection='column'>
                <h3>HOME</h3>
                <h4>{homeScore}</h4>
            </Box>
            <Box display='flex' flexDirection='column'>
                <h3>INN</h3>
                <h4>{inning}</h4>
            </Box>
            <Box display='flex' flexDirection='column'>
                <h3>GUEST</h3>
                <h4>{guestScore}</h4>
            </Box>
        </Box>
        
    )
};

export default Top;