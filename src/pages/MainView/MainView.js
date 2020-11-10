import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {MainViewDrawer} from '../../components/MainView/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Header } from '../../components/MainView/Header';
import { useLocation, useHistory } from "react-router-dom";
import { ITEMS } from '../../components/MainView/DrawerItemsCreator';
import { MY_ORDERS_VIEW_URL, SUPPLIERS_VIEW_URL, TABLES_VIEW_URL, WALLET_VIEW_URL } from '../../utils/urlProvider';

export const MainView = ({ children }) => {
  
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const getCurrentView = () => {
    switch (location.pathname) {
      case MY_ORDERS_VIEW_URL:
        return ITEMS[0];
      case SUPPLIERS_VIEW_URL:
        return ITEMS[1];
      case WALLET_VIEW_URL:
        return ITEMS[2];
      case TABLES_VIEW_URL:
        return ITEMS[3];
      default:
        return ITEMS[0];
    }
  }

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentView, setCurrentView] = useState(getCurrentView());

  const decorateItemsWithOnClick = () => {
    return ITEMS.map(item => {
      return {
        ...item,
        'onClick': () => onItemClick(item)
      };
    });
  };

  const onItemClick = (item) => {
    setCurrentView(item);
    history.push(item.url);
  };

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div style={{display: "flex"}}>
      <CssBaseline />
      <Header currentView={currentView} handleDrawerOpen={handleDrawerOpen} isDrawerOpen={isDrawerOpen} />
      <MainViewDrawer items={decorateItemsWithOnClick()} handleDrawerClose={handleDrawerClose} open={isDrawerOpen}/>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        { children }
      </main>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  }
}));
