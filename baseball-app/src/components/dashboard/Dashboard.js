import React from 'react';

import { Box, makeStyles } from '@material-ui/core';

import Button from './Button.js';

const useStyles = makeStyles({
    'buttons-container': {
        marginTop: '100px',
        width: '70%'
    }
})

const Dashboard = ( { addStrike } ) => {

    const classes = useStyles();

    return (
        <Box className={classes['buttons-container']} display='flex' justifyContent='space-around'>
            <Button handlerFunction={addStrike} type='strike' />
            <Button type='ball' />
            <Button type='foul' />
            <Button type='hit' />
        </Box>
    )
};

export default Dashboard;