import React, { useState } from 'react';
import './faceJogoVogais.css';
import {
    DndContext,
    useDroppable,
    useSensor,
    useSensors,
    PointerSensor,
    closestCorners,
} from "@dnd-kit/core";
import GameVogais from '../gameVogais/GameVogais';

function FaceJogoVogais() {
    // Estado para armazenar as letras disponíveis para serem arrastadas.
    // Cria 26 letras (A-Z) com um valor numérico correspondente.
    const [letters, setLetters] = useState(
        Array.from({ length: 26 }, (_, index) => ({
            id: index + 1, // Identificador único para cada letra.
            value: index + 1, // Valor numérico da letra (1 = A, 2 = B, etc.).
        }))
    );

    // Estado para armazenar as letras que foram arrastadas para a área de soltura.
    const [droppedLetters, setDroppedLetters] = useState([]);

    // Configura sensores de arraste utilizando o `PointerSensor` do `@dnd-kit/core`.
    const sensors = useSensors(useSensor(PointerSensor));

    // Componente que representa a área onde as letras podem ser soltas.
    const DroppableArea = () => {
        // Hook `useDroppable` para tornar a área "droppable" (soltável).
        const { setNodeRef } = useDroppable({
            id: 'droppable-area', // Identificador da área de soltura.
        });

        return (
            <div ref={setNodeRef} className="resultLetter">
                <div className='dropaArea'>
                    {/* Exibe as letras que foram arrastadas para a área de soltura. */}
                    {droppedLetters.map(letter => (
                        <div key={letter.id} className="letterInDroppable">
                            {String.fromCharCode(64 + letter.value)} {/* Converte o valor numérico para a letra correspondente. */}
                        </div>
                    ))}
                </div>
                <div className="bgImage">
                    <img src="'../../assets/images/jacare-removebg.png" alt="" />
                </div>
            </div>
        );
    };

    // Função chamada quando o usuário solta um item após arrastá-lo.
    const handleDragEnd = (event) => {
        const { active, over } = event;

        // Se o item não for solto sobre uma área válida, não faz nada.
        if (!over) return;

        // Se o item for solto na área de soltura ('droppable-area').
        if (over.id === 'droppable-area') {
            // Busca a letra arrastada com base em seu `id`.
            const letterToDrop = letters.find(letter => letter.id === active.id);

            // Verifica se a letra ainda não foi solta anteriormente.
            if (letterToDrop && !droppedLetters.some(letter => letter.id === letterToDrop.id)) {
                setDroppedLetters(prev => [...prev, letterToDrop]); // Adiciona a letra à lista de letras soltas.
                setLetters(prevLetters => prevLetters.filter(letter => letter.id !== letterToDrop.id)); // Remove a letra da lista de letras arrastáveis.
            }
        }
    };

    return (
        <div className='bodyGame'>
            <div className='game'>
                <div className='gameContent'>
                    <div className="phrase">
                        <p>ARRASTE PARA CIMA APENAS AS LETRAS VOGAIS</p>
                    </div>
                    <DndContext
                        sensors={sensors}
                        collisionDetection={closestCorners}
                        onDragEnd={handleDragEnd}
                    >
                        <DroppableArea />
                        <GameVogais letters={letters} /> {/* Componente que renderiza as letras arrastáveis. */}
                    </DndContext>
                </div>
            </div>
        </div>
    );
}

export default FaceJogoVogais;
