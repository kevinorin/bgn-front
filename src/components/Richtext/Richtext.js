import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ReactMarkdown from 'react-markdown'

const useStyles = makeStyles((theme) => ({
  hero: {
    marginBottom: theme.margintopMain,
    '& h1': {
      color: theme.palette.white,
      margin: '0',
      padding: '0',
      fontSize: 48
    }
  },
  textBlock: {
    margin: 'auto',
    textAlign: 'left',
  },
  subtitle: {
    color: theme.palette.secondary.main,
    margin: '0',
    padding: 0,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: '700'
  }
}))

const Richtext = ({ content }) => {
  const classes = useStyles();
  return (
    <div className={classes.hero}>
      <Container maxWidth="xl" className={classes.textBlock}>
        <ReactMarkdown children={content} />
      </Container>
    </div>
  )
}

export default Richtext;

