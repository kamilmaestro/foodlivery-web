import React from 'react';
import './primaryButton.css';

export const PrimaryButton = ({text}) => {
  return (
    <div className='container'>
      <button className='content'>
        {text}
      </button>
    </div>
  );
};