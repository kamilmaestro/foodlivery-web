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
import { getImageUrl } from '../../../utils/imagesGetter';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import Button from '@material-ui/core/Button';
import { ProposalHeader } from '../ProposalHeader';
import { FoodPreview } from './FoodPreview';
import List from '@material-ui/core/List';

export const ProposalFoodPreviewList = ({ food, onFoodClick }) => {

  const classes = useStyles();

  return (
    <div>
      {
        food.length > 0 &&
          <div>
            <List component="nav">
              {
                food.map((food, index) => (
                  <FoodPreview 
                    food={food}
                    onClick={onFoodClick}   
                    key={index} 
                  />
                ))
              }
            </List>
          </div>
      }
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  text: {
    color: theme.palette.text.primary,
    fontWeight: 100
  }
}));
