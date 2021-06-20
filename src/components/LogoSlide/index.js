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
            verticalAlign: 'middle'
            
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

const LogoSlide = (props) => {
  const classes = useStyles();
  const settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div className={classes.logoWrapper}>
        <Slider {...settings}>
            <div>
            <Link href='/' passHref><a>
                <img src={img1} alt="" />
                </a></Link>
            </div>
            <div>
            <Link href='/' passHref><a>
                <img src={img2} alt="" />
                </a></Link>
            </div>
            <div>
            <Link href='/' passHref><a>
                <img src={img3} alt="" />
                </a></Link>
            </div>
            <div>
            <Link href='/' passHref><a>
                <img src={img4} alt="" />
                </a></Link>
            </div>
            <div className={classes.youtubeWrapper}>
            <Link href='/' passHref><a>
                <img src={img5} alt="" />
                <img src={img6} alt="" />
                </a></Link>
            </div>
            <div>
            <Link href='/' passHref><a>
                <img src={img7} alt="" />
                </a></Link>
            </div>
            <div>
            <Link href='/' passHref><a>
                <img src={img8} alt="" />
                </a></Link>
            </div>
            <div>
            <Link href='/' passHref><a>
                <img src={img9} alt="" />
                </a></Link>
            </div>
        </Slider>
    </div>
  )
}

export default LogoSlide;