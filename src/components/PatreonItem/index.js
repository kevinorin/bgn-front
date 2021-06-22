import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../assets/images/patreon-logo.png';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles((theme) => ({
	mainWrapper: {
		padding: '40px',
		[theme.breakpoints.down('xs')]: {
			padding: '10px'
		}
	},
	paperWrapper: {
		backgroundColor: theme.palette.supportbg
	},
	title: {
		color: theme.palette.font,
		'& img': {
			verticalAlign: 'middle',
			maxWidth: '190px',
			marginLeft: '50px',
			[theme.breakpoints.down('xs')]: {
				marginLeft: '20px',
				maxWidth: '120px'
			}
		}
	},
	buttonStyle: {
		display: 'flex',
		color: theme.palette.font,
		backgroundColor: 'rgba(123, 133, 145, 0.1)',
		borderRadius: '10px',
		alignItems: 'center',
		padding: '20px',
		fontSize: '18px',
		maxWidth: '450px',
		marginBottom: '20px',
		cursor: 'pointer',
		'& sub': {
			verticalAlign: 'middle',
			fontSize: '12px'
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '16px',
			padding: '8px',
		}
	},
	firstPart: {
		minWidth: '160px',
		[theme.breakpoints.down('xs')]: {
			minWidth: '60px'
		}
	},
	sendPart: {
		marginLeft: '40px',
		paddingRight: '20px'
	},
	thirdPart: {
		paddingLeft: '20px',
		borderLeft: '1pt solid black'
	},
	icon: {
		verticalAlign: 'middle'
	},
	img: {
		maxWidth: '100%',
		maxHeight: '100%'
	}

}));


const PatreonItem = (props) => {
	const classes = useStyles();
	return (
		<div className={classes.mainWrapper}>
			<h2 className={classes.title}>Subscribe on <img src={logo} alt="BGN Logo" className={classes.img} /></h2>
			<div className={classes.buttonStyle}>
				<div className={classes.firstPart}>Patron</div>
				<div className={classes.sendPart}>$3/<sub>month</sub></div>
				<div className={classes.thirdPart}>Join <ArrowRightAltIcon className={classes.icon} /></div>
			</div>

			<div className={classes.buttonStyle}>
				<div className={classes.firstPart}>Vanguard</div>
				<div className={classes.sendPart}>$11/<sub>month</sub></div>
				<div className={classes.thirdPart}>Join <ArrowRightAltIcon className={classes.icon} /></div>
			</div>

			<div className={classes.buttonStyle}>
				<div className={classes.firstPart}>Vanguard General</div>
				<div className={classes.sendPart}>$25/<sub>month</sub></div>
				<div className={classes.thirdPart}>Join <ArrowRightAltIcon className={classes.icon} /></div>
			</div>
		</div>

	)
}

export default PatreonItem;