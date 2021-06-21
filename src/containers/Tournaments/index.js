import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CustomSlider from '../../components/Slider';
import Slider from "react-slick";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    background: theme.background,
    paddingTop: theme.margintop,
  },
  prevIcon: {
    color: theme.palette.font,
    width: 32,
    height: 32,
    left: '18%',
    transform: 'translate(18%,0)',
    bottom: -50,
    marginRight: 30,
    top: 'auto',
    "&:hover": {
      color: theme.palette.font,
      opacity: 0.8
    }
  },
  nextIcon: {
    color: theme.palette.font,
    width: 32,
    height: 32,
    left: '18%',
    transform: 'translate(18%,0)',
    bottom: -50,
    marginLeft: 30,
    top: 'auto',
    "&:hover": {
      color: theme.palette.font,
      opacity: 0.8
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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <Container maxWidth="xl">
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
  )
}

export default Tournaments;