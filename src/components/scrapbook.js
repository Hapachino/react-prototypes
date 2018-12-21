import React from 'react';
import './scrapbook.css';
import imageData from './image_data.js';
import ScrapbookImage from './scrapebook_images';

export default props => {
  const images = imageData.map((value, index) => {
    return <ScrapbookImage key={index} about={value}></ScrapbookImage>
  });
  return (
    <div className="scrapbook-container">
      {images}
    </div>
  );
}