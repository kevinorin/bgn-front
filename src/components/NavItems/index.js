import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import PersonIcon from '@material-ui/icons/Person';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CustomIconButton from '../Button';
import Login from '../../containers/Login';
import Registration from '../../containers/Registration';
import Cookies from "js-cookie"
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';
import { useRouter } from 'next/router'


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
    marginTop: '20px',
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
      },
      '& button': {
        padding: '5px 7px 5px 18px',
        marginRight: 12
      }
    }
  },
  menuIcon: {
    marginTop: '20px',
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
  },
  submenu: {
    [theme.breakpoints.down('xs')]: {
      '& li': {
        display: 'block!important',
        width: '100%'
      }
    }
  },
  disable: {
    pointerEvents: 'none',
    cursor: 'default!important',
    textDecoration: 'none!important',
    color: '#3e2a5e!important'
  }
}));

const NavItems = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [ropen, setrOpen] = React.useState(false);
  const router = useRouter()
  const handleOpen = () => {
    setOpen(true)
  }
  const handlerOpen = () => {
    setrOpen(true)
  }
  const handleClose = () => {
    setOpen(false);
  };
  const handlerClose = () => {
    setrOpen(false);
  };
  const handleOpenLink = () => {
    typeof window !== 'undefined' && window.open('https://gala.fan/xgtIrFHDoB', "_blank");
  }
  const handleLogout = () => {
    Cookies.remove("jwt_token")
    router.push('/')


  }
  return (
    <>
      <ul className={`${classes.menuWrapper} mainMenuWrapper`} edge="end">

        {props?.items.map((menu, index) => {
          return (
            <li key={menu?.text}>
              {menu.text === 'Login' ? Cookies.get('jwt_token') ? <CustomIconButton onClick={handleOpenLink} text='Play Now' btnType='primary' /> : (
                <>
                  <a onClick={handleOpen}>
                    <PersonIcon /> {menu.text}
                  </a>
                </>
              ) : menu.text === 'Register' ? Cookies.get('jwt_token') ? <CustomIconButton onClick={handleLogout} text='Logout' /> : <CustomIconButton onClick={handlerOpen} text={menu.text} btnType='primary' /> :
                <Link href={menu?.url || ''} passHref>
                  <a className={`${menu.text === 'Vanguard Studios' ? classes.disable : ''} ${index === 0 ? classes.active : ''}`}>
                    {/* {menu.text === 'Login' ? <PersonIcon /> : ''} */}
                    {menu.text}
                    {menu.links.length ? <ExpandMoreIcon fontSize="small" /> : ''}
                  </a>
                </Link>

              }

              {
                menu.links.length ?
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
      </ul >
      <Login open={open} onClose={handleClose} />
      <Registration open={ropen} onClose={handlerClose} />
    </>
  )
}

export default NavItems;