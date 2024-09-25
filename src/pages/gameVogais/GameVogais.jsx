import React from 'react'
import Letters from '../../components/letters/Letters'
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';

import './gameVogais.css'

function GameVogais({ letters }) {
    const numberToLetter = (number) => String.fromCharCode(65 + number);
    return (
        <>
            <div className="letters">
                <SortableContext items={letters} strategy={rectSortingStrategy}>
                    {letters.map((letter) => (
                        <Letters key={letter.id} id={letter.id} value={letter.value} />
                    ))}
                </SortableContext>
            </div>
        </>
    )
}

export default GameVogais