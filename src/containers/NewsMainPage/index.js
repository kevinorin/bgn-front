import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import AssignmentIcon from '@material-ui/icons/Assignment';
import NewsLanding from '../../components/NewsLanding';
import Profile from '../../components/Profile';
import NewsItem from '../../components/NewsItem';
import Slider from "react-slick";


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    color: '#fff',
    paddingTop: '2rem',
    paddingBottom: '2rem',
    [theme.breakpoints.down('xs')]: {
      '& .slick-slider': {
        marginLeft: '15px',
        marginRight: '15px'
      }
    }
  },
  divider: {
    marginBottom: '1rem',
    marginTop: '1rem',
    backgroundColor: '#878787'
  },
  flexEnd: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  title: {
    color: theme.palette.font,
    margin: '0',
    opacity: '0.05',
    textAlign: 'center',
    position: 'absolute',
    font: 'normal normal bold 80px/90px Oswald',
    letterSpacing: '18px',
    left: 0,
    right: 0,
    bottom: '-26px',
    [theme.breakpoints.down('xs')]: {
      font: 'normal normal bold 40px/50px Oswald',
      letterSpacing: '15px'
    }
  },
  title1: {
    color: theme.palette.font,
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: '40px',
    marginBottom: '0',
    textAlign: 'center'
  },
  headerWrapper: {
      position: 'relative',
      marginBottom: '70px',
      marginTop: '70px'
  },
}))

export default function NewsMainPage({ contentSections, createdAt, newsSection }) {
  const classes = useStyles();
  const data = newsSection
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };
  return (
    <Container maxWidth="lg" className={classes.mainContainer}>
      <Grid container spacing={2}>
        <Grid item md={8}>
          <NewsLanding createdAt={createdAt} contentSections={contentSections} />
        </Grid>
        <Grid item md={4} className={classes.flexEnd}>
          <Profile />
        </Grid>
      </Grid>
      <div className={classes.headerWrapper}>
          <h2 className={classes.title}>RECENT COVERAGE</h2>
          <h2 className={classes.title1}>Recent Coverage</h2>
        </div>
      {/* <Divider className={classes.divider} /> */}
      {/* <h2>Related Coverage <AssignmentIcon /></h2> */}
      <Slider {...settings}>
        {data.map((item, index) => {
          return (
            <NewsItem createdAt={item} key={`title${index}`} slug={item?.slug} item={item?.contentSections[0]} slider />
          )
        })}
      </Slider>
    </Container>
  )
}