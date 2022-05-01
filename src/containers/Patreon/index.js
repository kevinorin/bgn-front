import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import PatreonItem from '../../components/PatreonItem';
import supportImg from '../../assets/images/patreon.png';
import CustomButton from '../../components/Button';
import patreonSupport from '../../assets/images/patreon-supprt.png'
import patreonBtn from '../../assets/images/patreon-button.png'

const useStyles = makeStyles((theme) => ({
	paperWrapper: {
		backgroundColor: theme.palette.supportbg,
		paddingTop: theme.margintop,
		paddingBottom: theme.margintop
	},
	mainImg: {
		height: '100%',
		width: '100%',
		backgroundImage: `url(${supportImg})`,
		minHeight: '400px'

	},
	mainWrapper: {
		textAlign: 'center',
		paddingTop: '100px'
	},
	image: {
		maxWidth: '100%',
		maxHeight: '100%'
	}
}));

const Patreon = () => {
	const classes = useStyles();
	return (
		<Container maxWidth="lg">
			<section className={classes.paperWrapper}>
				<Grid container spacing={2}>
					<Grid item md={6}>
						<div className={`${classes.mainWrapper} ${classes.mainImg}`}>
							<img src={patreonSupport} className={classes.image} alt="Patreon Support" />
							<img src={patreonBtn} className={classes.image} alt="Patreon Support" />
						</div>
					</Grid>
					<Grid item md={6}>
						<PatreonItem />
					</Grid>
				</Grid>
			</section>
		</Container>
	)
}

export default Patreon;