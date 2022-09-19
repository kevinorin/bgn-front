import React from 'react';
import cover from '../../assets/images/cover.jpg';
import { makeStyles } from '@material-ui/core/styles';
import CustomButton from '../Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import Moment from "react-moment";
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    backgroundImage: `url(${cover})`,
    paddingTop: theme.margintop,
    paddingBottom: theme.margintop,
    color: theme.palette.whiteFont,
    textAlign: 'center',
    minHeight: '350px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    '& button': {
      padding: '5px 15px 5px 25px'
    }
  },
  title: {
    color: theme.palette.whiteFont,
    fontSize: 36,
    fontWeight: 'bold',
    lineHeight: '40px',
    marginBottom: '0',
    display: 'inline',
  },
  link: {
    float: 'right'
  },
  flexWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& p': {
      marginRight: '10px',
      margin: 0,
      
    }
  },
  reduceSpace: {
    minHeight: '235px'
  },
  divider: {
    background: '#fff',
    marginRight: '10px'
  }
}));

const CommonCover = (props) => {
  const { title, subtitle, newPage, createdAt, article } = props;
  const classes = useStyles();
  const isBrowser = typeof window !== 'undefined';
  const buttonClick = () => {
    isBrowser && window.open('https://www.youtube.com/channel/UCspvE_U90Doi1ox2Tpn-sLQ', "_blank");
  }
  return (
    <div className={`${classes.mainWrapper} ${article ? classes.reduceSpace : ''}`}>
      <Container maxWidth="lg">
      <h1 className={classes.title}>{title || 'News'}</h1>
      <p>{article ? '' : subtitle || 'Subscribe, support, and have a heard voice in the development of the games you play.'}</p>
      { newPage ? <CustomButton onClick={buttonClick} text='SUBSCRIBE' /> : ''}
      {article ? (<div className={classes.flexWrapper}>
        <p>by Rebecca Addison & The Atlantean</p>
        <Divider orientation="vertical" flexItem className={classes.divider} />
        {/* <p>2 min read</p> */}
        <p><i><Moment format="MMM Do YYYY">
          {createdAt}</Moment></i></p>
        
        {/* <p><FavoriteBorderIcon /></p> */}
        {/* <p><ShareIcon /></p> */}
      </div>): ''}
      </Container>
    </div>
    )
}

export default CommonCover;