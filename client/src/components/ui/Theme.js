import { createMuiTheme } from '@material-ui/core/styles';

const mmkPurple = '#a000a0';

export default createMuiTheme({
  palette: {
    common: {
      purple: `${mmkPurple}`
    },
    primary: {
      main: `${mmkPurple}`
    },
    secondary: {
      main: '#FFFFFF'
    }
  },
  // mixins: {
  //   toolbar: {
  //     minHeight: 50
  //   }
  // }
})

