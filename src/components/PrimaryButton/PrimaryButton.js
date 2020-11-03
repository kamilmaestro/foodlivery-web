import React from 'react';
import './primaryButton.css';

export const PrimaryButton = ({text}) => {
  return (
    <div style={{display: "flex", justifyContent: "center", margin: 30}}>
      <button className='content'>
        {text}
      </button>
    </div>
  );
};