import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CustomBtn from '../Button';
import { getStrapiMedia } from '../../utils/media';
import imgages from '../../assets/images/gala-games-town-star-6.png';

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    background: theme.background
  },
  sliderImg: {
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '10px'
  },
  title: {
    color: theme.palette.font,
    fontSize: 36,
    fontWeight: 'bold',
    lineHeight: '40px',
    marginBottom: '0'
  },
  description: {
    color: theme.palette.font,
    lineHeight: '25px'
  },
  sup: {
    color: theme.palette.fontGrey,
    fontWeight: 'bold'
  },
  imageWrapper: {
    boxShadow: '0px 3px 10px #00000029',
  }
}));

const CustomSlider = (props) => {
  const classes = useStyles();
  const { title, description, smallTextWithLink, picture, buttons } = props.slider; 
  const buttonValue = buttons[0];
  console.log('Arun Jha picture', picture)
  return (
          <Grid container spacing={10}>
              <Grid item md={6}>
                <div className={classes.imageWrapper}>
                  <img src={picture?.url} alt={props.slider.title} className={classes.sliderImg} />
                </div>
              </Grid>
              <Grid item md={6}>
                <p className={classes.sup}>{description}</p>
                <h2 className={classes.title}>{title}</h2>
                <p className={classes.description}>{smallTextWithLink}</p>
                <CustomBtn text={buttonValue?.text} type={buttonValue?.type} url={buttonValue?.url} />
              </Grid>
          </Grid>
  )
}

export default CustomSlider;