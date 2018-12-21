import React from 'react';
import './app.css';
import Scrapbook from './scrapbook';

export default props => {
  return (
    <div className="main-container">
      <h1 className="main-title">Scrapbook</h1>
      <Scrapbook />
    </div>
  );
}
