import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { useStyles } from './useStyles';

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.login}
    >
      <Grid item xs={6} container>
        <Container>{children}</Container>
      </Grid>
    </Grid>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
