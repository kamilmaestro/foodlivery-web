import * as React from 'react';
import {Button, IconButton} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import PersonIcon from "@material-ui/icons/Person";
import ScheduleIcon from '@material-ui/icons/Schedule';
import {getDateTime} from "../../../../utils/dateFormatter";
import CardHeader from "@material-ui/core/CardHeader";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const Header = ({ userName, createdAt, expanded, handleExpandClick }) => {

  const classes = useStyles();

  return (
    <CardHeader
      title={
        <IconButton disabled >
          <PersonIcon className={classes.icon} />
          <div style ={{color: '#37474f'}}>
            { userName }
          </div>
        </IconButton>
      }
      subheader={
        <IconButton disabled size={"small"} style={{paddingLeft: 12}}>
          <ScheduleIcon className={classes.icon} />
          <div style ={{color: '#6b777d'}}>
            { getDateTime(createdAt) }
          </div>
        </IconButton>
      }
      action={
        <IconButton
          className={clsx(classes.expand, { [classes.expandOpen]: expanded })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          style={{marginTop: 12}}
        >
          <ExpandMoreIcon className={classes.mainColor}/>
        </IconButton>
      }
    />
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex'
  },
  icon: {
    marginRight: 5
  },
  mainColor: {
    color: theme.palette.primary.main
  }
}));
