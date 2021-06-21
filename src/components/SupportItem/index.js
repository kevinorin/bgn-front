import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import CustomButton from '../Button';

const useStyles = makeStyles((theme) => ({
	paperWrapper: {
		backgroundColor: theme.palette.supportbg
	},
	title: {
		color: theme.palette.font
	},
	subtitle: {
		color: theme.palette.font,
		marginBottom: '50px'
	},
	commonform: {
		width: '100%',
		color: theme.palette.white,
		borderRadius: '10px',
		marginBottom: '25px',
		'& label, & input': {
			color: theme.palette.white,
		},
		'& .MuiInput-underline': {
			'&:before': {
				borderBottom: '1pt solid #E8E8E8'
			}
		}
	}

}));

const SupportItem = (props) => {
	const classes = useStyles();
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		console.log('Arun jha data', data);
	};

	return (
		<>
			<h2 className={classes.title}>Need Support or have a Question?</h2>
			<p className={classes.subtitle}>Please write to us incase of any query, our team will get back to you as soon as possible.</p>
			<form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
				<Container maxWidth="xl">
					<Grid container spacing={2}>
						<Grid item md={6}>
							<TextField
								id="name-input"
								name="name-input"
								label="Your Name"
								placeholder="Enter your name"
								helperText=""
								fullWidth
								margin="normal"
								className={classes.commonform}
								{...register('name-input', { required: true })}
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</Grid>
						<Grid item md={6}>
							<TextField
								id="email-input"
								label="Your Email"
								placeholder="Enter your email:"
								helperText=""
								fullWidth
								margin="normal"
								name="email-input"
								className={classes.commonform}
								{...register('email-input', { required: true })}
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</Grid>
						<Grid item md={12}>
							<TextField
								id="message-input"
								name="message-input"
								label="Your Message"
								placeholder="Write your message..."
								helperText=""
								fullWidth
								margin="normal"
								className={classes.commonform}
								{...register('message-input', { required: true })}
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</Grid>
						<Grid item md={12}>
							<CustomButton btnType="primary" text="Send Message" />
						</Grid>
					</Grid>
				</Container>
			</form>
		</>

	)
}

export default SupportItem;