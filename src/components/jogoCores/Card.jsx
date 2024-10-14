import React from 'react';
// import { animals } from './Data.jsx'
import { Random } from '../../hooks/Random.jsx'
import classes from '../../assets/styles/jogoCores.module.css'

export function Card(value) {
  // BUG: Images not showing up in page.

  return (
    <div className={classes.card}>
      <img src={value.path} width="100px" alt={value.name} />
      <div className={classes.dropArea}></div>
    </div>
  )
}

