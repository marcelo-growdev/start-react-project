import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './useStyles';

export default function Footer() {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h1">Parte 1</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h1">Parte 2</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h1">Parte 3</Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h1">Parte 4</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
