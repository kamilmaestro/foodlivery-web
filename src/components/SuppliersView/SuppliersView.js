import React from 'react';
import { AddSupplierModal } from './AddSupplierModal';

export const SuppliersView = ({ isAddModalOpen, handleAddModalClose }) => {

  return (
    <div>
      Suppliers
      <AddSupplierModal isOpen = {isAddModalOpen} handleClose={handleAddModalClose} />
    </div>
  );
};