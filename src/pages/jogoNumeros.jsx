import React, { useState } from 'react';
// import { DropBox } from '../components/jogoNumeros/DropBox'
// import { NumberBox } from '../components/jogoNumeros/NumberBox'
import {
    DndContext,
    useDroppable,
    useSensor,
    useSensors,
    PointerSensor,
    closestCorners,
    useDraggable
} from '@dnd-kit/core'
import { CSS } from "@dnd-kit/utilities";
import { random } from "../hooks/utils.js"
import classes from '../assets/styles/jogoNumeros.module.css'

export default function JogoNumeros() {
    // Quantidade de elementos a serem gerados

    const [numbers, setNumbers] = useState(
        Array.from({ length: 10 }, (_, index) => ({
            id: index,
            value: index,
        }))
    );

    const [droppedNumbers, setDroppedNumbers] = useState([]);

    const sensors = useSensors(useSensor(PointerSensor));

    const DroppableArea = () => {
        const { setNodeRef } = useDroppable({
            id: 'droppable-area',
        });

        return (
            <div ref={setNodeRef} className={classes.dropBox}>
                {droppedNumbers.map(number => (
                    <NumberBox key={number.id} id={number.id} style={classes.droppedNumber} />
                ))}
            </div>
        );
    };

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (!over) return;

        if (over.id === 'droppable-area') {
            const numberToDrop = numbers.find(number => number.id === active.id);

            if (numberToDrop && !droppedNumbers.some(number => number.id === numberToDrop.id)) {
                setDroppedNumbers(prev => [...prev, numberToDrop]);
                setNumbers(prevNumbers => prevNumbers.filter(number => number.id !== numberToDrop.id));
            }
        }
    }

    // const DropBox = () => {
    //   return (
    //     <div className={classes.dropBox}></div>
    //   )
    // }

    const NumberBox = ({ id, value }) => {
        const { attributes, listeners, setNodeRef, transform, transition } = useDraggable({ id });

        const staticStyles = {
            willChange: 'transform',
        };

        const dynamicStyles = {
            transform: CSS.Translate.toString(transform),
            transition,
        };

        return (
            <div className={classes.numberBox}
                id={id}
                ref={setNodeRef}
                style={{
                    ...staticStyles,
                    ...dynamicStyles
                }}
                {...attributes}
                {...listeners}
            >
                <p>{value}</p>
            </div>
        )
    }

    const Numbers = () => {
        const numberArr = numbers.map(element =>
            <NumberBox key={element.id} id={element.id} value={element.value} />
        );

        return numberArr;
    }

    return (
        <div className={classes.wrapper}>
            <section className={classes.container}>
                <h1 className={classes.heading}>Jogo dos Números</h1>
                <p className={classes.paragraph}>Arraste os números para cima na sequência correta.</p>
                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCorners}
                    onDragEnd={handleDragEnd}
                >
                    <DroppableArea />
                    <div className={classes.numberGrid}>
                        <Numbers />
                    </div>
                </DndContext>
            </section>
        </div>
    )
}
