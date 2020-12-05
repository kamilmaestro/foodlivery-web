import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { getImageUrl } from '../../utils/imagesGetter';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import Button from '@material-ui/core/Button';
import { ProposalHeader } from './ProposalHeader';

export const ProposalPreview = ({ proposal, food, supplier, memberName, onClick }) => {

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const getDate = (toFormat) => {
    let date = new Date(toFormat);
    date.setSeconds(0, 0);
    return date.toISOString().replace(/T/, " ").replace(/:00.000Z/, "");
  }
  
  const calculateFoodImageHeight = () => {
    if (food && food.imageId) {
      return expanded ? 
        250 : 
        250;
    } else {
      return 0;
    }
  }

  return (
    <div className={classes.root}>
      <Card>
      <CardHeader title={ <ProposalHeader foodName={food ? food.name : null} supplierName={supplier ? supplier.name : null} /> } />
      <CardMedia
        style={{height: calculateFoodImageHeight()}}
        image={food ? getImageUrl(food.imageId) : null}
      />
      <CardActions disableSpacing>
        <Button  color="primary" variant="contained">
          Zostań kupującym
        </Button>
        <IconButton
          className={clsx(classes.expand, { [classes.expandOpen]: expanded })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
        >
          <ExpandMoreIcon className={classes.mainColor}/>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout={500} unmountOnExit>
        <CardContent>
          <Typography variant="h6" className={classes.text}>
            { `Wygasa: ${getDate(proposal.expirationDate)}` }
          </Typography>
          {
            memberName &&
              <Typography variant="h6" className={classes.text}>
                { `Dodane przez: ${memberName}` }
              </Typography>
          }
        </CardContent>
      </Collapse>
    </Card>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 250,
    marginTop: 12
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500]
  },
  mainColor: {
    color: theme.palette.primary.main
  },
  text: {
    color: theme.palette.text.primary,
    fontWeight: 100
  }
}));
