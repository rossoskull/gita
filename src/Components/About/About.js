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
			marginBottom: '5px'
		},
		d1: {
			marginTop: '25px'
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

			Bhagavada Gita is a book which has always captured my attention.
			The knowledge and pilosophy it preaches is simply great. The name
			'Bhagavada Gita' translates to 'The Divine Song'. Arjuna, a great
			warrior, and a greater human, amassed confusion and reluctance
			after seeing his kinsmen and relatives on the opposite side of the
			Kurukshetra battlefield. To get Arjuna rid of this confusion and
			ignorance, Lord Krishna, the Supreme Deity, preached holy
			knowledge to him, which came to be known as 'Bhagavada Gita'.

			</Typography>

			<Typography style={styles.p}>

			The knowledge that is present in Bhagavada Gita should be made
			easily available for everyone to read. No one actually owns the
			content of this book, so as per me, it should be available for
			free. So I created this website.

			</Typography>

			<Typography style={styles.d1} variant='display1'>
				About Me
			</Typography>

			<Typography style={styles.p}>

				I am Jay Mistry, a B.Tech Computer Science undergraduate
				student at IIIT Vadodara. I invest my time in learning,
				developing, reading, listening to some great music and forming
				bonds with people. Currently, I am working with technologies
				like ReactJS and Node.js. I have experience in developing
				VueJS, Django and PHP apps. To know more about me, you reach
				out to me on any of my social handles! 
			
			</Typography>

		</div>
	);
};

export default About;