import React from 'react';
import classes from '../../assets/styles/jogoCores.module.css'
import { animals } from './Data.jsx'
import { random } from '../../hooks/utils.js'

function Image({ animal }) {
  return (
    <img
      src={animal.img}
      width={100}
      alt={animal.name}
    />
  )
}

function Card({ animal }) {
  return (
    <div className={classes.card}>
      <Image
        animal={animal}
      />
      <div className={classes.dropArea}></div>
    </div>
  )
}

export function Cards() {
  const cards = animals.map(element =>
    <Card animal={element} />
  )

  return random(cards)
}