import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CustomBtn from '../Button';
import { useRouter } from 'next/router'
import ReactMarkdown from "react-markdown";

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
  },
  buttonWrapper: {
    '& button': {
      marginRight: '10px',
      marginTop: '10px'
    }
  }
}));

const CustomSlider = (props) => {
  const classes = useStyles();
  const router = useRouter()
  const { title, description, smallTextWithLink, picture, buttons } = props.slider;
  const handleClick = (link, newTab) => {
    if (newTab) typeof window !== 'undefined' && window.open(link)
    else router.push(link)
  }
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
        {/* <p className={classes.description}><ReactMarkdown children={{smallTextWithLink}} /></p> */}
        <div className={classes.buttonWrapper}> {buttons.map(button => <CustomBtn key={button?.url} onClick={() => handleClick(button?.url, button.newTab)} text={button?.text} btnType={button?.type} url={button?.url} />)}</div>

      </Grid>
    </Grid>
  )
}

export default CustomSlider;