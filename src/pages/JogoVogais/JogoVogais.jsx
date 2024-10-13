import React from 'react'
import './jogoVogais.css'
import GameVogais from '../../components/gameVogais/GameVogais'

function JogoVogais() {
    return (
        <>
            <body className='bodyGame'>
                <div className='game'>
                <GameVogais></GameVogais>
                </div>
            </body>
        </>
    )
}

export default JogoVogais