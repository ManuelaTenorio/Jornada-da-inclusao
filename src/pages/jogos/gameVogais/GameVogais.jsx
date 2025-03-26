import React from 'react';
import CompLetras from '../../../components/compLetras/CompLetras';
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';

import styles from './gameVogais.module.css';

function GameVogais({ letters }) {
    // Função para converter um número em uma letra do alfabeto (0 = A, 1 = B, etc.).
    const numberToLetter = (number) => String.fromCharCode(65 + number);

    return (
        <>
            <div className={styles.letters}>
                {/* SortableContext permite que os itens dentro dele sejam arrastáveis e ordenáveis */}
                <SortableContext items={letters} strategy={rectSortingStrategy}>
                    {/* Mapeia cada letra em um componente Letters, que será arrastável */}
                    {letters.map((letter) => (
                        <CompLetras key={letter.id} id={letter.id} value={letter.value} />
                    ))}
                </SortableContext>
            </div>
        </>
    );
}

export default GameVogais;
