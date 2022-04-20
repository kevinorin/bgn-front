import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link'
import { getStrapiMedia } from '../../utils/media';
import images from '../../assets/images/4648-screenshot-2897.png'

const useStyles = makeStyles((theme) => ({
    paperWrapper: {
        backgroundColor: theme.palette.background.black
    },
    title: {
        color: theme.palette.font
    },
    mainImg: {
        height: '100%',
        width: '100%'
    },
    textBlock: {
        padding: '10px'
    },
    description: {
        color: theme.palette.font
    },
    gener: {
        fontSize: '11px',
        fontWeight: 'bold'
    },
    case1: {
        color: theme.palette.blue
    },
    case2: {
        color: theme.palette.primary.main
    },
    link: {
        textDecoration: 'none'
    }
}));

const NewsItem = (props) => {
    const updatedValue = props?.item;
    if (!updatedValue) return '';
    const { title='', smallTextWithLink, picture } = updatedValue;
    const image = getStrapiMedia(picture?.url);
    console.log('Arun Jha props >>>', props)
    const classes = useStyles();
    return (
        <>
            <Grid item md={4}>
            <Link href={`/news${props?.slug}`} passHref>
                <a className={classes.link}>
                <div className={classes.paperWrapper}>
                    <img src={picture?.url} className={classes.mainImg} alt={title} />
                    <div className={classes.textBlock}>
                        <p className={classes.gener}>
                            <span className={classes.case1}>#ADVENTURE </span>
                            <span className={classes.case2}>#CRIME</span>
                        </p>
                        <h3 className={classes.title}>{title}</h3>
                        <p className={classes.description}>{smallTextWithLink.substring(0,388)}</p>
                    </div>
                </div>
                {/* <img src={picture?.url} /> */}
                </a>
                </Link>
            </Grid>
        </>

    )
}

export default NewsItem;