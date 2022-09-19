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
      default: '#fff',
      black: '#000'
    },
    font: '#000',
    fontGrey: '#7B8591',
    blue: '#33439B',
    white: '#000',
    tournamentFont: '#fff',
    supportbg: '#f3f3f3',
    copyright1: '#7B8591',
    copyright2: '#4F396B',
    menuBg: '#f7f7f7',
    sun: 'yellow',
    logoSlider: '#f3f3f3',
    wave1: '#CF455C',
    wave2: '#CF455C',
    wave3: '#CF455C',
    wave4: '#CF455C',
    disable: '#800080',
    whiteFont: '#fff'
  },
  margintop: '4rem',
  marginSection: '2rem',
  marginHP: '8rem'
});

export default theme;