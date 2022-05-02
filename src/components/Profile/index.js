import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Whether from '../Whether';
import Translate from '../Translate';
import Setting from '../Setting';
import Notifications from '../Notification';
import CustomBtn from '../Button';

const useStyles = makeStyles((theme) => ({
  profile: {
    maxWidth: '300px',
    '& svg': {
      verticalAlign: 'middle'
    },
    '& button': {
      padding: '0'
    }
  },
  innerProfile: {
    backgroundColor: '#000',
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
  return (
    <div className={classes.profile}>
      <div className={classes.innerProfile}>
      <div className={classes.mainProfile}>
        <div className={classes.avatars}>
          <PersonIcon />
        </div>
        <p>John Doe<br /><span>john@gmail.com</span></p>
      </div>
      <p><Divider className={classes.divider} /></p>
      <div className={classes.wheatherWrapper}>
        <p><Whether /></p>
      </div>
      <p><FavoriteBorderIcon /> Favorites</p>
      <p><Translate /></p>
      <p><Setting /> Settings</p>
      <p><Notifications /> Notifications</p>
      <div className={classes.buttonWrapper}>
        <CustomBtn text='Join the Discord' btnType='primary' />
      </div>
      </div>
    </div>
  )
}