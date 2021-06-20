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
		backgroundColor: theme.palette.supportbg
	},
	mainImg: {
		height: '100%',
		width: '100%',
        backgroundImage: `url(${supportImg})`,
        minHeight: '400px'

	},
    mainWrapper: {
        textAlign: 'center',
        marginTop: '100px'
    }
}));

const Patreon = () => {
	const classes = useStyles();
	return (
		<Container maxWidth="xl">
			<section className={classes.paperWrapper}>
				<Grid container spacing={2}>
					<Grid item md={6} className={classes.mainImg}>
						<div className={classes.mainWrapper}>
                            <img src={patreonSupport} />
                            <img src={patreonBtn} />
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