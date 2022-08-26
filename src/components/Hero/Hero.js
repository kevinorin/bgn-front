import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ReactMarkdown from 'react-markdown'

const useStyles = makeStyles((theme) => ({
  hero: {
    height: '300px',
    overflow: 'hidden',
    display: 'flex',
    marginBottom: theme.margintopMain,
    background: theme.background,
    [theme.breakpoints.down('xs')]: {
      height: '250px',
    }
  },
  textBlock: {
    margin: 'auto',
    textAlign: 'left',
  },
  title: {
    color: theme.palette.font,
    margin: '0',
    padding: '0',
    fontSize: 48
  },
  subtitle: {
    color: theme.palette.font,
    margin: '0',
    padding: 0,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: '700'
  }
}))

const Hero = (props) => {
  const classes = useStyles();
  const { title, subtitle } = props;
  return (
    <div className={classes.hero}>
      <Container maxWidth="xl" className={classes.textBlock}>
        <h1 className={`${classes.title} home-title`}><ReactMarkdown children={title} /></h1>
        <p className={classes.subtitle}><ReactMarkdown children={subtitle} /></p>
      </Container>
    </div>
  )
}

export default Hero;

