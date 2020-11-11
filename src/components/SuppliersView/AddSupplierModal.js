import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { uploadImage } from '../../apiServices/imagesApi';
import { ImageUploader } from '../ImageUploader/ImageUploader';

export const AddSupplierModal = ({ isOpen, handleClose }) => {

  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const onClose = () => {
    setImage(null);
    setImageUrl(null);
    handleClose();
  }

  const onAddImage = (e) => {
    onClose();
    e.preventDefault();
    uploadImage(image)
      .then((response)=>{
        console.log(response.data);
      }).catch(error => {
        console.log(error)
      })
  }

  const onChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      setImageUrl(URL.createObjectURL(e.target.files[0]));
    }
  }

  return (
    <Dialog open={isOpen} onClose={onClose} >
      <DialogTitle >
        Nowy dostawca
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Uzupełnij wszystkie pola, aby dodać nowego dostawcę jedzenia
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Nazwa dostawcy"
          fullWidth
        />
        <TextField
          margin="dense"
          label="Numer telefonu"
          fullWidth
        />
        <TextField
          margin="dense"
          label="Adres email"
          type="email"
          fullWidth
        />
        <ImageUploader imageUrl={imageUrl} onChange={onChange} />
      </DialogContent>
      <DialogActions style={{marginRight: 15, marginBottom: 15}}>
        <Button onClick={onClose} color="primary" variant="contained">
          Anuluj
        </Button>
        <Button onClick={onAddImage} color="primary" variant="contained">
          Dodaj
        </Button>
      </DialogActions>
    </Dialog>
  );
};