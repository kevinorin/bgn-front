import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CustomSlider from '../../components/Slider';
import Slider from "react-slick";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Wave from 'react-wavify'

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    // background: theme.background,
    paddingTop: theme.marginHP,
  },
  bottomStyle: {
    position: 'absolute',
    left: 0,
    marginTop: '80px',
    opacity: 0.5,
    transform: 'rotate(180deg)',
    height: '560px',
    [theme.breakpoints.down('xs')]: {
      height: '925px'
    }
  }
}));

const WaveHeader = (props) => {
  const classes = useStyles();
  
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
              height: 20,
              amplitude: 50,
              speed: item.speed,
              points: 2
            }}
            className={classes.bottomStyle}
          />
        )
      })
      }
      <Container maxWidth="lg">
        <section className={classes.mainWrapper}>
          <h1>TempoThreads: Empowering Artists in Blockchain Entertainment</h1>
          <p>Streaming you uplifting music and empowering artists across genres with the support they need to shine. </p>
        </section>
      </Container>
    </>
  )
}

export default WaveHeader;