import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './useStyles';

export default function Header() {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.root}>
      <Typography variant="h1">Header</Typography>
    </Grid>
  );
}
