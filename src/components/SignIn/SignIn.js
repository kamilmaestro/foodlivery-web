import * as React from 'react';
import { Avatar, Button, Grid, Link, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const SignIn = ({ onClickButton, onSubmit }) => {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Zaloguj
      </Typography>
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Nazwa użytkownika"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Hasło"
          type="password"
          id="password"
        />
        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} onClick={onSubmit} >
          Zatwierdź
        </Button>
        <Grid item>
          <Link href="#" variant="body2" onClick={onClickButton} >
            Stwórz nowe konto
          </Link>
        </Grid>
      </form>
    </div>
  );
};