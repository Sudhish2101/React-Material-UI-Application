import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: 'none'
    }
  },
  palette: {
    primary: blue,
    secondary:{
      main: '#08C5A7'
    }
  }
});

export default theme;