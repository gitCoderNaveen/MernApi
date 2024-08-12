import React from 'react';
import './Css/ImageGrid.css';
import Image1 from '../assets/Images/img.png'
import Image2 from '../assets/Images/img2.png'
import Image3 from '../assets/Images/img3.png'
import Image4 from '../assets/Images/img4.png'
import Image5 from '../assets/Images/img5.png'
import Image6 from '../assets/Images/img6.png'
import Image7 from '../assets/Images/img7.png'
import Image8 from '../assets/Images/img8.png'

const ImageGrid = () => {
    const images = [
        Image1,
        Image2,
        Image3,
        Image4,
        Image5,
        Image6,
        Image7,
        Image8
    ]
  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <div className="image-item" key={index}>
          <img src={image} alt={`Image ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
