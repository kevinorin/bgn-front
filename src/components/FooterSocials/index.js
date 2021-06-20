import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import patron from '../../assets/images/socials/patron.png';
import discord from '../../assets/images/socials/discord.png';
import wasder from '../../assets/images/socials/wasder.png';
import medium from '../../assets/images/socials/medium.png';
import youtube from '../../assets/images/socials/youtube.png';
import theta from '../../assets/images/socials/theta.png';
import twitter from '../../assets/images/socials/twitter.png';
import facebook from '../../assets/images/socials/facebook.png';

const useStyles = makeStyles((theme) => ({
	paperWrapper: {
		backgroundColor: theme.palette.supportbg
	},
	mainImg: {
		height: '100%',
		width: '100%',

	},
	socialWrapper: {
		display: 'flex',
		textAlign: 'center',
    maxWidth: '300px',
    margin: '0 auto',
		'& a': {
			flex: 'auto',
			'& img': {
				maxWidth: '100%',
				maxHeight: '100%'
			}
		}
	}
}));

const FooterSocials = () => {
	const classes = useStyles();
	return (
		<div className={classes.socialWrapper}>
			<Link href="/" passHref>
				<a>
					<img src={patron} alt="Patron" />
				</a>
			</Link>
			<Link href="/">
				<a>
					<img src={discord} alt="Discord" />
				</a>
			</Link>
			<Link href="/">
				<a>
					<img src={wasder} alt="Wasder" />
				</a>
			</Link>
			<Link href="/">
				<a>
					<img src={medium} alt="Medium" />
				</a>
			</Link>
			<Link href="/">
				<a>
					<img src={youtube} alt="Youtube" />
				</a>
			</Link>
			<Link href="/">
				<a>
					<img src={theta} alt="Theta" />
				</a>
			</Link>
			<Link href="/">
				<a>
					<img src={twitter} alt="Twitter" />
				</a>
			</Link>
			<Link href="/">
				<a>
					<img src={facebook} alt="Facebook" />
				</a>
			</Link>
		</div>
	)
}

export default FooterSocials;