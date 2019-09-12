import React from 'react';

import { Box } from '@material-ui/core';

const Bottom = () => {

    return (
        <Box display='flex' flexDirection='row'>
            <Box display='flex' flexDirection='column'>
                <h3>BALL</h3>
            </Box>
            <Box display='flex' flexDirection='column'>
                <h3>STRIKE</h3>
            </Box>
            <Box display='flex' flexDirection='column'>
                <h3>OUT</h3>
            </Box>
            <Box display='flex' flexDirection='column'>
                <h3>FOUL</h3>
            </Box>
        </Box>
    )
};

export default Bottom;