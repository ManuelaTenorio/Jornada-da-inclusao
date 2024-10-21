import React from 'react';
import classes from '../../assets/styles/jogoNumeros.module.css'

export const DropBox = ({ droppedNumbers }) => {
  return (
    <div className={classes.dropBox}>
      <div className={classes.droppedNumbersContainer}>
        {droppedNumbers.length === 0 ? (
          <p></p>
        ) : (
          droppedNumbers.map(number => (
            <div key={number} className={classes.numberGrid}>

                <p className={classes.numberBox}>{number}</p>

            </div>
          ))
        )}
      </div>
    </div>
  );
};
