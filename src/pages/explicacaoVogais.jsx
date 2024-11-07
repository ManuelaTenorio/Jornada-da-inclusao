import React from "react";
import { Link } from "react-router-dom";

const Explicacao = ({ element }) => {
  return (
    <>
      <div className="container-exp">
        <h2 className="heading-exp">{element.alt}</h2>
        <p className="paragraph-exp">{element.descModal}</p>
        <div className="choices">
          <Link to={element.link}>Ir ao Jogo</Link>
          <Link to="/">Voltar</Link>
        </div>
      </div>
    </>
  )
}
