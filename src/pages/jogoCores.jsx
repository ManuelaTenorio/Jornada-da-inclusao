import React from 'react';
import { Card } from '../components/jogoCores/Card'
import classes from '../assets/styles/jogoCores.module.css'
import { Random } from '../hooks/Random';
import { animals, colors } from '../components/jogoCores/Data.jsx'

export default function JogoNumeros() {
    // Quantidade de elementos a serem gerados
    // const elements: number[] = Populate(10);
    // const listElements = elements.map(element =>
    //     <NumberBox key={elements.indexOf(element)} value={element} />
    // );

    const data = Random(animals);
    const strings = data.map(element =>
        <p><b>{element.name}</b> gosta do {element.color}.</p>
    )

    const listElements = data.map(element =>
        <Card key={data.indexOf(element)} value={element} />
    )

    return (
        <>
            <div className={classes.container}>
                <h1>Jogo das Cores</h1>
                <p>Arraste as cores para seus respectivos animais.</p>
                <div className={classes.infoArea}>
                    <div className={classes.info}>
                        {strings}
                        <p>Coloque a cor favorita em cada bichinho.</p>
                    </div>
                    <div className={classes.colorArea}>
                        <div className={classes.square}></div>
                        <div className={classes.square}></div>
                        <div className={classes.square}></div>
                        <div className={classes.square}></div>
                        <div className={classes.square}></div>
                        <div className={classes.square}></div>
                    </div>
                </div>

                <div className={classes.cardGrid}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <div className="btnJogos">
                <a href="/jogo-vogais"><button href>Proximo Jogo</button></a>
            </div>
        </>
    );
}

// import React from 'react';
// import { Card } from '../components/jogoCores/Card.jsx'
// import { Colors } from '../components/jogoCores/ColorSqr.jsx'
// import { Descriptions } from '../components/jogoCores/Description.jsx';
// import { DndContext } from '@dnd-kit/core'
// import classes from '../assets/styles/jogoCores.module.css'

// export default function JogoNumeros() {
//     return (
//         <div className={classes.wrapper}>
//             <section className={classes.container}>
//                 <h1 className={classes.heading}>Jogo das Cores</h1>
//                 <p className={classes.paragraph}>Arraste as cores para seus respectivos animais.</p>
//                 <div className={classes.infoArea}>
//                     <div className={classes.info}>
//                         <Descriptions />
//                         <p className={classes.paragraph}>Coloque a cor favorita em cada bichinho.</p>
//                     </div>
//                     <div className={classes.colorArea}>
//                         <Colors />
//                     </div>
//                 </div>
//                 <div className={classes.cardGrid}>
//                     <Card />
//                 </div>
//             </section>
//         </div>
//     );
// }