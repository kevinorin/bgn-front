import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CustomButton from '../Button';

const useStyles = makeStyles((theme) => ({
	paperWrapper: {
		backgroundColor: theme.palette.supportbg
	},
	title: {
		color: theme.palette.font
	},
	subtitle: {
		color: theme.palette.font
	},
	commonform: {
		width: '100%',
		backgroundColor: theme.palette.white,
		borderRadius: '10px',
		marginBottom: '25px'
	}

}));

const SupportItem = (props) => {
	const classes = useStyles();
	return (
		<>
			<h2 className={classes.title}>Need Support or have a Question?</h2>
			<p className={classes.subtitle}>Please write to us incase of any query, our team will get back to you as soon as possible.</p>
			<form className={classes.root} noValidate autoComplete="off">
				<TextField label="Standard" />
				<TextField
					id="outlined-secondary"
					label="First Name"
					variant="outlined"
					color="secondary"
					className={classes.commonform}
				/>
				<TextField
					id="outlined-secondary"
					label="Your email:"
					variant="outlined"
					color="secondary"
					className={classes.commonform}
				/>
				<TextField
					id="outlined-secondary"
					label="Write message..."
					variant="outlined"
					color="secondary"
					className={classes.commonform}
				/>
				<CustomButton text="Send Message" />
			</form>
		</>

	)
}

export default SupportItem;