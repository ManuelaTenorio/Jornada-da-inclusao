// import 
import React from 'react';

import '../../assets/styles/Cards.css';
import Card from './Card.jsx';
import { Link } from 'react-router-dom';
import { cardsData } from './data.js';

const Cards = () => {
    const cards = cardsData.map(element =>
        <Link style={{ textDecoration: "none" }} key={element.id} to={element.link}>
            <Card image={element.img} alt={element.alt} title={element.title} desc={element.desc} />
        </Link>
    );

    return (
        <div id='games-section' className="cards-container">
            {cards}
        </div>
    );
};

export default Cards;
