import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FooterSocials from '../../components/FooterSocials';
import logo from '../../assets/images/bgn-logo.png';

const useStyles = makeStyles((theme) => ({
  paperWrapper: {
    // backgroundColor: theme.palette.supportbg
    paddingTop: theme.margintop
  },
  mainImg: {
    height: '100%',
    width: '100%',

  },
  upperPart: {
    textAlign: 'center'
  },
  title: {
    textAlign: 'center',
    color: theme.palette.font,
    fontWeight: '900',
    letterSpacing: '0'
  },
  copy: {
    color: theme.palette.copyright2
  },
  line: {
    opacity: '0.24',
    border: 'none',
    borderTop: '1px solid #7B8591'
  },
  copyright: {
    color: theme.palette.copyright1,
    fontSize: '12px',
    textAlign: 'center'
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <section className={classes.paperWrapper}>
        <div className={classes.upperPart}>
          <img src={logo} alt="BGN Logo" />
          <h2 className={classes.title}>BLOCKCHAIN GAMES NETWORK</h2>
          <FooterSocials />
        </div>
        <hr className={classes.line} />
        <div className={classes.copyright}>
          <p>© Copyright 2021. All Rights Reserved <span className={classes.copy}>Blockchain Games Network</span></p>
        </div>
      </section>
    </Container>
  )
}

export default Footer;