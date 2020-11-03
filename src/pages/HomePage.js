import React from 'react';
import './homePage.css';
import circle from '../images/circle.png';
import { ThemeProvider } from '@material-ui/core'
import {theme} from '../theme';
import { PagePreview } from '../components/PagePreview/PagePreview';
import { Header } from '../components/Header/Header';

export const HomePage = () => {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<div className='container'>
				<div className='left'>
					<PagePreview />
				</div>
				<div className='right'>
					<img src={circle} alt='dish' className='image' />
				</div>
			</div>
		</ThemeProvider>
	);
};