import React from 'react';

import { Box } from '@material-ui/core';

const Bottom = ( { balls, strikes, fouls, outs } ) => {

    return (
        <Box display='flex' flexDirection='row'>
            <Box display='flex' flexDirection='column'>
                <h3>BALL</h3>
                <h4>{balls}</h4>
            </Box>
            <Box display='flex' flexDirection='column'>
                <h3>STRIKE</h3>
                <h4>{strikes}</h4>
            </Box>
            <Box display='flex' flexDirection='column'>
                <h3>OUT</h3>
                <h4>{outs}</h4>
            </Box>
            <Box display='flex' flexDirection='column'>
                <h3>FOUL</h3>
                <h4>{fouls}</h4>
            </Box>
        </Box>
    )
};

export default Bottom;