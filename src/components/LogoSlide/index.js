import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from "react-slick";

const useStyles = makeStyles((theme) => ({
  logoWrapper: {
    // background: theme.palette.logoSlider,
    paddingTop:'2rem',
    '& img': {
      maxWidth: '100%',
      maxHeight: '100%',
      width: '100px',
      verticalAlign: 'middle',
      [theme.breakpoints.down('xs')]: {
        padding: '0px 7px'
      }

    },
    '& .slick-cloned': {
      display: 'none',
      [theme.breakpoints.down('xs')]: {
        display: 'block'
      }
    },
    '& .slick-track': {
      margin: 'auto'
    },
    '& .slick-next': {
      right: '-10px'
    }
  },
  youtubeWrapper: {
    '& img': {
      display: 'inline',
      '&:first-child': {
        width: '30px'
      },
      '&:last-child': {
        width: '72px'
      }
    }
  }
}));

const LogoSlide = ({ logos }) => {
  const classes = useStyles();
  const settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  };
  return (
    <div className={classes.logoWrapper}>
      <Slider {...settings}>
        { logos && logos.map(item => (
          <div key={item.logo[0].url}>
            {item.logo[0].url ? (
              <a href={item.logo[0].url} target="_blank" title={item.logo[0].title}>
                <img src={item.logo[0].icon[0].url} alt={item.logo[0].title} />
              </a>
            ) : (
              <img src={item.logo[0].icon[0].url} alt={item.logo[0].title} />
            )}

          </div>
        ))}
      </Slider>
    </div>
  )
}

export default LogoSlide;