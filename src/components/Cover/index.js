import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CheckIcon from '@material-ui/icons/Check';
import ModalVideo from 'react-modal-video'
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';
import ReactMarkdown from "react-markdown";
import CustomButton from '../../components/Button';
import LogoSlide from '../LogoSlide';

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    background: theme.background,
    color: theme.palette.font,
    paddingTop: theme.margintop,
    '& h1': {
      fontSize: '38px',
      lineHeight: '42px',
      margin: 0
    },
    '& h3': {
      margin: 0,
      fontSize: '22px',
      lineHeight: '26px',
      marginTop: theme.marginSection,
      maxWidth: '450px',
      [theme.breakpoints.down('xs')]: {
        marginTop: '0.5em'
      }
    },
    '& button': {
      marginRight: '15px',
      marginTop: '10px',
      [theme.breakpoints.down('xs')]: {
        width: '100%'
      }
    }
  },
  listWrapper: {
    '& ul': {
      paddingLeft: '1.5em',
      margin: 0,
      color: theme.palette.font,
      marginTop: theme.marginSection,
      listStyle: 'none',
    },
    '& li': {
      padding: '0',
      position: 'relative',
      listStyle: 'disc',
      marginBottom: '10px'
    }
  },
  checkIcon: {
    color: theme.palette.font,
    fontSize: '0.8em'
  },
  coverImg: {
    maxWidth: '100%',
    maxHeight: '100%'
  },
  iconWrapper: {
    minWidth: '25px'
  },
  logoWrapper: {
    marginTop: theme.marginSection,
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      marginTop: '3rem'
    }
  }
}));

const Cover = (props) => {
  const [isOpen, setOpen] = useState(false)
  const [videoId, setVideoId] = useState('')
  const classes = useStyles();
  const content = props.cover;
  const button = content?.buttons[0];
  console.log('Arun Jha content', content)
  const isBrowser = typeof window !== 'undefined';
  const getId = (url) => {
    let regex = /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;
    return regex.exec(url)[3];
  }
  const buttonClick = (urls) => {
    if (urls.includes('youtube')) {
      setVideoId(getId(urls))
      setOpen(true)
    }
    else {
      setOpen(false)
      isBrowser && window.open(urls, "_blank");
    }
  }
  return (
    <section className={classes.mainWrapper}>
      {isBrowser && <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={videoId} onClose={() => setOpen(false)} /> }
      <Grid container spacing={2}>
        <Grid item md={6}>
          <h1>{content?.title}</h1>
          <Hidden mdUp>
          <img className={classes.coverImg} src={content?.picture?.url} alt="" />
          </Hidden>
          <h3>{content?.description}</h3>
          
          <div className={classes.listWrapper}><ReactMarkdown children={content?.smallTextWithLink} escapeHtml={false} /></div>
          <div className={classes.logoWrapper}>
            {content?.buttons.map((item_) => <CustomButton key={item_?.text} onClick={() => buttonClick(item_.url)} newTab={item_?.newTab} btnType={item_?.type} text={item_?.text} /> )}
            
          </div>
        </Grid>
        <Grid item md={6}>
        <Hidden only={['sm', 'xs']}>
          <img className={classes.coverImg} src={content?.picture?.url} alt="" />
          </Hidden>
        </Grid>
      </Grid>
       <div className={classes.logoWrapper}>
        <LogoSlide logos={props.logos} />
       </div>
    </section>
  )
}

export default Cover;