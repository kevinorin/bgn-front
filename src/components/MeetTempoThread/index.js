import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CustomSlider from '../Slider';
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

const MeetTempoThread = (props) => {
  const classes = useStyles();
  
  const theme = useTheme();
  return (
    <>
      <Container maxWidth="lg">
        <section className={classes.mainWrapper}>
          <h2 className="title">Meet TempoThreads</h2>
          <p>Streaming you uplifting music and empowering artists across genres with the support they need to shine. </p>
        </section>
      </Container>
    </>
  )
}

export default MeetTempoThread;