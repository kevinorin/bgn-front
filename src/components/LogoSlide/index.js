import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CustomBtn from '../Button';
import Slider from "react-slick";
import Link from 'next/link';
import img1 from '../../assets/images/big-socials/patron.png';
import img2 from '../../assets/images/big-socials/discord.png';
import img3 from '../../assets/images/big-socials/wasder.png';
import img4 from '../../assets/images/big-socials/medium.png';
import img5 from '../../assets/images/big-socials/youtube1.png';
import img6 from '../../assets/images/big-socials/youtube2.png';
import img7 from '../../assets/images/big-socials/THETAtv_logo.png';
import img8 from '../../assets/images/big-socials/twitter.png';
import img9 from '../../assets/images/big-socials/facebook.png';

const useStyles = makeStyles((theme) => ({
    logoWrapper: {
        '& img': {
            maxWidth: '100%',
            maxHeight: '100%',
            width: '100px',
            verticalAlign: 'middle',
            [theme.breakpoints.down('xs')]: {
              padding: '0px 7px'
            }
            
        },
        '& .slick-cloned' :{
          display: 'none',
          [theme.breakpoints.down('xs')]: {
            display: 'block'
          }
        },
        '& .slick-track': {
          margin: 'auto'
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
    autoplaySpeed: 1000,
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
          {logos.map(item => (
            <div>
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