import React, { useState } from 'react';
import { animalsData, colorsData, stringsData } from '../../../components/jogoCores/Data.jsx'
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
import { random } from "../../../hooks/utils.js"
import styles from './jogoCores.module.css'

export default function JogoNumeros() {
    const [colors, setColors] = useState(
        Array.from({ length: colorsData.length }, (_, index) => ({
            id: index + 1,
            value: colorsData[index].code,
        }))
    );

    const [droppedColors, setDroppedColors] = useState([]);

    const sensors = useSensors(useSensor(PointerSensor));

    const DroppableArea = (props) => {
        const { setNodeRef } = useDroppable({
            id: props.id,
        });

        return (
            <div key={props.id} id={props.id} ref={setNodeRef} className={styles.dropArea}>
                {props.children}
            </div>
        )
    }

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (!over) return;

        if (over.id === active.id) {
            const colorToDrop = colors.find(color => color.id === active.id);

            setDroppedColors(prev => [...prev, colorToDrop]);
            setColors(prevColors => prevColors.filter(color => color.id !== colorToDrop.id));
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
            <div className={styles.card}>
                <Image animal={animal} />
                <DroppableArea key={animal.id + 1} id={animal.id + 1}>
                    {droppedColors.find(color => color.id === animal.id) ? (
                        <ColorBox key={colorsData.id} id={colorsData.id} color={colorsData.code} />
                    ) : (null)}
                </DroppableArea>
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
                className={styles.square}
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
        const colorsArr = colors.map(element =>
            <ColorBox key={element.id} id={element.id} color={element.value} />
        );

        return colorsArr;
    }

    const Description = ({ animal, color, string }) => {
        return <p className={styles.paragraph}>{animal.article} <b>{animal.name}</b> {string.body} {color.name}</p>
    }

    const Descriptions = () => {
        const descriptions = animalsData.map(element => {
            const color = colorsData.at(element.id);
            const string = stringsData.at(element.id) || stringsData.at(random(stringsData.length));

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
        <>
            <div className={styles.gameBody}>
                <div className={styles.game}>
                    <DndContext
                        sensors={sensors}
                        collisionDetection={closestCorners}
                        onDragEnd={handleDragEnd}
                    >
                        <div className={styles.infoArea}>
                            <h1 className={styles.heading}>Jogo das Cores</h1>
                            <p className={styles.paragraph}>Arraste as cores para seus respectivos animais.</p>
                            <div className={styles.info}>
                                <Descriptions />
                                <p className={styles.paragraph}>Coloque a cor favorita em cada bichinho.</p>
                            </div>
                            <div className={styles.colorArea}>
                                <Colors />
                            </div>
                        </div>
                        <div className={styles.cardGrid}>
                            <Cards />
                        </div>
                    </DndContext>
                </div>
            </div>
        </>
    );
}
