import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Link from 'next/link'
import NavItems from '../NavItems';
import Container from '@material-ui/core/Container';
import MobileTopHead from '../MobileTopHead';
import mainLogo from '../../assets/images/logo/logo.png';
import { getStrapiMedia } from '../../utils/media';

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
    position: 'fixed',
    right: '0',
    width: '40%',
    background: theme.palette.menuBg,
    padding: '30px',
    height: '100%',
    zIndex: '99',
    marginTop: '-22px',
    overflow: 'scroll',
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
      width: '100%',
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

const Menu = (props) => {
  const [mobileNav, setMobileNav] = useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setMobileNav(!mobileNav);
  }
  const handleClickAway = () => {
    setMobileNav(false);
  };
  const closeMenu = () => {
    setMobileNav(false);
  }
  const { links, logo } = props?.navBar;
  if (!links) return null;
  return (
    <Container maxWidth="lg">
    <nav className={classes.mainWrapper}>
      <div className={classes.logoContainer}>
      <Link href='/' passHref>
        <a>
          <img src={mainLogo || getStrapiMedia(logo?.url)} alt="BGN Logo" />
        </a>
      </Link>
      </div>
      {!mobileNav && (
      <div className={classes.desktopNav}>
        <NavItems items={links} />
      </div>
      )}
      <button onClick={handleClick} className={classes.menuIcon}>
        <span>&nbsp;</span>
      </button>
      {mobileNav && (
        <ClickAwayListener onClickAway={handleClickAway}>
         <div className={classes.mobileNav}>
         <MobileTopHead closeMenu={closeMenu} />
         <NavItems items={links} />
       </div>
       </ClickAwayListener>
      )}
    </nav>
    </Container>
  )
}

export default Menu;