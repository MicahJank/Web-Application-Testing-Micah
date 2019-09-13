import React from 'react';

import { Box, makeStyles } from '@material-ui/core';

import Button from './Button.js';

const useStyles = makeStyles({
    'buttons-container': {
        marginTop: '100px'
    }
})

const Dashboard = () => {

    const classes = useStyles();

    return (
        <Box className={classes['buttons-container']} display='flex' justifyContent='space-around'>
            <Button type='Strike' />
            <Button type='Ball' />
            <Button type='Foul' />
            <Button type='Hit' />
        </Box>
    )
};

export default Dashboard;