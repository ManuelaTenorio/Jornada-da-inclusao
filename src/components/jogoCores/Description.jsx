import React from 'react';
import classes from '../../assets/styles/jogoCores.module.css'
import { random } from '../../hooks/utils.js'
import { animals, colors, strings } from './Data.jsx'

function Description({ animal, color, string }) {
  return <p className={classes.paragraph}>{animal.article} <b>{animal.name}</b> {string.body} {color.name}</p>
}

export function Descriptions() {
  const colorRand = random(colors);
  const stringRand = random(strings);

  const descriptions = animals.map(element => {
    const color = colorRand.at(element.id);
    const string = stringRand.at(element.id) || stringRand.at(random(strings.id));

    return (
      <Description
        key={element.id}
        animal={element}
        color={color}
        string={string}
      />
    )
  })

  return random(descriptions)
}
