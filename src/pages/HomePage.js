import React from 'react';
import { PrimaryButton } from '../components/PrimaryButton';
import './homePage.css';
import circle from '../images/circle.png';
import {ThemeProvider, Typography} from '@material-ui/core'
import {theme} from '../theme';

export const HomePage = ({}) => {
	return (
		<ThemeProvider theme={theme}>
			<div className='container'>
				<div className='left'>
					<PrimaryButton text='Głodny?' />
				</div>
				<div className='right'>
					<img  src={circle} alt='dish' className='image' />
				</div>
			</div>
		</ThemeProvider>
	);
};