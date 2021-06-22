import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import VideoItem from '../../components/VideoItem';

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    background: theme.background,
    paddingTop: theme.margintop
  },
  title: {
    color: theme.palette.font,
    margin: '0',
    opacity: '0.05',
    textAlign: 'center',
    position: 'absolute',
    font: 'normal normal bold 80px/90px Oswald',
    letterSpacing: '18px',
    left: 0,
    right: 0,
    bottom: '-26px',
    [theme.breakpoints.down('xs')]: {
      font: 'normal normal bold 40px/50px Oswald',
      letterSpacing: '15px'
    }
  },
  title1: {
    color: theme.palette.font,
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: '40px',
    marginBottom: '0',
    textAlign: 'center'
  },
  headerWrapper: {
      position: 'relative',
      marginBottom: '70px'
  }
}));

const Video = (props) => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <section className={classes.mainWrapper}>
        <div className={classes.headerWrapper}>
          <h2 className={classes.title}>VIDEOS & STREAMS</h2>
          <h2 className={classes.title1}>Videos & Streams</h2>
        </div>
        <Grid container spacing={2}>
          {props?.videoData.map((item, index ) => {
            return (
              <VideoItem key={item.title + index} item={item?.contentSections[0]} />
            )
          })}
        </Grid>
      </section>
    </Container>
  )
}

export default Video;