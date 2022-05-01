import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
// import CustomButton from '../Button';

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
	},
	mainBtn: {
		position: 'relative',
		padding: '15px 103px 15px 27px',
		overflow: 'hidden',
		textTransform: 'none',
		'&::before': {
			position: 'absolute',
			height: '100%',
			left: 'auto',
			top: '0',
			lineHeight: '3',
			fontSize: '140%',
			width: '60px',
			content: '""',
			right: '10px'
		},
		"&::after": {
			width: '30%',
			height: '200%',
			background: 'rgba(255,255,255,0.1)',
			zIndex: '1',
			right: '0',
			top: '0',
			margin: '-5px 0 0 -5px',
			transformOrigin: '0 0',
			transform: 'rotate(-20deg)',
			content: '""',
			position: 'absolute',
			transition: 'all 0.3s'
		}
	}

}));

const SupportItem = (props) => {
	const classes = useStyles();
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<>
		<Container maxWidth="xl">
			<h2 className={classes.title}>Need Support or have a Question?</h2>
			<p className={classes.subtitle}>Please write to us incase of any query, our team will get back to you as soon as possible.</p>
			<form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
					<Grid container spacing={2}>
						<Grid item xs={12} md={6}>
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
						<Grid item xs={12} md={6}>
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
						<Grid item xs={12} md={12}>
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
						<Grid item xs={12} md={12}>
							<Button
								variant="contained"
								color="primary"
								className={`${classes.mainBtn}`}
								type="submit"
								endIcon={<ArrowRightAltIcon />}
								onClick={props.onClick}
							>
								Send Message
    </Button>
							{/* <CustomButton btnType="primary" text="Send Message" /> */}
							{/* <button>submit</button> */}
						</Grid>
					</Grid>
			</form>
			</Container>
		</>

	)
}

export default SupportItem;