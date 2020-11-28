import { Box, Center, Flex, Grid, Spacer, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { CgFileDocument } from 'react-icons/cg';
import { Link, NavLink } from 'react-router-dom';

const DashboardNavigation = ({ url }) => {
	return (
		<Box>
			<Grid templateColumns='repeat(auto-fit, minmax(320px, 1fr))' gap={4}>
				{[
					['Profile', <BsFillPersonLinesFill />],
					['Quizzes', <CgFileDocument />],
				].map((item) => (
					<Box
						flex='1'
						maxW='full'
						as={NavLink}
						key={item[0]}
						to={`${url}/${item[0].toLowerCase()}`}
						className='headerLinks'
						activeClassName='isActiveDashboard'
						px='10px'
						py='20px'
						fontFamily='inter'
						fontSize='17px'
						borderTopWidth='1px'
						borderRadius='8px'
						_first={{ borderTopWidth: 0 }}
					>
						<Flex align='center'>
							{item[1]} <Text ml='10px'>{item[0]}</Text>
						</Flex>
					</Box>
				))}
			</Grid>
		</Box>
	);
};

export default DashboardNavigation;
