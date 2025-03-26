import { useDraggable } from "@dnd-kit/core"; // Importa o hook useDraggable da biblioteca @dnd-kit para tornar o componente arrastável.
import { CSS } from "@dnd-kit/utilities"; // Importa utilitários da biblioteca @dnd-kit, neste caso, para manipulação de transformações CSS.
import style from './compLetras.module.css'; // Importa o arquivo CSS contendo os estilos para o componente Letras.

function CompLetras({ id, value }) {
  // Usa o hook useDraggable para tornar o componente arrastável.
  // `id` é o identificador único do item arrastável e `value` é o valor numérico que representa a letra.
  const { attributes, listeners, setNodeRef, transform, transition } = useDraggable({ id });

  // Define estilos estáticos que são aplicados de maneira constante ao componente.
  const staticStyles = {
    display: 'flex', // Define o layout do componente como flexbox para alinhar os itens.
    justifyContent: 'center', // Alinha horizontalmente os itens no centro.
    alignItems: 'center', // Alinha verticalmente os itens no centro.
    fontSize: '20px', // Define o tamanho da fonte das letras.
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Aplica uma sombra suave ao redor da letra para destacar o componente.
    willChange: 'transform', // Indica ao navegador que o componente provavelmente passará por transformações (movimentos), ajudando na otimização.
  };

  // Define estilos dinâmicos que são aplicados quando o componente é arrastado.
  const dynamicStyles = {
    transform: CSS.Translate.toString(transform), // Aplica a transformação de posição com base no valor de `transform` fornecido pelo hook.
    transition, // Aplica a transição de movimento para suavizar a animação do arrasto.
  };

  return (
    <div
      className={style.letter} // Aplica o estilo CSS específico para a letra no componente.
      ref={setNodeRef} // Associa a referência ao elemento para o `@dnd-kit` gerenciar o arrasto.
      style={{ ...staticStyles, ...dynamicStyles }} // Aplica os estilos estáticos e dinâmicos ao componente.
      {...attributes} // Adiciona atributos de acessibilidade ao elemento, como os dados de aria.
      {...listeners} // Adiciona os listeners necessários para gerenciar os eventos de arrasto (como onMouseDown, onDrag).
    >
      {String.fromCharCode(64 + value)} {/* Converte o valor numérico em uma letra (1 = 'A', 2 = 'B', etc.). */}
    </div>
  );
}

export default CompLetras; // Exporta o componente para ser usado em outras partes da aplicação.
