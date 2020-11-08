import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import { HOME_PAGE_URL, MY_ORDERS_VIEW_URL, SUPPLIERS_VIEW_URL, TABLES_VIEW_URL, WALLET_VIEW_URL } from '../../utils/urlProvider';

  const createItem = (name, icon, url) => {
    return {
      'name': name,
      'icon': icon,
      'url': url
    };
  };
  
  export const ITEMS = [
    createItem('Moje zamówienia', <LocalMallIcon />, MY_ORDERS_VIEW_URL),
    createItem('Dostawcy', <RestaurantIcon />, SUPPLIERS_VIEW_URL),
    createItem('Portfel', <AccountBalanceWalletIcon />, WALLET_VIEW_URL),
    createItem('Stoliki', <BookmarksIcon />, TABLES_VIEW_URL),
    createItem('Wyloguj', <ExitToAppIcon />, HOME_PAGE_URL),
  ];
