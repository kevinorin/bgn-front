import React, { useState,  useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import { getAddress, updateC } from './func';

const useStyles = makeStyles((theme) => ({
	whetherWrapper: {
		color: theme.palette.font,
		'& p': {
			margin: 0
		}
	},
	temp: {
		color: theme.palette.font
	},
	tempWrapper: {
		display: 'flex',
		background: 'rgba(123, 133, 145, 0.2)',
		width: 'max-content'
	},
	icon: {
		borderRight: '1px solid #707070',
    padding: '5px 15px',
		color: theme.palette.sun,
		'& svg': {
			verticalAlign: 'sub'
		}
	},
	temp: {
		padding: '5px 15px'
	},
	label: {
		fontSize: '11px'
	},
	cityName: {
		fontSize: '11px',
		textAlign: 'right',
		marginRight: '35px'
	}
}));

const Whether = (props) => {
	const classes = useStyles();
	const [data, setData] = useState(null);
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(function(position) {
			axios.get(`http://api.openweathermap.org/data/2.5/onecall?appid=b4e58be14ebddd09ec834b216a53cddc&lang=en&units=metric&lat=${position?.coords?.latitude}&lon=${position?.coords?.longitude}`).then( res => setData(res))
			getAddress(position?.coords?.latitude, position?.coords?.longitude).then(console.log).catch(console.error);
    });
	}, []);
	if (!data) return '';
	return (
		<div className={classes.whetherWrapper}>
			<p className={classes.label}>Current Whether</p>
			<div className={classes.tempWrapper}>
				<p className={classes.icon}><WbSunnyIcon /></p>
				<p className={classes.temp}>{updateC(data?.data?.current?.temp)  || ''}</p>
			</div>
			<p className={classes.cityName}>• New York</p>
		</div>
	)
}

export default Whether;