import React from 'react';
import { random } from '../../hooks/utils.jsx'
import { animals, colors, phrases } from './Data.jsx'

function Description({ animal, color, phrase }) {
  return <p>{animal.article} <b>{animal.name}</b> {phrase.sentence} {color.name}</p>
}

// TODO: Make color and phrase independent of animal position
export function Descriptions() {
  const descriptions = animals.map(element => {
    const color = colors.find(c => c.id == element.id);
    const phrase = phrases.find(p => p.id == element.id) || phrases[0];

    return (
      <Description
        key={element.id}
        animal={element}
        color={color}
        phrase={phrase}
      />
    )
  })

  return random(descriptions)
}
