import React from 'react';

import { Box } from '@material-ui/core';

const Top = () => {

    return (
        <Box display='flex' flexDirection='row'>
            <Box display='flex' flexDirection='column'>
                <h3>HOME</h3>
            </Box>
            <Box display='flex' flexDirection='column'>
                <h3>INN</h3>
            </Box>
            <Box display='flex' flexDirection='column'>
                <h3>GUEST</h3>
            </Box>
        </Box>
        
    )
};

export default Top;