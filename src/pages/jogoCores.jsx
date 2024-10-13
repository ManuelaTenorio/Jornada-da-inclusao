import React from 'react';
import { Cards } from '../components/jogoCores/Card.jsx'
import { Colors } from '../components/jogoCores/ColorSqr.jsx'
import { Descriptions } from '../components/jogoCores/Description.jsx';
import { DndContext } from '@dnd-kit/core'
import classes from '../assets/styles/jogoCores.module.css'

export default function JogoNumeros() {
    return (
        <div className={classes.wrapper}>
            <section className={classes.container}>
                <h1 className={classes.heading}>Jogo das Cores</h1>
                <p className={classes.paragraph}>Arraste as cores para seus respectivos animais.</p>
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
            </section>
        </div>
    );
}
