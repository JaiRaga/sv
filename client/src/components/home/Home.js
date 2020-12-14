import React from 'react';
import { Grid } from '@material-ui/core';

import Content from '../content/Content';

const Home = () => {
	return (
		<Grid container justify='center' xs={12} md={9} lg={8}>
			{/* <Grid item> */}
			{/* <Grid container item> */}
			<Content />
			{/* </Grid> */}
			{/* </Grid> */}
		</Grid>
	);
};

export default Home;
