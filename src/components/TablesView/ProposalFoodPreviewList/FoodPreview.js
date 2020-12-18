import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { IconButton, Tooltip } from '@material-ui/core';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import '../../../shadow.css';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import PersonIcon from '@material-ui/icons/Person';

export const FoodPreview = ({ food, onClick }) => {

  const classes = useStyles();

  return (
      <div className={clsx("box", classes.container)} style={{border: 1, marginTop: 10}} onClick={onClick}>
        <div className={classes.left}>
          <Typography variant="h6" style={{paddingLeft: 15}}>
            { `${food.name}\xa0\xa0\xa0x ${food.amount}` }
          </Typography>
          <Tooltip title={`Łączny koszt. Cena za jedną pozycję: ${food.price} zł`} placement={'bottom-start'} >
            <div>
              <IconButton size={'small'} style={{justifyContent: 'flex-start', marginLeft: 12}} disabled>
                <LocalOfferIcon style ={{marginRight: 8}}/>
                <div style ={{color: '#d32f2f'}}>
                  { `${food.price * food.amount} zł` }
                </div>
              </IconButton>
            </div>
          </Tooltip>
        </div>
        {
          food.userName &&
            <Tooltip title={`Łączny koszt. Cena za jedną pozycję: ${food.price} zł`} placement={'bottom-start'} >
              <div style={{marginRight: 15}}>
                <IconButton size={'small'} style={{justifyContent: 'flex-start', marginLeft: 12}} disabled>
                  <PersonIcon style ={{marginRight: 8}}/>
                  <div style ={{color: '#37474f'}}>
                    { food.userName }
                  </div>
                </IconButton>
              </div>
            </Tooltip>
        }
      </div>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    justifyContent: 'space-between'
  },
  left: {
    display: 'flex',
    flexDirection: 'column'
  }
}));
