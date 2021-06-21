import React from 'react';
import cover from '../../assets/images/news-cover.jpg';
import { makeStyles } from '@material-ui/core/styles';

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
  const classes = useStyles();
  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.title}>News</h1>
      <p>Subscribe, support, and have a heard voice in the development of the games you play.</p>
    </div>
    )
}

export default CommonCover;