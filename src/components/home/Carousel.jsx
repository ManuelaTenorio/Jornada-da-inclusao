import '../../assets/styles/Carousel.css';

import img1 from '../../assets/images/img1.jpeg';
import img2 from '../../assets/images/img2.jpeg';
import img3 from '../../assets/images/img2.jpeg';

const Carousel = () => {
  return (
    <div className="carousel" id="pagina-principal">
      <input type="radio" name="carousel" id="item-1" defaultChecked />
      <input type="radio" name="carousel" id="item-2" />
      <input type="radio" name="carousel" id="item-3" />

      <div className="carousel-inner">
        <div className="carousel-item">
          <img
            src={img1}
            alt="Slide 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src={img2}
            alt="Slide 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src={img3}
            alt="Slide 3"
          />
        </div>
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
