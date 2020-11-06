import React from "react";
import './App.css';
import { Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { SignInPage } from "./pages/SignInPage/SignInPage";
import { ThemeProvider } from '@material-ui/core'
import {theme} from './theme';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path = '/' component = {HomePage} />
          <Route exact path = '/signin' component = {SignInPage} />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
