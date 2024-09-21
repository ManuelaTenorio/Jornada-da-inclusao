import React, { useState } from 'react'
import './letters.css'

function Letters() {

  const numbers = Array.from({ length: 26 }, (_, index) => index);
  
  // Convert numbers to letters
  const numberToLetter = (number) => String.fromCharCode(65 + number); // 65 is the ASCII code for 'A'


  return (
    <>
      <div className='letters'>
        {numbers.map(number => (
          <div className='letter'>{`${numberToLetter(number)}`}</div>
        ))}
      </div>
    </>
  )
}

export default Letters