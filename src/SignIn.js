import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { setAuth } from "./redux/actions";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignIn({ setAuth }) {
  const history = useHistory();
  const classes = useStyles();
  const [form, setForm] = useState({email: '', password: ''});
  const [errors, setErrors] = useState({email: '', password: ''});

  const handleInput = (e) => {
    setForm(Object.assign({}, form, {
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors({email: '', password: ''});

    axios.post('/api/v1/sessions', form)
      .then(response => {
        // update state
        setAuth({ authenticated: true, token: response.data.access_token });
        // set global authorization
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`;
        // redirect to home
        history.push('/');
      })
      .catch(error => {
        if (error.response.status === 422) {
          let errorFields = {};
          Object.keys(error.response.data).forEach(key => {
            if (errors.hasOwnProperty(key)) {
              errorFields[key] = error.response.data[key];
            }
          });
          setErrors(errorFields);
        }
      });
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            error={errors.email ? true : false}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={form.email}
            onChange={handleInput}
            helperText={errors.email}
            autoComplete="email"
            autoFocus
          />
          <TextField
            error={errors.password ? true : false}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={form.password}
            onChange={handleInput}
            helperText={errors.password}
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link component={RouterLink} to="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default connect(
  null,
  { setAuth }
)(SignIn);