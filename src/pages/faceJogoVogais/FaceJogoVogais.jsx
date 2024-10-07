import React, { useState } from 'react';
import './faceJogoVogais.css';
import {
    DndContext,
    useDroppable,
    useSensor,
    useSensors,
    PointerSensor,
    closestCorners,
} from "@dnd-kit/core";
import GameVogais from '../gameVogais/GameVogais';

function FaceJogoVogais() {
    const [letters, setLetters] = useState(
        Array.from({ length: 26 }, (_, index) => ({
            id: index + 1,
            value: index + 1,
        }))
    );

    const [droppedLetters, setDroppedLetters] = useState([]);

    const sensors = useSensors(useSensor(PointerSensor));

    const DroppableArea = () => {
        const { setNodeRef } = useDroppable({
            id: 'droppable-area',
        });

        return (
            <div ref={setNodeRef} className="resultLetter">
                <div className='dropaArea'>
                {droppedLetters.map(letter => (
                        <div key={letter.id} className="letterInDroppable">
                            {String.fromCharCode(64 + letter.value)}
                        </div>
                    ))}
                </div>
                    <div className="bgImage">
                    <img src="'../../assets/images/jacare-removebg.png" alt="" />
                </div>
            </div>
        );
    };

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (!over) return;

        // If dropped on droppable-area
        if (over.id === 'droppable-area') {
            const letterToDrop = letters.find(letter => letter.id === active.id);

            if (letterToDrop && !droppedLetters.some(letter => letter.id === letterToDrop.id)) {
                setDroppedLetters(prev => [...prev, letterToDrop]);
                setLetters(prevLetters => prevLetters.filter(letter => letter.id !== letterToDrop.id)); // Remove from draggable letters
            }
        }
    };

    return (
        <div className='bodyGame'>
            <div className='game'>
                <div className='gameContent'>
                    <div className="phrase">
                        <p>ARRASTE PARA CIMA APENAS AS LETRAS VOGAIS</p>
                    </div>
                    <DndContext
                        sensors={sensors}
                        collisionDetection={closestCorners}
                        onDragEnd={handleDragEnd}
                    >
                        <DroppableArea />
                        <GameVogais letters={letters} />
                    </DndContext>
                </div>
            </div>
        </div>
    );
}

export default FaceJogoVogais;
