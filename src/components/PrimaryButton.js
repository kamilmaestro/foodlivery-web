import React from 'react';
import { theme } from '../theme';
import './primaryButton.css';

export const PrimaryButton = ({text}) => {
  return (
    <button className='content'>
      {text}
    </button>
  );
};