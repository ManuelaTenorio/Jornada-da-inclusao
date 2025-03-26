import React from 'react';
import styles from './cards.module.css'

export default function Card({ image, alt, title, desc }) {
  return (
    <div className={styles.cardComponent} id='lista-jogos'>
      <img className={styles.image} src={image} alt={alt} />
      <div className={styles.cardText}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{desc}</p>
      </div>
    </div>
  );
};
