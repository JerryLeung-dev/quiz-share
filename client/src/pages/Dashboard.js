import { Box, Grid } from '@chakra-ui/react';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import DashboardHeader from '../components/DashboardHeader';
import DashboardNavigation from '../components/DashboardNavigation';
import MyProfile from './MyProfile';
import MyQuizzes from './MyQuizzes';

const Dashboard = () => {
	let { url } = useRouteMatch();

	return (
		<Box w='full' minH='100vh'>
			<DashboardHeader />
			<Grid
				px={{ sm: '10px', md: '32px' }}
				maxW='1100px'
				py='24px'
				templateColumns={{ base: '1fr', lg: '1fr 3fr' }}
				gap='10px'
				mx='auto'
			>
				<DashboardNavigation url={url} />
				<Switch>
					<Route exact path='/dashboard/profile' component={MyProfile} />
					<Route exact path='/dashboard/quizzes' component={MyQuizzes} />
				</Switch>
			</Grid>
		</Box>
	);
};

export default Dashboard;
