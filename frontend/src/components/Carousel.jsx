import React, { useState } from 'react'
import Image1 from '../assets/Images/Crouselone.png'
import Image2 from '../assets/Images/carouseltow.png'
import Image3 from '../assets/Images/carousel3.png'
import '../components/Css/Carousel.css'

export default function Carousel() {
        const [currentIndex, setCurrentIndex] = useState(0);

        const images = [
            Image1,
            Image2,
            Image3
        ]
      
        const prevSlide = () => {
          const isFirstSlide = currentIndex === 0;
          const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
          setCurrentIndex(newIndex);
        };
      
        const nextSlide = () => {
          const isLastSlide = currentIndex === images.length - 1;
          const newIndex = isLastSlide ? 0 : currentIndex + 1;
          setCurrentIndex(newIndex);
        };
    return (
        <div>
            <div className="carousel-container">
                <div className="carousel-slide">
                    <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
                </div>
                <div className="carousel-controls">
                    <button className="prev" onClick={prevSlide}>
                        ❮
                    </button>
                    <button className="next" onClick={nextSlide}>
                        ❯
                    </button>
                </div>
            </div>
        </div>
    )
}
