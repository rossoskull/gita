import React from 'react';
import { Typography } from '@material-ui/core';

const Source = () => {

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
			marginBottom: '5px'
		},
		d1: {
			marginTop: '25px'
		}
	}

	return(
		<div>
			<Typography variant='display3' align='center'>
				Source
			</Typography>

			<hr style={styles.hr} />

			<Typography style={styles.d1} variant='display1'>
				Frontend Library
			</Typography>

			<Typography style={styles.p}>

				For developing the frontend aspect of this site, I used the <a
				href='https://reactjs.org/'>ReactJS</a> library.<br /><br />
				You can view the source code <a
				href='https://github.com/rossoskull/gita'>here</a>.
			
			</Typography>

			<Typography style={styles.d1} variant='display1'>
				Backend
			</Typography>

			<Typography style={styles.p}>

				The server side script is built using <a
				href='https://expressjs.com/'>ExpressJS</a> framework, on the
				<a href='https://nodejs.org/'>Node.js</a> runtime. It is
				required to get the access token for using the API.<br /><br
				/> You can view the source code <a
				href='https://github.com/rossoskull/gita-backend'>here</a>.

			</Typography>

			<Typography style={styles.d1} variant='display1'>
				API
			</Typography>

			<Typography style={styles.p}>

				A very special thanks to <a
				href='https://bhagavadgita.io/'>bhagavadgita.io</a> for
				providing a very good and easy-to-use API. You can find more
				details about using this API <a
				href='https://bhagavadgita.io/api/'>here</a>.<br /><br />You can
				learn more about APIs <a href='https://en.wikipedia.org/wiki/A
				pplication_programming_interface'>here</a>.
			
			</Typography>


		</div>
	);

};

export default Source;