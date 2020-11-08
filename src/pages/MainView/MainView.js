import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {MainViewDrawer} from '../../components/MainView/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Header } from '../../components/MainView/Header';
import { useHistory } from "react-router-dom";
import { ITEMS } from '../../components/MainView/DrawerItemsCreator';

export const MainView = ({ children }) => {
  
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentView, setCurrentView] = useState(ITEMS[0]);
  const history = useHistory();

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
      <Header title={currentView.name} handleDrawerOpen={handleDrawerOpen} isDrawerOpen={isDrawerOpen} />
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
