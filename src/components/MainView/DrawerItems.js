import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import { useHistory } from "react-router-dom";
import { HOME_PAGE_URL, MY_ORDERS_VIEW_URL, SUPPLIERS_VIEW_URL, TABLES_VIEW_URL, WALLET_VIEW_URL } from '../../utils/urlProvider';

export const DrawerItems = () => {

  const history = useHistory();

  const createItem = (name, icon, onClick) => {
    return {
      'name': name,
      'icon': icon,
      'onClick': onClick
    };
  }

  const ITEMS = [
    createItem('Moje zamówienia', <LocalMallIcon />, () => history.push(MY_ORDERS_VIEW_URL)),
    createItem('Dostawcy', <RestaurantIcon />, () => history.push(SUPPLIERS_VIEW_URL)),
    createItem('Portfel', <AccountBalanceWalletIcon />, () => history.push(WALLET_VIEW_URL)),
    createItem('Stoliki', <BookmarksIcon />, () => history.push(TABLES_VIEW_URL)),
    createItem('Wyloguj', <ExitToAppIcon />, () => history.push(HOME_PAGE_URL)),
  ];

  return (
    <div>
      <List>
        {
          ITEMS.map((item, index) => (
            <ListItem button key={index} onClick={item.onClick} >
              <ListItemIcon> { item.icon } </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))
        }
      </List>
    </div>
  );
};