import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles((theme) => ({
  mainBtn: {
    position: 'relative',
    padding: '15px 103px 15px 27px',
    overflow: 'hidden',
    textTransform: 'none',
    '&::before': {
      position: 'absolute',
      height: '100%',
      left: 'auto',
      top: '0',
      lineHeight: '3',
      fontSize: '140%',
      width: '60px',
      content: '""',
      right: '10px'
    },
    "&::after": {
      width: '30%',
      height: '200%',
      background: 'rgba(255,255,255,0.1)',
      zIndex: '1',
      right: '0',
      top: '0',
      margin: '-5px 0 0 -5px',
      transformOrigin: '0 0',
      transform: 'rotate(-20deg)',
      content: '""',
      position: 'absolute',
      transition: 'all 0.3s'
    }
  },
  primaryBtn: {
    background: theme.palette.primary.main
  },
  sendBtn: {
    background: theme.palette.btn.main
  }
}));

const CustomBtn = (props) => {
  const classes = useStyles();
  const { text, btnType, url, classNames } = props;
  const mainClass = btnType === ('primary' || 'undefined') ? classes.primaryBtn : classes.sendBtn;
  return (
    <Button
      variant="contained"
      color="primary"
      className={`${classes.mainBtn} ${mainClass} ${classNames}`}
      type="submit"
      endIcon={<ArrowRightAltIcon />}
      onClick={props.onClick}
    >
      {text}
    </Button>
  )
}

export default CustomBtn;