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
import { SuppliersView } from "./components/SuppliersView/SuppliersView";
import { HOME_PAGE_URL, MY_ORDERS_VIEW_URL, SUPPLIERS_VIEW_URL, SIGN_IN_PAGE_URL, TABLES_VIEW_URL, WALLET_VIEW_URL } from './utils/urlProvider';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path = {HOME_PAGE_URL} component = {HomePage} />
          <Route exact path = {SIGN_IN_PAGE_URL} component = {SignInPage} />
          <Route exact path={ [MY_ORDERS_VIEW_URL, SUPPLIERS_VIEW_URL, WALLET_VIEW_URL] } component={MainView} />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
