import React from 'react';

import '../../assets/styles/Cards.css'

export default function Card({ image, alt, title, desc }) {
  return (
    <div className="card-component">
      <img className="image" src={image} alt={alt} />
      <div className="card-text">
        <h3 className="title">{title}</h3>
        <p className="description">{desc}</p>
      </div>
    </div>
  );
};
