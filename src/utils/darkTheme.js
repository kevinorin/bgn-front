import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary:
    {
      main: '#CF455C',
    },
    secondary: {
      main: '#19857b',
    },
    btn: { 
      main: '#422961'
    },
    menu: {
      main: '#CF455C'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#09043A',
      black: '#000'
    },
    font: '#fff',
    fontGrey: '#7B8591',
    blue: '#33439B',
    white: '#fff',
    tournamentFont: '#fff',
    supportbg: '#0C0C0C',
    copyright1: '#7B8591',
    copyright2: '#4F396B',
    menuBg: '#060412',
    sun: 'yellow',
    logoSlider: '#09043a',
    wave1: '#242c4b',
    wave2: '#11162f',
    wave3: '#19233f',
    wave4: '#242c50',
    disable: '#800080',
    whiteFont: '#fff'
  },
  margintop: '4rem',
  marginSection: '2rem',
  marginHP: '8rem',
});

export default theme;