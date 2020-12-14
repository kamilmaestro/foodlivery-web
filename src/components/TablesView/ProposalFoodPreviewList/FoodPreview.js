import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import '../../../shadow.css';

export const FoodPreview = ({ food, onClick }) => {

  return (
      <div className="box" style={{cursor: 'pointer', border: 1, marginTop: 10}} onClick={onClick}>
          <Typography variant="h6" style={{paddingLeft: 15}}>
            { `${food.name}\xa0\xa0\xa0x ${food.amount}` }
          </Typography>
          <IconButton size={'small'} style={{justifyContent: 'flex-start', marginLeft: 12}} disabled>
            <LocalOfferIcon style ={{marginRight: 8}}/>
            <div style ={{color: '#d32f2f'}}>
              { `${food.price} zł` }
            </div>
          </IconButton>
      </div>
  );
};
