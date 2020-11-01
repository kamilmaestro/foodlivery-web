import React from 'react';
import { PrimaryButton } from '../components/PrimaryButton';
import './homePage.css';

export const HomePage = ({}) => {
	return (
		<div className='background'>
			<PrimaryButton text='Zgłodniałem!' />
		</div>
	);
};