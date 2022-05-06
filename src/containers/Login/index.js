import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Cookies from "js-cookie"
import CustomButton from '../../components/Button';
import { useRouter } from 'next/router'
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogTitle from '@material-ui/core/DialogTitle';

// import background from '../../src/assets/images/login.jpg';


const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& button': {
      width: '100%',
      marginTop: '20px',
      padding: '6px 16px'
    }
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

export default function Login(props) {
  const classes = useStyles();
  const [error, setError] = useState(false);
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {

    if (!data.email || !data.password) return;

    const loginInfo = {
      identifier: data.email,
      password: data.password
    }

    const APIURL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
    const login = await fetch(`${APIURL}/auth/local`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginInfo)
    })

    const loginResponse = await login.json();
    const { error, jwt } = loginResponse;
    if (error) {
      setError(true)
      return;
    } else {
      Cookies.set("jwt_token", jwt)
      setError(false)
      router.push('/')
      // typeof window !== 'undefined' && window.open('/')
    }
  }



  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Dialog
        {...props}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Grid item xs={12} sm={8} md={12} component={Paper} elevation={6} square>
          <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                  Login
                </Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    {...register('email', { required: true })}
                    error={errors.email || error}
                    helperText={errors.email ? 'Email is Required' : error ? 'Invalid Email or Password' : ''}
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    {...register('password', { required: true })}
                    error={errors.password || error}
                    helperText={errors.password ? 'Password is Required' : error ? 'Invalid Email or Password' : ''}
                    autoComplete="current-password"
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <CustomButton btnType="primary" text="Sign In" />
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
          </div>
        </Grid>
      </Dialog>
    </Grid>
  );
}