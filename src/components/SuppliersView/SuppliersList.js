import React, { useState, useEffect } from 'react';
import { getSuppliersPage } from '../../apiServices/supplierApi';
import { AddSupplierModal } from '../../components/SuppliersView/AddSupplierModal';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { getImageUrl } from '../../utils/imagesGetter';
import { SupplierPreview } from '../../components/SuppliersView/SupplierPreview';
import { connect } from 'react-redux';
import { contextReducer } from '../../reducers/contextReducer';
import { useLocation, useHistory } from "react-router-dom";
import { SUPPLIER_VIEW_URL, SUPPLIERS_VIEW_URL } from '../../utils/urlProvider';

export const SuppliersList = ({ isAddModalOpen, handleAddModalClose }) => {

  const classes = useStyles();
  const history = useHistory();
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    getSuppliers();
  }, [isAddModalOpen])

  const getSuppliers = () => {
    console.log(contextReducer.token)
    getSuppliersPage()
      .then((response) => {
        setSuppliers(response.data.content);
        console.log(response.data);
      }).catch(error => {
        console.log(error)
      })
  }

  const onPreviewClick = () => {
    history.push(SUPPLIER_VIEW_URL);
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

const mapStateToProps = ({contextReducer: {token}}) => {
  return {token};
};

export default connect(mapStateToProps)(SuppliersList);

const useStyles = makeStyles((theme) => ({
}));
