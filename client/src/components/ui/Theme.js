import { createMuiTheme } from '@material-ui/core/styles';

const mmkPurple = '#a000a0'
const gycColor_main = '#26a69a'
const gycColor_sec = '#aed581'

export default createMuiTheme({
  palette: {
    common: {
			// purple: `${mmkPurple}`
			purple: `${gycColor_main}`
    },
    primary: {
			// main: `${mmkPurple}`
			main: `${gycColor_main}`
    },
    secondary: {
			// main: '#FFFFFF'
			main: `${gycColor_sec}`
    }
	},
	zIndex: {
		pop: 999
	}
  // mixins: {
  //   toolbar: {
  //     minHeight: 50
  //   }
  // }
})

