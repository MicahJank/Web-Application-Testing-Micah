import React from 'react';
import Top from './Top.js';
import Bottom from './Bottom.js';

import { Box } from '@material-ui/core';


const Display = () => {

    return (
        <Box display='flex' flexDirection='column'>
            <Top />
            <Bottom />
        </Box>
    )
};

export default Display;