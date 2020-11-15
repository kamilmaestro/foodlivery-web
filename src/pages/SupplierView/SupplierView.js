import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation, useHistory } from "react-router-dom";
import { SUPPLIER_VIEW_URL, SUPPLIERS_VIEW_URL } from '../../utils/urlProvider';
import { SuppliersList } from '../../components/SuppliersView/SuppliersList';
import {MainViewDrawer} from '../../components/MainView/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Header } from '../../components/MainView/Header';
import { Supplier } from '../../components/SuppliersView/Supplier';

export const SupplierView = () => {

  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddModalOpen = () => {
    setIsAddModalOpen(true);
  };

  const handleAddModalClose = () => {
    setIsAddModalOpen(false);
  };

  const onItemClick = (item) => {
    history.push(item.url);
  };

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const renderCurrentView = () => {
    switch (location.pathname) {
      case SUPPLIERS_VIEW_URL:
        return <SuppliersList isAddModalOpen={isAddModalOpen} handleAddModalClose={handleAddModalClose} />;
      case SUPPLIER_VIEW_URL:
        return <Supplier />;
      default:
        return <SuppliersList isAddModalOpen={isAddModalOpen} handleAddModalClose={handleAddModalClose} />;
    }
  }

  return (
    <div style={{display: "flex"}} >
      <CssBaseline />
      <Header 
        title={'Dostawcy'}
        searchPlaceholder='Szukaj dostawców' 
        handleDrawerOpen={handleDrawerOpen} 
        isDrawerOpen={isDrawerOpen} 
        handleAdd={handleAddModalOpen} 
      />
      <MainViewDrawer handleDrawerClose={handleDrawerClose} open={isDrawerOpen}/>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        { 
          renderCurrentView()
        }
      </main>
    </div>
  );
};

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
