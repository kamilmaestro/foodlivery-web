import React from 'react';
import { PrimaryButton } from '../components/PrimaryButton';
import './homePage.css';
import circle from '../images/circle.png';
import {Box, ThemeProvider, Typography} from '@material-ui/core'
import {theme} from '../theme';

export const HomePage = ({}) => {
	return (
		<ThemeProvider theme={theme}>
			<div className='container'>
				<div className='left'>
					<div className='row'>
						<Typography variant="h1" >
							<Box letterSpacing={3} fontWeight="fontWeightBold" textAlign="center" >
								Foo<span className='title_accent'>d</span>livery
							</Box>
						</Typography>
						<Typography variant="h4" gutterBottom >
							<Box letterSpacing={2} textAlign="center" >
								Delicious food for every mood
							</Box>
						</Typography>
						<PrimaryButton text='Głodny?' />
					</div>
				</div>
				<div className='right'>
					<img src={circle} alt='dish' className='image' />
				</div>
			</div>
		</ThemeProvider>
	);
};