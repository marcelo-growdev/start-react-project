import React from 'react';
import { useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './useStyles';
import { Button } from '@material-ui/core';
import { logout } from '../../store/modules/user/actions';

export default function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await dispatch(logout());
  };

  return (
    <Grid container item xs={12} className={classes.root}>
      <Grid item xs={6}>
        <Typography variant="h2">Header teste</Typography>
      </Grid>
      <Grid item xs={6}>
        <Button onClick={() => handleLogout()}>Logout</Button>
      </Grid>
    </Grid>
  );
}
