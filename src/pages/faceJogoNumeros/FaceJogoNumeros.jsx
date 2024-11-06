import React, { useState } from 'react';
// import { DropBox } from '../components/jogoNumeros/DropBox'
// import { NumberBox } from '../components/jogoNumeros/NumberBox.jsx';
import { Random } from '../../hooks/Random.jsx'
import classes from './faceJogoNumeros.module.css'
import {
    DndContext,
    useDroppable,
    useSensor,
    useSensors,
    PointerSensor,
    closestCorners,
} from "@dnd-kit/core";
import GameNumbers from '../gameNumbers/GameNumbers.jsx';
import { Link } from 'react-router-dom';

export default function FaceJogoNumeros() {
    const [numbers, setNumbers] = useState(
        Array.from({ length: 10 }, (_, index) => ({
            id: index + 1, // Identificador único para cada letra.
            value: index, // Valor numérico da letra (1 = A, 2 = B, etc.).
        }))
    );

    const [droppedNumbers, setDroppedNumbers] = useState([]);

    const sensors = useSensors(useSensor(PointerSensor));

    const DroppableArea = () => {
        const { setNodeRef } = useDroppable({
            id: 'droppable-area',
        });

        return (
            <div ref={setNodeRef} className="resultNumber">
                <div className='dropaArea'>
                    {droppedNumbers.map(number => (
                        <div key={number.id} id={number.id} className="numberInDroppable">
                            {number.value} {/* Converte o valor numérico para a letra correspondente. */}
                        </div>
                    ))}
                </div>
            </div>
        )
    };

    const handleDragEnd = (event) => {
        const { active, over } = event;

        // Se o item não for solto sobre uma área válida, não faz nada.
        if (!over) return;

        // TODO: Write the logic to filter numbers here

        if (over.id === 'droppable-area') {
            const numberToDrop = numbers.find(number => number.id === active.id);

            if (numberToDrop.value > 0) {
                const comp = droppedNumbers.at(-1);
                console.log(comp, numberToDrop);
                if (comp.value + 1 === numberToDrop.value) {
                    setDroppedNumbers(prev => [...prev, numberToDrop]);
                    setNumbers(prevNumbers => prevNumbers.filter(number => number.id !== numberToDrop.id));
                }
            }
            else {
                setDroppedNumbers(prev => [...prev, numberToDrop]);
                setNumbers(prevNumbers => prevNumbers.filter(number => number.id !== numberToDrop.id));
            }
        }
    }

    let isFinished = false;

    if (droppedNumbers.length === numbers.length) {
        isFinished = true;
    }

    return (
        <>
            <div className={classes.bodyGame}>
                <div className={classes.game}>
                    <section className={classes.container}>
                        <h1 className={classes.heading}>Jogo dos Números</h1>
                        <p className={classes.paragraph}>Arraste os números para cima na sequência correta.</p>
                        <DndContext
                            sensors={sensors}
                            collisionDetection={closestCorners}
                            onDragEnd={handleDragEnd}
                        >
                            <DroppableArea id="droppable-area" />
                            <GameNumbers numbers={numbers} />
                        </DndContext>
                    </section>
                </div>
            </div>
            <div className="enabled">
                <div className="active" vw-access-button></div>
                <div vw-plugin-wrapper>
                    <div className="vw-plugin-top-wrapper"></div>
                </div>
            </div>
            <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
            <script>
                new window.VLibras.Widget('https://vlibras.gov.br/app');
            </script>
            <script src="https://website-widgets.pages.dev/dist/sienna.min.js" defer></script>
        </>
    )
};

