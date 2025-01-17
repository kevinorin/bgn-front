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
    background: theme.background,
    paddingTop: theme.marginHP,
  },
  prevIcon: {
    color: theme.palette.tournamentFont,
    width: 32,
    height: 32,
    left: '18%',
    transform: 'translate(18%,0)',
    bottom: 39,
    marginRight: 30,
    top: 'auto',
    "&:hover": {
      color: theme.palette.tournamentFont,
      opacity: 0.8
    },
    [theme.breakpoints.down('xs')]: {
      position: 'absolute',
      left: 'calc(50% - 32px)'
    }
  },
  nextIcon: {
    color: theme.palette.tournamentFont,
    width: 32,
    height: 32,
    left: '18%',
    transform: 'translate(18%,0)',
    bottom: 39,
    marginLeft: 30,
    top: 'auto',
    "&:hover": {
      color: theme.palette.tournamentFont,
      opacity: 0.8
    },
    [theme.breakpoints.down('xs')]: {
      position: 'absolute',
      left: 'calc(50% - 32px)'

    }
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

const Tournaments = (props) => {
  const classes = useStyles();
  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <NavigateBeforeIcon
        className={`${className} ${classes.prevIcon}`}
        onClick={onClick}
      />
    );
  }

  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <NavigateNextIcon
        className={`${className} ${classes.nextIcon}`}
        onClick={onClick}
      />
    );
  }
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
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
      <Container maxWidth="lg" style={{ marginTop: '50px' }}>
        <section className={classes.mainWrapper}>
          <Slider {...settings}>
            {props?.tournamentsData.map((slider, index) => {
              return (
                <CustomSlider key={index} slider={slider?.contentSections[0]} />
              )
            })}
          </Slider>
        </section>
      </Container>
    </>
  )
}

export default Tournaments;