import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  Grid,
  TextField,
  Paper,
  Typography,
  LinearProgress,
  Collapse,
} from '@material-ui/core';
import { login } from '../../store/modules/user/actions';
import api from '../../services/api';
import useStyles from './styles';

export default function Login() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleLogin = async () => {
    setInvalidCredentials(false);

    setLoading(true);
    try {
      const response = await api.login({
        email,
        password,
      });
      if (response) {
        setLoading(false);
        dispatch(
          login({
            email,
            password,
          })
        );
      } else {
        setLoading(false);
        setInvalidCredentials(true);
      }
    } catch (err) {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleLogin();
  };

  return (
    <Grid item className={classes.root}>
      <Paper elevation={3}>
        <Grid container justify="center" direction="column" align="center">
          <form onSubmit={handleSubmit}>
            <Grid item style={{ margin: '2rem 0rem 3rem 0rem' }}>
              <Typography variant="h4">Login</Typography>
            </Grid>
            <Grid item style={{ margin: '1rem 0rem 1rem 0rem' }}>
              <TextField
                error={invalidCredentials}
                onChange={(e) => setEmail(e.target.value)}
                label="E-mail"
                helperText={
                  invalidCredentials ? 'Senha e/ou email inválidos!' : ''
                }
              />
            </Grid>
            <Grid item style={{ margin: '1rem 0rem 1rem 0rem' }}>
              <TextField
                error={invalidCredentials}
                onChange={(e) => setPassword(e.target.value)}
                label="Senha"
                type="password"
                helperText={
                  invalidCredentials ? 'Senha e/ou email inválidos!' : ''
                }
              />
            </Grid>
            <Grid item style={{ margin: '4rem 0rem 2rem 0rem' }}>
              <Button type="submit" fullWidth>
                <Typography>Continuar</Typography>
              </Button>
              <Collapse in={loading}>
                <LinearProgress />
              </Collapse>
            </Grid>
          </form>
        </Grid>
      </Paper>
    </Grid>
  );
}
