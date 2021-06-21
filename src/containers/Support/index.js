import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import SupportItem from '../../components/SupportItem';
import supportImg from '../../assets/images/Mage-Character-Color.png';

const useStyles = makeStyles((theme) => ({
	paperWrapper: {
		backgroundColor: theme.palette.supportbg,
		paddingTop: theme.margintop,
		paddingBottom: theme.margintop
	},
	mainImg: {
		height: '100%',
		width: '100%',

	}
}));

const Support = () => {
	const classes = useStyles();
	return (
		<Container maxWidth="xl">
			<section className={classes.paperWrapper}>
				<Grid container spacing={2}>
					<Grid item md={4}>
						<img className={classes.mainImg} src={supportImg} />
					</Grid>
					<Grid item md={8}>
						<SupportItem />
					</Grid>
				</Grid>
			</section>
		</Container>
	)
}

export default Support;