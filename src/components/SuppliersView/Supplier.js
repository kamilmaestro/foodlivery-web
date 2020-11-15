import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { getImageUrl } from '../../utils/imagesGetter';
import { getSupplierWithMenu } from '../../apiServices/supplierApi';
import PlaceIcon from '@material-ui/icons/Place';
import PhoneIcon from '@material-ui/icons/Phone';
import { IconButton } from '@material-ui/core';

export const Supplier = ({ match }) => {

  const classes = useStyles();
  const [supplier, setSupplier] = useState({});
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getSupplier();
  }, [])

  const getSupplier = () => {
    getSupplierWithMenu(match.params.id)
      .then((response) => {
        setSupplier(response.data.supplier);
        setMenu(response.data.menu);
        console.log(response.data);
      }).catch(error => {
        console.log(error)
      })
  }

  return (
    <Card className={classes.root}>
      <div>
        <img
          className={classes.media}
          src={getImageUrl(supplier.imageId)}
          alt=''
        />
        <CardContent>
          <IconButton disabled style={{color: "black"}} >
            <PhoneIcon />
            { supplier.phoneNumber }
          </IconButton>
          <IconButton disabled style={{color: "black"}} >
            <PlaceIcon />
            { supplier.address }
          </IconButton>
        </CardContent>
        <CardActions className={classes.action}>
          <Button size="medium" color="primary" variant="contained">
            Zamów jedzenie
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};

const useStyles = makeStyles({
  root: {
    marginLeft: '15%',
    marginRight: '15%',

  },
  media: {
    maxHeight: 400,
    objectFit: 'contain',
    width: '100%'
  },
  action: {
    paddingLeft: 28,
    paddingBottom: 25
  }
});
