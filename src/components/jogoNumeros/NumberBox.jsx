import React from 'react';
import classes from '../../assets/styles/jogoNumeros.module.css'

export function NumberBox({ value }) {
  return (
    <div className={classes.numberBox}>
      {value}
    </div>
  )
}

