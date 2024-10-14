import React, { useEffect, useState } from 'react';
import '../../assets/styles/Carousel.css';

import img1 from '../../assets/images/img1.jpeg';
import img2 from '../../assets/images/img2.jpeg';
import img3 from '../../assets/images/img3.jpeg';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Troca a imagem a cada 3 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [images.length]);

  return (
    <div className="carousel" id="pagina-principal">
      <input type="radio" name="carousel" id="item-1" checked={currentIndex === 0} readOnly />
      <input type="radio" name="carousel" id="item-2" checked={currentIndex === 1} readOnly />
      <input type="radio" name="carousel" id="item-3" checked={currentIndex === 2} readOnly />

      <div className="carousel-inner">
        {images.map((img, index) => (
          <div className={`carousel-item ${index === currentIndex ? 'active' : ''}`} key={index}>
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="controls">
        <label htmlFor="item-1"></label>
        <label htmlFor="item-2"></label>
        <label htmlFor="item-3"></label>
      </div>
    </div>
  );
};

export default Carousel;
