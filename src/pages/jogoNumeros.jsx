import React, { useState } from 'react';
import { DropBox } from '../components/jogoNumeros/DropBox'
import { NumberBox } from '../components/jogoNumeros/NumberBox.jsx';
import { Random } from '../hooks/Random.jsx'
import classes from '../assets/styles/jogoNumeros.module.css'
import {
    DndContext,
    useDroppable,
    useSensor,
    useSensors,
    PointerSensor,
    closestCorners,
} from "@dnd-kit/core";

function Populate(n) {
    let numbers = [];

    for (let i = 0; i < n; i++) {
        numbers.push(i);
    }

    return Random(numbers);
}

export default function JogoNumeros() {
    const elements = Populate(10);

    const [numbers, setNumbers] = useState(elements);

    const listElements = numbers.map((number) => (
        <NumberBox key={number} id={number.toString()} value={number} />
    ));
    

    


    const [droppedNumbers, setDroppedNumbers] = useState([]);

    const sensors = useSensors(useSensor(PointerSensor));

    const DroppableArea = () => {
        const { setNodeRef } = useDroppable({
            id: 'droppable-area',
        });
    
        return (
            <div ref={setNodeRef} className={classes.dropArea}>
                <DropBox droppedNumbers={droppedNumbers} />
            </div>
        );
    };

    const handleDragEnd = (event) => {
        const { active, over } = event;

        // Se o item não for solto sobre uma área válida, não faz nada.
        if (!over) return;

        // Verifica se o item foi solto na área de soltura ('droppable-area').
        if (over.id === 'droppable-area') {
            const numberToDrop = parseInt(active.id); // Converte o `id` para número

            // Verifica se o número ainda não foi solto anteriormente e é par.
            if (
                numberToDrop !== undefined &&
                !droppedNumbers.includes(numberToDrop) &&
                numberToDrop % 2 === 0
            ) {
                setDroppedNumbers((prev) => [...prev, numberToDrop]); // Adiciona o número à lista de números soltos.

                // Filtra o número que foi solto da lista original de números.
                setNumbers((prevNumbers) =>
                    prevNumbers.filter((number) => number !== numberToDrop)
                );
            }
        }
    };

    return (

        <>
            <div className={classes.wrapper}>
                <section className={classes.container}>
                    <h1 className={classes.heading}>Jogo dos Números</h1>
                    <p className={classes.paragraph}>Arraste os números para cima na sequência correta.</p>
                    <DndContext
                        sensors={sensors}
                        collisionDetection={closestCorners}
                        onDragEnd={handleDragEnd}>
                        <DroppableArea id="droppable-area" />
                        <div className={classes.numberGrid}>
                            {listElements}
                        </div>
                    </DndContext>
                </section>
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
}
