import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

import one from '../../sample/1.mp4';
import two from '../../sample/2.mp4';
import three from '../../sample/3.mp4';
import samplePic from '../../sample.png';

const useStyles = makeStyles((theme) => ({
	container: {
		background: '#888',
	},
}));

const Content = () => {
	const classes = useStyles();
	return (
		<Grid
			container
			item
			xs={12}
			md={9}
			lg={8}
			justify='center'
			className={classes.container}>
			<Grid item>
				<video
					width='300px'
					height='300px'
					controls
					autoplay='autoplay'
					muted
					poster={samplePic}>
					<source src={one} />
				</video>
			</Grid>
			<Grid item>
				<video width='300px' height='300px' controls autoplay='autoplay' loop>
					<source src={two} />
				</video>
			</Grid>
			<Grid item>
				<video width='300px' height='300px' controls autoplay='autoplay' loop>
					<source src={three} />
				</video>
			</Grid>
		</Grid>
	);
};

export default Content;
