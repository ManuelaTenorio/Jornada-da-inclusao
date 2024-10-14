import React, { useState } from 'react';
import { animalsData, colorsData, stringsData } from '../components/jogoCores/Data.jsx'
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
import classes from '../assets/styles/jogoCores.module.css'

export default function JogoNumeros() {
    const [colors, setColors] = useState(
        Array.from({ length: colorsData.length }, (_, index) => ({
            id: index,
            value: colorsData[index].code,
        }))
    );

    const [droppedColors, setDroppedColors] = useState([]);

    const sensors = useSensors(useSensor(PointerSensor));

    const Droppable = (props) => {
        const { setNodeRef } = useDroppable({
            id: props.id,
        });

        return (
            <div ref={setNodeRef} className={classes.dropArea}>
                {props.children}
            </div>
        )
    }

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (!over) return;

        if (over.id === 'droppable-area') {
            const colorToDrop = colors.find(color => color.id === active.id);

            if (colorToDrop && !droppedColors.some(color => color.id === colorToDrop.id)) {
                setDroppedColors(prev => [...prev, colorToDrop]);
                setColors(prevColors => prevColors.filter(color => color.id !== colorToDrop.id));
            }
        }
    }

    const Image = ({ animal }) => {
        return (
            <img
                src={animal.img}
                width={100}
                alt={animal.name}
            />
        )
    }

    const Card = ({ animal }) => {
        return (
            <div className={classes.card}>
                <Image animal={animal} />
                <Droppable key={animal.id} id={animal.id}>
                    {droppedColors.map(color => (
                        <ColorBox key={color.id} id={color.id} color={color.code} />
                    ))}
                </Droppable>
            </div>
        )
    }

    const Cards = () => {
        const cards = animalsData.map(element =>
            <Card key={element.id} animal={element} />
        );

        return cards;
    }

    const ColorBox = ({ id, color }) => {
        const { attributes, listeners, setNodeRef, transform, transition } = useDraggable({ id });

        const staticStyles = {
            willChange: 'transform',
        };

        const dynamicStyles = {
            transform: CSS.Translate.toString(transform),
            transition,
        };

        return (
            <div
                className={classes.square}
                id={id}
                ref={setNodeRef}
                style={{
                    backgroundColor: color,
                    ...staticStyles,
                    ...dynamicStyles
                }}
                {...attributes}
                {...listeners}
            >
            </div>
        )
    }

    const Colors = () => {
        const colors = colorsData.map(element =>
            <ColorBox key={element.id} id={element.id} color={element.code} />
        );

        return colors;
    }

    const Description = ({ animal, color, string }) => {
        return <p className={classes.paragraph}>{animal.article} <b>{animal.name}</b> {string.body} {color.name}</p>
    }

    const Descriptions = () => {
        const colorRand = random(colorsData);
        const stringRand = random(stringsData);

        const descriptions = animalsData.map(element => {
            const color = colorRand.at(element.id);
            const string = stringRand.at(element.id) || stringRand.at(random(stringsData.id));

            return (
                <Description
                    key={element.id}
                    animal={element}
                    color={color}
                    string={string}
                />
            )
        })

        return descriptions
    }

    return (
        <div className={classes.wrapper}>
            <section className={classes.container}>
                <h1 className={classes.heading}>Jogo das Cores</h1>
                <p className={classes.paragraph}>Arraste as cores para seus respectivos animais.</p>
                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCorners}
                    onDragEnd={handleDragEnd}
                >
                    <div className={classes.infoArea}>
                        <div className={classes.info}>
                            <Descriptions />
                            <p className={classes.paragraph}>Coloque a cor favorita em cada bichinho.</p>
                        </div>
                        <div className={classes.colorArea}>
                            <Colors />
                        </div>
                    </div>
                    <div className={classes.cardGrid}>
                        <Cards />
                    </div>
                </DndContext>
            </section>
        </div>
    );
}
