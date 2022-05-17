import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FooterSocials from '../../components/FooterSocials';
import logo from '../../assets/images/bgn-logo.png';

const useStyles = makeStyles((theme) => ({
  paperWrapper: {
    // backgroundColor: theme.palette.supportbg
    paddingTop: theme.marginHP
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
    textAlign: 'center',
    '& p': {
      fontSize: '12px'
    }
  },
  footerLogo: {
    height: '88px',
    // width: '88px'
  }
}));

const Footer = ({ global }) => {
  const classes = useStyles();
  console.log('Arun Jha global', global)
  const { logo, light_logo } = global.footer;
  const mode = typeof window !== 'undefined' && window.localStorage.getItem("mode") === "true";
  const mainLogo = mode ? logo.url : light_logo.url;
  return (
    <Container maxWidth="lg">
      <section className={classes.paperWrapper}>
        <div className={classes.upperPart}>
          <img className={classes.footerLogo} src={mainLogo} alt="BGN Logo" />
          <h2 className={classes.title}>BLOCKCHAIN GAMES NETWORK</h2>
          <FooterSocials />
        </div>
        <hr className={classes.line} />
        <div className={classes.copyright}>
          <p dangerouslySetInnerHTML={{ __html: global.footer.smallText }} />
        </div>
      </section>
    </Container>
  )
}

export default Footer;