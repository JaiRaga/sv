import React from 'react';
import { Grid } from '@material-ui/core';

import Content from '../content/Content';
import CameraPage from '../camera/CameraPage';

const Home = () => {
	return (
		<Grid container justify='center'>
			{/* <Grid item> */}
			{/* <Grid container item> */}
			{/* <Content /> */}
			<CameraPage />
			{/* </Grid> */}
			{/* </Grid> */}
		</Grid>
	);
};

export default Home;
