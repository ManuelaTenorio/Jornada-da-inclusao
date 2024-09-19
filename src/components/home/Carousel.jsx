import '../../assets/styles/Carousel.css';

const Carousel = () => {
  return (
    <div className="carousel">
      <input type="radio" name="carousel" id="item-1" defaultChecked />
      <input type="radio" name="carousel" id="item-2" />
      <input type="radio" name="carousel" id="item-3" />

      <div className="carousel-inner">
        <div className="carousel-item">
          <img
            src="https://via.placeholder.com/1920x600/ff7f7f/333333?text=Slide+1"
            alt="Slide 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://via.placeholder.com/1920x600/7f7fff/333333?text=Slide+2"
            alt="Slide 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://via.placeholder.com/1920x600/7fff7f/333333?text=Slide+3"
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
