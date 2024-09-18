import './Cards.css';

const Cards = () => {
  return (
    <div className="cards-container">
      <div className="card">
        <img src="https://via.placeholder.com/300x200" alt="Card 1" />
        <h3>Card 1</h3>
        <p>Este é o primeiro card.</p>
      </div>

      <div className="card">
        <img src="https://via.placeholder.com/300x200" alt="Card 2" />
        <h3>Card 2</h3>
        <p>Este é o segundo card.</p>
      </div>

      <div className="card">
        <img src="https://via.placeholder.com/300x200" alt="Card 3" />
        <h3>Card 3</h3>
        <p>Este é o terceiro card.</p>
      </div>

      <div className="card">
        <img src="https://via.placeholder.com/300x200" alt="Card 4" />
        <h3>Card 4</h3>
        <p>Este é o quarto card.</p>
      </div>
    </div>
  );
};

export default Cards;
