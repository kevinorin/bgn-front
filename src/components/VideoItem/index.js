import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import ModalVideo from 'react-modal-video'
import image from '../../assets/images/mqdefault.png';
import icon from '../../assets/images/play-icon.png'
import yicon from '../../assets/images/y-play-icon.png'

const useStyles = makeStyles((theme) => ({
  paperWrapper: {
    backgroundColor: theme.palette.background.black
  },
  title: {
    color: theme.palette.font
  },
  mainImg: {
    height: '100%',
    width: '100%'
  },
  textBlock: {
    padding: '10px',
    position: 'relative'
  },
  description: {
    color: theme.palette.font,
    textAlign: 'left',
    minHeight: '50px',
    fontWeight: 'bold'
  },
  imgWrapper: {
    position: 'relative',
    minHeight: '165px',
  },
  icon: {
    position: 'absolute',
    left: '0',
    top: 'calc(50% - 26px)',
    bottom: '0',
    right: '0',
    margin: '0 auto',
    cursor: 'pointer'
  },
  yicon: {
    background: '#fff',
    padding: '11px 8px',
    borderRadius: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    top: '-30px',
    position: 'absolute'
  }
}));

const VideoItem = (props) => {
  const [isOpen, setOpen] = useState(false)
  const classes = useStyles();
  const { url, cover } = props.item;
  const finalCover = cover?.url;
  const isBrowser = typeof window !== 'undefined';
  console.log('Arun Jha props sfdsfdsfds', props)
  const getId = (urls) => {
    let regex = /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm;
    return regex.exec(urls)[3];
  }
  return (
    <>
      {isBrowser && <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={getId(url)} onClose={() => setOpen(false)} />}
      <Grid item xs={12} sm={6} md={3}>
        <div className={classes.mainWrapper}>
          <div className={classes.paperWrapper}>
            <div className={classes.imgWrapper}>
              <img src={finalCover || image} className={classes.mainImg} alt={props?.item?.title} />
              <img src={icon} onClick={() => setOpen(true)} className={classes.icon} alt='Play Icon' />
            </div>
            <div className={classes.textBlock}>
              {/* <img src={yicon} className={classes.yicon} alt='YouTube Icon' /> */}
              <p className={classes.description}>{props?.item?.title}</p>
            </div>
          </div>
        </div>
      </Grid>
    </>

  )
}

export default VideoItem;