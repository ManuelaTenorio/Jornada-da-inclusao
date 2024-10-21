import React from 'react';
import Numbers from '../../components/numbers/Numbers';
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';

import './gameNumbers.css';

function GameNumbers({ numbers }) {
    // Função para converter um número em uma letra do alfabeto (0 = A, 1 = B, etc.).
    return (
        <>
            <div className="numbers">
                {/* SortableContext permite que os itens dentro dele sejam arrastáveis e ordenáveis */}
                <SortableContext items={numbers} strategy={rectSortingStrategy}>
                    {/* Mapeia cada letra em um componente numbers, que será arrastável */}
                    {numbers.map((number) => (
                        <Numbers key={number.id} id={number.id} value={number.value} />
                    ))}
                </SortableContext>
            </div>
        </>
    );
}

export default GameNumbers;
