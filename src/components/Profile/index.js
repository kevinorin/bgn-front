import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Whether from '../Whether';
import Translate from '../Translate';
import Setting from '../Setting';
import Notifications from '../Notification';
import CustomBtn from '../Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Cookies from "js-cookie"
import YouTubeIcon from '@material-ui/icons/YouTube';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import { useRouter } from 'next/router'


const useStyles = makeStyles((theme) => ({
  profile: {
    maxWidth: '300px',
    '& svg': {
      verticalAlign: 'middle'
    },
    '& button': {
      padding: '0'
    },
    '& p': {
      cursor: 'pointer'
    }
  },
  innerProfile: {
    backgroundColor: theme.palette.supportbg,
    padding: '20px',
    borderRadius: '10px',
  },
  mainProfile: {
    display: 'flex',
    '& p': {
      margin: 0
    },
    '& span': {
      fontSize: '11px'
    }
  },
  avatars: {
    borderRadius: '100%',
    border: '4px solid #fff',
    width: '50px',
    height: '50px',
    marginRight: '25px',
    '& svg': {
      margin: 'auto',
      display: 'block',
      marginTop: '7px'
    },
  },
  buttonWrapper: {
    '& button': {
      padding: '8px 60px 8px 20px'
    }
  },
  wheatherWrapper: {
    width: '150px',
  },
  divider: {
    backgroundColor: 'white',
    width: '100%'
  }
}))

export default function Profile() {
  const classes = useStyles();
  const router = useRouter()
  const handleClick = (link) => {
    typeof window !== 'undefined' && window.open(link)
  }
  const handleLogout = () => {
    Cookies.remove("jwt_token")
    router.push('/')


  }
  return (
    <div className={classes.profile}>
      <div className={classes.innerProfile}>
      {/* <div className={classes.mainProfile}>
        <div className={classes.avatars}>
          <PersonIcon />
        </div>
        <p>John Doe<br /><span>john@gmail.com</span></p>
      </div> */}
      {/* <p><Divider className={classes.divider} /></p> */}
      {/* <div className={classes.wheatherWrapper}> */}
        {/* <p><Whether /></p> */}
      {/* </div> */}
      <p onClick={() => handleClick('https://gala.fan/xgtIrFHDoB')}><SportsEsportsIcon /> Gala Games</p>
      {/* <p><Translate /></p> */}
      {/* <p><Setting /> Settings</p> */}
      <p onClick={() => handleClick()}><YouTubeIcon /> BGN YouTube</p>
      {Cookies.get("jwt_token") ? <p onClick={handleLogout}><ExitToAppIcon /> Logout</p> : ''}
      <div className={classes.buttonWrapper}>
        <CustomBtn onClick={() => handleClick('https://discord.com/invite/sxjn9kWQgY')} text='Join the Discord' btnType='primary' />
      </div>
      </div>
    </div>
  )
}