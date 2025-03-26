import React from "react";
import { random } from "../../hooks/utils.js"
import { colors } from "./Data.jsx"
import styles from '../../assets/styles/jogoCores.module.css'

function ColorSqr({ color }) {
  return (
    <div
      className={styles.square}
      style={color.theme}
    >
    </div>
  )
}

export function Colors() {
  const colorSqrs = colors.map(element =>
    <ColorSqr color={element} />
  )

  return random(colorSqrs)
}
