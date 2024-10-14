import React from 'react'
import './gameVogais.css'
import Letters from '../letters/Letters'

function GameVogais() {
    return (
        <>
            <div className='gameContent'>
                <div className="phrase">
                    ARRASTE PARA CIMA APENAS AS LETRAS VOGAIS
                </div>

                <div className='result'>
                    <div className="resultLetter">
                        <div className='bgImage'>

                        </div>
                    </div>
                </div>

                <div>
                    <Letters></Letters>
                </div>
            </div>
        </>
    )
}

export default GameVogais