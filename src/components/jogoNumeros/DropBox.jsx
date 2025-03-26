import React from 'react';
import styles from '../../assets/styles/jogoNumeros.module.css'

export const DropBox = ({ droppedNumbers }) => {
  return (
    <div className={styles.dropBox}>
      <div className={styles.droppedNumbersContainer}>
        {droppedNumbers.length === 0 ? (
          <p></p>
        ) : (
          droppedNumbers.map(number => (
            <div key={number} className={styles.numberGrid}>

              <p className={styles.numberBox}>{number}</p>

            </div>
          ))
        )}
      </div>
    </div>
  );
};
