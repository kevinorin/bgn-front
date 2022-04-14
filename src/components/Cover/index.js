import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CheckIcon from '@material-ui/icons/Check';
import ModalVideo from 'react-modal-video'
import CustomButton from '../../components/Button';
import LogoSlide from '../LogoSlide';
import coverimg from '../../assets/images/cover.png'

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
      marginTop: theme.marginSection
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
  }
}));

const Cover = (props) => {
  const [isOpen, setOpen] = useState(false)
  const classes = useStyles();
  const content = props.cover;
  const button = content?.buttons[0];
  const isBrowser = typeof window !== 'undefined';
  const buttonClick = () => {
    setOpen(true)
  }
  return (
    <section className={classes.mainWrapper}>
      {isBrowser && <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="7CIKa586Hiw" onClose={() => setOpen(false)} /> }
      <Grid container spacing={2}>
        <Grid item md={6}>
          <h1>{content.title}</h1>
          <div className={classes.listWrapper} dangerouslySetInnerHTML={{ __html: content?.smallTextWithLink }}></div>
          <h3>{content?.description}</h3>
          <div className={classes.logoWrapper}>
            <CustomButton onClick={buttonClick} newTab={button?.newTab} btnType={button?.type} text={button?.text} />
          </div>
        </Grid>
        <Grid item md={6}>
          <img className={classes.coverImg} src={content?.picture?.formats?.thumbnail?.url || coverimg} alt="" />
        </Grid>
      </Grid>
       <div className={classes.logoWrapper}>
        <LogoSlide logos={props.logos} />
       </div>
    </section>
  )
}

export default Cover;