import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Link from 'next/link'
import NavItems from '../NavItems';
import Container from '@material-ui/core/Container';
import MobileTopHead from '../MobileTopHead';
import mainLogo from '../../assets/images/logo/logo.png';
import { getStrapiMedia } from '../../utils/media';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    background: theme.background,
    display: 'flex',
    paddingTop: '20px',
    paddingBottom: '20px',

    // alignItems: 'center',
    '& a': {
      cursor: 'pointer'
    }
  },
  logoContainer: {
    flex: 'auto',
    '& img': {
      padding: '0 3px',
      maxWidth: '160px',
      maxHeight: '100%',
    }
  },
  menuIcon: {
    marginTop: '20px',
    border: '1px solid transparent',
    borderRadius: '.375rem',
    width: '22px',
    padding: '0',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    marginLeft: '10px',
    height: '36px',
    '&::before, &::after, & span': {
      margin: '5px -2px',
      display: 'block',
      transition: 'all .2s ease-in-out',
      content: '""',
      height: '2px',
      backgroundColor: theme.palette.font
    },
    '& span': {
      width: '12px!important'
    }
  },
  mobileNav: {
    // position: 'fixed',
    // right: '0',
    // width: '40%',
    // background: theme.palette.menuBg,
    // padding: '30px',
    // height: '100%',
    // zIndex: '99',
    // marginTop: '-22px',
    // overflow: 'scroll',
    '& .MuiPaper-root': {
      background: theme.palette.menuBg,
      '& .mainMenuWrapper': {
        padding: '0px 20px'
      },

    },
    '& .MuiDialog-paperFullScreen': {
      width: '40%',
      marginLeft: '60%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginLeft: '0px',
      }
    },
    '& li': {
      '& a': {
        '& svg': {
          display: 'none'
        }
      }
    },
    '& .mainMenuWrapper': {
      '& li': {
        '&:last-child, &:nth-last-child(2)': {
          display: 'inline-block',
          '& a': {
            fontSize: '18px'
          }
        },
      }
    },
    [theme.breakpoints.down('sm')]: {
      // width: '100%',
      '& .mainMenuWrapper': {
        display: 'block!important'
      }
    },
    '& .submenu': {
      display: 'block!important',
      padding: 'unset',
      position: 'static!important',
      background: 'inherit!important',
      marginLeft: '30px!important',
      '& li': {
        marginTop: '5px',
        paddingBottom: '0!important',
        display: 'block!important',
        '&:last-child, &:nth-last-child(2)': {
          display: 'block!important',

        },
        '& a': {
          color: `${theme.palette.font}!important`,
          fontSize: '18px',
          opacity: '0.5',
        }
      }
    },
    '& li ': {
      display: 'block!important',
      marginTop: '20px',
      '& a': {
        fontSize: '26px',
        fontWeight: 'bold'
      }
    },
    '& .container-1-2-1': {
      boxShadow: 'none',
      fontFamily: 'inherit'
    },
    '& .main-1-2-2': {

    },
    '& .main-d5-1-2-54, & .main-1-2-2': {
      color: theme.palette.font,
      background: 'transparent',
      borderRadius: 'unset'
    },
    '& .right-1-2-5': {
      display: 'none'
    },
    '& .daysPanel-1-2-21': {
      display: 'none'
    }
  }
}));


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const Menu = (props) => {
  const [mobileNav, setMobileNav] = useState(false);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setMobileNav(!mobileNav);
  }
  const handleClickAway = () => {
    setMobileNav(false);
  };
  const closeMenu = () => {
    setMobileNav(false);
  }
  const { links, logo, light_logo } = props?.navBar;
  const theme = useTheme();
  const mode = typeof window !== 'undefined' && window.localStorage.getItem("mode") === "true";
  console.log('Arun Jha logo', mode)
  const headLogo = mode ? logo.url : light_logo.url;
  if (!links) return null;
  return (
    <Container maxWidth="lg">
      <nav className={classes.mainWrapper}>
        <div className={classes.logoContainer}>
          <Link href='/' passHref>
            <a>
              <img src={getStrapiMedia(headLogo)} alt="BGN Logo" />
            </a>
          </Link>
        </div>
        {!mobileNav && (
          <div className={classes.desktopNav}>
            <NavItems closeMenu={handleClose} items={links} />
          </div>
        )}
        <button onClick={handleClickOpen} className={classes.menuIcon}>
          <span>&nbsp;</span>
        </button>
        {/* {mobileNav && ( */}
        {/* <ClickAwayListener onClickAway={handleClickAway}> */}
        <Dialog
          open={open}
          fullScreen
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          className={classes.mobileNav}
        >
          {/* <div className={classes.mobileNav}> */}
          <MobileTopHead closeMenu={handleClose} />
          <NavItems closeMenu={handleClose} items={links} />
          {/* </div> */}
        </Dialog>
        {/* </ClickAwayListener> */}
        {/* )} */}
      </nav>
    </Container>
  )
}

export default Menu;