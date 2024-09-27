import React from 'react';
import { Cards } from '../components/jogoCores/Card.jsx'
import { Colors } from '../components/jogoCores/ColorSqr.jsx'
import { Descriptions } from '../components/jogoCores/Description.jsx';
import classes from '../assets/styles/jogoCores.module.css'

export default function JogoNumeros() {
    return (
        <>
            <div className={classes.container}>
                <h1>Jogo das Cores</h1>
                <p>Arraste as cores para seus respectivos animais.</p>
                <div className={classes.infoArea}>
                    <div className={classes.info}>
                        <Descriptions />
                        <p>Coloque a cor favorita em cada bichinho.</p>
                    </div>
                    <div className={classes.colorArea}>
                        <Colors />
                    </div>
                </div>
                <div className={classes.cardGrid}>
                    <Cards />
                </div>
            </div>
        </>
    );
}
