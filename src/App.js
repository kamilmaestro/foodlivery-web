import React from "react";
import './App.css';
import { Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { SignInPage } from "./pages/SignInPage/SignInPage";
import { ThemeProvider } from '@material-ui/core'
import {theme} from './theme';
import { MainView } from "./pages/MainView/MainView";
import { MyOrdersView } from "./components/MyOrdersView/MyOrdersView";
import { WalletView } from "./components/WalletView/WalletView";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path = '/' component = {HomePage} />
          <Route exact path = '/signin' component = {SignInPage} />
          <Route exact path = '/app/orders' render = { () => <MainView > <MyOrdersView /> </MainView> } />
          <Route exact path = '/app/wallet' render = { () => <MainView > <WalletView /> </MainView> } />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
