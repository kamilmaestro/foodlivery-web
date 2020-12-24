import * as React from 'react';
import Card from "@material-ui/core/Card";
import {Header} from "./Header";
import {makeStyles} from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import {useState} from "react";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {OrderedFoodList} from "./OrderedFoodList";

export const UserOrderPreview = ({ userOrder, user, onFoodClick }) => {

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.container}>
      <Header
        userName={user ? user.username : ''}
        createdAt={userOrder.createdAt}
        expanded={expanded}
        handleExpandClick={handleExpandClick}
      />
      <Collapse in={expanded} timeout={500} unmountOnExit>
        <div style={{marginLeft: 28, marginRight: 28}} >
          <OrderedFoodList orderedFood={userOrder.orderedFood} onFoodClick={onFoodClick} />
        </div>
      </Collapse>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 10
  },
  mainColor: {
    color: theme.palette.primary.main
  },
  actions: {

  }
}));
