import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { SignIn } from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignIn/SignUp';
import pizza from '../../images/pizza.jpg';
import { Header } from '../../components/Header/Header';

const useStyles = makeStyles(() => ({
  image: {
    backgroundImage: `url(${pizza})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
}));

export const SignInPage = () => {

  const classes = useStyles();
  const [hasAccount, setHasAccount] = useState(true);

  const onClickButton = () => {
    setHasAccount(!hasAccount);
  }

  return (
    <Grid container component="main" style={{height: '100vh'}} >
      <CssBaseline />
      <Header color='white' />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        {
          hasAccount ?
            <SignIn onClickButton={onClickButton} />
          : <SignUp onClickButton={onClickButton} />
        }
      </Grid>
    </Grid>
  );
}