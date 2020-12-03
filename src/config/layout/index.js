import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Header from '../../components/header';

import { useStyles } from './useStyles';

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.root}>
      <Header />
      <Grid item xs={12} container spacing={2}>
        <Container>{children}</Container>
      </Grid>
      <Grid item>
        <Typography variant="h1">Footer</Typography>
      </Grid>
    </Grid>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
