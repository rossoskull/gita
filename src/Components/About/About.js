import React from 'react';
import { Typography } from '@material-ui/core';

const About = () => {

	const styles = {
		hr: {
			width: '80%',
			margin: '20px auto',
			height: '1px',
			border: '0',
			background: 'linear-gradient(to right, white, #333, white)'
		},
		p: {
			fontSize: '18px',
			marginBottom: '20px'
		},
		d1: {
			marginTop: '5px'
		}
	}

	return(
		<div>
			<Typography variant='display3' align='center'>
				About
			</Typography>
			<hr style={styles.hr} />
			<Typography style={styles.d1} variant='display1'>
				Why Bhagavada Gita?
			</Typography>

			<Typography style={styles.p}>
				Explain why Bhagavada Gita.
			</Typography>

			<Typography style={styles.d1} variant='display1'>
				About Me
			</Typography>

			<Typography style={styles.p}>
				Explain about me.
			</Typography>
		</div>
	);
};

export default About;