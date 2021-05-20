import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from '../../components/header';
import Footer from '../../components/footer';

import { useStyles } from './useStyles';

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Header />
      <Grid item xs={12} container>
        <Container>{children}</Container>
      </Grid>
      <Footer />
    </Grid>
  );
}
