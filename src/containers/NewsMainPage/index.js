import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import NewsLanding from '../../components/NewsLanding';
import Profile from '../../components/Profile';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    color: '#fff',
    paddingTop: '2rem',
    paddingBottom: '2rem'
  },
  divider: {
    marginBottom: '1rem',
    marginTop: '1rem',
    backgroundColor: '#878787'
  }
}))

export default function NewsMainPage({ contentSections, createdAt }) {
  console.log('Arun Jha contentSections', contentSections)
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.mainContainer}>
      <Grid container spacing={2}>
      <Grid item md={8}>
      <NewsLanding createdAt={createdAt} contentSections={contentSections} />
      </Grid>
      <Grid item md={4}>
        <Profile />
      </Grid>
      </Grid>
      <Divider className={classes.divider} />
    </Container>
  )
}