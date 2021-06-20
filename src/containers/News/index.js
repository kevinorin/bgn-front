import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link'
import NewsItem from '../../components/NewsItem';
// import data from './data.json';

const useStyles = makeStyles((theme) => ({
  mainWrapper: {
    background: theme.background,
    paddingTop: theme.margintop
  },
  title: {
    color: theme.palette.font,
    fontSize: 36,
    fontWeight: 'bold',
    lineHeight: '40px',
    marginBottom: '0',
    display: 'inline',
  },
  link: {
    float: 'right'
  }
}));

const News = (props) => {
  const data = props?.newsSection
  const classes = useStyles();
  return (
    <Container maxWidth="xl">
      <section className={classes.mainWrapper}>
        <div className={classes.headerWrapper}>
          <h2 className={classes.title}>Recent News</h2>
          <Link href='/' passHref>
            <a className={classes.link}>View All</a>
          </Link>
        </div>
        <Grid container spacing={2}>
          {data.slice(0, 6).map((item, index ) => {
            return (
              <NewsItem key={`title${index}`} slug={item?.slug} item={item?.contentSections[0]} />
            )
          })}
        </Grid>
      </section>
    </Container>
  )
}

export default News;