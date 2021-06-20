import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import PersonIcon from '@material-ui/icons/Person';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CustomIconButton from '../Button';
import data from './data.json';

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    background: theme.background,
    display: 'flex'
  },
  logoContainer: {
    flex: 'auto',
    '& img': {
      padding: '0 3px',
      maxWidth: '100%',
      maxHeight: '100%',
      '&:first-child': {
        width: '40px'
      },
      '&:nth-child(2)': {
        height: '53px'
      },
      '&:last-child': {
        height: '40px'
      }
    }
  },
  active: {
    color: theme.palette.menu.main + '!important',
    position: 'relative',
    '&::after': {
      content: '""',
      borderTop: '2px solid',
      position: 'absolute',
      bottom: '-3px',
      left: '0',
      width: '85%'
    }
  },
  addHover: {
    '&:hover': {
      color: theme.palette.primary.main,
      position: 'relative',
      '&::after': {
        content: '""',
        borderTop: '2px solid',
        position: 'absolute',
        bottom: '-3px',
        left: '0',
        width: '85%'
      }
    }
  },
  menuWrapper: {
    margin: 0,
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    '& li': {
      display: 'inline-block',
      paddingRight: 20,
      '& .submenu': {
        background: theme.palette.font,
        display: 'none',
        position: 'absolute',
        margin: 0,
        padding: '5px 5px 10px 5px',
        [theme.breakpoints.down('sm')]: {
          display: 'block',
        },
        '& li': {
          display: 'block',
          paddingRight: '0',
          paddingBottom: '10px',
          color: 'black',
          '&:last-child': {
            paddingBottom: 0
          },
          '& a': {
            color: theme.palette.font,
            color: theme.palette.menu.main
          },

        }
      },
      '&:hover': {
        '& .submenu': {
          display: 'block',
        },
      },
      '& a': {
        textDecoration: 'none',
        color: theme.palette.font,
        fontWeight: 'bold',
      },
      '&:last-child': {
        paddingRight: 0
      },
      '& svg': {
        verticalAlign: 'bottom'
      }
    }
  },
  menuIcon: {
    border: '1px solid transparent',
    borderRadius: '.375rem',
    width: '22px',
    padding: '10px 0 0',
    cursor: 'pointer',
    '&::before, &::after, & span': {
      margin: '5px -2px',
      display: 'block',
      transition: 'all .2s ease-in-out',
      content: '""',
      height: '2px',
      backgroundColor: theme.palette.black,
    },
    '& span': {
      width: '12px!important'
    }
  }
}));

const NavItems = (props) => {
  const classes = useStyles();
  console.log('Arun Jha items', props);
  return (
      <ul className={`${classes.menuWrapper} mainMenuWrapper`} edge="end">
        {props?.items.map((menu, index) => {
          return (
            <li key={menu?.text}>
              <Link href={menu?.url || ''} passHref>
                <a className={`${menu.text !== 'Register' ? classes.addHover : ''} ${index === 0 ? classes.active : ''}`}>
                  {menu.text === 'Login' ? <PersonIcon /> : ''}
                  {menu.text === 'Register' ? <CustomIconButton text={menu.text} /> : menu.text}
                  {menu.links.length ? <ExpandMoreIcon fontSize="small" /> : ''}
                </a>
              </Link>
              {menu.links.length ?
                <ul className={`${classes.submenu} submenu`}>
                  {menu.links.map((submenu, index) => {
                  return (
                    <li key={submenu.text}>
                    <Link href={submenu?.url || ''} passHref>
                      <a className={classes.addHover}>{submenu?.text}</a>
                    </Link>
                  </li>
                  )
                  })}
                </ul>
                : ''
            }
            </li>
          )
        })}
      </ul>
  )
}

export default NavItems;