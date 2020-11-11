import React, { useState } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

export const AddSupplierModal = ({ isOpen, handleClose }) => {

  return (
    <Dialog open={isOpen} onClose={handleClose} >
      <DialogTitle id="simple-dialog-title">Hej</DialogTitle>
    </Dialog>
  );
};