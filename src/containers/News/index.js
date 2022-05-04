import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link'
import NewsItem from '../../components/NewsItem';
import CustomButton from '../../components/Button';
import { useRouter } from 'next/router'

// import data from './data.json';

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    background: theme.background,
    paddingTop: theme.margintop,
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
    marginBottom: '70px'
  },
  link: {
    float: 'right',
    marginBottom: '30px'
  },
  buttonWrapper: {
    margin: 'auto',
    marginTop: '20px'
  }
}));

const News = (props) => {
  const router = useRouter()
  const data = props?.newsSection
  if (!data) return null;
  const classes = useStyles();
  const finalData = props?.newsPage ? data : data.slice(0, 6);
  const buttonClick = (e) => {
    e.preventDefault()
    router.push('/news')
  }
  return (
    <Container maxWidth="lg">
      <section className={classes.mainWrapper}>
        <div className={classes.headerWrapper}>
          <h2 className={classes.title}>{props?.newsPage ? 'NEWS' : 'RECENT COVERAGE'}</h2>
          <h2 className={classes.title1}>{props?.newsPage ? 'News' : 'Recent Coverage'}</h2>
        </div>
        <Grid container spacing={2}>
          {finalData.map((item, index) => {
            return (
              <NewsItem key={`title${index}`} slug={item?.slug} item={item?.contentSections[0]} newsPage={props?.newsPage} />
            )
          })}
          {props?.newsPage ? '' : (
            <div className={classes.buttonWrapper}>
              <CustomButton onClick={(e) => buttonClick(e)} btnType='secondary' text='View All' />
            </div>
          )}

        </Grid>
      </section>
    </Container>
  )
}

export default News;