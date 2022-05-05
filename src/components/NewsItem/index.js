import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link'
import { getStrapiMedia } from '../../utils/media';
import Moment from "react-moment";

const useStyles = makeStyles((theme) => ({
	paperWrapper: {
		backgroundColor: theme.palette.background.black,
		minHeight: '500px'
	},
	title: {
		color: theme.palette.font
	},
	mainImg: {
		height: 'auto',
		width: 'auto',
		maxHeight: '271px',
		alignItems: 'center',
		display: 'block',
		textAlign: 'center',
		margin: 'auto',
		maxWidth: '100%'
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
	},
	addSpace: {
		maxWidth: 'calc(100% - 15px)'
	},
	date: {
		display: 'block',
		marginBlockStart: '1.5em'
	}
}));

const NewsItem = (props) => {
	const updatedValue = props?.item;
	if (!updatedValue) return '';
	const { title = '', smallTextWithLink, picture } = updatedValue;
	const image = getStrapiMedia(picture?.url);
	const classes = useStyles();
	console.log('Arun Jha updatedValue', props.createdAt.created_at)
	return (
		<>
			<Grid item md={4} className={props.slider ? classes.addSpace : ''}>
				<Link href={`/news${props?.slug}`} passHref>
					<a className={classes.link}>
						<div className={classes.paperWrapper}>
							<img src={picture?.url} className={classes.mainImg} alt={title} />
							<div className={classes.textBlock}>
							<date className={classes.date}><Moment format="MMM Do YYYY">{props.createdAt.created_at}</Moment></date>
								{/* <p className={classes.gener}>
                            <span className={classes.case1}>#ADVENTURE </span>
                            <span className={classes.case2}>#CRIME</span>
                        </p> */}
								<h3 className={classes.title}>{title}</h3>
								<p className={classes.description}>{smallTextWithLink.substring(0, 155)}</p>
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