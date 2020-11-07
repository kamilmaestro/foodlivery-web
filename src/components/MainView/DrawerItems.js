import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const DrawerItems = () => {

  const ITEMS = {
    'Moje zamówienia': <LocalMallIcon />,
    'Portfel': <AccountBalanceWalletIcon />,
    'Stoliki': <BookmarksIcon />,
    'Wyloguj': <ExitToAppIcon />
  };

  return (
    <div>
      <List>
        {
          Object.entries(ITEMS).map(([key, value], index) => (
            <ListItem button key={index}>
              <ListItemIcon> { value } </ListItemIcon>
              <ListItemText primary={key} />
            </ListItem>
          ))
        }
      </List>
    </div>
  );
};