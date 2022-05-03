import React from 'react';
import cover from '../../assets/images/cover.jpg';
import { makeStyles } from '@material-ui/core/styles';
import CustomButton from '../Button';

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    backgroundImage: `url(${cover})`,
    paddingTop: theme.margintop,
    color: theme.palette.font,
    textAlign: 'center',
    height: '350px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
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
  }
}));

const CommonCover = (props) => {
  const { title, subtitle, newPage } = props;
  const classes = useStyles();
  const isBrowser = typeof window !== 'undefined';
  const buttonClick = () => {
    isBrowser && window.open('https://www.youtube.com/channel/UCspvE_U90Doi1ox2Tpn-sLQ', "_blank");
  }
  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.title}>{title || 'News'}</h1>
      <p>{subtitle || 'Subscribe, support, and have a heard voice in the development of the games you play.'}</p>
      { newPage ? <CustomButton onClick={buttonClick} text='SUBSCRIBE' /> : ''}
    </div>
    )
}

export default CommonCover;