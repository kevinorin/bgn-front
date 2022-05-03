import React from 'react';
import cover from '../../assets/images/cover.jpg';
import { makeStyles } from '@material-ui/core/styles';
import CustomButton from '../Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import Moment from "react-moment";

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    backgroundImage: `url(${cover})`,
    paddingTop: theme.margintop,
    color: theme.palette.font,
    textAlign: 'center',
    height: '350px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    '& button': {
      padding: '5px 15px 5px 25px'
    }
  },
  title: {
    color: theme.palette.font,
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
      margin: 0
    }
  },
  reduceSpace: {
    height: '235px'
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
      <h1 className={classes.title}>{title || 'News'}</h1>
      <p>{article ? '' : subtitle || 'Subscribe, support, and have a heard voice in the development of the games you play.'}</p>
      { newPage ? <CustomButton onClick={buttonClick} text='SUBSCRIBE' /> : ''}
      {article ? (<div className={classes.flexWrapper}>
        <p>Blockchain Games Network</p>
        {/* <p>2 min read</p> */}
        <p><i><Moment format="MMM Do YYYY">
          {createdAt}</Moment></i></p>
        
        {/* <p><FavoriteBorderIcon /></p> */}
        {/* <p><ShareIcon /></p> */}
      </div>): ''}
      
    </div>
    )
}

export default CommonCover;