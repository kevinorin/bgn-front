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
    marginTop: theme.margintop
  },
  title: {
    color: theme.palette.font,
    fontSize: 36,
    fontWeight: 'bold',
    lineHeight: '40px',
    marginBottom: '0',
    display: 'inline',
    marginBottom: '30px'
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
        {props?.newsPage ? '' : (
          <div className={classes.headerWrapper}>
            <h2 className={classes.title}>Recent News</h2>

          </div>
        )}
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