import React, { useState, useEffect } from 'react';
import { getSuppliersPage } from '../../apiServices/supplierApi';
import { AddSupplierModal } from './AddSupplierModal';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import { makeStyles } from '@material-ui/core/styles';
import { getImageUrl } from '../../utils/imagesGetter';
import { SupplierPreview } from './SupplierPreview';


export const SuppliersView = ({ isAddModalOpen, handleAddModalClose }) => {

  const classes = useStyles();
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    getSuppliers();
  }, [isAddModalOpen])

  const getSuppliers = () => {
    getSuppliersPage()
      .then((response) => {
        setSuppliers(response.data.content);
        console.log(response.data);
      }).catch(error => {
        console.log(error)
      })
  }

  return (
    <div >
      <AddSupplierModal isOpen = {isAddModalOpen} handleClose={handleAddModalClose} />
      <div>
        <List component="nav">
          {
            suppliers.map(supplier => <SupplierPreview supplier={supplier} />)
          }
        </List>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  list: {
    display: 'flex',
    justifyContent: 'center',
  }
}));
