import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {MainViewDrawer} from '../../components/MainView/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Header } from '../../components/MainView/Header';
import { useLocation, useHistory } from "react-router-dom";
import { ITEMS } from '../../components/MainView/DrawerItemsCreator';
import { MY_ORDERS_VIEW_URL, SUPPLIERS_VIEW_URL, TABLES_VIEW_URL, WALLET_VIEW_URL } from '../../utils/urlProvider';
import { AddSupplierModal } from '../../components/SuppliersView/AddSupplierModal';
import { SUPPLIERS_VIEW_UUID } from '../../components/MainView/DrawerItemsCreator';
import { MyOrdersView } from '../../components/MyOrdersView/MyOrdersView';
import { SuppliersView } from '../../components/SuppliersView/SuppliersView';
import { WalletView } from '../../components/WalletView/WalletView';

export const MainView = ({ children }) => {
  
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

  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentView, setCurrentView] = useState(getCurrentView());
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const decorateItemsWithOnClick = () => {
    return ITEMS.map(item => {
      return {
        ...item,
        'onClick': () => onItemClick(item)
      };
    });
  };

  const renderCurrentView = () => {
    switch (location.pathname) {
      case MY_ORDERS_VIEW_URL:
        return <MyOrdersView />;
      case SUPPLIERS_VIEW_URL:
        return <SuppliersView isAddModalOpen={isAddModalOpen} handleAddModalClose={handleAddModalClose} />;
      case WALLET_VIEW_URL:
        return <WalletView />;
      case TABLES_VIEW_URL:
        return <div>Table</div>;
      default:
        return <MyOrdersView />;
    }
  }

  const handleAddModalOpen = () => {
    setIsAddModalOpen(true);
  };

  const handleAddModalClose = () => {
    setIsAddModalOpen(false);
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
      <Header 
        currentView={currentView} 
        handleDrawerOpen={handleDrawerOpen} 
        isDrawerOpen={isDrawerOpen} 
        handleAddModalOpen={handleAddModalOpen} 
      />
      <MainViewDrawer items={decorateItemsWithOnClick()} handleDrawerClose={handleDrawerClose} open={isDrawerOpen}/>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        { 
          renderCurrentView()
        }
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
