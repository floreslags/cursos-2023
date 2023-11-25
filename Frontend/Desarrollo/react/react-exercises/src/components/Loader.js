import React from 'react';
import './Loader.css';

export const Loader = () => {
  return (
    <div>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
