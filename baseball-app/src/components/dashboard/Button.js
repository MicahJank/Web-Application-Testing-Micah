import React from 'react';

import { Button as ActionButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    primary: {
        fontSize: '2rem',
        width: '100px'
    }
})

const Button = ( { type } ) => {

    const classes = useStyles();

    return (
        <ActionButton className={classes.primary}>{type}</ActionButton>
    )
};

export default Button;