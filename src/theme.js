import { createMuiTheme } from '@material-ui/core/styles';
import { deepOrange, red } from '@material-ui/core/colors';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[700],
    },
    secondary: {
      main: deepOrange[500],
    },
  },
});