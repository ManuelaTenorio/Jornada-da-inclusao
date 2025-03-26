// import 
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './cards.module.css'
import Card from './Card.jsx';
import { Link } from 'react-router-dom';
import { cardsData } from '../data.js';

const Cards = () => {
    const cards = cardsData.map(element =>
        <>
            <Link style={{ textDecoration: "none" }} key={element.id} to={element.explicacao}>
                <Card key={element.id} image={element.img} alt={element.alt} title={element.title} desc={element.desc} />
            </Link>
        </>
    );

    return (
        <div id='games-section' className={styles.cardsContainer}>
            {cards}
        </div>
    );
};

export default Cards;
