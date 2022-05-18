import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import VideoItem from '../../components/VideoItem';
import CustomButton from '../../components/Button';
import Wave from 'react-wavify'

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    background: theme.background,
    paddingTop: theme.marginHP

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
  },
  buttonWrapper: {
    margin: 'auto',
    marginTop: '20px'
  },
  waveUpper: {
    position: 'absolute',
    left: 0,
    opacity: 0.5,
    height: '300px',
    marginTop: '70px'
  },
  waveBottom: {
    position: 'absolute',
    marginTop: '370px',
    left: 0,
    opacity: 0.5,
    transform: 'rotate(180deg)',
    height: '422px',
    zIndex: '-1',
    [theme.breakpoints.down('xs')]: {
      marginTop: '370px',
      height: '1370px'
    }
  }
}));

const Video = (props) => {
  const classes = useStyles();
  const buttonClick = (e) => {
    e.preventDefault()
    typeof window !== 'undefined' && window.open('https://www.youtube.com/channel/UCspvE_U90Doi1ox2Tpn-sLQ', '_blank')
  }
  const theme = useTheme();
  const waveData = [
    {
      id: 1,
      color: theme.palette.wave1,
      speed: 0.2
    },
    {
      id: 2,
      color: theme.palette.wave2,
      speed: 0.21
    },
    {
      id: 3,
      color: theme.palette.wave3,
      speed: 0.15
    },
    {
      id: 4,
      color: theme.palette.wave4,
      speed: 0.18
    }
  ]
  return (
    <>
      {waveData.map((item) => {
        return (
          <Wave key={item.id} fill={item.color}
            paused={false}
            options={{
              height: 1,
              amplitude: 50,
              speed: item.speed,
              points: 2
            }}
            className={classes.waveUpper}
          />
        )
      })
      }
      {waveData.map((item) => {
        return (
          <Wave key={item.id} fill={item.color}
            paused={false}
            options={{
              height: 20,
              amplitude: 50,
              speed: item.speed,
              points: 2
            }}
            className={classes.waveBottom}
          />
        )
      })
      }
      <Container maxWidth="lg" style={{ marginTop: '50px', marginBottom: '50px' }}>
        <section className={classes.mainWrapper}>
          <div className={classes.headerWrapper}>
            <h2 className={classes.title}>VIDEOS & STREAMS</h2>
            <h2 className={classes.title1}>Videos & Streams</h2>
          </div>
          <Grid container spacing={2}>
            {props?.videoData.map((item, index) => {
              return (
                <VideoItem key={item.title + index} item={item?.contentSections[0]} />
              )
            })}
            {props?.newsPage ? '' : (
              <div className={classes.buttonWrapper}>
                <CustomButton onClick={(e) => buttonClick(e)} btnType='secondary' text='View All' />
              </div>
            )}
          </Grid>
        </section>
      </Container>
    </>
  )
}

export default Video;